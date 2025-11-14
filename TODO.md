# Project TODO & Progress Tracker

**Last Updated**: 2025-11-13
**Next Session Focus**: Continue defining requirements and refining specifications

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

## 🔄 Next Session: Continue Defining Requirements

### High Priority - Requirements to Define

#### 1. User Experience & UI/UX Details
- [ ] **Homepage Design**
  - What content appears on homepage?
  - Featured templates carousel?
  - Category grid?
  - Search bar prominence?
  - Call-to-action (Create Template button)?

- [ ] **Template Viewer Page Layout**
  - Where do tier visuals appear?
  - Weight sliders: sidebar vs bottom?
  - Item details on hover or click?
  - How to show attribute values per item?
  - Social sharing button placement?
  - Like button interaction?

- [ ] **Template Creator Flow**
  - Multi-step wizard or single page?
  - How many steps? (e.g., 1. Details, 2. Attributes, 3. Items, 4. Presets, 5. Publish)
  - Can users save drafts?
  - Preview mode during creation?
  - Bulk import for items? (CSV, JSON?)

- [ ] **Weight Adjustment Interaction**
  - Sliders, number inputs, or percentage inputs?
  - Show remaining percentage budget?
  - Real-time preview as weights change?
  - "Reset to default" button?
  - Save custom weight configurations?

#### 2. Tier Visualization Details
- [ ] **Tier Display Options**
  - Horizontal rows (traditional) or vertical columns?
  - Items as cards, icons, or images only?
  - Show scores on each item?
  - Show tier thresholds?
  - Drag items between tiers manually?
  - Collapsed vs expanded view?

- [ ] **Animation Specifications**
  - What triggers animations? (weight change, preset selection)
  - Duration of transitions? (200ms, 500ms?)
  - Animation type? (slide, fade, scale?)
  - Stagger delay for multiple items moving?
  - Mobile-specific animations?

#### 3. Attribute System Details
- [ ] **Numeric Attributes**
  - Default scale: 0-10 or 0-100?
  - Allow custom scales per attribute?
  - Decimal values allowed? (e.g., 7.5)
  - Visual input: slider, number input, or stars?

- [ ] **Binary Attributes**
  - How are they displayed? (checkbox, toggle, yes/no?)
  - How are they weighted? (0 or 1, or custom weights?)
  - Should they affect score differently than numeric?

- [ ] **Attribute Metadata**
  - Attribute descriptions/tooltips mandatory?
  - Attribute icons/emoji support?
  - Can attributes be marked as "more important" visually?
  - Units for attributes? (e.g., "Price: $", "Weight: lbs")

#### 4. Weight Preset System
- [ ] **Preset Creation**
  - How does creator define presets during template creation?
  - Preview each preset before publishing?
  - Can presets be added after template is published?
  - Preset icons/badges?

- [ ] **Preset Selection UI**
  - Dropdown, radio buttons, or cards?
  - Show description on hover?
  - "Custom" preset when user manually adjusts?
  - Can users save their custom presets?

#### 5. Category System
- [ ] **Category Structure**
  - Pre-defined categories or user-created?
  - Suggested categories:
    - Sports (climbing, hiking, running, etc.)
    - Gaming (characters, games, streamers, etc.)
    - Food (restaurants, recipes, snacks, etc.)
    - Tech (laptops, phones, software, etc.)
    - Entertainment (movies, shows, books, etc.)
    - Lifestyle (travel, fashion, home, etc.)
  - Subcategories? (e.g., Gaming → League of Legends → Champions)
  - Multiple categories per template?

- [ ] **Category Pages**
  - What content on category landing pages?
  - Filter by subcategory?
  - Sort options?
  - Featured templates per category?

#### 6. Search & Discovery
- [ ] **Search Functionality**
  - What can users search? (template titles, items, creators, tags?)
  - Autocomplete suggestions?
  - Filters: category, date, popularity, featured status?
  - Sort by: relevance, recent, popular, likes?

- [ ] **Browse/Discovery Features**
  - "Trending" tier lists?
  - "New" tier lists?
  - "Related" tier lists on template pages?
  - Personalized recommendations (Phase 2)?

#### 7. Social Features Details
- [ ] **Likes System**
  - One like per user per template?
  - Unlike functionality?
  - Show like count publicly?
  - Notification to creator when liked?

- [ ] **Comments (Phase 2)**
  - Top-level comments only or threaded?
  - Markdown support?
  - Upvote/downvote on comments?
  - Report comments?
  - Creator can pin comments?

- [ ] **Sharing**
  - Share with current weight configuration?
  - Generate shareable link with weights encoded in URL?
  - Share as image (with current weights shown)?
  - Social media preview optimization?

#### 8. User Profile & Dashboard
- [ ] **Creator Profile Page**
  - What information shown?
    - Bio/description?
    - Total templates created?
    - Total likes received?
    - Featured template count?
    - Join date?
  - List of templates (public only or include drafts?)
  - Follow/unfollow functionality?
  - Profile customization?

- [ ] **User Dashboard (Logged In)**
  - My Templates tab (published, drafts, featured)
  - Liked/Favorited templates
  - Activity feed?
  - Analytics for creators? (views, likes over time)
  - Notifications center?

#### 9. Image Upload & Management
- [ ] **Image Upload Flow**
  - Drag & drop support?
  - Paste from clipboard?
  - Bulk upload multiple images?
  - Image URL input as alternative?
  - Preview before upload?
  - Crop/resize tool in-app?

- [ ] **Image Library**
  - Reuse images across templates?
  - Personal image library per user?
  - Search for images within platform?
  - Integration with stock photo APIs? (Unsplash, Pexels)

#### 10. Admin & Moderation Tools
- [ ] **Admin Dashboard**
  - Report queue view
  - User management (ban, warn, etc.)
  - Template management (feature, unfeature, delete)
  - Analytics overview
  - System health monitoring

- [ ] **Moderation Actions**
  - Warn user (send email notification)
  - Temporary ban (duration options: 1 day, 7 days, 30 days)
  - Permanent ban
  - Delete template
  - Delete comment
  - Remove featured status
  - Add featured status manually (override threshold)

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
