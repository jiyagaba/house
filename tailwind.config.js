// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         Nunito: "Nunito Sans",
//         Sans: "sans-serif",
//         Helvetica: "Helvetica",
//         Arial: "Arial",
//         Aclonica: ["Aclonica", "Sans-serif"],
//       },
//       backgroundColor: ["hover"],
//       fontWeight: {
//         400: "400",
//         700: "700",
//       },
//       colors: {
//         "custom-blue": "#000040",
//         bg: "transparent",
//         "linear-gradient": "(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
//         "new-blue": "#0003C5",
//       },
//       screens: {
//         sm: "640px",
//         // => @media (min-width: 640px) { ... }

//         md: "768px",
//         // => @media (min-width: 768px) { ... }

//         lg: "1024px",
//         // => @media (min-width: 1024px) { ... }

//         xl: "1280px",
//         // => @media (min-width: 1280px) { ... }

//         "2xl": "1536px",
//         // => @media (min-width: 1536px) { ... }

//         md: "800px",
//         // 'sme': '360px'
//         // 'sm-360': '360px',

//         // ipad: "800px", // Custom 'ipad' breakpoint
// //         'md': {'raw':'only screen and (max-device-width : 800px)', 'value':'800
//       },
//     },
//   },
//   plugins: [],
// };

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: "Nunito Sans",
        Sans: "sans-serif",
        Helvetica: "Helvetica",
        Arial: "Arial",
        Aclonica: ["Aclonica", "Sans-serif"],
      },
      backgroundColor: ["hover"],
      fontWeight: {
        400: "400",
        700: "700",
      },
      colors: {
        "custom-blue": "#000040",
        "purple": "#060C1F",
        "taiwo" : "#484848",
        bg: "transparent",
        "linear-gradient": "(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
        "new-blue": "#0003C5",
        "footer" : "#0E002B"
      },
      //       screens: {
      //         sm: "640px",
      //         // => @media (min-width: 640px) { ... }

      //         md: "768px",
      //         // => @media (min-width: 768px) { ... }

      //         lg: "1024px",
      //         // => @media (min-width: 1024px) { ... }

      //         xl: "1280px",
      //         // => @media (min-width: 1280px) { ... }

      //         "2xl": "1536px",
      //         // => @media (min-width: 1536px) { ... }

      //         md: "800px",
      //         // 'sme': '360px'
      //         // 'sm-360': '360px',

      //         // ipad: "800px", // Custom 'ipad' breakpoint
      // //         'md': {'raw':'only screen and (max-device-width : 800px)', 'value':'800
      //       },
    },
  },
  plugins: [],
});
