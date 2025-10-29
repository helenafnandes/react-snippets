# React Snippets

A collection of interactive React components for learning React concepts, hooks, and patterns. Each component includes live demonstrations and educational explanations.

## Live Demo

Check out the live demo [here](https://react-snippets-roan.vercel.app/) on Vercel.

## Components

### React Concepts
- **useEffect Hook Demonstrator**: Interactive tool showing useEffect behavior
  - Empty Dependencies `[]` - runs once on mount
  - With Dependencies `[count]` - runs when dependencies change
  - No Dependencies - runs on every render
  - Cleanup Function
  - Infinite Loop Case
- **Throttle & Debounce Demonstrator**: An interactive visualizer for these two performance optimization techniques and for how they compare to a non-optimized default approach

### UI Components
- **Star Rating**: Interactive star rating system
- **Accordion**: Collapsible content sections with animations
- **Random Color Generator**: Generates random colors with hex codes
- **Scroll Progress Bar**: Visual scroll progress indicator
- **Text to Speech**: Convert text to speech with voice controls
- **Theme Toggle**: Switch between light and dark themes
- **Side Navigation**: Collapsible navigation with transitions
- **Scroll Gallery**: Image gallery with lazy loading
- **Thumbnail Gallery**: Optimized gallery with memoization

## Simple Tech Stack

- React 18 with modern hooks
- Vite for development and building
- React Router for navigation
- CSS Variables for theming
- Responsive design with mobile-first approach

## Getting Started

```bash
# Clone the repository
git clone https://github.com/helenafnandes/react-snippets.git

# Navigate to the project directory
cd react-snippets

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Contributing

Feel free to contribute by adding new components or improving existing ones. Each component should include clear documentation and educational explanations.
