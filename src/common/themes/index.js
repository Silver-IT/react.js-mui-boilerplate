import { createMuiTheme } from "@material-ui/core";

export const defaultTheme = createMuiTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true
        },
        MuiButton: {
            disableElevation: true
        }
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
    }
}
