import { FaMedal, FaTrophy, FaStar, FaCertificate, FaBullseye } from 'react-icons/fa';

const Badge = ({ type }) => {
  const badgeStyles = {
    gold_medal: {
      icon: FaMedal,
      bg: 'linear-gradient(135deg, #FFD700, #FFA500)',
      text: 'Gold',
      color: '#fff'
    },
    silver_medal: {
      icon: FaMedal,
      bg: 'linear-gradient(135deg, #C0C0C0, #A8A8A8)',
      text: 'Silver',
      color: '#fff'
    },
    bronze_medal: {
      icon: FaMedal,
      bg: 'linear-gradient(135deg, #CD7F32, #B87333)',
      text: 'Bronze',
      color: '#fff'
    },
    trophy: {
      icon: FaTrophy,
      bg: 'linear-gradient(135deg, #FFD700, #FF8C00)',
      text: 'Winner',
      color: '#fff'
    },
    star: {
      icon: FaStar,
      bg: 'linear-gradient(135deg, #FFA500, #FF6347)',
      text: 'Featured',
      color: '#fff'
    },
    certificate: {
      icon: FaCertificate,
      bg: 'linear-gradient(135deg, #4A90E2, #357ABD)',
      text: 'Certified',
      color: '#fff'
    },
    achievement: {
      icon: FaBullseye,
      bg: 'linear-gradient(135deg, #9333ea, #c084fc)',
      text: 'Achievement',
      color: '#fff'
    }
  };

  const badge = badgeStyles[type] || badgeStyles.achievement;
  const IconComponent = badge.icon;

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 14px',
      borderRadius: '10px',
      background: badge.bg,
      color: badge.color,
      fontSize: '14px',
      fontWeight: '700',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      position: 'absolute',
      top: '16px',
      right: '16px',
      zIndex: 10
    }}>
      <IconComponent size={18} />
      <span>{badge.text}</span>
    </div>
  );
};

export default Badge;
