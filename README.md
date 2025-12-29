# Celestian Wallet

A modern, secure cryptocurrency wallet website built with Next.js 16.

## Features

- 🌙 Dark crypto-themed design
- 🔒 Secure wallet management interface
- 💱 Crypto exchange functionality
- 📱 Responsive design for all devices
- ⚡ Fast performance with Next.js 16 + Turbopack
- 🎨 Tailwind CSS for styling

## Pages

- **Home** (`/`) - Landing page with hero section and features
- **Web Wallet** (`/web-wallet`) - Online crypto wallet information
- **Exchange** (`/exchange`) - Cryptocurrency exchange platform
- **About** (`/about`) - Company information and milestones
- **Login** (`/login`) - User login page
- **Register** (`/register`) - User registration page

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Start Production Server

\`\`\`bash
npm start
\`\`\`

## Deploy to Vercel

The easiest way to deploy this app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Customization

### Changing the Brand Name

The brand name "Celestian" is stored as a variable for easy modification. Edit `/config/brand.js`:

\`\`\`javascript
export const BRAND_NAME = 'YourBrandName';
\`\`\`

This will automatically update the brand name throughout the entire website.

### Adding Images

Image placeholders are numbered from 1 to 23 throughout the site. Replace them by:

1. Locate the `ImagePlaceholder` component usage
2. Note the number (e.g., number={1})
3. Replace with an actual `<Image>` component or update the ImagePlaceholder component

## Image Placeholder Reference

- **Image 1**: Hero Image (Home)
- **Image 2**: Visa Card Showcase (Home)
- **Image 3**: Store Crypto Icon (Home)
- **Image 4**: Exchange Crypto Icon (Home)
- **Image 5**: Multi Wallet Dashboard (Home)
- **Image 6**: Features Showcase (Home)
- **Image 7**: Web Wallet Hero (Web Wallet)
- **Images 8-11**: Payment methods (Web Wallet)
- **Image 12**: Security Features (Web Wallet)
- **Image 13**: Exchange Hero (Exchange)
- **Images 14-17**: Exchange Features (Exchange)
- **Image 18**: Mission Vision (About)
- **Images 19-23**: Milestones (About)

## Features Implementation

### Login Page
- Always shows "Incorrect login or password" error message
- Form validation for email and password fields

### Registration Page
- Full form validation:
  - Username (min 3 chars, alphanumeric + underscore)
  - Email (valid email format)
  - Password (min 8 chars, uppercase, lowercase, numbers)
  - Password confirmation matching
- 3-second loading animation
- Shows region restriction message: "Registration in Celestian Wallet is prohibited in your region"

## Color Scheme (Dark Crypto Theme)

- **Primary**: #00D4FF (Cyan)
- **Primary Dark**: #00A3CC
- **Background**: #0A0E27 (Dark Navy)
- **Card Background**: #131836
- **Border**: #1E2341

## License

This project is private and proprietary.
# celestianvault
# celestianvault
