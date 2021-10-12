//const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontFamily: {
                poppins: "'Poppins', sans-serif",
                roboto: "'Roboto', sans-serif",
            },
            colors: {
                'primary': '#FD3D57'
            },
            backgroundImage: {
                'hero-sofa': "url('/src/assets/images/hero-sofa4.jpg')",
            }
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
            visibility: ['group-hover'],
            animation: ['hover', 'focus'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
