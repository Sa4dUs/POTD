function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function calculateSimilarity(array1: string[], array2: string[]): number[] {
    while (array1.length < 2) {
        array1.push("")
    }

    while (array2.length < 2) {
        array2.push("")
    }

    return array1.map((e, i) => e == array2[i] ? 1 : 0)
}

function calculateComparison(n1: number, n2: number): number {
    if (n1 > n2) {
        return -1;
    } else if (n1 < n2) {
        return 0;
    } else {
        return 1;
    }
}

function calculateEqual(s1: string, s2: string): number {
    return s1 == s2 ? 1 : 0
}

function findRange(number: number, ranges: [number, number][]): number {
    // Check which range the number falls into
    for (let i = 0; i < ranges.length; i++) {
        const [lower, upper] = ranges[i];
        if (lower <= number && number <= upper) {
            return i+1
        }
    }

    return -1
}

export { getRandomInt, calculateSimilarity, calculateComparison, calculateEqual, findRange }