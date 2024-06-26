/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tesla-background': "url('/tesla_image.jpg')",
        'self-background': "url('/image_1.jpg')",
        'garage-background': "url('/image_2.jpg')",
        'forest-background': "url('/image_3.jpg')",
        'grass-background' : "url('/image_5.jpg')",
        'dirt-background': "url('/image_4.jpg')",
        'future-background': "url('/image_6.jpg')",


        spacing: {
          '50' : '50px',
          '150': '150px',

          color: {
            'custom-gray' : '#171A20',
          }
          
        }
      },
    },
  },
  plugins: [],
}

