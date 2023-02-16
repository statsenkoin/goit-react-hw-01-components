export const themeLight = {
  colors: {
    textMain: '#505050',
    textSecondary: '#808080',
    textLight: '#fafafa',

    backgroundMain: '#fafafa',
    backgroundSecondary: '#f0f0f0',

    border: '#e0e0e0',
    shadow: `rgb(0 0 0 / 20%) 0px 3px 3px -2px, 
             rgb(0 0 0 / 14%) 0px 3px 4px 0px,
             rgb(0 0 0 / 12%) 0px 1px 8px 0px`,
  },
};

export const themeDark = {
  colors: {
    textMain: '#afafaf',
    textSecondary: '#5f5f5f',
    textLight: '#fafafa',

    backgroundMain: '#222222',
    backgroundSecondary: '#2f2f2f',

    border: '#3f3f3f',
    shadow: `rgb(256 256 256 / 20%) 0px 3px 3px -2px, 
             rgb(256 256 256 / 14%) 0px 3px 4px 0px,
             rgb(256 256 256/ 12%) 0px 1px 8px 0px`,
  },
};

const isThemeLight = true;
// const isThemeLight = false;
export const theme = isThemeLight ? themeLight : themeDark;
