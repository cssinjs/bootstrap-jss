.custom-control {
  position: relative;
  display: block;
  min-height: ($font-size-base * $line-height-base);
  padding-left: $custom-control-gutter;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: $custom-control-spacer-x;
}

.custom-control-input {
  position: absolute;
  z-index: -1; // Put the input behind the label so it doesn't overlay text
  opacity: 0;

  &:checked ~ .custom-control-label::before {
    color: $custom-control-indicator-checked-color;
    @include gradient-bg($custom-control-indicator-checked-bg);
    @include box-shadow($custom-control-indicator-checked-box-shadow);
  }

  &:focus ~ .custom-control-label::before {
    // the mixin is not used here to make sure there is feedback
    box-shadow: $custom-control-indicator-focus-box-shadow;
  }

  &:active ~ .custom-control-label::before {
    color: $custom-control-indicator-active-color;
    background-color: $custom-control-indicator-active-bg;
    @include box-shadow($custom-control-indicator-active-box-shadow);
  }

  &:disabled {
    ~ .custom-control-label {
      color: $custom-control-label-disabled-color;

      &::before {
        background-color: $custom-control-indicator-disabled-bg;
      }
    }
  }
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;

  // Background-color and (when enabled) gradient
  &::before {
    position: absolute;
    top: (($font-size-base * $line-height-base - $custom-control-indicator-size) / 2);
    left: -$custom-control-gutter;
    display: block;
    width: $custom-control-indicator-size;
    height: $custom-control-indicator-size;
    pointer-events: none;
    content: "";
    user-select: none;
    background-color: $custom-control-indicator-bg;
    @include box-shadow($custom-control-indicator-box-shadow);
  }

  // Foreground (icon)
  &::after {
    position: absolute;
    top: (($font-size-base * $line-height-base - $custom-control-indicator-size) / 2);
    left: -$custom-control-gutter;
    display: block;
    width: $custom-control-indicator-size;
    height: $custom-control-indicator-size;
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
    background-size: $custom-control-indicator-bg-size;
  }
}


.custom-checkbox {
  .custom-control-label::before {
    @include border-radius($custom-checkbox-indicator-border-radius);
  }

  .custom-control-input:checked ~ .custom-control-label {
    &::before {
      @include gradient-bg($custom-control-indicator-checked-bg);
    }
    &::after {
      background-image: $custom-checkbox-indicator-icon-checked;
    }
  }

  .custom-control-input:indeterminate ~ .custom-control-label {
    &::before {
      @include gradient-bg($custom-checkbox-indicator-indeterminate-bg);
      @include box-shadow($custom-checkbox-indicator-indeterminate-box-shadow);
    }
    &::after {
      background-image: $custom-checkbox-indicator-icon-indeterminate;
    }
  }

  .custom-control-input:disabled {
    &:checked ~ .custom-control-label::before {
      background-color: $custom-control-indicator-checked-disabled-bg;
    }
    &:indeterminate ~ .custom-control-label::before {
      background-color: $custom-control-indicator-checked-disabled-bg;
    }
  }
}

.custom-radio {
  .custom-control-label::before {
    border-radius: $custom-radio-indicator-border-radius;
  }

  .custom-control-input:checked ~ .custom-control-label {
    &::before {
      @include gradient-bg($custom-control-indicator-checked-bg);
    }
    &::after {
      background-image: $custom-radio-indicator-icon-checked;
    }
  }

  .custom-control-input:disabled {
    &:checked ~ .custom-control-label::before {
      background-color: $custom-control-indicator-checked-disabled-bg;
    }
  }
}


.custom-select {
  display: inline-block;
  width: 100%;
  height: $custom-select-height;
  padding: $custom-select-padding-y ($custom-select-padding-x + $custom-select-indicator-padding) $custom-select-padding-y $custom-select-padding-x;
  line-height: $custom-select-line-height;
  color: $custom-select-color;
  vertical-align: middle;
  background: $custom-select-background;
  background-color: $custom-select-bg;
  border: $custom-select-border-width solid $custom-select-border-color;
  @if $enable-rounded {
    border-radius: $custom-select-border-radius;
  } @else {
    border-radius: 0;
  }
  @include box-shadow($custom-select-box-shadow);
  appearance: none;

  &:focus {
    border-color: $custom-select-focus-border-color;
    outline: 0;
    @if $enable-shadows {
      box-shadow: $custom-select-box-shadow, $custom-select-focus-box-shadow;
    } @else {
      box-shadow: $custom-select-focus-box-shadow;
    }

    &::-ms-value {
      // For visual consistency with other platforms/browsers,
      // suppress the default white text on blue background highlight given to
      // the selected option text when the (still closed) <select> receives focus
      // in IE and (under certain conditions) Edge.
      // See https://github.com/twbs/bootstrap/issues/19398.
      color: $input-color;
      background-color: $input-bg;
    }
  }

  &[multiple],
  &[size]:not([size="1"]) {
    height: auto;
    padding-right: $custom-select-padding-x;
    background-image: none;
  }

  &:disabled {
    color: $custom-select-disabled-color;
    background-color: $custom-select-disabled-bg;
  }

  // Hides the default caret in IE11
  &::-ms-expand {
    opacity: 0;
  }
}

.custom-select-sm {
  height: $custom-select-height-sm;
  padding-top: $custom-select-padding-y-sm;
  padding-bottom: $custom-select-padding-y-sm;
  padding-left: $custom-select-padding-x-sm;
  font-size: $custom-select-font-size-sm;
}

