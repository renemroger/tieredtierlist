# Project TODO & Progress Tracker

**Last Updated**: 2025-11-16
**Next Session Focus**: Database schema design and technical implementation planning

---

## ✅ Completed (Session 1)

### Documentation
- [x] Created comprehensive TECHNICAL_DESIGN.md (v1.4)
- [x] Created CRITICAL_DECISIONS.md (v1.1) for quick reference
- [x] Defined core concept: Weighted tier lists with dynamic rankings
- [x] Established MVP scope and phased development plan
- [x] Created cost projections (Year 1: ~$400-1,000)

### Architecture Decisions (FINALIZED)
- [x] **Backend**: Next.js API Routes only (NO separate server)
- [x] **ORM**: Prisma (with Prisma Studio)
- [x] **Database**: Supabase (PostgreSQL)
- [x] **Authentication**: Google OAuth only (MVP)
- [x] **Mobile**: Responsive web + PWA (NO native app)
- [x] **Deployment**: Vercel
- [x] **AI Strategy**: Featured templates only (100+ likes)

### Requirements Defined
- [x] Scaling targets (10k concurrent users)
- [x] Template constraints (3-50 items, 2-8 attributes)
- [x] Performance SLAs (< 2s load, 60fps animations)
- [x] Content moderation approach (manual → AI-assisted)
- [x] SEO strategy (ISR, slugs, metadata)
- [x] Monetization strategy (ads + affiliates)
- [x] Featured tier list system (100 likes threshold)

### Initial Domain Examples
- [x] Climbing Shoes Rankings
- [x] Marvel Characters (MCU)
- [x] Classic Novels

---

## ✅ Completed (Session 2)

### Major Architecture Refinement
- [x] **Dual-Entity Model Finalized**: Templates (blueprints) vs Tier Lists (instances)
- [x] **Preset Ownership**: Moved presets from templates to tier lists (domain expert should define perspectives)
- [x] **Template Versioning**: Frozen on first reference, versioning strategy defined
- [x] **Dual Creator Attribution**: Both template and tier list creators get credit
- [x] **Template Limits**: Gamification system (5 base, +1 per 20-25 refs, cap 20-25 free tier)

### Complete Requirements Documentation
- [x] Created comprehensive REQUIREMENTS.md (v1.0)
- [x] Defined all 10 requirement categories systematically
- [x] Established design principles (Minimal & Elegant, Apple-inspired)
- [x] Dark mode primary with theme system for future modes

### UI/UX Requirements Defined
- [x] **Homepage Design**: Categories, featured lists, verified creators section
- [x] **Template Viewer Page**: Layout principles and interaction patterns
- [x] **Template Creator Flow**: 3-day draft expiration, auto-save, TierMaker-style patterns
- [x] **Weight Adjustment**: Sliders + inputs, "SQUISH" button to normalize to 100%
- [x] **Tier Visualization**: Custom labels, dynamic thresholds, image-only items

### Feature Requirements Defined
- [x] **Attribute System**: Numeric (0-100 default, custom scales), Binary (Yes/No)
- [x] **Weight Presets**: 0-5 per tier list, defined by tier list creator
- [x] **Category System**: 10 categories with 5 subcategories each
- [x] **Search & Discovery**: Browse-focused (no direct search MVP), trending/new/popular/featured pages
- [x] **Social Features**: Likes on both entities, sharing with weight configs, public/private profiles

### User Workflows Defined
- [x] Workflow A: Create public template (blueprint sharing)
- [x] Workflow B: Create tier list from template (community participation)
- [x] Workflow C: Create private template + tier list (single-use)
- [x] Workflow D: Fan → Influencer collaboration (network effects)
- [x] Removed template forking from MVP (Phase 2 feature)

### Influencer Strategy
- [x] Verified creator badges (Twitch OAuth MVP)
- [x] Featured creators section on homepage
- [x] Social links on profiles (Twitch, YouTube, Twitter/X, Instagram, TikTok)
- [x] Dual attribution drives network effects

---

## 🔄 Next Session: Database Schema & Technical Planning

### High Priority Tasks

#### 1. Database Schema Design (Prisma)
- [ ] **Core Models**
  - User model (Google OAuth, profile data, social links)
  - Template model (items, attributes, versioning)
  - TierList model (ratings, presets, references)
  - Category & Subcategory models
  - Like model (polymorphic for templates and tier lists)

- [ ] **Relationships**
  - User → Templates (one-to-many)
  - User → TierLists (one-to-many)
  - Template → TierLists (one-to-many, versioned references)
  - Template ↔ Category (many-to-one)
  - User ↔ Likes (many-to-many through Like model)
  - Template ↔ Likes (many-to-many)
  - TierList ↔ Likes (many-to-many)

- [ ] **Indexes & Performance**
  - Index on category for fast filtering
  - Index on featured status (100+ likes)
  - Index on createdAt for trending/new pages
  - Index on like count for popular pages
  - Composite indexes for common queries

- [ ] **Migration Strategy**
  - Initial schema
  - Seed data (categories, subcategories)
  - Test data for development

