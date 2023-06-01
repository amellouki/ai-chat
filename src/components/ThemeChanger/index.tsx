import React, {FunctionComponent, useEffect, useState} from 'react';

type ThemeType = 'dark' | 'light';

const ThemeChanger: FunctionComponent = (props) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>()

    useEffect(() => {
        const root = window.document.documentElement;
        const initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        root.setAttribute('data-theme', initialTheme);
        root.classList.add(`${initialTheme}-theme`);

        setCurrentTheme(initialTheme)
    }, [setCurrentTheme]);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        const currentTheme = root.getAttribute('data-theme');

        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', newTheme);
        root.classList.remove(`${currentTheme}-theme`);
        root.classList.add(`${newTheme}-theme`);

        setCurrentTheme(newTheme)
    };

    return (
        <button onClick={toggleTheme}>Toggle Theme currently: {currentTheme}</button>
    );

}

export default ThemeChanger;
