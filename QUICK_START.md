# Quick Start Guide - Indian Travel Viz 2025

## 📦 What You Have

A complete, production-ready React application for visualizing Indian travel trends.

## 🚀 Getting Started in 3 Steps

### Step 1: Extract & Navigate
```bash
# Extract the archive
tar -xzf indian-travel-viz-2025.tar.gz

# Navigate to project directory
cd indian-travel-viz-2025
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- React 18.2
- Recharts 2.10  
- Vite 5.0
- ESLint and other dev tools

### Step 3: Run Development Server
```bash
npm run dev
```

Open http://localhost:5173 in your browser!

## 📋 Available Commands

```bash
npm run dev      # Start development server with hot reload
npm run build    # Create production build in dist/
npm run preview  # Preview production build locally
npm run lint     # Check code quality with ESLint
```

## 🗂️ Project Structure Overview

```
indian-travel-viz-2025/
├── src/
│   ├── components/
│   │   └── IndianTravelViz2025.jsx   # 🎨 Main component
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── docs/
│   └── DATA_SOURCES.md                # 📊 Data documentation
├── .github/workflows/
│   └── deploy.yml                     # 🚀 Auto deployment
└── [config files]
```

## 🎯 Key Features

### Three Interactive Views
1. **International** - Top destinations, growth rates, purpose distribution
2. **Domestic** - Rail, Air, and Bus travel analysis
3. **Comparison** - Mode comparison with key statistics

### Data Highlights
- Thailand: 950k visitors (15% growth)
- 6.9B rail passengers
- 306M domestic air passengers  
- 88% pilgrimage travel growth

## 🎨 Customization

### Update Data
Edit `src/components/IndianTravelViz2025.jsx`:

```javascript
const internationalData = [
  { name: 'Thailand', visitors: 950, growth: 15, color: '#D4AF37' },
  // Add your data here
];
```

### Change Colors
Modify the color palette:
```javascript
// Gold palette
primary: '#D4AF37'
secondary: '#C9A961'
background: '#0F172A'
```

### Add New Charts
Import Recharts components:
```javascript
import { LineChart, Line } from 'recharts';
```

## 📱 Deployment Options

### Option 1: GitHub Pages (Automated)
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Workflow automatically deploys on push to main

### Option 2: Vercel/Netlify
```bash
npm run build
# Upload dist/ folder or connect to Git
```

### Option 3: Any Static Host
```bash
npm run build
# Upload contents of dist/ folder
```

## 🔧 Troubleshooting

### Port already in use?
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Dependencies not installing?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
# Check Node version (need 18+)
node --version

# Update Node if needed
```

## 📚 Documentation

- **README.md** - Full project documentation
- **CONTRIBUTING.md** - How to contribute
- **DATA_SOURCES.md** - Detailed data sources
- **PROJECT_STRUCTURE.md** - Technical architecture

## 🆘 Need Help?

1. Check existing documentation files
2. Review code comments in components
3. Open issue on GitHub
4. Check Recharts documentation: https://recharts.org

## 🎓 Learning Resources

- **React**: https://react.dev
- **Recharts**: https://recharts.org
- **Vite**: https://vitejs.dev

## ✅ Checklist for Production

- [ ] Update data sources in component
- [ ] Test all three view modes
- [ ] Check responsive design (mobile/tablet/desktop)
- [ ] Verify charts render correctly
- [ ] Update README with your repository info
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Update GitHub repository URL in package.json
- [ ] Enable GitHub Pages if using automated deployment

## 🎉 You're All Set!

Start customizing and building amazing travel visualizations!

---

**Pro Tips:**
- Use React DevTools browser extension for debugging
- Keep data arrays separate for easier maintenance
- Test in multiple browsers before deploying
- Add your own data sources to docs/DATA_SOURCES.md
