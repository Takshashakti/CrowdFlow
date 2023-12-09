import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, fallbackValue: T) {
    const [value, setValue] = useState<T>(() => {
        const valueInLocalStorage = window.localStorage.getItem(key);
        if (valueInLocalStorage) {
            return JSON.parse(valueInLocalStorage);
        }
        return fallbackValue;
    });
    
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue] as const;    
}
