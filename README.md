# NFT Collection Explorer

A futuristic Web3 NFT collection explorer built with React and Tailwind CSS, featuring a cyberpunk aesthetic and modern UI/UX design.

## 🎯 Project Overview

This application presents an immersive NFT marketplace experience with a distinctive cyberpunk theme. The interface combines technical HUD-style elements with smooth animations and interactive components to create an engaging user experience for exploring NFT collections.

## 🛠️ Technical Approach

### Architecture
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS with custom utilities
- **Icons**: Lucide React
- **Typography**: Custom font families (Orbitron, Be Vietnam Pro, Atomos)


### Core Components

#### `Navbar.jsx`
- Fixed navigation with wallet connection
- Custom border component integration
- Clean, minimal design with brand identity

#### `Hero.jsx`
- Central landing section with technical HUD display
- System information panels (DSP, FPS, Date/Time, Version info)
- Main call-to-action with polygon-framed button
- Responsive layout with technical data points

#### `NftCollection.jsx`
- 4-column grid layout for NFT display
- Animated marquee header
- Hover effects revealing mint information
- Placeholder image system with SVG icons

#### `LeagueTable.jsx`
- Leaderboard/ranking display
- Team logos and scoring system
- Reward information display
- Interactive hover states

#### `Border.jsx`
- Reusable component for technical-style borders
- Corner accent elements
- Consistent styling across components

#### `Footer.jsx`
- Copyright and branding information
- Technical styling consistent with theme

## 🎨 Design System

### Custom CSS Utilities
```css
/* Clip-path for angled corners */
[clip-path:polygon(15px_0,calc(100%-15px)_0,100%_15px,100%_calc(100%-15px),calc(100%-15px)_100%,15px_100%,0_calc(100%-15px),0_15px)]

/* Text stroke effects */
[-webkit-text-stroke-color:white] [-webkit-text-stroke-width:2px]
```

### Hover Interactions
- Card transformations
- Color transitions
- Opacity changes
- Scale effects

## 📱 User Experience

### Navigation Flow
1. **Landing**: Technical HUD with system information
2. **Collection**: Grid-based NFT browsing with hover details
3. **Leaderboard**: Community ranking and rewards
4. **Wallet**: Connection and user authentication