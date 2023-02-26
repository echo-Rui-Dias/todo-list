import { useState } from "react";
import Check from "../../icons/Check";

interface CheckBoxProps {
    slug: string;
    isChecked: boolean;
    handleInputCheckbox: () => void;
}

export default function CheckBox({
    slug,
    isChecked,
    handleInputCheckbox,
}: CheckBoxProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleOnKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleInputCheckbox();
        }
    };
    return (
        <div>
            <label
                htmlFor={`input-checkbox-${slug}`}
                className={`w-4 h-4 flex items-center justify-center duration-200 rounded-full border mt-1 ${
                    isChecked
                        ? `${
                              isFocused
                                  ? "border-purple-dark bg-purple-dark"
                                  : "border-purple"
                          } hover:border-purple-dark bg-purple hover:bg-purple-dark `
                        : `${
                              isFocused ? "border-blue-dark" : "border-blue"
                          } hover:border-blue-dark bg-blue-dark bg-opacity-0 hover:bg-opacity-20 focus:bg-opacity-20`
                }`}
            >
                <Check
                    className={`text-gray-100 ${
                        isChecked ? "opacity-100" : "opacity-0"
                    }`}
                />
            </label>
            <input
                type={"checkbox"}
                id={`input-checkbox-${slug}`}
                name={`input-checkbox-${slug}`}
                className="opacity-0 w-0 h-0"
                checked={isChecked}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInputCheckbox}
                onKeyDown={(event) => handleOnKeyEnter(event)}
            />
        </div>
    );
}
