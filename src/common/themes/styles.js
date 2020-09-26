const lightGray = "#232a33";
const darkGray = "#1a212a";

const defaultBackgroundColor = lightGray;
const defaultHeaderBackgroundColor = darkGray;
const maxContainerWidthByRem = 73;

// const defaultFontColor = "#8697a2";

export const useGlobalStyles = (theme) => ({
    "@global": {
        "body": {
            margin: 0,
            padding: 0
        },
        ".bg-default": {
            backgroundColor: defaultBackgroundColor
        },
        ".bg-header-default": {
            backgroundColor: defaultHeaderBackgroundColor
        },
        ".container": {
            maxWidth: `${maxContainerWidthByRem}rem`
        }
    }
});
