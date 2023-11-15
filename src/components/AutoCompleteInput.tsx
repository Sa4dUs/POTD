/* eslint-disable @next/next/no-img-element */
// AutoCompleteInput.tsx
import React, { useState } from "react";
import { useAppContext } from "./AppContext";

interface AutoCompleteInputProps {
    data: { [pokemon: string]: string };
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (formData: FormData, inputValue?: string | null) => Promise<void>;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
    data,
    inputValue,
    setInputValue,
    onSubmit,
}) => {
    const [suggestions, setSuggestions] = useState<
        { name: string; sprite: string }[]
    >([]);
    const [isFocused, setIsFocused] = useState(false);

    const {
        addSuggestion,
        clearSuggestion,
        selectedSuggestion,
        setSelectedSuggestion,
    } = useAppContext(); // Use the context

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearSuggestion();
        setSelectedSuggestion(0);
        const value = event.target.value;
        setInputValue(value);

        const filteredSuggestions = Object.keys(data)
            .filter((name) => name.toLowerCase().includes(value.toLowerCase()))
            .map((name) => {
                addSuggestion(name);

                return { name, sprite: data[name] };
            });

        setSuggestions(filteredSuggestions);
        window.scrollTo(0, 0);
    };

    const handleSuggestionClick = async (name: string) => {
        setInputValue(name);
        setSuggestions([]);

        const formData = new FormData();
        formData.append("text-input", name);

        await onSubmit(formData);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            setSelectedSuggestion(Math.max(0, selectedSuggestion - 1));
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            setSelectedSuggestion(
                Math.min(suggestions.length - 1, selectedSuggestion + 1)
            );
        } else if (event.key === "Enter") {
            const selected = suggestions[selectedSuggestion];
            if (selected) {
                handleSuggestionClick(selected.name);
            }
        }

        // Adjust the scroll position to follow the selected suggestion
        const selectedElement = document.querySelector(
            ".suggestion-item.selected"
        );
        if (selectedElement) {
            selectedElement.scrollIntoView({
                behavior: "smooth",
            });
        }
        window.scrollTo(0, 0);
    };

    return (
        <div className="mb-4 relative">
            <input
                placeholder="Type Pokemon..."
                type="text"
                id="text-input"
                name="text-input"
                className="mt-1 p-3 text-gray-800 border rounded w-full focus:outline-none focus:border-blue-500"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setTimeout(() => {
                        setIsFocused(false);
                    }, 100);
                }}
                onKeyDown={handleKeyDown} // Handle arrow keys and Enter key
            />

            {isFocused && inputValue !== "" && suggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border rounded-md mt-2 w-full max-h-40 overflow-y-auto">
                    {suggestions.map((item, index) => (
                        <li
                            key={item.name}
                            className={`p-2 cursor-pointer hover:bg-gray-100 text-black flex items-center suggestion-item ${
                                index === selectedSuggestion
                                    ? "bg-gray-300 selected"
                                    : ""
                            }`}
                            onClick={() => handleSuggestionClick(item.name)}
                        >
                            <img
                                src={item.sprite}
                                alt={item.name}
                                className="w-12 h-12 mr-2"
                            />
                            <span>{item.name.replaceAll("-", " ")}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoCompleteInput;
