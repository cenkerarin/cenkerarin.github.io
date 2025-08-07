# Cenker Arin - Personal Website

A modern, responsive personal website built with React, Vite, Tailwind CSS, and Framer Motion. This site serves as a portfolio, study notes hub, and professional presence for an AI researcher and content creator.

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router** - Client-side routing for SPA navigation
- **Framer Motion** - Smooth animations and transitions
- **GitHub Pages** - Free hosting and deployment

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx     # Main layout wrapper
│   ├── Navbar.jsx     # Navigation component
│   ├── Footer.jsx     # Footer component
│   └── NoteCard.jsx   # Note preview card
├── pages/             # Page components
│   ├── Home.jsx       # Landing page
│   ├── About.jsx      # About page
│   ├── Notes.jsx      # Notes listing page
│   └── NoteDetail.jsx # Individual note page
├── App.jsx            # Main app component with routing
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cenkerarin/cenkerarin.github.io.git
   cd cenkerarin.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run deploy` - Build and deploy to GitHub Pages

## 🎨 Features

### Pages
- **Home** - Welcome page with introduction and quick links
- **About** - Detailed personal information, interests, and skills
- **Notes** - Grid layout of study notes with category filtering
- **Note Detail** - Individual note pages with markdown-like content

### Components
- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **Dark Mode Support** - Built-in dark/light theme switching capability
- **Smooth Animations** - Framer Motion powered transitions
- **Accessibility** - Semantic HTML and keyboard navigation support

### Styling
- **Tailwind CSS** - Utility-first styling with custom design system
- **Custom Components** - Reusable button and layout components
- **Typography** - Inter font family for clean, readable text
- **Color Scheme** - Professional gray/white base with accent colors

## 🚀 Deployment

### GitHub Pages Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy using the provided script**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as source
   - Your site will be available at `https://cenkerarin.github.io`

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Ensure your server is configured for SPA routing (fallback to index.html)

## 📚 Adding Content

### Adding New Notes

1. **Update the notes array** in `src/pages/Notes.jsx`:
   ```javascript
   {
     slug: 'your-note-slug',
     title: 'Your Note Title',
     description: 'Brief description of the note',
     category: 'Category Name',
     date: 'YYYY-MM-DD'
   }
   ```

2. **Add note content** in `src/pages/NoteDetail.jsx`:
   ```javascript
   'your-note-slug': {
     title: 'Your Note Title',
     category: 'Category Name',
     date: 'YYYY-MM-DD',
     content: `
       # Your Note Content
       
       ## Section 1
       Your content here...
     `
   }
   ```

### Customizing Content

- **Personal Information**: Update content in `src/pages/Home.jsx` and `src/pages/About.jsx`
- **Navigation**: Modify nav items in `src/components/Navbar.jsx`
- **Styling**: Customize colors and theme in `tailwind.config.js`
- **Social Links**: Update links in `src/components/Footer.jsx`

## 🎯 Customization

### Colors and Theme
Edit `tailwind.config.js` to customize:
- Color palette
- Typography
- Spacing and layout
- Dark mode settings

### Animations
Modify Framer Motion animations in:
- `src/components/Navbar.jsx`
- `src/components/NoteCard.jsx`
- Individual page components

### Routing
Add new routes in `src/App.jsx`:
```javascript
<Route path="/your-page" element={<YourPage />} />
```

## 🔧 Development Tips

- **Hot Reload**: Vite provides instant hot module replacement
- **ESLint**: Code quality checks run automatically
- **Responsive Testing**: Test on various screen sizes
- **Performance**: Use React DevTools for component profiling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Website**: [cenkerarin.github.io](https://cenkerarin.github.io)
- **GitHub**: [@cenkerarin](https://github.com/cenkerarin)
- **LinkedIn**: [Cenker Arin](https://linkedin.com/in/cenkerarin)

---

Built with ❤️ using React, Vite, and Tailwind CSS