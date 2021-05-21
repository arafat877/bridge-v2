import { fade } from "@material-ui/core";
import { Palette } from "@material-ui/core/styles/createPalette";
import { Overrides } from "@material-ui/core/styles/overrides";
import { getShadow } from "./animationUtils";
import {
  alertError,
  alertErrorBackground,
  alertInfo,
  alertInfoBackground,
  alertSuccess,
  alertSuccessBackground,
  alertWarning,
  alertWarningBackground,
  textDark,
  textDisabled,
  textLighter,
  lightPink,
  pink,
  white
} from "./colors";

export const overrides = (palette: Palette): Overrides => {
  return {
    MuiAlert: {
      action: {
        alignItems: "flex-start",
        paddingTop: 4,
      },
      standardSuccess: {
        color: alertSuccess,
        backgroundColor: alertSuccessBackground,
        boxShadow: getShadow(alertSuccess),
        "& $icon": {
          color: alertSuccess,
        },
      },
      standardInfo: {
        color: alertInfo,
        backgroundColor: alertInfoBackground,
        boxShadow: getShadow(alertInfo),
        "& $icon": {
          color: alertInfo,
        },
      },
      standardWarning: {
        color: alertWarning,
        backgroundColor: alertWarningBackground,
        boxShadow: getShadow(alertWarning),
        "& $icon": {
          color: alertWarning,
        },
      },
      standardError: {
        color: alertError,
        backgroundColor: alertErrorBackground,
        boxShadow: getShadow(alertError),
        "& $icon": {
          color: alertError,
        },
      },
    },
    MuiButton: {
      root: {
        fontSize: 16,
        borderRadius: 50,
      },
      containedSizeLarge: {
        padding: "13px 22px",
        fontSize: 16,
      },
    },
    MuiChip: {
      root: {
        paddingTop: 3, // TODO: fix after investigation font hoisting issue
        backgroundColor: "#F1F1F6",
        borderRadius: 4,
        height: 22,
      },
      sizeSmall: {
        height: 16,
        fontSize: 12,
      },
    },
    MuiDialog: {
      paper: {
        minWidth: 320,
      },
      paperWidthSm: {
        maxWidth: 680,
      },
    },
    MuiDialogActions: {
      root: {
        padding: `40px`,
      },
    },
    MuiDialogTitle: {
      root: {
        paddingTop: 16,
        paddingBottom: 12,
      },
    },
    MuiDialogContent: {
      root: {
        padding: `36px 40px`,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: lightPink,
      }
    },
    MuiDrawer: {
      paper: {
        padding: 20,
      },
      paperAnchorRight: {
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
      },
    },
    MuiFab: {
      primary: {
        backgroundColor: lightPink,
        color: white,
        "&:hover": {
          backgroundColor: palette.divider,
          color: lightPink,
        }
      }
    },
    MuiFormControlLabel: {
      root: {
        marginRight: 0,
      },
    },
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      },
    },
    MuiInputBase: {
      // input: { ...generatePlaceholderStyles("ff0000") },
    },
    MuiInputLabel: {
      outlined: {
        fontSize: 14,
        "&$shrink": {
          color: palette.primary.main,
          transform: "translate(20px, 11px) scale(0.75)",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 5,
      },
      input: {
        paddingRight: 20,
        paddingLeft: 20,
      },
    },
    MuiLink: {
      root: {
        cursor: "pointer",
      },
    },
    MuiMobileStepper: {
      root: {
        background: "none",
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: "0px 1px 20px rgba(0, 27, 58, 0.05)",
      },
      elevation8: {
        boxShadow: "0px 1px 20px rgba(0, 27, 58, 0.05)",
      },
      root: {
        borderRadius: 10,
      },
      rounded: {
        borderRadius: 10
      }
    },
    MuiSelect: {
      root: {
        padding: `13px 20px`,
      },
      select: {
        "&:focus": {
          backgroundColor: "initial",
        },
      },
      selectMenu: {
        display: "flex",
        minHeight: 0,
        height: 15,
      },
      outlined: {
        background: "white",
        boxShadow: `0 0 3px 0 rgba(0,27,58,0.10)`,
      },
    },
    MuiSkeleton: {
      text: {
        borderRadius: 4,
      },
    },
    MuiSnackbar: {
      anchorOriginTopCenter: {
        top: "-64px!important",
      },
    },
    SnackbarItem: {
      collapseWrapper: {
        border: "1px solid blue",
      },
    },
    MuiSvgIcon: {
      root: {
        pointerEvents: "none",
      },
    },
    MuiTabs: {
      indicator: {
        display: "none",
      },
      flexContainer: {
        borderRadius: "9px 9px 0 0",
        borderBottom: `1px solid ${lightPink}`
      },
      root: {
        borderRadius: "9px 9px 0 0"
      }
    },
    MuiTab: {
      root: {
        fontSize: 16,
      },
      textColorInherit: {
        color: textLighter,
        opacity: 1,
        "&$selected": {
          color: white,
          backgroundColor: lightPink,
          fontWeight: 500,
          fontSize: "1em",
        },
        "&$disabled": {
          color: textDisabled,
        },
      },
    },
    MuiToggleButtonGroup: {
      root: {
        boxShadow: `0px 0px 4px rgba(0, 27, 58, 0.1)`,
        borderRadius: "50%",
      },
    },
    MuiToggleButton: {
      root: {
        borderRadius: 30,
        borderColor: palette.grey[300],
        "&$selected": {
          backgroundColor: fade(palette.grey[300], 0.6),
          "&:hover": {
            backgroundColor: fade(palette.grey[300], 0.6),
          },
        },
        "&:hover": {
          backgroundColor: fade(palette.grey[300], 0.4),
        },
      },
    },
    MuiTooltip: {
      arrow: {
        color: palette.common.black,
      },
      tooltip: {
        borderRadius: 4,
        textAlign: "center",
        backgroundColor: palette.common.black,
        fontSize: 11,
      },
    },
  } as Overrides;
};
