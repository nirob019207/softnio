import React from 'react';

const InputField = ({ icon: Icon, type, placeholder }) => (
    <div className="relative">
        {Icon && <Icon className="absolute left-3 top-4 text-gray-400 " />}
        <input
            type={type}
            placeholder={placeholder}
            className="w-full py-3 pl-10 pr-4 bg-transparent border border-gray-800"
        />
    </div>
);

const TextAreaField = ({ icon: Icon, placeholder }) => (
    <div className="relative">
        {Icon && <Icon className="absolute left-3 top-4 text-gray-400" />}
        <textarea
            placeholder={placeholder}
            className="w-full py-3 pl-10 pr-4 h-32 rounded-lg border bg-transparent border-gray-700"
        ></textarea>
    </div>
);

export { InputField, TextAreaField };
