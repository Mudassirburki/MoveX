import React, { createContext, useContext } from 'react';
import { Platform, StatusBar } from 'react-native';

// ─── Status Bar Height (no extra dependency) ──────────────────────────────────
const STATUSBAR_HEIGHT =
    Platform.OS === 'android' ? StatusBar.currentHeight ?? 24 : 44;

// ─── Color Palette ─────────────────────────────────────────────────────────────
export const colors = {
    primary: '#20b2aa',      // teal — main brand color
    buttons: '#ff8c52',
    grey: '#bebebe',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    grey6: '#eeeeee',
    grey7: '#F2f9f9',
    grey10: '#d6d6d6',
    CardComment: '#86939e',
    cardbackground: '#ffffff',
    statusbar: '#ff8c52',
    headerText: '#ffffff',
    lightgreen: '#66DF48',
    blue: '#286ef0',
    black: '#000000',
    white: '#ffffff',
    darkBlue: '#2d328a',
    pagebackground: '#ffffff',
};

// ─── Parameters ────────────────────────────────────────────────────────────────
export const parameters = {
    statusBarHeight: STATUSBAR_HEIGHT,
    headerHeight: 70,

    styledButton: {
        backgroundColor: colors.buttons,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.buttons,
        height: 50,
        paddingHorizontal: 20,
        width: '100%',
    },

    buttonTitle: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
    },
};

// ─── Typography ────────────────────────────────────────────────────────────────
export const title = {
    color: colors.buttons,
    fontSize: 20,
    fontWeight: 'bold',
};

// ─── Spacing Scale ─────────────────────────────────────────────────────────────
export const Spacing = {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s16: 16,
    s20: 20,
    s24: 24,
    s30: 30,
    s32: 32,
    s40: 40,
    s48: 48,
    s50: 50,
    s60: 60,
    s70: 70,
    s80: 80,
    s90: 90,
    s100: 100,
    s110: 110,
    s120: 120,
    s130: 130,
    s140: 140,
    s150: 150,
};

// ─── Theme Object ──────────────────────────────────────────────────────────────
const theme = {
    colors,
    parameters,
    title,
    Spacing,
};

// ─── Context ───────────────────────────────────────────────────────────────────
const ThemeContext = createContext(theme);

// ─── Provider ──────────────────────────────────────────────────────────────────
export const ThemeProvider = ({ children }) => (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
);

// ─── Hook ──────────────────────────────────────────────────────────────────────
export const useTheme = () => useContext(ThemeContext);

export default theme;
