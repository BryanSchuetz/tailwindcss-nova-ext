/*

Completion Item Properties

detail
An additional label for the item that is displayed alongside it, such as its type name.

documentation
A user-visible documentation string displayed at the bottom of the completions panel when the item is highlighted.

filterText
The text used when filtering the item. If null, label will be used.

insertText
The text used when inserting the item into the editor. If null, label will be used.

range
A Range value that describes the textual range within the editor that should be replaced when the item is chosen. If null, the word preceding the cursor will be replaced.

commitChars
A Charset object that specify the character set that, if typed while the item is highlighted, will accept the completion before inserting the typed character.

tokenize
Whether the text inserted by the completion should be tokenized. If true, then occurrences such as the format $[value] will be replaced by editor tokens containing the name value, where value may be any string that contains any characters other than $, [ and ]. By default this property is false.
*/

const CONSTANTS = require('../Scripts/constants.js');

breakpoints = [
  {
    label:"sm:",
    detail:"max-width: " + CONSTANTS.SM_BREAKPOINT + "px;",
    documentation:"References the small breakpoint set at " + CONSTANTS.SM_BREAKPOINT + "px."
  },
  {
    label:"md:",
    detail:"max-width: " + CONSTANTS.MD_BREAKPOINT + "px;",
    documentation:"References the medium breakpoint set at " + CONSTANTS.MD_BREAKPOINT + "px."
  },
  {
    label:"lg:",
    detail:"max-width: " + CONSTANTS.LG_BREAKPOINT + "px;",
    documentation:"References the large breakpoint set at " + CONSTANTS.LG_BREAKPOINT + "px."
  },
  {
    label:"xl:",
    detail:"max-width: " + CONSTANTS.XL_BREAKPOINT + "px;",
    documentation:"References the extra large breakpoint set at " + CONSTANTS.XL_BREAKPOINT + "px."
  },
];

container = [
  {
    label:"container",
    detail:"width: 100%; or max-width: breakpoint;",
    documentation:"Sets the max-width of an element to 100% or the preceding breakpoint width."
  }
]

var boxSizing = [
  {
    label:"box-border",
    detail:"box-sizing: border-box;",
    documentation:"Sets element's box-sizing to border-box, telling the browser to include the borders and padding in a specified height or width."
  },
  {
    label:"box-content",
    detail:"box-sizing: content-box;",
    documentation:"Sets element's box-sizing to content-box, telling browser to add borders and padding on top of a specified width or height.",
    
  }
];

var display = [
  {
    label:"block",
    detail:"display: block;",
    documentation:"Creates a block-level element."
  },
  {
    label:"inline-block",
    detail:"display: inline-block;",
    documentation:"Creates a inline block-level element."
  },
  {
    label:"inline",
    detail:"display: inline;",
    documentation:"Creates an inline element."
  },
  {
    label:"flex",
    detail:"display: flex;",
    documentation:"Creates a block-level flex container."
  },
  {
    label:"inline-flex",
    detail:"display: inline-flex;",
    documentation:"Creates an inline flex container."
  },
  {
    label:"table",
    detail:"display: table;",
    documentation:"Creats an element that behaves like a table element."
  },
  {
    label:"table-caption",
    detail:"display: table-caption;",
    documentation:"Creats an element that behaves like a table-caption element."
  },
  {
    label:"table-cell",
    detail:"display: table-cell;",
    documentation:"Creats an element that behaves like a table-cell element."
  },
  {
    label:"table-column",
    detail:"display: table-column;",
    documentation:"Creats an element that behaves like a table-column element."
  },
  {
    label:"table-column-group",
    detail:"display: table-column-group;",
    documentation:"Creats an element that behaves like a table-column-group element."
  },
  {
    label:"table-footer-group",
    detail:"display: table-block;",
    documentation:"Creats an element that behaves like a table-footer-group element."
  },
  {
    label:"table-header-group",
    detail:"display: table-header-group;",
    documentation:"Creats an element that behaves like a table-header-group element."
  },
  {
    label:"table-row-group",
    detail:"display: table-row-group;",
    documentation:"Creats an element that behaves like a table-row-group element."
  },
  {
    label:"table-row",
    detail:"display: table-row;",
    documentation:"Creats an element that behaves like a table-row element."
  },
  {
    label:"flow-root",
    detail:"display: flow-root;",
    documentation:"Creates a inline-block level element."
  },
  {
    label:"grid",
    detail:"display: grid;",
    documentation:"Creates a grid container."
  },
  {
    label:"inline-grid",
    detail:"display: inline-grid;",
    documentation:"Creates an inline grid container."
  },
  {
    label:"contents",
    detail:"display: contents;",
    documentation:"Creates a \"phantom\" container whose children act like direct children of the parent."
  },
  {
    label:"hidden",
    detail:"display: none;",
    documentation:"Sets an element's display property to none and removes it from the page layout -- Compare to .invisible class to set visbility."
  },
];

var floats = [
  {
    label:"float-right",
    detail:"float: right;",
    documentation:"Floats an element to the right of its container."
  },
  {
    label:"float-left",
    detail:"float: left;",
    documentation:"Floats an element to the left of its container."
  },
  {
    label:"float-none",
    detail:"float: none;",
    documentation:"Resets any floats applied to an element. This is the default value for the float property."
  },
  {
    label:"clearfix",
    detail:"content: \"\"; display: table; clear: both;",
    documentation:"Applies the \"clearfix\" hack to prevent elements after a floating element from flowing around it."
  },
];

