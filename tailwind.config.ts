import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        cosmic: {
          'navy': '#0F1729',
          'purple': '#B96BF3',
          'deep-purple': '#8B31E3',
          'blue': '#5CE1E6',
          'light-purple': '#E2D1FF',
          'hero-red': '#FF4D6A',
          'hero-blue': '#5CE1E6',
          'hero-yellow': '#FFD93D',
        },
      },
      fontFamily: {
        'comic': ['"Bangers"', 'cursive'],
        'sans': ['"Space Grotesk"', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-star': {
          '0%': { opacity: '0.4', transform: 'scale(0.95)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '0.4', transform: 'scale(0.95)' },
        },
        'comic-zoom': {
          '0%': { transform: 'scale(0.97)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'shooting-star': {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateX(300px) translateY(-300px)', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-star': 'pulse-star 3s ease-in-out infinite',
        'comic-zoom': 'comic-zoom 0.3s ease-out',
        'shooting-star': 'shooting-star 3s ease-out forwards',
      },
      backgroundImage: {
        'starry-night': "linear-gradient(to bottom, #0F1729, #1A1F2C)",
        'comic-pattern': "url('/comic-pattern.png')",
        'hero-gradient': "linear-gradient(135deg, rgba(185, 107, 243, 0.15) 0%, rgba(92, 225, 230, 0.15) 100%)",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
