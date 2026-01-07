# Contributing to Indian Travel Trends 2025

Thank you for considering contributing to this project! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/OS information

### Suggesting Enhancements

We welcome suggestions for:
- New data visualizations
- UI/UX improvements
- Additional data sources
- Performance optimizations
- Accessibility improvements

### Pull Request Process

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/YourFeatureName
   ```

2. **Make your changes** following our coding standards:
   - Use functional React components
   - Follow existing code style
   - Add comments for complex logic
   - Keep components focused and reusable

3. **Test your changes** thoroughly:
   - Test in multiple browsers
   - Check responsive design
   - Verify data accuracy
   - Ensure no console errors

4. **Update documentation** if needed:
   - Update README.md for new features
   - Add JSDoc comments for new functions
   - Update DATA_SOURCES.md for data changes

5. **Commit your changes** with clear messages:
   ```bash
   git commit -m "feat: Add new visualization for pilgrimage routes"
   ```

   Follow conventional commits:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes (formatting)
   - `refactor:` Code refactoring
   - `test:` Adding tests
   - `chore:` Maintenance tasks

6. **Push to your fork** and submit a pull request:
   ```bash
   git push origin feature/YourFeatureName
   ```

7. **Fill out the PR template** with:
   - Description of changes
   - Related issue numbers
   - Screenshots/GIFs for UI changes
   - Testing performed

## Code Style Guidelines

### React/JavaScript

```javascript
// Use functional components with hooks
const MyComponent = ({ data }) => {
  const [state, setState] = useState(initialValue);
  
  // Event handlers with descriptive names
  const handleDataChange = (newData) => {
    setState(newData);
  };
  
  return (
    <div style={{ /* inline styles */ }}>
      {/* Component content */}
    </div>
  );
};

export default MyComponent;
```

### Styling

- Use inline styles with CSS-in-JS patterns
- Define style objects for reusability
- Use CSS variables for colors
- Follow the existing color palette:
  - Gold: `#D4AF37`
  - Navy: `#0F172A` to `#334155`
  - Text: `#F8FAFC`, `#CBD5E1`, `#94A3B8`

### Data Visualization

- Use Recharts components
- Maintain consistent chart styling
- Include proper axes labels
- Provide tooltips with detailed information
- Ensure accessibility (ARIA labels)

## Project Structure

```
src/
├── components/          # React components
│   └── IndianTravelViz2025.jsx
├── App.jsx             # Root component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Adding New Data

When adding new data sources:

1. **Verify the source** - Use official/reputable sources only
2. **Document it** - Add to `docs/DATA_SOURCES.md`
3. **Format consistently** - Match existing data structure
4. **Update README** - List the new data in features
5. **Test thoroughly** - Ensure charts render correctly

Example data structure:
```javascript
const newData = [
  { 
    name: 'Location', 
    value: 100, 
    growth: 15, 
    color: '#D4AF37' 
  }
];
```

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing Checklist

Before submitting a PR, ensure:

- [ ] Code runs without errors
- [ ] All charts render correctly
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] No console warnings/errors
- [ ] Animations are smooth
- [ ] Data is accurate
- [ ] Documentation is updated

## Code Review Process

1. At least one maintainer will review your PR
2. Requested changes must be addressed
3. CI checks must pass
4. Once approved, a maintainer will merge

## Community

- Be respectful and constructive
- Help others in issues and discussions
- Share ideas and feedback
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md)

## Questions?

Feel free to:
- Open an issue for questions
- Start a discussion
- Reach out to maintainers

Thank you for contributing! 🙏