#### 2. API Design (Next.js API Routes)
- [ ] **Template Endpoints**
  - POST /api/templates (create)
  - GET /api/templates (browse with filters)
  - GET /api/templates/[id] (view single)
  - PUT /api/templates/[id] (update if no references)
  - POST /api/templates/[id]/version (create new version)
  - DELETE /api/templates/[id] (delete if no references)

- [ ] **Tier List Endpoints**
  - POST /api/tier-lists (create)
  - GET /api/tier-lists (browse with filters)
  - GET /api/tier-lists/[id] (view single)
  - PUT /api/tier-lists/[id] (update own tier list)
  - DELETE /api/tier-lists/[id] (delete own tier list)

- [ ] **User Endpoints**
  - GET /api/users/[id] (public profile)
  - PUT /api/users/me (update own profile)
  - GET /api/users/me/templates (my templates)
  - GET /api/users/me/tier-lists (my tier lists)
  - GET /api/users/me/likes (liked content)

- [ ] **Social Endpoints**
  - POST /api/likes (like template or tier list)
  - DELETE /api/likes/[id] (unlike)
  - GET /api/featured (templates & tier lists with 100+ likes)

- [ ] **Discovery Endpoints**
  - GET /api/browse/trending (last 7 days)
  - GET /api/browse/new (last 24-48 hours)
  - GET /api/browse/popular (all-time)
  - GET /api/categories (list all)
  - GET /api/categories/[slug] (category page with infinite scroll)

- [ ] **Error Handling & Validation**
  - Zod schemas for request validation
  - Consistent error response format
  - HTTP status codes
  - Error logging

- [ ] **Rate Limiting**
  - Per-user rate limits
  - Per-IP rate limits for unauthenticated requests
  - Protect against abuse

#### 3. Authentication & Authorization
- [ ] **Google OAuth Setup**
  - NextAuth.js configuration
  - Google OAuth credentials
  - Session management
  - JWT strategy

- [ ] **Authorization Rules**
  - Guest: Browse, view, adjust weights (read-only)
  - Authenticated: Create templates/tier lists, like, share
  - Owner: Edit/delete own content
  - Admin: Moderation tools (Phase 2)

- [ ] **Template Limits Enforcement**
  - Calculate available slots (5 + references bonus)
  - Block creation if limit reached
  - Display slot count to users

#### 4. UI/UX Design & Wireframes
- [ ] **Design System**
  - Color palette (dark mode primary)
  - Typography scale
  - Spacing system
  - Component library (buttons, inputs, cards, etc.)

- [ ] **Key Page Wireframes**
  - Homepage (categories, featured, creators)
  - Category page (infinite scroll)
  - Template viewer
  - Tier list viewer
  - Template creator flow
  - Tier list creator flow
  - User profile page

- [ ] **Interaction Design**
  - Weight slider behavior
  - "SQUISH" button animation
  - Tier transition animations (60fps target)
  - Mobile responsive breakpoints

#### 5. Core Feature Implementation Order
- [ ] **Phase 1A: Foundation** (Week 1-2)
  - Project setup (Next.js 15, Prisma, Tailwind, Supabase)
  - Database schema and migrations
  - Google OAuth authentication
  - Basic routing structure

- [ ] **Phase 1B: Templates** (Week 3-4)
  - Template creation flow
  - Template CRUD operations
  - Image upload (placeholder URLs for MVP, cloud storage Phase 2)
  - Template browsing and discovery

- [ ] **Phase 1C: Tier Lists** (Week 5-6)
  - Tier list creation flow
  - Rating interface
  - Weight presets definition
  - Tier visualization
  - Weight adjustment with sliders

- [ ] **Phase 1D: Social & Polish** (Week 7-8)
  - Likes system
  - Sharing functionality
  - User profiles
  - Category pages
  - Browse/discovery pages
  - Mobile responsive

- [ ] **Phase 1E: Testing & Launch** (Week 9-10)
  - Performance optimization
  - Security audit
  - Bug fixes
  - Deployment to Vercel
  - Monitoring setup

---

## 🤔 Areas Needing More Exploration

### Design & User Experience
- [ ] **Visual Design Direction**
  - Color scheme? (Dark mode, light mode, or both?)
  - Typography choices?
  - Overall aesthetic? (Modern, playful, professional, minimal?)
  - Inspiration: TierMaker, Notion, Linear, etc.?

- [ ] **Accessibility Considerations**
  - Keyboard navigation for weight sliders?
  - Screen reader support?
  - Color contrast requirements (WCAG AA or AAA)?
  - Alternative text for images?

### Technical Deep Dives
- [ ] **Database Schema Design**
  - Detailed Prisma schema
  - Relationship definitions
  - Index strategy for performance
  - Migration strategy

- [ ] **API Design**
  - RESTful endpoints list
  - Request/response formats
  - Error handling strategy
  - Rate limiting implementation

- [ ] **Caching Strategy**
  - What data to cache?
  - Cache invalidation rules
  - Redis integration (Phase 2)?
  - Client-side cache with React Query/SWR?

- [ ] **Real-Time Features** (Optional)
  - Live like counter updates?
  - Real-time collaboration on templates?
  - Live visitor count?
  - WebSocket vs polling?

