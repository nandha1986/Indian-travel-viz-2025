# Project File Structure

```
indian-travel-viz-2025/
│
├── 📄 package.json                    # Project dependencies and scripts
├── 📄 package-lock.json               # Locked versions of dependencies (auto-generated)
├── 📄 vite.config.js                  # Vite build configuration
├── 📄 index.html                      # Main HTML entry point
├── 📄 .gitignore                      # Git ignore rules
├── 📄 .eslintrc.cjs                   # ESLint configuration
├── 📄 LICENSE                         # MIT License
├── 📄 README.md                       # Project documentation
├── 📄 CONTRIBUTING.md                 # Contribution guidelines
├── 📄 CHANGELOG.md                    # Version history
│
├── 📁 src/                            # Source code directory
│   ├── 📄 main.jsx                    # Application entry point
│   ├── 📄 App.jsx                     # Root React component
│   ├── 📄 index.css                   # Global styles
│   │
│   └── 📁 components/                 # React components
│       └── 📄 IndianTravelViz2025.jsx # Main visualization component
│
├── 📁 public/                         # Static assets
│   └── 🖼️  vite.svg                   # Favicon
│
├── 📁 docs/                           # Documentation
│   ├── 📄 DATA_SOURCES.md             # Detailed data documentation
│   └── 🖼️  preview.png                # Screenshot (to be added)
│
├── 📁 .github/                        # GitHub-specific files
│   └── 📁 workflows/
│       └── 📄 deploy.yml              # GitHub Pages deployment
│
└── 📁 dist/                           # Production build (generated)
    ├── 📁 assets/
    └── 📄 index.html

```

## File Descriptions

### Root Level

- **package.json**: Defines project metadata, dependencies (React, Recharts), and npm scripts
- **vite.config.js**: Configuration for Vite build tool (dev server, build options)
- **index.html**: Main HTML file with meta tags and root div
- **.gitignore**: Specifies which files Git should ignore (node_modules, dist, etc.)
- **.eslintrc.cjs**: Linting rules for code quality
- **LICENSE**: MIT license for open source usage
- **README.md**: Main project documentation with setup instructions
- **CONTRIBUTING.md**: Guidelines for contributors
- **CHANGELOG.md**: Version history and release notes

### Source Directory (src/)

- **main.jsx**: Entry point that renders the React app to DOM
- **App.jsx**: Root component that imports and renders the main visualization
- **index.css**: Global CSS styles (body, scrollbar, etc.)
- **components/IndianTravelViz2025.jsx**: Main visualization component with all charts and data

### Public Directory

- **vite.svg**: Default Vite logo used as favicon (can be replaced)

### Documentation (docs/)

- **DATA_SOURCES.md**: Comprehensive documentation of all data sources
- **preview.png**: Project screenshot (to be added)

### GitHub (.github/)

- **workflows/deploy.yml**: Automated deployment to GitHub Pages

## Key Components

### IndianTravelViz2025.jsx Structure

```javascript
IndianTravelViz2025
├── State Management (useState)
├── Data Arrays
│   ├── internationalData
│   ├── domesticRailData
│   ├── domesticAirData
│   ├── domesticBusData
│   ├── modeComparisonData
│   └── travelPurposeData
├── Components
│   ├── CustomTooltip
│   ├── Header with Navigation
│   ├── International View
│   │   ├── Bar Chart (visitors & growth)
│   │   ├── Top 3 Cards
│   │   └── Pie Chart (purpose)
│   ├── Domestic View
│   │   ├── Rail Section (Horizontal Bar)
│   │   ├── Air Section (Grid Cards)
│   │   └── Bus Section (Bar Chart)
│   └── Comparison View
│       ├── Mode Cards (3)
│       ├── Statistics Grid (4)
│       └── Data Sources
└── Styles (inline with animations)
```

## Build Process

### Development
```bash
npm run dev
```
1. Vite starts dev server on port 5173
2. Hot Module Replacement (HMR) enabled
3. Source maps for debugging

### Production
```bash
npm run build
```
1. Vite bundles all files
2. Optimizes and minifies
3. Creates vendor chunks (React, Recharts)
4. Outputs to `dist/` directory

### Preview
```bash
npm run preview
```
- Serves the production build locally
- Test before deployment

## Dependencies

### Production
- **react** (^18.2.0): UI library
- **react-dom** (^18.2.0): React DOM rendering
- **recharts** (^2.10.3): Chart library

### Development
- **vite** (^5.0.8): Build tool and dev server
- **@vitejs/plugin-react** (^4.2.1): React support for Vite
- **eslint** (^8.55.0): Code linting
- **eslint plugins**: React-specific linting rules

## Deployment

### GitHub Pages (Automated)
1. Push to `main` branch
2. GitHub Actions runs workflow
3. Builds project
4. Deploys to GitHub Pages
5. Available at `yourusername.github.io/indian-travel-viz-2025`

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to any static hosting service
```

## Customization Points

### Data Updates
- Edit data arrays in `IndianTravelViz2025.jsx`
- Update `docs/DATA_SOURCES.md` with new sources

### Styling
- Modify colors in component styles
- Change fonts in Google Fonts import
- Adjust animations in keyframes

### Charts
- Modify Recharts components
- Add new chart types
- Customize tooltips and legends

## Git Workflow

```bash
# Clone repository
git clone https://github.com/yourusername/indian-travel-viz-2025.git

# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: your feature description"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## Environment Variables

Currently no environment variables needed. For future additions:

Create `.env` file:
```
VITE_API_KEY=your_api_key
VITE_API_URL=your_api_url
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Performance Optimization

- Code splitting with Vite
- Lazy loading for charts
- Vendor chunk separation
- Production build minification
- Tree shaking unused code

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA
- Responsive font sizes

## Future Enhancements

See `CHANGELOG.md` for planned features and roadmap.
