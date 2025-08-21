module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c9a35e", // luxury-gold
          50: "#fdf8f0", // luxury-gold-50
          100: "#faf0d9", // luxury-gold-100
          200: "#f4e0b3", // luxury-gold-200
          300: "#edc982", // luxury-gold-300
          400: "#e4b55f", // luxury-gold-400
          500: "#c9a35e", // luxury-gold-500
          600: "#b8924f", // luxury-gold-600
          700: "#9a7a42", // luxury-gold-700
          800: "#7d6235", // luxury-gold-800
          900: "#654f2c", // luxury-gold-900
        },
        secondary: {
          DEFAULT: "#2d2d2d", // dark-gray
          50: "#f8f8f8", // dark-gray-50
          100: "#e8e8e8", // dark-gray-100
          200: "#d1d1d1", // dark-gray-200
          300: "#b4b4b4", // dark-gray-300
          400: "#888888", // dark-gray-400
          500: "#6d6d6d", // dark-gray-500
          600: "#5d5d5d", // dark-gray-600
          700: "#4f4f4f", // dark-gray-700
          800: "#454545", // dark-gray-800
          900: "#2d2d2d", // dark-gray-900
        },
        accent: {
          DEFAULT: "#f4d03f", // bright-gold
          50: "#fefcf0", // bright-gold-50
          100: "#fef7d3", // bright-gold-100
          200: "#fdeea6", // bright-gold-200
          300: "#fbe174", // bright-gold-300
          400: "#f8d549", // bright-gold-400
          500: "#f4d03f", // bright-gold-500
          600: "#e6c139", // bright-gold-600
          700: "#d4b032", // bright-gold-700
          800: "#c19f2b", // bright-gold-800
          900: "#a08424", // bright-gold-900
        },
        background: "#0a0a0a", // gallery-black
        surface: "#1a1a1a", // card-black
        text: {
          primary: "#f3f4f6", // gray-100
          secondary: "#a1a1aa", // gray-400
        },
        success: "#10b981", // emerald-500
        warning: "#f59e0b", // amber-500
        error: "#ef4444", // red-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'luxury': '0 10px 25px rgba(201, 163, 94, 0.15)',
        'luxury-lg': '0 20px 40px rgba(201, 163, 94, 0.2)',
        'luxury-xl': '0 25px 50px rgba(201, 163, 94, 0.25)',
      },
      borderColor: {
        'luxury': 'rgba(201, 163, 94, 0.2)',
        'luxury-light': 'rgba(201, 163, 94, 0.1)',
        'luxury-strong': 'rgba(201, 163, 94, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        'luxury': '250ms',
      },
      transitionTimingFunction: {
        'luxury': 'ease-in-out',
      },
    },
  },
  plugins: [],
}