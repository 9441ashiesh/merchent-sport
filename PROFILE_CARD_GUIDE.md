# ProfileCard Component - User-Friendly, SEO-Optimized & Responsive

## Overview
A modern profile card component with pastel-colored stat boxes, matching the design in your reference image. Built with accessibility, SEO, and mobile responsiveness in mind.

## Features

### ✅ User-Friendly Design
- **Soft Pastel Colors**: 6 beautiful gradient backgrounds (peach, mint, cream, sky, lavender, rose)
- **Clear Visual Hierarchy**: Profile info prominently displayed with clean typography
- **Intuitive Navigation**: Tab-based content switching (My Events, My Coaching, My Store)
- **Smooth Animations**: Subtle hover effects and transitions (0.2s ease)
- **Touch-Optimized**: 44px minimum touch targets for mobile devices

### ✅ SEO Optimization
```jsx
// Semantic HTML with Schema.org markup
<article itemScope itemType="https://schema.org/Person">
  <h1 itemProp="name">Jordan Smith</h1>
  <p itemProp="jobTitle">Event Organiser & Coach</p>
  <time itemProp="memberOf">Member since Jan 2024</time>
</article>
```

**SEO Benefits**:
- Proper heading hierarchy (h1, h2, h3)
- Schema.org Person markup for rich snippets
- Semantic HTML5 elements (article, section, header)
- Alt text for images
- ARIA labels for accessibility
- Meta-friendly structure for search engines

### ✅ Responsive Design

#### Desktop (>768px)
- 2-column stat grid
- 80px avatar
- 24px stat values
- Full sidebar layout

#### Tablet (768px)
- 2-column stat grid maintained
- 70px avatar
- 22px stat values
- Adjusted spacing

#### Mobile (480px)
- 2-column stat grid (compact)
- 64px avatar
- 20px stat values
- Horizontal scrolling tabs
- Touch-optimized buttons

### ✅ Accessibility Features
- **Keyboard Navigation**: All buttons and cards are keyboard accessible
- **ARIA Labels**: Descriptive labels for screen readers
- **Focus Indicators**: 2px outline on focus states
- **Color Contrast**: WCAG AA compliant text colors
- **Alt Text**: All icons have aria-hidden or descriptive text

## Component Usage

### Basic Implementation
```jsx
import ProfileCard from '../components/ui/ProfileCard';

<ProfileCard
  name="Jordan Smith"
  role="Event Organiser & Coach"
  memberSince="Member since Jan 2024"
  stats={[
    { label: 'Events Hosted', value: '12', icon: '📅', color: 'peach' },
    { label: 'Total Earnings', value: '$8,450', icon: '💰', color: 'mint' },
    { label: 'Avg Rating', value: '4.8', icon: '⭐', color: 'cream' },
    { label: 'Students Coached', value: '47', icon: '🎓', color: 'sky' }
  ]}
  onBack={() => console.log('Back')}
  onSettings={() => console.log('Settings')}
  onEdit={() => console.log('Edit')}
/>
```

### With Custom Content
```jsx
<ProfileCard
  name={user.name}
  role={user.role}
  memberSince={user.joinDate}
  stats={userStats}
  avatarUrl={user.avatar}
>
  {/* Custom tab content */}
  <div className="profile-tabs">
    <button className="profile-tab active">My Events</button>
  </div>
  
  <div className="profile-content">
    {/* Your custom content here */}
  </div>
</ProfileCard>
```

## Available Stat Colors

| Color     | Gradient                          | Best For              |
|-----------|-----------------------------------|-----------------------|
| `peach`   | #fff4ed → #ffe8d9                 | Events, Activity      |
| `mint`    | #f0fdf4 → #dcfce7                 | Earnings, Money       |
| `cream`   | #fefce8 → #fef9c3                 | Ratings, Stars        |
| `sky`     | #eff6ff → #dbeafe                 | Students, Users       |
| `lavender`| #faf5ff → #f3e8ff                 | Programs, Content     |
| `rose`    | #fdf2f8 → #fce7f3                 | Favorites, Likes      |

## Props API

### ProfileCard Props
| Prop          | Type     | Default            | Description                      |
|---------------|----------|--------------------|---------------------------------|
| name          | string   | 'Jordan Smith'     | User's full name                |
| role          | string   | 'Event Organiser'  | User's role or title            |
| memberSince   | string   | 'Member since...'  | Membership date text            |
| avatarUrl     | string   | null               | URL to avatar image             |
| stats         | array    | []                 | Array of stat objects           |
| onBack        | function | () => {}           | Back button click handler       |
| onSettings    | function | () => {}           | Settings button click handler   |
| onEdit        | function | () => {}           | Edit button click handler       |
| children      | node     | null               | Optional content area           |

### Stat Object Structure
```javascript
{
  label: 'Events Hosted',  // Display label
  value: '12',              // Stat value
  icon: '📅',               // Emoji or icon
  color: 'peach'            // Color variant
}
```

## Performance Optimizations

1. **Lazy Loading**: Images use `loading="lazy"` attribute
2. **CSS Animations**: GPU-accelerated transforms
3. **Minimal Re-renders**: Pure functional component
4. **Efficient Selectors**: BEM-like CSS class structure
5. **Touch Optimization**: Hardware-accelerated scrolling

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## Mobile Testing Checklist

- [ ] Avatar scales properly on all screen sizes
- [ ] Stats remain in 2-column grid on mobile
- [ ] Tabs scroll horizontally without wrapping
- [ ] Touch targets are at least 44x44px
- [ ] Text is readable without zooming
- [ ] Buttons respond to touch without delay
- [ ] Animations don't cause layout shift

## Customization Examples

### Change Header Color
```css
/* In ProfileCard.css */
.profile-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Add New Stat Color
```css
.profile-stat-box[data-color="custom"] {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
  border: 1px solid #YOUR_BORDER_COLOR;
}
```

### Customize Avatar Size
```css
@media (max-width: 768px) {
  .profile-avatar,
  .profile-avatar-placeholder {
    width: 60px;
    height: 60px;
  }
}
```

## Integration with Other Portals

The ProfileCard component can be easily integrated into any portal:

```jsx
// EventPortal
import ProfileCard from '../../../components/ui/ProfileCard';

// In your dashboard
<ProfileCard
  stats={[
    { label: 'Events Created', value: '24', icon: '🎉', color: 'peach' },
    { label: 'Attendees', value: '1,234', icon: '👥', color: 'sky' }
  ]}
/>
```

## Future Enhancements

- [ ] Add stat trend indicators (↑ +12%)
- [ ] Implement skeleton loading states
- [ ] Add chart/graph integration
- [ ] Support for custom stat icons (SVG)
- [ ] Dark mode support
- [ ] Export profile as PDF
- [ ] Social share functionality

## Support

For issues or questions, refer to:
- Component source: `src/components/ui/ProfileCard.jsx`
- Styles: `src/components/ui/ProfileCard.css`
- Example usage: `src/portals/coaching/pages/CoachingDashboard.js`
