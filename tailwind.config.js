/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui:{
    theme:[
    {
      doctortheme:{
        accent:"#37CDBE",     
         neutral: "#3D4451",
         base: "#FFFFFF",
         info: "#3ABFF8",
      }
    }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}
