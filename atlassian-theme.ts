/**
 * Atlassian Design System Theme for A2UI
 * Based on https://atlassian.design
 *
 * Color Palette:
 * - Primary (B400): #0052CC
 * - Text (N800): #172B4D
 * - Background (N0): #FFFFFF
 * - Danger (R300): #C9372C
 * - Success (G300): #36B37E
 * - Warning (Y300): #FFAB00
 *
 * Typography: Atlassian Sans (fallback: system fonts)
 * Spacing: 8px base unit
 * Border Radius: 3px (small), 6px (medium)
 */

import { v0_8 } from "@a2ui/lit";

// =============================================================================
// CSS Custom Properties (Design Tokens)
// =============================================================================
// Add these to your root CSS or Surface component:
//
// :root {
//   /* Primary - Atlassian Blue */
//   --p-50: #0052CC;
//   --p-40: #0747A6;
//   --p-30: #003884;
//   --p-60: #1868DB;
//   --p-70: #4C9AFF;
//   --p-80: #B3D4FF;
//   --p-90: #DEEBFF;
//   --p-100: #FFFFFF;
//
//   /* Neutral - Squid Ink scale */
//   --n-0: #172B4D;
//   --n-10: #253858;
//   --n-20: #344563;
//   --n-30: #42526E;
//   --n-40: #505F79;
//   --n-50: #5E6C84;
//   --n-60: #6B778C;
//   --n-70: #7A869A;
//   --n-80: #97A0AF;
//   --n-90: #DFE1E6;
//   --n-95: #EBECF0;
//   --n-98: #F4F5F7;
//   --n-100: #FFFFFF;
//
//   /* Error/Danger */
//   --e-50: #C9372C;
//   --e-40: #AE2E24;
//   --e-60: #FF5630;
//
//   /* Typography */
//   --font-family: "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif;
//   --font-family-mono: "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace;
// }

// =============================================================================
// Element Styles
// =============================================================================

/** Link styling */
const a = {
  "typography-f-sf": true,
  "typography-fs-n": true,
  "typography-w-500": true,
  "layout-as-n": true,
  "layout-dis-iflx": true,
  "layout-al-c": true,
  "color-c-p50": true, // Atlassian blue for links
};

const audio = {
  "layout-w-100": true,
};

/** Body text - N800 Squid Ink */
const body = {
  "typography-f-sf": true,
  "typography-fs-n": true,
  "typography-w-400": true,
  "layout-mt-0": true,
  "layout-mb-2": true,
  "typography-sz-bm": true, // 14px body
  "color-c-n10": true,
};

/** Button - Atlassian primary button style */
const button = {
  "typography-f-sf": true,
  "typography-fs-n": true,
  "typography-w-500": true, // Medium weight
  "layout-pt-2": true, // 8px vertical padding
  "layout-pb-2": true,
  "layout-pl-3": true, // 12px horizontal padding
  "layout-pr-3": true,
  "layout-mb-1": true,
  "border-br-1": true, // 3px border radius (small)
  "border-bw-0": true,
  "border-bs-s": true,
  "color-bgc-p50": true, // B400 blue background
  "color-c-n100": true, // White text
  "behavior-ho-90": true, // Hover opacity
};

/** Headings - Semi-bold (weight 600/653) */
const heading = {
  "typography-f-sf": true,
  "typography-fs-n": true,
  "typography-w-600": true, // Atlassian uses 653, closest is 600
  "layout-mt-0": true,
  "layout-mb-2": true,
  "color-c-n0": true, // N800 Squid Ink
};

const h1 = {
  ...heading,
  "typography-sz-hl": true, // 2rem / 32px
};

const h2 = {
  ...heading,
  "typography-sz-hm": true, // 1.75rem / 28px
};

const h3 = {
  ...heading,
  "typography-sz-tl": true, // 1.5rem / 24px
};

const h4 = {
  ...heading,
  "typography-sz-tm": true, // 1.25rem / 20px
};

const h5 = {
  ...heading,
  "typography-sz-ts": true, // 1rem / 16px
};

const iframe = {
  "behavior-sw-n": true,
};

/** Input - Atlassian form field style */
const input = {
  "typography-f-sf": true,
  "typography-fs-n": true,
  "typography-w-400": true,
  "layout-pl-2": true, // 8px padding
  "layout-pr-2": true,
  "layout-pt-2": true,
  "layout-pb-2": true,
  "border-br-1": true, // 3px border radius
  "border-bw-1": true,
  "color-bc-n80": true, // N40 border
  "border-bs-s": true,
  "layout-as-n": true,
  "color-c-n10": true, // N800 text
  "color-bgc-n100": true, // White background
};