### Business & Legal
- [ ] **Terms of Service**
  - Content ownership (who owns templates?)
  - User-generated content rights
  - Takedown policy (DMCA)

- [ ] **Privacy Policy**
  - What data is collected?
  - How is Google OAuth data used?
  - Cookie policy
  - GDPR compliance (if targeting EU)

- [ ] **Affiliate Program Details**
  - Which affiliate networks to join?
  - Amazon Associates terms compliance
  - Disclosure requirements
  - Revenue split with creators (Phase 3)?

### Marketing & Growth
- [ ] **Launch Strategy**
  - Where to announce? (Reddit, Product Hunt, Hacker News?)
  - Pre-launch landing page?
  - Beta testers program?
  - Initial creator outreach?

- [ ] **Content Strategy**
  - Blog for SEO? (e.g., "How to Create Tier Lists")
  - Example templates to seed platform?
  - Creator guides/tutorials?

- [ ] **Community Building**
  - Discord server?
  - Subreddit?
  - Creator showcase program?
  - Contests/challenges?

---

## 📋 Backlog (Future Phases)

### Phase 2 Features (Post-MVP)
- [ ] Weight presets
- [ ] Image upload to cloud storage
- [ ] User profiles and dashboards
- [ ] Comments system
- [ ] Template forking/remixing
- [ ] Export tier list as image
- [ ] Advanced search and filters
- [ ] Notifications system
- [ ] AI content analysis for featured templates
- [ ] Google AdSense integration
- [ ] Custom tier configuration (labels, colors)

### Phase 3 Features (Scale)
- [ ] Affiliate link integration (Amazon, REI, etc.)
- [ ] Premium subscriptions (ad-free, analytics)
- [ ] Creator revenue share program
- [ ] Collaborative templates (multiple creators)
- [ ] Template version history
- [ ] Advanced analytics dashboard for creators
- [ ] Email digest notifications
- [ ] Community moderation program
- [ ] Template collections/playlists
- [ ] API for third-party integrations

---

## 🎯 Recommended Next Session Agenda

### 1. Start with UI/UX Requirements (1-2 hours)
Focus on defining:
- Homepage layout
- Template viewer page layout
- Weight adjustment interaction details
- Tier visualization specifics

**Outcome**: Wireframes or detailed written descriptions

### 2. Define Attribute & Preset System (30-60 min)
Clarify:
- How numeric and binary attributes work in detail
- Weight preset creation and selection UI
- Default attribute scales

**Outcome**: Updated TECHNICAL_DESIGN.md with detailed specifications

### 3. Category & Search Requirements (30 min)
Decide:
- Category structure (pre-defined list)
- Search functionality scope for MVP
- Browse/discovery features

**Outcome**: Category list and search spec

### 4. Social Features Scope (30 min)
Define:
- Likes system details
- Sharing functionality
- Comments (MVP or Phase 2?)

**Outcome**: Social features requirements doc

### 5. Optional: Start Wireframes/Mockups
If time permits:
- Sketch homepage
- Sketch template viewer page
- Sketch template creator flow

**Tools**: Figma, Excalidraw, or pen & paper

---

## 📚 Reference Documents

- **TECHNICAL_DESIGN.md** (v1.4) - Comprehensive technical specifications
- **CRITICAL_DECISIONS.md** (v1.1) - Quick reference for all major decisions
- **CLAUDE.md** - Project overview and development commands

---

## 💡 Questions to Consider Before Next Session

1. **Visual Inspiration**: Find 2-3 websites you like the design of (tier lists or otherwise)
2. **Competitor Analysis**: Spend 10-15 min on TierMaker.com - what do you like? What would you do differently?
3. **Target User**: Who is your ideal first user? (casual browsers, content creators, specific communities?)
4. **Launch Timeline**: When do you want to launch MVP? (helps prioritize features)
5. **Domain Name**: Have you thought about the domain? (tieredtierlist.com available?)

---

## 🔗 Useful Resources for Next Session

### Design Inspiration
- TierMaker.com (main competitor)
- Notion.so (clean, modern UI)
- Linear.app (excellent UX)
- Figma Community (tier list templates)

### UI/UX Tools
- Figma (free for individuals)
- Excalidraw (quick wireframes)
- Coolors.co (color palette generator)
- Google Fonts (typography)

### Technical References
- Next.js 15 docs (app router)
- Prisma docs (schema design)
- Tailwind CSS docs
- Framer Motion docs (animations)

---

## 🎉 Session 1 Summary

**What We Accomplished**:
- ✅ Defined complete technical architecture
- ✅ Established cost projections (affordable!)
- ✅ Made all major tech decisions (Prisma, Next.js, PWA)
- ✅ Created comprehensive documentation
- ✅ Set constraints and scaling targets
- ✅ Defined monetization strategy

**Next Focus**: Continue defining requirements, especially UI/UX and user flows

**Estimated Progress**: ~30% of requirements defined, ready to move into detailed specs

---

**Welcome back! Start with the "Recommended Next Session Agenda" above to continue defining requirements.** 🚀
