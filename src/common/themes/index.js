import { createMuiTheme } from "@material-ui/core";

export const defaultTheme = createMuiTheme({
    palette: {
        // primary: blue
    },
    props: {
        MuiButtonBase: {
            // disableRipple: true
        },
        MuiButton: {
            disableElevation: true
        }
    }
});

defaultTheme.overrides = {
    MuiButton: {
        containedPrimary: {
            transition: 'background 0.3s, color 0.3s',
            border: `1px solid ${defaultTheme.palette.primary.main}`,
            '&:hover': {
                border: `1px solid ${defaultTheme.palette.primary.main}`,
                backgroundColor: 'white',
                color: defaultTheme.palette.primary.main
            }
        }
    }
}