/** Paragraph text */
const p = {
  "typography-f-sf": true,
  "typography-fs-n": true,
  "typography-w-400": true,
  "layout-m-0": true,
  "typography-sz-bm": true, // 14px
  "layout-as-n": true,
  "color-c-n30": true, // N600 for body text
};

const orderedList = {
  "typography-f-sf": true,
  "typography-fs-n": true,
  "typography-w-400": true,
  "layout-m-0": true,
  "typography-sz-bm": true,
  "layout-as-n": true,
  "color-c-n30": true,
};

const unorderedList = {
  ...orderedList,
};

const listItem = {
  ...orderedList,
};

/** Code/preformatted text */
const pre = {
  "typography-f-c": true, // Monospace font
  "typography-fs-n": true,
  "typography-w-400": true,
  "typography-sz-bm": true,
  "typography-ws-p": true,
  "layout-as-n": true,
  "color-c-n30": true,
};

const textarea = {
  ...input,
  "layout-r-none": true,
  "layout-fs-c": true,
};

const video = {
  "layout-el-cv": true,
};

// =============================================================================
// Theme Export
// =============================================================================

export const atlassianTheme: v0_8.Types.Theme = {
  // Additional CSS properties for fine-tuning (camelCase for styleMap)
  additionalStyles: {
    Card: {
      minWidth: "280px",
      boxShadow: "0 1px 1px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31)",
    },
    Button: {
      fontFamily: "inherit",
      cursor: "pointer",
      transition: "background-color 0.2s ease-in-out",
      color: "#FFFFFF",
    },
    TextField: {
      height: "36px",
      boxSizing: "border-box",
    },
    Image: {
      maxWidth: "100%",
      height: "auto",
    },
    MultipleChoice: {
      // Match TextField height
      height: "36px",
      boxSizing: "border-box",
    },
    DateTimeInput: {
      // Match TextField height
      height: "36px",
      boxSizing: "border-box",
    },
    CheckBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      gap: "8px",
      maxWidth: "100%",
    },
  },

  // Component-level styling
  components: {
    AudioPlayer: {},

    Button: {
      "typography-f-sf": true,
      "typography-w-500": true,
      "layout-pt-2": true,
      "layout-pb-2": true,
      "layout-pl-4": true,
      "layout-pr-4": true,
      "border-br-1": true, // 3px radius
      "border-bw-0": true,
      "border-bs-s": true,
      "color-bgc-p50": true, // Atlassian Blue
      "color-c-p100": true, // White text (using p-100 which is #FFFFFF)
      "behavior-ho-85": true,
    },

    Card: {
      "border-br-1": true, // 3px radius
      "color-bgc-n100": true, // White background
      "color-bc-n90": true, // Light gray border
      "border-bw-1": true,
      "border-bs-s": true,
      "layout-pt-4": true, // 16px padding
      "layout-pb-4": true,
      "layout-pl-4": true,
      "layout-pr-4": true,
    },

    CheckBox: {
      element: {
        "layout-m-0": true,
        "layout-mr-2": true,
        "layout-p-0": true,
        "border-br-1": true,
        "border-bw-2": true,
        "border-bs-s": true,
        "color-bgc-n100": true,
        "color-bc-n70": true,
        "color-c-p50": true, // Blue check
        "layout-fs-0": true, // Don't shrink checkbox
      },
      label: {
        "color-c-n10": true,
        "typography-f-sf": true,
        "typography-w-400": true,
        "layout-flx-1": true,
        "typography-sz-bm": true, // 14px
        "typography-ta-l": true, // Align text to left
      },
      container: {
        "layout-dsp-flexhor": true, // Horizontal flex - checkbox and label in same row
        "layout-al-c": true, // Center align vertically
        "layout-g-1": true, // Small gap between checkbox and label
        "layout-w-100": true,
        "layout-fw-w": true, // Allow wrapping for long labels
      },
    },

    Column: {
      "layout-g-2": true, // 8px gap
    },

    DateTimeInput: {
      container: {
        "layout-dsp-flexvert": true,
        "layout-g-1": true,
        "layout-w-100": true,
      },
      label: {
        "typography-f-sf": true,
        "typography-w-600": true,
        "typography-sz-bs": true, // 12px label - matches TextField
        "color-c-n30": true,
        "layout-mb-1": true, // Match TextField label spacing
      },
      element: {
        "typography-sz-bm": true,
        "layout-pt-2": true,
        "layout-pb-2": true,
        "layout-pl-2": true,
        "layout-pr-2": true,
        "border-br-1": true,
        "border-bw-2": true,
        "border-bs-s": true,
        "color-bgc-n100": true,
        "color-bc-n80": true,
        "color-c-n10": true,
        "layout-w-100": true,
      },
    },

    Divider: {
      "color-bgc-n90": true, // N20 divider color
      "layout-mt-4": true, // 16px margin
      "layout-mb-4": true,
    },

    Image: {
      all: {
        "border-br-1": true,
        "layout-el-cv": true,
        "layout-w-100": true,
        "layout-dsp-flexhor": true,
        "layout-al-c": true,
        "layout-sp-c": true,
      },
      avatar: {
        "border-br-50pc": true, // Circular avatars
      },
      header: {},
      icon: {},
      largeFeature: {},
      mediumFeature: {},
      smallFeature: {},
    },

    Icon: {
      "border-br-1": true,
      "layout-p-2": true,
      "color-bgc-n98": true, // Very light gray background
      "layout-dsp-flexhor": true,
      "layout-al-c": true,
      "layout-sp-c": true,
      "color-c-n30": true, // N600 icon color
    },

    List: {
      "layout-g-2": true, // 8px gap
      "layout-p-0": true,
    },

    Modal: {
      backdrop: {
        "color-bbgc-n0_50": true, // Dark overlay
      },
      element: {
        "border-br-1": true, // 3px radius
        "color-bgc-n100": true, // White background
        "layout-p-6": true, // 24px padding
        "border-bw-0": true,
      },
    },

    MultipleChoice: {
      container: {
        "layout-dsp-flexvert": true,
        "layout-g-1": true,
        "layout-w-100": true,
      },
      label: {
        "typography-f-sf": true,
        "typography-w-600": true,
        "typography-sz-bs": true, // 12px label to match TextField
        "color-c-n30": true,
        "layout-mb-1": true,
      },
      element: {
        // Match TextField element styling
        "typography-sz-bm": true,
        "layout-pt-2": true,
        "layout-pb-2": true,
        "layout-pl-2": true,
        "layout-pr-2": true,
        "border-br-1": true, // 3px radius
        "border-bw-2": true,
        "border-bs-s": true,
        "color-bgc-n100": true,
        "color-bc-n80": true,
        "color-c-n10": true,
        "layout-w-100": true,
      },
    },

    Row: {
      "layout-g-2": true, // 8px gap (Atlassian space.100)
      "layout-mb-2": true,
      "layout-al-fs": true, // Align items at flex-start (top) for horizontal alignment
    },

    Slider: {
      container: {
        "layout-dsp-flexvert": true,
        "layout-g-1": true,
      },
      label: {
        "typography-f-sf": true,
        "typography-w-600": true,
        "typography-sz-bs": true,
        "color-c-n30": true,
      },
      element: {},
    },

    Tabs: {
      container: {
        "border-bbw-1": true,
        "color-bc-n90": true,
      },
      controls: {
        all: {
          "typography-f-sf": true,
          "typography-w-500": true,
          "layout-pt-2": true,
          "layout-pb-2": true,
          "layout-pl-4": true,
          "layout-pr-4": true,
          "color-c-n40": true,
        },
        selected: {
          "color-c-p50": true, // Blue for selected
          "border-bbw-2": true,
          "color-bc-p50": true,
        },
      },
      element: {
        "layout-pt-4": true,
      },
    },

    Text: {
      all: {
        "layout-w-100": true,
        "layout-g-2": true,
        // Note: color-c-n10 removed from "all" to allow button text to inherit white color
      },
      h1: {
        "typography-f-sf": true,
        "typography-v-r": true,
        "typography-w-600": true,
        "layout-mt-0": true,
        "layout-mb-4": true,
        "layout-p-0": true,
        "typography-sz-hl": true, // 32px
        "color-c-n0": true,
      },
      h2: {
        "typography-f-sf": true,
        "typography-v-r": true,
        "typography-w-600": true,
        "layout-mt-0": true,
        "layout-mb-3": true,
        "layout-p-0": true,
        "typography-sz-hm": true, // 28px
        "color-c-n0": true,
      },
      h3: {
        "typography-f-sf": true,
        "typography-v-r": true,
        "typography-w-600": true,
        "layout-mt-0": true,
        "layout-mb-2": true,
        "layout-p-0": true,
        "typography-sz-tl": true, // 24px
        "color-c-n0": true,
      },
      h4: {
        "typography-f-sf": true,
        "typography-v-r": true,
        "typography-w-600": true,
        "layout-mt-0": true,
        "layout-mb-2": true,
        "layout-p-0": true,
        "typography-sz-tm": true, // 20px
        "color-c-n0": true,
      },
      h5: {
        "typography-f-sf": true,
        "typography-v-r": true,
        "typography-w-600": true,
        "layout-mt-0": true,
        "layout-mb-1": true,
        "layout-p-0": true,
        "typography-sz-ts": true, // 16px
        "color-c-n0": true,
      },
      body: {
        "typography-f-sf": true,
        "typography-w-400": true,
        "typography-sz-bm": true, // 14px
        "color-c-n30": true,
      },
      caption: {
        "typography-f-sf": true,
        "typography-w-400": true,
        "typography-sz-bs": true, // 12px
        "color-c-n50": true, // Lighter gray for captions
      },
    },

    TextField: {
      container: {
        "typography-sz-bm": true,
        "layout-w-100": true,
        "layout-g-1": true,
        "layout-dsp-flexvert": true,
      },
      label: {
        "typography-f-sf": true,
        "typography-w-600": true,
        "typography-sz-bs": true, // 12px label
        "color-c-n30": true,
        "layout-mb-1": true,
      },
      element: {
        "typography-sz-bm": true,
        "layout-pt-2": true,
        "layout-pb-2": true,
        "layout-pl-2": true,
        "layout-pr-2": true,
        "border-br-1": true, // 3px radius
        "border-bw-2": true,
        "border-bs-s": true,
        "color-bgc-n100": true,
        "color-bc-n80": true,
        "color-c-n10": true,
      },
    },

    Video: {
      "border-br-1": true,
      "layout-el-cv": true,
    },
  },

  // HTML element defaults
  elements: {
    a,
    audio,
    body,
    button,
    h1,
    h2,
    h3,
    h4,
    h5,
    iframe,
    input,
    p,
    pre,
    textarea,
    video,
  },

  // Markdown rendering styles
  markdown: {
    p: Object.keys(p),
    h1: Object.keys(h1),
    h2: Object.keys(h2),
    h3: Object.keys(h3),
    h4: Object.keys(h4),
    h5: Object.keys(h5),
    ul: Object.keys(unorderedList),
    ol: Object.keys(orderedList),
    li: Object.keys(listItem),
    a: Object.keys(a),
    strong: ["typography-w-600"],
    em: ["typography-fs-i"],
  },
};

