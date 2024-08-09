/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      body : ['Titillium Web']
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
      },
    },
    extend: {
      colors: {
        'yellow-python_1': '#fde047',
        'yellow-python_2': '#fbbf24',
        'blue-ocean_1': '#0083ca',
        'blue-ocean_2': '#005696',
        'green-grass_1': '#84cc16',
        'green-grass_2': '#65a30d',
        'red_1': '#ff453a',
        'red_2': '#e73827',
        'orange_1': '#ff9f0a',
        'orange_2': '#d6703f',
        'blue_1': '#0a84ff',
        'blue_2': '#0067b8',
        'sky-blue_1': '#00b4ff',
        'sky-blue_2': '#0082b2',
        'purple_1': '#bf5af2',
        'yellow_1': '#ffcc00',
        'yellow_2': '#ffab40',
        'sky-green_1': '#0ed145',
        'black_1': '#000000',
        'black_2': '#333333',
        'sky_purple_1': '#7f00ff',
        'sky_purple_2': '#5d008d',
        'clair_green_1': '#86efac',
        'clair_green_2': '#4ade80',
        'purple_blue_1': '#818cf8',
        'purple_blue_2': '#6366f1',
        'pink_1': '#d946ef',
        'pink_2': '#c026d3',
        'gray_1': '#8e8e93',
        'gray_2': '#57575a',
        'sky_blue_3' : '#4adaf0',
        'sky_blue_4' : '#0aabc4',
        'black_green_1': '#123634',
        'black_green_2': '#0b4d49',
        'blue_3' : '#0a3aa8',
        'blue_4' : '#041f5e',

      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}