import React, { useState } from 'react';

const AttendancePage = () => {
  const [attendance, setAttendance] = useState({
    'Alex Johnson': false,
    'Sarah Lee': true,
    'Mike Brown': true,
    'Lisa Chen': false,
  });

  const toggleAttendance = (name) => {
    setAttendance(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Session Attendance</h2>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '20px' }}>Basketball Training - Today</h3>
        <div>
          {Object.entries(attendance).map(([name, present]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', padding: '12px', borderBottom: '1px solid #eee' }}>
              <input 
                type="checkbox" 
                checked={present} 
                onChange={() => toggleAttendance(name)}
                style={{ marginRight: '10px', cursor: 'pointer' }}
              />
              <span style={{ flex: 1 }}>{name}</span>
              <span style={{ color: present ? '#28a745' : '#dc3545', fontWeight: '600' }}>
                {present ? '✓ Present' : '✗ Absent'}
              </span>
            </div>
          ))}
        </div>
        <button style={{ marginTop: '20px', padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>Save Attendance</button>
      </div>
    </div>
  );
};

export default AttendancePage;