// =============================================================================
// CSS Variables to inject at root level
// =============================================================================

export const atlassianCSSVariables = `
:root {
  /* Primary - Atlassian Blue (B400) */
  --p-100: #FFFFFF;
  --p-99: #F6F9FF;
  --p-98: #DEEBFF;
  --p-95: #B3D4FF;
  --p-90: #B3D4FF;
  --p-80: #4C9AFF;
  --p-70: #2684FF;
  --p-60: #1868DB;
  --p-50: #0052CC;
  --p-40: #0747A6;
  --p-35: #003884;
  --p-30: #003884;
  --p-25: #002966;
  --p-20: #002966;
  --p-15: #001A4D;
  --p-10: #001A4D;
  --p-5: #000D33;
  --p-0: #000000;

  /* Neutral - N800 Squid Ink scale */
  --n-100: #FFFFFF;
  --n-99: #FAFBFC;
  --n-98: #F4F5F7;
  --n-95: #EBECF0;
  --n-90: #DFE1E6;
  --n-80: #C1C7D0;
  --n-70: #A5ADBA;
  --n-60: #8993A4;
  --n-50: #7A869A;
  --n-40: #6B778C;
  --n-35: #5E6C84;
  --n-30: #505F79;
  --n-25: #42526E;
  --n-20: #344563;
  --n-15: #253858;
  --n-10: #172B4D;
  --n-5: #091E42;
  --n-0: #091E42;

  /* Error/Danger */
  --e-100: #FFFFFF;
  --e-90: #FFEBE6;
  --e-80: #FFBDAD;
  --e-70: #FF8F73;
  --e-60: #FF5630;
  --e-50: #C9372C;
  --e-40: #AE2E24;
  --e-30: #8C1F13;
  --e-20: #601E16;
  --e-10: #3D1309;
  --e-0: #000000;

  /* Secondary - Teal/Green for success */
  --s-100: #FFFFFF;
  --s-90: #E3FCEF;
  --s-80: #ABF5D1;
  --s-70: #79F2C0;
  --s-60: #57D9A3;
  --s-50: #36B37E;
  --s-40: #00875A;
  --s-30: #006644;
  --s-20: #064;
  --s-10: #004D33;
  --s-0: #000000;

  /* Tertiary - Warning/Yellow */
  --t-100: #FFFFFF;
  --t-90: #FFFAE6;
  --t-80: #FFF0B3;
  --t-70: #FFE380;
  --t-60: #FFC400;
  --t-50: #FFAB00;
  --t-40: #FF991F;
  --t-30: #FF8B00;
  --t-20: #B2500F;
  --t-10: #663000;
  --t-0: #000000;

  /* Typography */
  --font-family: "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif;
  --font-family-flex: "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif;
  --font-family-mono: "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace;

  /* Spacing base unit (Atlassian uses 8px) */
  --g-1: 4px;
  --g-2: 8px;
  --g-3: 12px;
  --g-4: 16px;
  --g-5: 20px;
  --g-6: 24px;
  --g-8: 32px;
  --g-10: 40px;
}
`;

export default atlassianTheme;
