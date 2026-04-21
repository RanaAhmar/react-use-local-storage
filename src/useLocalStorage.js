import { useState, useEffect, useCallback } from 'react';

/**
 * A custom React hook for seamless local storage state management.
 * SSR safe and cross-tab synchronization supported.
 * 
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {any} initialValue - The initial value to fall back to if no value exists.
 * @returns {[any, Function]} - An array containing the stored value and a setter function.
 */
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = useCallback((value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
                // Dispatch a custom event so other components in the same tab can listen
                window.dispatchEvent(new Event('local-storage'));
            }
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);

    // Handle cross-tab synchronization
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === key && e.newValue !== null) {
                setStoredValue(JSON.parse(e.newValue));
            }
        };

        const handleLocalChange = () => {
            try {
                const item = window.localStorage.getItem(key);
                if (item) {
                    setStoredValue(JSON.parse(item));
                }
            } catch (error) {
                console.error("Local sync error:", error);
            }
        }

        if (typeof window !== "undefined") {
            window.addEventListener('storage', handleStorageChange);
            // Listen for changes made within the same tab via our custom event
            window.addEventListener('local-storage', handleLocalChange);
            return () => {
                window.removeEventListener('storage', handleStorageChange);
                window.removeEventListener('local-storage', handleLocalChange);
            };
        }
    }, [key]);

    return [storedValue, setValue];
}

export default useLocalStorage;
