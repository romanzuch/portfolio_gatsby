export const Constants = {
    gridSizing: {
        large: { left: 3, right: 9 }, /* lg */
        medium: { left: 4, right: 8 }, /* md */
        small: { left: 12, right: 12 } /* xs */
    }
}

export const AppSettings = {
    displayMode: 'light'
}

export const ChangeDisplayMode = (mode) => {
    AppSettings.displayMode = mode;
}