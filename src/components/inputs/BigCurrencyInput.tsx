import { Typography } from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'
import classNames from 'classnames'
import React, { FunctionComponent, ReactNode, useRef } from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { lightPink } from '../../theme/colors'
import { generatePlaceholderStyles } from '../../theme/themeUtils'
import { numberFormatOptions, toUsdFormat } from '../../utils/formatters'

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    textAlign: "center",
    "& input": {
      fontFamily: "inherit",
    },
  },
  small: {
    "& input": {
      fontSize: 32,
      height: "1em",
      padding: ".25em 0",
    },
  },
  smallest: {
    "& input": {
      fontSize: 22,
      height: "1em",
      padding: ".25em 0",
    },
  },
  input: {
    fontSize: 32,
    height: "1em",
    padding: ".25em 0",
    width: "100%",
    outline: "none",
    textAlign: "center",
    border: "0px solid transparent",
    color: theme.customColors.textDark,
    ...generatePlaceholderStyles(theme.customColors.grayPlaceholder),
  },
  inputError: {
    color: theme.palette.error.main,
  },
  errorText: {
    marginTop: -8,
    marginBottom: 10,
  },
  equivalent: {
    marginTop: 0,
    color: lightPink,
  },
}));

type NumberChange = (values: NumberFormatValues) => void;

type BigCurrencyInputProps = {
  onChange: (value: any) => void;
  symbol: string;
  usdValue: string | number;
  value: string | number;
  placeholder?: string;
  errorText?: string | ReactNode;
};

export const BigCurrencyInput: FunctionComponent<BigCurrencyInputProps> = ({
  onChange,
  symbol,
  usdValue,
  value,
  errorText = "",
  placeholder = `0 ${symbol}`,
}) => {
  const styles = useStyles();
  const ref = useRef(null);
  const inputRef = useRef(null);
  const val = value ? String(value) : "";
  const handleChange: NumberChange = (formatValues) => {
    onChange(formatValues.value);
  };

  const chars = val.replace(".", "") + " " + symbol;
  let size = "small";
  if (chars.length > 14) {
    size = "smallest";
  }

  const rootClassName = classNames(styles.container, {
    [styles.small]: size === "small",
    [styles.smallest]: size === "smallest",
  });
  const inputClassName = classNames(styles.input, {
    [styles.inputError]: Boolean(errorText),
  });
  return (
    <div className={rootClassName}>
      <NumberFormat
        value={val}
        ref={ref}
        {...numberFormatOptions}
        suffix={" " + symbol}
        onValueChange={handleChange}
        getInputRef={(input: any) => {
          inputRef.current = input;
        }}
        autoFocus={true}
        className={inputClassName}
        placeholder={placeholder}
      />
      {errorText && (
        <Typography
          variant="body2"
          color="error"
          gutterBottom
          className={styles.errorText}
        >
          {errorText}
        </Typography>
      )}
      {<p className={styles.equivalent}>= {toUsdFormat(usdValue)}</p>}
    </div>
  );
};

export const BigCurrencyInputWrapper = styled("div")({
  marginTop: 40,
});
