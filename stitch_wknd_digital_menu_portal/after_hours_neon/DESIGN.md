---
name: After Hours Neon
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cbc4cf'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#958e98'
  outline-variant: '#4a454e'
  surface-tint: '#d4bdf2'
  primary: '#d4bdf2'
  on-primary: '#392853'
  primary-container: '#1c0a35'
  on-primary-container: '#8a76a7'
  inverse-primary: '#695684'
  secondary: '#ffffff'
  on-secondary: '#373100'
  secondary-container: '#fde400'
  on-secondary-container: '#716500'
  tertiary: '#d3bbff'
  on-tertiary: '#3b1f6d'
  tertiary-container: '#1d0048'
  on-tertiary-container: '#8c70c2'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eddcff'
  primary-fixed-dim: '#d4bdf2'
  on-primary-fixed: '#23123c'
  on-primary-fixed-variant: '#503e6b'
  secondary-fixed: '#fde400'
  secondary-fixed-dim: '#dec800'
  on-secondary-fixed: '#201c00'
  on-secondary-fixed-variant: '#504700'
  tertiary-fixed: '#ebddff'
  tertiary-fixed-dim: '#d3bbff'
  on-tertiary-fixed: '#250158'
  on-tertiary-fixed-variant: '#523785'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  section-gap: 64px
---

## Brand & Style

The design system is engineered for a high-energy, late-night culinary experience. It targets a Gen-Z and collegiate demographic that thrives in "after-hours" environments. The aesthetic balances **Corporate Modern** structure with **Vaporwave-influenced High-Contrast** accents.

The emotional response is one of nocturnal excitement and trendy exclusivity. The UI utilizes deep, immersive backgrounds to mimic a dimly lit lounge, while aggressive neon accents guide the user's attention to primary actions. Visuals should feel "electric" yet premium, avoiding clutter in favor of clean, large-scale typography and spacious, translucent components.

## Colors

The palette is anchored by **Deep Royal Purple**, used as the primary canvas to establish the late-night atmosphere. **Electric Neon Yellow** serves as the sole high-contrast accent, reserved strictly for primary calls-to-action, pricing, and critical status indicators.

- **Backgrounds**: Use `#1C0A35` for the base layer and `#2A085C` for subtle structural gradients.
- **Surfaces**: Components use `#261342` with 85-90% opacity to create a "tinted glass" effect.
- **Accents**: `#FFE600` is the "Electric" highlight. Use it for buttons, icons, and active states.
- **Typography**: Pure white (`#FFFFFF`) for maximum legibility against dark backgrounds, with reduced opacity (70%) for secondary metadata.

## Typography

Typography in this design system prioritizes impact and clarity. **Montserrat** provides a heavy, geometric foundation for branding and headings, echoing urban signage. **Work Sans** is used for body copy to ensure high readability on mobile devices under low-light conditions.

**JetBrains Mono** is introduced as a utility font for labels, timestamps, and "order numbers," leaning into the "technical/modern" aspect of the brand's collegiate, tech-savvy audience. Headings should utilize tight letter-spacing to feel more cohesive and "poster-like."

## Layout & Spacing

This design system uses a **Fluid Grid** model with a heavy emphasis on vertical rhythm. 

- **Desktop**: 12-column grid with 24px gutters.
- **Mobile**: 4-column grid with 16px margins.
- **Rhythm**: All spacing (padding, margins) must be multiples of the 8px base unit. 

Large-scale imagery of food should often break the grid (full-bleed) to create a more immersive, editorial feel. Use generous white space (or "purple space") between sections to prevent the high-contrast yellow from feeling overwhelming.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Glassmorphism**, rather than traditional drop shadows.

1.  **Base Level**: Deep Purple `#1C0A35`.
2.  **Surface Level**: Translucent Purple `#261342` at 85% opacity with a `16px` backdrop blur. 
3.  **Borders**: Elements on the surface level should feature a `1px` solid border using `#FFFFFF` at 10% opacity to define edges against the dark background.
4.  **Neon Glow**: Primary buttons and "Featured" cards utilize an external glow (drop-shadow) using the primary accent color `#FFE600` with a 20px spread and 25% opacity to simulate neon light reflecting off a surface.

## Shapes

The shape language is **Rounded**, striking a balance between friendly hospitality and modern precision. 

- Standard containers and cards use `0.5rem` (8px).
- Interactive elements like buttons and input fields use `1rem` (16px) to encourage touch interaction.
- Icons are encased in circular or pill-shaped containers when used as standalone buttons.

## Components

### Buttons
- **Primary**: Solid `#FFE600` background with black text. High-gloss finish or subtle outer glow.
- **Secondary**: Outlined with `#FFE600` and 10% white fill. White text.

### Cards (Menu Items)
Cards utilize the glassmorphism style. Imagery should be top-aligned with no padding, while text content sits on the translucent purple base. Prices are highlighted in `#FFE600` using the `label-caps` typography style.

### Inputs
Search bars and text fields use a darker version of the surface color (`#120624`) with a focus state that changes the border to `#FFE600`.

### Chips (Dietary Tags)
Small, pill-shaped tags with `#FFFFFF10` backgrounds and `label-caps` text. Active filters use a solid `#FFE600` background with black text.

### Navigation
A fixed bottom navigation bar on mobile, using a heavy backdrop blur and `#261342` background. Active states are indicated by a top-border glow in Neon Yellow.