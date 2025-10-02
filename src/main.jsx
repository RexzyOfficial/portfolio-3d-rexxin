import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          width: '100vw',
          height: '100vh',
          background: '#0a0a0a',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          flexDirection: 'column',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1>🚨 Something went wrong</h1>
          <p>Please refresh the page or check the console for errors.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              background: '#ff6b6b',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Render dengan error handling
try {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } else {
    console.error('Root element not found!');
  }
} catch (error) {
  console.error('Failed to render React app:', error);
  
  // Fallback UI
  document.body.innerHTML = `
    <div style="
      width: 100vw; 
      height: 100vh; 
      background: #0a0a0a; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      color: white; 
      flex-direction: column;
      padding: 2rem;
      text-align: center;
    ">
      <h1>🚨 Critical Error</h1>
      <p>Failed to load application: ${error.message}</p>
      <button onclick="window.location.reload()" style="
        background: #ff6b6b;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        margin-top: 1rem;
      ">Reload Page</button>
    </div>
  `;
  }
