# Vendor Portals - Multi-Portal Management System

A comprehensive React web application featuring **4 vendor portals**: Merchant Store, Event Organizer, Coaching Center, and Admin (platform oversight).

## 🎯 Features

### 1. **Merchant Portal** 🏪
- Product catalog management (Draft → Publish workflow)
- Inventory tracking and alerts
- Order management with fulfillment
- Finance & payout tracking
- Settings & store configuration

### 2. **Event Organizer Portal** 🎪
- Event creation and management
- Ticket sales and pricing
- Attendee management
- Mobile-friendly QR code check-in
- Event analytics and finance

### 3. **Coaching Center Portal** 🏃
- Center and facility management
- Program creation and scheduling
- Enrollment management
- Attendance tracking
- Revenue and finance tracking

### 4. **Admin Portal** 🛡️
- Approval workflow queue
- Vendor management and KYC
- Content moderation
- Payout processing & reconciliation
- Platform reports and analytics
- Commission settings

## 🚀 Quick Start

### Installation

```bash
cd /Users/ashieshmittapalli/Downloads/projects/merchent-sport
npm install
```

### Run Development Server

```bash
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

## 🔐 Demo Access

Use the **Quick Demo Access** buttons on the login page to instantly access each portal:

- **Merchant Portal**: Quick demo as Store Owner
- **Event Portal**: Quick demo as Event Manager
- **Coaching Portal**: Quick demo as Center Owner
- **Admin Portal**: Quick demo as Super Admin

## 📁 Project Structure

```
merchent-sport/
├── public/
│   └── index.html
├── src/
│   ├── context/
│   │   └── AuthContext.js          # Authentication & role management
│   ├── pages/
│   │   └── LoginPage.js            # Login with portal selector
│   ├── portals/
│   │   ├── merchant/               # Merchant portal
│   │   │   ├── MerchantPortal.js
│   │   │   └── pages/
│   │   ├── event/                  # Event Organizer portal
│   │   │   ├── EventPortal.js
│   │   │   └── pages/
│   │   ├── coaching/               # Coaching Center portal
│   │   │   ├── CoachingPortal.js
│   │   │   └── pages/
│   │   ├── admin/                  # Admin portal
│   │   │   ├── AdminPortal.js
│   │   │   └── pages/
│   │   └── PortalLayout.css        # Shared portal styling
│   ├── App.js                      # Main routing
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Key Pages by Portal

### Merchant Portal
- Dashboard (metrics, recent orders)
- Products (CRUD with form validation)
- Inventory (stock levels, alerts)
- Orders (fulfillment workflow)
- Finance & Payouts
- Settings

### Event Organizer Portal
- Dashboard (ticket sales, revenue)
- Events (create & manage)
- Tickets (pricing & inventory)
- Attendees (manage & export)
- Check-In (mobile-optimized QR scanner)
- Finance & Analytics

### Coaching Center Portal
- Dashboard (enrollments, programs, attendance)
- Centers (facility management)
- Programs (course creation & scheduling)
- Enrollments (registration management)
- Attendance (session mark-in)
- Finance & Revenue

### Admin Portal
- Dashboard (KPIs, recent activity)
- Approvals Queue (product, event, program reviews)
- Vendors (vendor profiles & management)
- Moderation (content flagging & review)
- Payouts (payout processing & reconciliation)
- Reports (revenue, performance, disputes)
- Settings (commission & fee configuration)

## 🔑 Key Features

✅ **Multi-Portal Architecture**: Seamless switching between vendor types  
✅ **Role-Based Access Control**: Owner, Manager, Staff, Admin roles  
✅ **Mobile-Responsive Design**: Works on desktop, tablet, and mobile  
✅ **Context API State Management**: Centralized authentication & user data  
✅ **Real-time Dashboards**: Metrics, activity feeds, status indicators  
✅ **Form Validation**: Client-side validation ready for backend integration  
✅ **Modern UI/UX**: Clean, professional interface with accessibility in mind  

## 🛠️ Tech Stack

- **React 18** - UI framework
- **React Router 6** - Client-side routing
- **Context API** - State management
- **CSS3** - Responsive styling
- **React Scripts** - Build tooling

## 📝 Authentication Flow

1. **Login Page** - Select portal type and role
2. **Demo Mode** - Quick access with demo credentials
3. **Context Provider** - User data stored globally
4. **Protected Routes** - Unauthenticated users redirected to login
5. **Logout** - Clear context and return to login

## 🎯 Next Steps for Integration

1. **Connect to Backend API**
   - Update AuthContext to use real authentication
   - Replace mock data with API calls

2. **Add Data Persistence**
   - Integrate with REST API or GraphQL
   - Implement proper state management (Redux/Zustand)

3. **Enable Real Features**
   - Product uploads & image handling
   - Real payment processing
   - Database transactions & validations

4. **Security**
   - Implement JWT token handling
   - Add request/response interceptors
   - Set up environment variables for API endpoints

5. **Testing**
   - Add unit tests with Jest
   - Integration tests for workflows
   - E2E tests with Cypress

## 📞 Support

For issues or questions about the portal implementation, refer to:
- `MERCHANT_PORTALS_FINAL.md` - Complete specification document
- `PORTALS_SPEC.md` - Detailed feature & workflow documentation

---

**Version**: 1.0.0  
**Last Updated**: Oct 16, 2025
# merchent-sport
