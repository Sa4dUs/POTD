import React from 'react';

interface CircleIndicatorProps {
  label: string,
  color: string;
}

const CircleIndicator: React.FC<CircleIndicatorProps> = ({ label, color }) => {
  let colours = "bg-green-500 bg-red-500 bg-yellow-500 bg-orange-500"



  return (
    <div className={`w-16 h-16 border-2 border-black bg-${color}-500 flex items-center justify-center rounded`}>
      {label}
    </div>
  );
};

export default CircleIndicator;
