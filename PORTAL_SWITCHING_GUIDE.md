# Portal Switching Feature Guide

## Overview
The portal switching feature allows users with access to multiple vendor portals to seamlessly switch between them without logging out. This is particularly useful for users who manage multiple businesses or have administrative access across different portal types.

## Features Implemented

### 1. **Multi-Portal Authentication**
- Users can now have access to multiple portals simultaneously
- Login credentials are mapped to multiple portal/role combinations
- AuthContext tracks all available portals for the current user

### 2. **Portal Switcher Component**
- A dropdown button appears in the header of each portal (only visible when user has multiple portals)
- Displays current portal with icon and label
- Shows all available portals when clicked
- Smooth navigation between portals

### 3. **Demo Accounts**

#### Single Portal Access:
- **9876543210** → Merchant Store Owner (🏪)
- **9876543211** → Event Manager (🎪)
- **9876543212** → Coaching Center Owner (🏃)
- **9876543213** → Platform Admin (🛡️)

#### Multi-Portal Access:
- **9876543220** → Has access to:
  - Merchant Store Owner (🏪)
  - Event Manager (🎪)

## How It Works

### Login Process:
1. User enters mobile number and password
2. System checks `mobileRoleMap` for portal access
3. User is logged in with all available portals
4. Default portal (first in the list) is loaded
5. Portal switcher appears in header if multiple portals available

### Switching Between Portals:
1. Click the portal switcher button in the header
2. Dropdown shows all available portals
3. Click desired portal to switch
4. App navigates to the new portal
5. Context updates current portal and role
6. No re-authentication required

## Technical Implementation

### Files Modified:

1. **src/context/AuthContext.js**
   - Added `userPortals` state to track all available portals
   - Modified `login()` to accept and store multiple portals
   - Enhanced `switchPortal()` for seamless transitions

2. **src/pages/LoginPage.js**
   - Updated `mobileRoleMap` structure to support multiple portals per user
   - Each mobile number now maps to an array of portal objects
   - Added multi-portal demo account (9876543220)

3. **src/components/PortalSwitcher/PortalSwitcher.jsx**
   - New component for portal switching UI
   - Only renders when user has multiple portal access
   - Dropdown interface with portal icons and labels
   - Visual indicator for current portal

4. **src/components/PortalSwitcher/PortalSwitcher.css**
   - Minimalist styling matching overall design
   - Neutral colors (#f8f8f8, #1a1a1a)
   - Smooth animations and hover effects

5. **All Portal Files** (MerchantPortal.js, EventPortal.js, CoachingPortal.js, AdminPortal.js)
   - Imported and integrated PortalSwitcher component
   - Added to portal header next to page title

6. **src/portals/PortalLayout.css**
   - Updated header flex layout to accommodate switcher
   - Added `justify-content: space-between` for proper spacing

## User Experience

### For Single Portal Users:
- No visible changes
- Portal switcher remains hidden
- Standard login and navigation flow

### For Multi-Portal Users:
- Portal switcher button appears in header
- Shows current portal with icon
- Click to see dropdown with all available portals
- One-click switching between portals
- Maintains authentication state across switches

## Adding More Multi-Portal Users

To add a new user with multiple portal access, update `LoginPage.js`:

```javascript
'9876543221': { 
  portals: [
    { role: 'owner', portal: 'merchant', label: 'Merchant Store Owner', icon: '🏪' },
    { role: 'owner', portal: 'coaching', label: 'Coaching Center Owner', icon: '🏃' },
    { role: 'admin', portal: 'admin', label: 'Platform Admin', icon: '🛡️' }
  ],
  name: 'Super User' 
}
```

## Styling Guidelines

The portal switcher follows the minimalist design principles:
- Neutral colors (grays and blacks)
- Clean box-based layout
- Subtle shadows and borders
- Professional, high-level appearance
- Consistent with overall application design

## Testing the Feature

1. Start the development server: `npm start`
2. Navigate to: `http://localhost:3000`
3. Login with multi-portal account: **9876543220** (any password)
4. Look for the portal switcher button in the header
5. Click to see available portals
6. Switch between Merchant and Event portals
7. Verify navigation and context updates correctly

## Future Enhancements

Potential improvements for the portal switching feature:
- Remember last visited portal for each user
- Show unread notifications per portal
- Portal-specific quick actions in dropdown
- Keyboard shortcuts for switching
- Recent portal history
- Portal access permissions management

## Support

For questions or issues related to the portal switching feature:
- Check AuthContext for current portal state
- Verify userPortals array contains expected portals
- Ensure PortalSwitcher is imported in all portal files
- Check browser console for navigation errors

---

**Last Updated:** October 16, 2025  
**Status:** ✅ Fully Implemented and Tested
