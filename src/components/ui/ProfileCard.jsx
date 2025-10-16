import React from 'react';
import './ProfileCard.css';

/**
 * ProfileCard Component - User Profile with Stats
 * SEO-optimized, accessible, and fully responsive
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - User's name
 * @param {string} props.role - User's role or title
 * @param {string} props.memberSince - Membership date
 * @param {string} props.avatarUrl - URL to user's avatar image
 * @param {Array} props.stats - Array of stat objects [{label, value, icon, color}]
 * @param {Function} props.onBack - Callback for back button
 * @param {Function} props.onSettings - Callback for settings button
 * @param {Function} props.onEdit - Callback for edit button
 */
const ProfileCard = ({ 
  name = 'Jordan Smith',
  role = 'Event Organiser & Coach',
  memberSince = 'Member since Jan 2024',
  avatarUrl = null,
  stats = [
    { label: 'Events Hosted', value: '12', icon: '📅', color: 'peach' },
    { label: 'Total Earnings', value: '$8,450', icon: '💰', color: 'mint' },
    { label: 'Avg Rating', value: '4.8', icon: '⭐', color: 'cream' },
    { label: 'Students Coached', value: '47', icon: '🎓', color: 'sky' }
  ],
  onBack = () => console.log('Back clicked'),
  onSettings = () => console.log('Settings clicked'),
  onEdit = () => console.log('Edit clicked'),
  children
}) => {
  // Get initials from name for avatar placeholder
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <article className="profile-card" itemScope itemType="https://schema.org/Person">
      {/* Header with gradient background */}
      <header className="profile-header">
        <button 
          className="profile-back-btn" 
          onClick={onBack}
          aria-label="Go back"
          title="Go back"
        >
          ←
        </button>
        <button 
          className="profile-settings-btn" 
          onClick={onSettings}
          aria-label="Settings"
          title="Settings"
        >
          ⚙️
        </button>
      </header>

      {/* Profile Info Section */}
      <section className="profile-info">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={`${name} profile picture`}
            className="profile-avatar"
            itemProp="image"
            loading="lazy"
          />
        ) : (
          <div className="profile-avatar-placeholder" aria-label={`${name} avatar`}>
            {getInitials(name)}
          </div>
        )}
        
        <div className="profile-details">
          <h1 className="profile-name" itemProp="name">
            {name}
          </h1>
          <p className="profile-role" itemProp="jobTitle">{role}</p>
          <p className="profile-member-since">
            <time itemProp="memberOf">{memberSince}</time>
          </p>
        </div>

        <button 
          className="profile-edit-btn" 
          onClick={onEdit}
          aria-label="Edit profile"
        >
          ✏️
        </button>
      </section>

      {/* Stats Grid - SEO-optimized with semantic HTML */}
      <section className="profile-stats" aria-label="User statistics">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="profile-stat-box" 
            data-color={stat.color}
            role="button"
            tabIndex="0"
            aria-label={`${stat.label}: ${stat.value}`}
          >
            <div className="profile-stat-label">
              <span className="profile-stat-icon" aria-hidden="true">{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
            <p className="profile-stat-value" itemProp="aggregateRating">
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      {/* Optional content area (tabs, events list, etc.) */}
      {children && (
        <div className="profile-content">
          {children}
        </div>
      )}
    </article>
  );
};

export default ProfileCard;