var clear = [
  {
    label:"clear-left",
    detail:"clear: left;",
    documentation:"Position an element below any preceding left-floated elements."
  }, 
  {
    label:"clear-right",
    detail:"clear: right;",
    documentation:"Position an element below any preceding right-floated elements."
  }, 
  {
    label:"clear-both",
    detail:"clear: both;",
    documentation:"Position an element below all preceding floated elements."
  }, 
  {
    label:"clear-none",
    detail:"clear: none;",
    documentation:"Resets any clears that are applied to an element. This is the default value for the clear property."
  },  
]

var objectFit = [
  {
    label:"object-contain",
    detail:"object-fit: contain;",
    documentation:"Resizes the element's content to stay contained with its container."
  },  
  {
    label:"object-cover",
    detail:"object-fit: cover;",
    documentation:"Resizes the element's content to cover its container proportionately."
  },  
  {
    label:"object-fill",
    detail:"object-fit: fill;",
    documentation:"Stretches the element's content to fit its container."
  },  
  {
    label:"object-none",
    detail:"object-fit: none;",
    documentation:"Displays an element's content at its original size ignoring the container size."
  },
  {
    label:"object-scale-down",
    detail:"object-fit: scale-down;",
    documentation:"Displays an element's content at its original size, but scaled down to fit its container if necessary."
  },
];

var objectPosition = [
  {
    label:"object-bottom",
    detail:"object-position: bottom;",
    documentation:"Positions an element's content to the bottom of its container."
  },
  {
    label:"object-center",
    detail:"object-position: center;",
    documentation:"Positions an element's content to the center of its container."
  },
  {
    label:"object-left",
    detail:"object-position: left",
    documentation:"Positions an element's content to the left of its container."
  },
  {
    label:"object-left-bottom",
    detail:"object-position: left bottom;",
    documentation:"Positions an element's content to the left bottom of its container."
  },
  {
    label:"object-left-top",
    detail:"object-position: left top;",
    documentation:"Positions an element's content to the left top of its container."
  },
  {
    label:"object-right",
    detail:"object-position: right;",
    documentation:"Positions an element's content to the right of its container."
  },
  {
    label:"object-right-bottom",
    detail:"object-position: right bottom;",
    documentation:"Positions an element's content to the right bottom of its container."
  },
  {
    label:"object-right-top",
    detail:"object-position: right top;",
    documentation:"Positions an element's content to the right top of its container."
  },
  {
    label:"object-top",
    detail:"object-position: top;",
    documentation:"Positions an element's content to the top of its container."
  }
];

var overflow = [
  {
    label:"overflow-auto",
    detail:"overflow: auto;",
    documentation:"Adds scrollbars to an element if its content overflows. Compare to overflow-scroll, which always shows scrollbars."
  },  
  {
    label:"overflow-hidden",
    detail:"overflow: hidden;",
    documentation:"Clips any content within an element that overflows its bounds."
  },  
  {
    label:"overflow-visible",
    detail:"overflow: visible;",
    documentation:"Prevents content within an element from being clipped."
  },  
  {
    label:"overflow-scroll",
    detail:"overflow: scroll;",
    documentation:"Always adds scrollbars to an element regardless if its content overflows."
  },
  {
    label:"overflow-x-auto",
    detail:"overflow-x: auto;",
    documentation:"Allows horizontal scrolling if needed."
  },
  {
    label:"overflow-y-auto",
    detail:"overflow-y: auto;",
    documentation:"Allows vertical scrolling if needed."
  },
  {
    label:"overflow-x-hidden",
    detail:"overflow-x: hidden;",
    documentation:"Clips any content with an element that overflows its bounds on the left or right."
  },
  {
    label:"overflow-y-hidden",
    detail:"overflow-y: hidden;",
    documentation:"Clips any content with an element that overflows its bounds on the top or bottom."
  },
  {
    label:"overflow-x-visible",
    detail:"overflow-x: visible;",
    documentation:"Prevents content within an element from being clipped on the left or right."
  },
  {
    label:"overflow-y-visible",
    detail:"overflow-y: visible;",
    documentation:"Prevents content within an element from being clipped on the top or bottom."
  },
  {
    label:"overflow-x-scroll",
    detail:"overflow-x: scroll;",
    documentation:"Always adds a horizontal scrollbar to an element regardless if its content overflows."
  },
  {
    label:"overflow-y-scroll",
    detail:"overflow-y: scroll;",
    documentation:"Always adds a vertical scrollbar to an element regardless if its content overflows."
  },
  {
    label:"scrolling-touch",
    detail:"-wekkit-overflow-scrolling: touch;",
    documentation:"Sets momentum-based scrolling on touch devices where supported."
  },
  {
    label:"scrolling-auto",
    detail:"-wekkit-overflow-scrolling: auto;",
    documentation:"Sets normal non-momentum-based scrolling on touch devices."
  },
];

var overscollBehavior = [
  {
    label:"",
    detail:"",
    documentation:""
  },
];

// {
//   label:"",
//   detail:"",
//   documentation:""
// },

var classes = [];

// Combines all sections of classes into classes array prior to
// exporting for autocompletion.
classes = classes.concat(
  breakpoints,
  container,
  boxSizing,
  display,
  floats,
  clear,
  objectFit,
  objectPosition,
  overflow,
  overscollBehavior
);

exports.classes = classes;