.custom-select-lg {
  height: $custom-select-height-lg;
  padding-top: $custom-select-padding-y-lg;
  padding-bottom: $custom-select-padding-y-lg;
  padding-left: $custom-select-padding-x-lg;
  font-size: $custom-select-font-size-lg;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: $custom-file-height;
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: $custom-file-height;
  margin: 0;
  opacity: 0;

  &:focus ~ .custom-file-label {
    border-color: $custom-file-focus-border-color;
    box-shadow: $custom-file-focus-box-shadow;
  }

  &:disabled ~ .custom-file-label {
    background-color: $custom-file-disabled-bg;
  }

  @each $lang, $value in $custom-file-text {
    &:lang(#{$lang}) ~ .custom-file-label::after {
      content: $value;
    }
  }
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: $custom-file-height;
  padding: $custom-file-padding-y $custom-file-padding-x;
  line-height: $custom-file-line-height;
  color: $custom-file-color;
  background-color: $custom-file-bg;
  border: $custom-file-border-width solid $custom-file-border-color;
  @include border-radius($custom-file-border-radius);
  @include box-shadow($custom-file-box-shadow);

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: block;
    height: $custom-file-height-inner;
    padding: $custom-file-padding-y $custom-file-padding-x;
    line-height: $custom-file-line-height;
    color: $custom-file-button-color;
    content: "Browse";
    @include gradient-bg($custom-file-button-bg);
    border-left: inherit;
    @include border-radius(0 $custom-file-border-radius $custom-file-border-radius 0);
  }
}

.custom-range {
  width: 100%;
  height: calc(#{$custom-range-thumb-height} + #{$custom-range-thumb-focus-box-shadow-width * 2});
  padding: 0; // Need to reset padding
  background-color: transparent;
  appearance: none;

  &:focus {
    outline: none;

    // Pseudo-elements must be split across multiple rulesets to have an affect.
    // No box-shadow() mixin for focus accessibility.
    &::-webkit-slider-thumb { box-shadow: $custom-range-thumb-focus-box-shadow; }
    &::-moz-range-thumb     { box-shadow: $custom-range-thumb-focus-box-shadow; }
    &::-ms-thumb            { box-shadow: $custom-range-thumb-focus-box-shadow; }
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    width: $custom-range-thumb-width;
    height: $custom-range-thumb-height;
    margin-top: (($custom-range-track-height - $custom-range-thumb-height) / 2); // Webkit specific
    @include gradient-bg($custom-range-thumb-bg);
    border: $custom-range-thumb-border;
    @include border-radius($custom-range-thumb-border-radius);
    @include box-shadow($custom-range-thumb-box-shadow);
    @include transition($custom-forms-transition);
    appearance: none;

    &:active {
      @include gradient-bg($custom-range-thumb-active-bg);
    }
  }

  &::-webkit-slider-runnable-track {
    width: $custom-range-track-width;
    height: $custom-range-track-height;
    color: transparent; // Why?
    cursor: $custom-range-track-cursor;
    background-color: $custom-range-track-bg;
    border-color: transparent;
    @include border-radius($custom-range-track-border-radius);
    @include box-shadow($custom-range-track-box-shadow);
  }

  &::-moz-range-thumb {
    width: $custom-range-thumb-width;
    height: $custom-range-thumb-height;
    @include gradient-bg($custom-range-thumb-bg);
    border: $custom-range-thumb-border;
    @include border-radius($custom-range-thumb-border-radius);
    @include box-shadow($custom-range-thumb-box-shadow);
    @include transition($custom-forms-transition);
    appearance: none;

    &:active {
      @include gradient-bg($custom-range-thumb-active-bg);
    }
  }

  &::-moz-range-track {
    width: $custom-range-track-width;
    height: $custom-range-track-height;
    color: transparent;
    cursor: $custom-range-track-cursor;
    background-color: $custom-range-track-bg;
    border-color: transparent; // Firefox specific?
    @include border-radius($custom-range-track-border-radius);
    @include box-shadow($custom-range-track-box-shadow);
  }

  &::-ms-thumb {
    width: $custom-range-thumb-width;
    height: $custom-range-thumb-height;
    margin-top: 0; // Edge specific
    margin-right: $custom-range-thumb-focus-box-shadow-width; // Workaround that overflowed box-shadow is hidden.
    margin-left: $custom-range-thumb-focus-box-shadow-width;  // Workaround that overflowed box-shadow is hidden.
    @include gradient-bg($custom-range-thumb-bg);
    border: $custom-range-thumb-border;
    @include border-radius($custom-range-thumb-border-radius);
    @include box-shadow($custom-range-thumb-box-shadow);
    @include transition($custom-forms-transition);
    appearance: none;

    &:active {
      @include gradient-bg($custom-range-thumb-active-bg);
    }
  }

  &::-ms-track {
    width: $custom-range-track-width;
    height: $custom-range-track-height;
    color: transparent;
    cursor: $custom-range-track-cursor;
    background-color: transparent;
    border-color: transparent;
    border-width: ($custom-range-thumb-height * .5);
    @include box-shadow($custom-range-track-box-shadow);
  }

  &::-ms-fill-lower {
    background-color: $custom-range-track-bg;
    @include border-radius($custom-range-track-border-radius);
  }

  &::-ms-fill-upper {
    margin-right: 15px; // arbitrary?
    background-color: $custom-range-track-bg;
    @include border-radius($custom-range-track-border-radius);
  }

  &:disabled {
    &::-webkit-slider-thumb {
      background-color: $custom-range-thumb-disabled-bg;
    }

    &::-webkit-slider-runnable-track {
      cursor: default;
    }

    &::-moz-range-thumb {
      background-color: $custom-range-thumb-disabled-bg;
    }

    &::-moz-range-track {
      cursor: default;
    }

    &::-ms-thumb {
      background-color: $custom-range-thumb-disabled-bg;
    }
  }
}
