import { createMuiTheme } from "@material-ui/core";

export const defaultTheme = createMuiTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true
        },
        MuiButton: {
            disableElevation: true
        }
    },
    typography: {
        "*": {
            color: "#8697a2"
        },
        "h*": { marginBlock: 0 },
    }
});

defaultTheme.overrides = {
    MuiButton: {
        root: {
            textTransform: "capitalize",
            transition: "background 0.3s, color 0.3s",
        },
        containedPrimary: {
            border: `1px solid ${defaultTheme.palette.primary.main}`,
            "&:hover": {
                border: `1px solid ${defaultTheme.palette.primary.main}`,
                backgroundColor: "white",
                color: defaultTheme.palette.primary.main
            }
        },
        containedSecondary: {
            border: `1px solid ${defaultTheme.palette.secondary.main}`,
            "&:hover": {
                border: `1px solid ${defaultTheme.palette.secondary.main}`,
                backgroundColor: "white",
                color: defaultTheme.palette.secondary.main
            }
        }
    },
    MuiNativeSelect: {
        select: {
            paddingRight: "36px !important",
            "& option": {
                backgroundColor: "#232a33 !important"
            },
            backgroundColor: "transparent",
            borderRadius: "6.25rem !important",
            padding: "0.5625rem 2.5rem 0.5625rem 0.9375rem",
            border: "1px solid rgb(49, 55, 63)",
            color: "#8697a2",
            "&:focus": {
                borderRadius: "6.25rem !important",
            }
        },
        icon: {
            color: "#8697a2",
            marginRight: "10px"
        }
    }
}
