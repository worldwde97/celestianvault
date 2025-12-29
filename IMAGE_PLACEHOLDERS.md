# Image Placeholders Reference

All image placeholders are numbered from 1 to 23. Replace them with your actual images by locating the `ImagePlaceholder` component in each file.

## Home Page (/)

### Hero Section
- **Image 1**: Hero Image - Main landing page hero image showing wallet interface or crypto concept
  - Location: `app/page.js`
  - Recommended size: 800x600px
  - Description: Eye-catching visual for the main hero section

### Pay With Crypto Section
- **Image 2**: Visa Card Showcase - Visual of crypto-powered Visa card
  - Location: `app/page.js`
  - Recommended size: 1000x400px
  - Description: Showcase image for crypto Visa card feature

### Store & Exchange Cards
- **Image 3**: Store Crypto Icon - Icon representing crypto storage
  - Location: `app/page.js`
  - Recommended size: 128x128px
  - Description: Icon for "Store Crypto" card

- **Image 4**: Exchange Crypto Icon - Icon representing crypto exchange
  - Location: `app/page.js`
  - Recommended size: 128x128px
  - Description: Icon for "Exchange Crypto" card

### All Assets Section
- **Image 5**: Multi Wallet Dashboard - Screenshot of wallet interface with multiple coins
  - Location: `app/page.js`
  - Recommended size: 800x600px
  - Description: Dashboard showing multi-currency wallet interface

### Smart Way Section
- **Image 6**: Features Showcase - Overall features visualization
  - Location: `app/page.js`
  - Recommended size: 1200x600px
  - Description: Comprehensive features showcase image

---

## Web Wallet Page (/web-wallet)

### Hero Section
- **Image 7**: Web Wallet Hero - Web wallet interface or browser-based wallet concept
  - Location: `app/web-wallet/page.js`
  - Recommended size: 800x600px
  - Description: Hero image for web wallet page

### Cryptocurrency Support
- **Image 8**: Supported Coins - Grid or collection of supported cryptocurrency logos
  - Location: `app/web-wallet/page.js`
  - Recommended size: 600x200px
  - Description: Visual showing 10+ supported assets

### Payment Methods
- **Image 9**: Visa Logo - Visa payment method logo
  - Location: `app/web-wallet/page.js`
  - Recommended size: 100x60px
  - Description: Visa card logo

- **Image 10**: Mastercard Logo - Mastercard payment method logo
  - Location: `app/web-wallet/page.js`
  - Recommended size: 100x60px
  - Description: Mastercard logo

- **Image 11**: SEPA Logo - SEPA transfer logo
  - Location: `app/web-wallet/page.js`
  - Recommended size: 100x60px
  - Description: SEPA payment system logo

### Security Section
- **Image 12**: Security Features - Illustration of security features (locks, shields, encryption)
  - Location: `app/web-wallet/page.js`
  - Recommended size: 800x600px
  - Description: Visual representation of wallet security features

---

## Exchange Page (/exchange)

### Hero Section
- **Image 13**: Exchange Hero Image - Crypto exchange interface or trading concept
  - Location: `app/exchange/page.js`
  - Recommended size: 800x600px
  - Description: Hero image for exchange page

### Trust Section
- **Image 14**: Security Shield - Trust and security visualization
  - Location: `app/exchange/page.js`
  - Recommended size: 800x600px
  - Description: Trust and security badge or shield

### Features Icons
- **Image 15**: Instant Exchange Icon
  - Location: `app/exchange/page.js`
  - Recommended size: 128x128px
  - Description: Icon representing instant exchange feature

- **Image 16**: Best Rates Icon
  - Location: `app/exchange/page.js`
  - Recommended size: 128x128px
  - Description: Icon representing competitive rates

- **Image 17**: No KYC Icon
  - Location: `app/exchange/page.js`
  - Recommended size: 128x128px
  - Description: Icon showing no KYC requirement

---

## About Page (/about)

### Mission Section
- **Image 18**: Mission Vision - Company mission and vision illustration
  - Location: `app/about/page.js`
  - Recommended size: 800x600px
  - Description: Visual representing company mission and values

### Milestones (5 images)
- **Image 19**: Milestone 01 Icon - Single currency wallets
  - Location: `app/about/page.js`
  - Recommended size: 128x128px
  - Description: Icon for first milestone

- **Image 20**: Milestone 02 Icon - Additional security layers
  - Location: `app/about/page.js`
  - Recommended size: 128x128px
  - Description: Icon for security milestone

- **Image 21**: Milestone 03 Icon - Web secure version
  - Location: `app/about/page.js`
  - Recommended size: 128x128px
  - Description: Icon for web version milestone

- **Image 22**: Milestone 04 Icon - Token Generator & Multisigs
  - Location: `app/about/page.js`
  - Recommended size: 128x128px
  - Description: Icon for advanced features milestone

- **Image 23**: Milestone 05 Icon - Multi currency crossplatform
  - Location: `app/about/page.js`
  - Recommended size: 128x128px
  - Description: Icon for multi-currency milestone

---

## How to Replace Placeholders

1. **Locate the placeholder** in the code - search for `ImagePlaceholder` component with the specific number
2. **Replace with actual image**:

```javascript
// Replace this:
<ImagePlaceholder number={1} text="Hero Image" className="w-full h-96 rounded-2xl" />

// With this (using Next.js Image component):
<Image
  src="/images/hero.png"
  alt="Hero Image"
  width={800}
  height={600}
  className="w-full h-96 rounded-2xl object-cover"
/>
```

3. **Add images** to `public/images/` directory
4. **Import Image component** at the top of the file:
```javascript
import Image from 'next/image';
```

## Image Guidelines

- **Format**: Use WebP for best performance, with PNG/JPG fallbacks
- **Optimization**: Compress images before uploading
- **Naming**: Use descriptive names (e.g., `hero-wallet-dashboard.webp`)
- **Alt text**: Always provide descriptive alt text for accessibility
- **Responsive**: Consider providing multiple sizes for different screen sizes
