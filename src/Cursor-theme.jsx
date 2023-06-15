import React from "react";
import { createContext } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export const themes = {
    black:{
        background: 'black'
    },
    white:{
        background: 'white'
    }
};

export const ThemeContext = React.createContext(
    themes.black
)