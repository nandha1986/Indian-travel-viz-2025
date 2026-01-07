# Indian Travel Trends 2025 - Interactive Visualization

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Recharts](https://img.shields.io/badge/Recharts-2.10-green.svg)](https://recharts.org/)

An elegant, interactive data visualization showcasing Indian travel destinations and tourism trends for 2025. Features comprehensive analysis of domestic and international travel patterns across rail, air, and bus transportation modes.

![Preview](docs/preview.png)

## 🌟 Features

- **Interactive Visualizations**: Dynamic charts and graphs powered by Recharts
- **Three View Modes**: 
  - International Destinations
  - Domestic Travel (Rail, Air, Bus)
  - Mode Comparison & Statistics
- **Premium Design**: Elegant UI with sophisticated typography and animations
- **Real Data**: Based on 2025 reports from MakeMyTrip, IRCTC, AAI, and redBus
- **Responsive**: Works seamlessly across desktop, tablet, and mobile devices

## 📊 Data Sources

- **International Travel**: MakeMyTrip Year-End Report 2025, Niyo Travel Report
- **Rail Transport**: IRCTC, Indian Railways (6.9B passengers FY24)
- **Air Travel**: Airport Authority of India, DGCA (376M passengers FY24)
- **Bus Services**: redBus Travel Trends 2025, Sciative Solutions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/indian-travel-viz-2025.git
cd indian-travel-viz-2025

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 📁 Project Structure

```
indian-travel-viz-2025/
├── src/
│   ├── components/
│   │   └── IndianTravelViz2025.jsx    # Main visualization component
│   ├── App.jsx                         # Root component
│   ├── main.jsx                        # Entry point
│   └── index.css                       # Global styles
├── public/
│   └── vite.svg                        # Favicon
├── docs/
│   ├── preview.png                     # Screenshot
│   └── DATA_SOURCES.md                 # Detailed data documentation
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Actions deployment
├── package.json                        # Dependencies
├── vite.config.js                      # Vite configuration
├── .gitignore                          # Git ignore rules
├── LICENSE                             # MIT License
└── README.md                           # This file
```

## 🎨 Key Highlights

### International Destinations
- **Top 3**: Thailand (950k), UAE (880k), Sri Lanka (420k)
- **Fastest Growing**: Vietnam (+45% YoY)
- Travel purpose breakdown with interactive pie charts

### Domestic Travel Statistics
- **2.2B+** domestic tourist visits in 2024
- **88%** pilgrimage travel growth
- **Transportation Split**: Bus (46%), Rail (37%), Air (17%)

### Premium Features
- Elegant Playfair Display & Montserrat typography
- Sophisticated gold (#D4AF37) and navy gradient palette
- Smooth animations and hover effects
- Glassmorphism UI elements

## 🛠️ Tech Stack

- **Frontend**: React 18.2
- **Charts**: Recharts 2.10
- **Build Tool**: Vite 5.0
- **Styling**: Inline CSS with custom properties
- **Fonts**: Google Fonts (Playfair Display, Montserrat)

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Data sources: MakeMyTrip, IRCTC, Airport Authority of India, redBus, Ministry of Tourism
- Design inspiration: Premium editorial layouts and data journalism
- Community: React and Recharts open-source communities

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This visualization uses publicly available 2025 travel data for educational and informational purposes. Please refer to original sources for official statistics.
