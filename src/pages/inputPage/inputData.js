import clearlarge from "../../assets/inputsIcons/clear-text_2.png";
import cleardefault from "../../assets/inputsIcons/clear-text.png";
import clearsmall from "../../assets/inputsIcons/clear-text_7.png";
import error from "../../assets/inputsIcons/error.png";
import leftIconSmall from "../../assets/inputsIcons/left-icon.png";
import leftIconlarge from "../../assets/inputsIcons/left-icon_15.png";
import leftIcondefault from "../../assets/inputsIcons/left-icon_14.png";
import leftIconSmallDanger from "../../assets/inputsIcons/left-icon_6.png";
import leftIconlargeDanger from "../../assets/inputsIcons/left-icon_16.png";
import leftIcondefaultDanger from "../../assets/inputsIcons/left-icon_13.png";
import tr from "../../assets/inputsIcons/tr.png";
// import check from "../../assets/inputsIcons/check.png";

const data = [
  {
    id: 1,
    disabled: false,
    type: "default-input",
    cleartext: clearlarge,
    error: error,
    leftIcon: null,
    leftDanger: null,
    tr: null,
    placeholder: "Placeholder",
    size: "large",
    label: null,
    bottomRightLabel: null,
    bottomLeftLabel: null,
  },
  {
    id: 2,
    disabled: false,
    type: "default-input",
    cleartext: cleardefault,
    error: error,
    leftIcon: null,
    leftDanger: null,
    tr: null,
    placeholder: "Placeholder",
    size: "default",
    label: null,
    bottomRightLabel: null,
    bottomLeftLabel: null,
  },
  {
    id: 3,
    disabled: false,
    type: "default-input",
    cleartext: clearsmall,
    error: error,
    leftIcon: null,
    leftDanger: null,
    tr: null,
    placeholder: "Placeholder",
    size: "small",
    label: null,
    bottomRightLabel: null,
    bottomLeftLabel: null,
  },
  {
    id: 4,
    disabled: false,
    type: "icon-input",
    cleartext: clearlarge,
    error: error,
    leftDanger: leftIconlargeDanger,
    leftIcon: leftIconlarge,
    tr: null,
    placeholder: "Placeholder",
    size: "large",
    label: null,
    bottomRightLabel: null,
    bottomLeftLabel: null,
  },
  {
    id: 5,
    disabled: false,
    type: "icon-input",
    cleartext: cleardefault,
    error: error,
    leftDanger: leftIcondefaultDanger,
    leftIcon: leftIcondefault,
    tr: null,
    placeholder: "Placeholder",
    size: "default",
    label: null,
    bottomRightLabel: null,
    bottomLeftLabel: null,
  },
  {
    id: 6,
    disabled: false,
    type: "icon-input",
    cleartext: clearsmall,
    error: error,
    leftDanger: leftIconSmallDanger,
    leftIcon: leftIconSmall,
    tr: null,
    placeholder: "Placeholder",
    size: "small",
    label: null,
    bottomRightLabel: null,
    bottomLeftLabel: null,
  },
  {
    id: 7,
    disabled: false,
    type: "tr-input",
    cleartext: cleardefault,
    error: error,
    leftDanger: null,
    leftIcon: null,
    tr: tr,
    placeholder: "(___)___ __ __",
    size: "large",
    label: null,
    bottomRightLabel: null,
    bottomLeftLabel: null,
  },
  {
    id: 8,
    disabled: false,
    type: "tr-input",
    cleartext: clearsmall,
    error: error,
    leftDanger: null,
    leftIcon: null,
    tr: tr,
    placeholder: "(___)___ __ __",
    size: "default",
    label: null,
    bottomRightLabel: null,
    bottomLeftLabel: null,
  },
  {
    id: 9,
    disabled: false,
    type: "tr-input",
    cleartext: clearsmall,
    error: error,
    leftDanger: null,
    leftIcon: null,
    tr: tr,
    placeholder: "(___)___ __ __",
    size: "small",
    label: null,
    bottomRightLabel: null,
    bottomLeftLabel: null,
  },
  {
    id: 10,
    disabled: false,
    type: "label-input",
    cleartext: clearsmall,
    error: error,
    leftDanger: null,
    leftIcon: null,
    tr: null,
    placeholder: "Placeholder",
    size: "large",
    label: ["Label", "(Opsiyonel)"],
    bottomRightLabel: "Helper Text Right",
    bottomLeftLabel: null,
  },
  {
    id: 11,
    disabled: false,
    type: "label-input",
    cleartext: clearsmall,
    error: error,
    leftDanger: null,
    leftIcon: null,
    tr: null,
    placeholder: "Placeholder",
    size: "default",
    label: ["Label", "(Opsiyonel)"],
    bottomRightLabel: null,
    bottomLeftLabel: "Helper Text Left",
  },
  {
    id: 12,
    disabled: false,
    type: "label-input",
    cleartext: clearsmall,
    error: error,
    leftDanger: null,
    leftIcon: null,
    tr: null,
    placeholder: "Placeholder",
    size: "small",
    label: ["Label", "(Opsiyonel)"],
    bottomRightLabel: "Helper Text Right",
    bottomLeftLabel: "Helper Text Left",
  },
];

export default data;