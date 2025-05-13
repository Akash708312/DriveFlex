
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render App
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
