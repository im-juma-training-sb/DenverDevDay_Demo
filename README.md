# Denver Dev Day 2025 - Official Conference Website

A modern, responsive React web application for Denver Dev Day 2025, Colorado's premier developer conference. Built with React, TailwindCSS, and modern web development best practices.

![Denver Dev Day](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop&crop=center)

## 🏔️ Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Colorado-Themed UI**: Inspired by Colorado's mountain landscape and state flag
- **Accessibility First**: WCAG compliant with semantic HTML and ARIA labels
- **Professional Registration**: Form validation with real-time feedback
- **Interactive Agenda**: Filterable sessions with speaker information
- **Speaker Profiles**: Detailed speaker bios with social media integration
- **Modern Performance**: Optimized loading and smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/denver-dev-day/website-2025.git
   cd website-2025
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
   Navigate to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation and logo
│   ├── Hero.jsx        # Landing section with CTA
│   ├── Agenda.jsx      # Conference schedule
│   ├── Speakers.jsx    # Speaker profiles
│   ├── Registration.jsx # Registration form
│   └── Footer.jsx      # Contact and links
├── App.jsx             # Main application component
├── main.jsx            # React application entry point
└── index.css           # Global styles and TailwindCSS
```

## 🎨 Design System

### Colors (Colorado Theme)
- **Colorado Blue**: `#4A90A4` - Primary brand color
- **Denver Red**: `#C53030` - Accent and CTAs
- **Denver Gold**: `#FFD700` - Highlights and buttons
- **Mountain Snow**: `#F8FAFC` - Light backgrounds
- **Forest Green**: `#2F855A` - Success states

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Icons**: Lucide React

### Responsive Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🧩 Component Architecture

### Header Component
- Responsive navigation with mobile menu
- Smooth scroll to sections
- Sticky header with background transition
- Colorado flag-inspired logo

### Hero Component
- CSS-generated mountain silhouettes
- Colorado landscape aesthetic
- Call-to-action buttons with animations
- Event information cards

### Agenda Component
- Interactive session filtering
- Time-based schedule layout
- Speaker integration
- Featured session highlighting

### Speakers Component
- Speaker profile cards with hover effects
- Modal detail views
- Social media integration
- Expertise tags and categorization

### Registration Component
- React Hook Form validation
- Real-time form feedback
- Accessible error handling
- Professional pricing display

### Footer Component
- Contact information
- Social media links
- Newsletter signup
- Sponsor acknowledgments

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 📱 Performance Optimizations

- Lazy loading for images
- CSS animations for smooth interactions
- Optimized bundle size with Vite
- Modern JavaScript for faster execution
- Responsive images with appropriate sizing

## 🔧 Configuration

### TailwindCSS
Custom configuration includes Colorado-themed colors, animations, and responsive utilities. See `tailwind.config.js` for full configuration.

### Vite
Modern build tool configuration optimized for React development. Hot module replacement and fast builds included.

## 🌐 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Add comments for complex logic
- Ensure accessibility compliance
- Test responsive design on multiple devices
- Maintain performance optimizations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Denver Tech Community** for inspiration and support
- **Colorado State Flag** for design inspiration
- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS framework
- **Unsplash Photographers** for beautiful placeholder images

## 📞 Contact

For questions about the conference or website:
- **Email**: info@denverdevday.com
- **Phone**: (303) 555-0199
- **Website**: https://denverdevday.com

---

**Made with ❤️ in Colorado**
