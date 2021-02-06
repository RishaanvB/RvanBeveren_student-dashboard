import { assign } from "lodash";

// *
// * Colors
// *
// const yellow200 = "#FFF59D";
// const deepOrange600 = "#F4511E";
// const lime300 = "#DCE775";
// const lightGreen500 = "#8BC34A";
// const teal700 = "#00796B";
// const cyan900 = "#006064";
// const colors = [deepOrange600, yellow200, lime300, lightGreen500, teal700, cyan900];
const blueGrey50 = "#ECEFF1";
const blueGrey300 = "#90A4AE";
const blueGrey700 = "#455A64";
const grey900 = "#212121";

// *
// * Typography
// *
const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
const letterSpacing = "normal";
const fontSize = 3;
// *
// * Layout
// *

// padding= distance ticklabels? and graph axis
const padding = 1;
// baseprops = lengtes graph zelf
const baseProps = {
  width: 250,
  height: 95,
  padding: 15,
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0,
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);
// *
// * Strokes
// *
const strokeDasharray = "10";
// const strokeLinecap = "round";
// const strokeLinejoin = "round";

const theme = {
  axis: assign(
    {
      style: {
        // axis: {
        //   fill: "transparent",
        //   stroke: blueGrey300,
        //   strokeWidth: 2,
        //   strokeLinecap,
        //   strokeLinejoin
        // },
        // axisLabel: assign({}, centeredLabelStyles, {
        //   padding,
        //   stroke: "blue"
        // }),

        grid: {
          fill: "none",
          stroke: blueGrey50,
          strokeDasharray,
          // strokeLinecap,
          //   strokeLinejoin,
          pointerEvents: "painted",
        },
        /* size =  grootte van ticks streepjes*/
        ticks: {
          fill: "transparent",
          size: 8,
          stroke: blueGrey300,
          strokeWidth: 2,
          padding: -3,
          // strokeLinecap,
          // strokeLinejoin
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: blueGrey700,
        }),
      },
    },
    baseProps
  ),

  bar: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          padding,
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),

  chart: baseProps,
  //   errorbar: assign(
  //     {
  //       borderWidth: 1,
  //       style: {
  //         data: {
  //           fill: "transparent",
  //           opacity: 1,
  //           stroke: blueGrey700,
  //           strokeWidth: 4
  //         },
  //         labels: baseLabelStyles
  //       }
  //     },
  //     baseProps
  //   ),
  //   group: assign(
  //     {
  //       colorScale: colors
  //     },
  //     baseProps
  //   ),
  //   histogram: assign(
  //     {
  //       style: {
  //         data: {
  //           fill: blueGrey700,
  //           stroke: grey900,
  //           strokeWidth: 2
  //         },
  //         labels: baseLabelStyles
  //       }
  //     },
  //     baseProps
  //   ),
  legend: {
    // colorScale: colors,
    // gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "square",
        padding: 1,
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 3 }),
    },
  },
  line: assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 0.3,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  //   pie: assign(
  //     {
  //       colorScale: colors,
  //       style: {
  //         data: {
  //           padding,
  //           stroke: blueGrey50,
  //           strokeWidth: 1
  //         },
  //         labels: assign({}, baseLabelStyles, { padding: 20 })
  //       }
  //     },
  //     baseProps
  //   ),
  //   scatter: assign(
  //     {
  //       style: {
  //         data: {
  //           fill: blueGrey700,
  //           opacity: 1,
  //           stroke: "transparent",
  //           strokeWidth: 0
  //         },
  //         labels: baseLabelStyles
  //       }
  //     },
  //     baseProps
  //   ),
  //   stack: assign(
  //     {
  //       colorScale: colors
  //     },
  //     baseProps
  //   ),

  tooltip: {
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 0.1,
      fill: "#f0f0f0",
      pointerEvents: "none",
      opacity: 0.6,
    },
    strokeWidth: 0.1,
    center: { x: 125, y: 50 },
    pointerOrientation: "bottom",
    flyoutWidth: 80,
    flyoutHeight: 20,
    pointerWidth: 50,
    cornerRadius: 0,
  },
  voronoi: assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 1,
        },

        labels: assign({}, baseLabelStyles, {
          padding: 1,
          pointerEvents: "none",
        }),
        flyout: {
          stroke: grey900,
          strokeWidth: 0.1,
          fill: "#f0f0f0",
          pointerEvents: "none",
        },
      },
    },
    baseProps
  ),
};

export default theme;
