# Product Requirements Document (PRD)

**Project**: TieredTierList
**Version**: 1.0
**Last Updated**: 2025-11-16
**Status**: Requirements Complete - Ready for Design & Development

---

## Table of Contents

1. [Core Concept](#core-concept)
2. [Design Principles](#design-principles)
3. [Architecture Model](#architecture-model)
4. [User Workflows](#user-workflows)
5. [Feature Requirements](#feature-requirements)
6. [UI/UX Specifications](#uiux-specifications)
7. [Category System](#category-system)
8. [Social Features](#social-features)
9. [Constraints & Limits](#constraints--limits)
10. [Phasing](#phasing)

---

## Core Concept

**TieredTierList** is a professional tier list platform where rankings dynamically adapt based on weighted attributes. Unlike traditional static tier lists, users can adjust attribute weights to see how rankings change from different perspectives.

### Key Differentiators

1. **Dual-Entity System**: Separation of Templates (blueprints) and Tier Lists (rated instances)
2. **Dynamic Rankings**: Weight-based scoring with real-time tier updates
3. **Dual Creator Attribution**: Both template creators and tier list creators get credit
4. **Influencer Collaboration**: Streamers/content creators can use fan-made templates
5. **Professional Aesthetic**: Minimal & elegant design (Apple-inspired)

---

## Design Principles

### Visual Design
- **Aesthetic**: Minimal & Elegant (Apple-inspired)
- **Focus**: Functionality over decoration
- **Theme**: Dark mode primary, with theme system for future light/auto modes
- **Typography**: Clean, readable fonts with clear hierarchy
- **Spacing**: Generous whitespace, uncluttered layouts

### Interaction Design
- **Progressive Disclosure**: Hide complexity until needed
- **Non-Destructive Exploration**: Guests can browse and adjust weights without accounts
- **Immediate Feedback**: Real-time updates, smooth animations
- **Mobile-First**: Responsive design with simplified mobile views

### Information Architecture
- **Content Over Chrome**: Minimize UI elements, maximize content visibility
- **Clear CTAs**: Obvious calls-to-action for account-required operations
- **Consistent Patterns**: Predictable navigation and interaction patterns

---

## Architecture Model

### Two Core Entities

#### 1. Template (Blueprint)
**Created by**: Any user with available template slots
**Purpose**: Define the structure for tier lists
**Contains**:
- Items (images + names)
- Attribute definitions (name, type, scale)
- Category assignment
- Metadata (title, description, creator)

**Does NOT contain**:
- Attribute values for items (users rate these)
- Weight configurations (defined in tier lists)
- Presets (moved to tier list level)

**Versioning**:
- Frozen when first tier list references it
- Has references → create new version to modify
- No references → can edit in place

**Visibility**: Public or Private

#### 2. Tier List (Instance)
**Created by**: Users with accounts, referencing a template
**Purpose**: Personal ratings and rankings based on a template
**Contains**:
- Reference to template (by ID, frozen version)
- User's attribute value assignments for each item
- Weight presets (0-5 custom configurations defined by tier list creator)
- Metadata (title, description, creator)

**Visibility**: Public or Private

---

## User Workflows

### Workflow A: Create Public Template
**Goal**: Share a blueprint for others to use
**Steps**:
1. User creates template with items and attributes
2. Sets category
3. Publishes as public
4. Optional: Immediately create their own tier list from it
5. Template frozen on first tier list reference

**Outcome**: Template available for community, creator gets credit on all derived tier lists

### Workflow B: Create Tier List from Public Template
**Goal**: Rate items and create personal rankings
**Steps**:
1. User browses/discovers template
2. Selects template
3. Rates all items (assigns attribute values)
4. Defines weight presets (0-5 configurations)
5. Publishes tier list

**Outcome**: Public tier list with dual attribution (template creator + tier list creator)

### Workflow C: Create Private Template + Tier List
**Goal**: Create tier list without sharing template
**Steps**:
1. User creates template marked as private
2. Template not discoverable by others
3. Creates tier list from private template
4. Publishes tier list (can be public)

**Outcome**: Tier list visible, but template remains private (single-use template)

### Workflow D: Fan → Influencer Collaboration
**Goal**: Fan creates template, influencer uses it
**Steps**:
1. Fan creates public template (e.g., "Best Valorant Agents")
2. Adds items and attributes (does the prep work)
3. Influencer/streamer discovers template
4. Influencer creates tier list, assigns ratings and presets
5. Both fan and influencer get attribution

**Outcome**: Network effect - fan gets exposure, influencer saves time

---

## Feature Requirements

### MVP (Phase 1)

#### Templates
- [x] Create template with items (images + names)
- [x] Define 2-8 attributes per template
- [x] Numeric attributes (custom scale, default 0-100)
- [x] Binary attributes (Yes/No, stored as boolean)
- [x] Custom tier labels (S/A/B/C or custom)
- [x] Category assignment (single category)
- [x] Public/private visibility
- [x] Draft auto-save
- [x] 3-day expiration for unpublished drafts
- [x] Manual item entry (TierMaker style)
- [x] Template versioning (frozen on first reference)
- [x] Template limit system (5 base, +1 per 20-25 references, cap 20-25 for free)

#### Tier Lists
- [x] Create from public or private template
- [x] Rate all items (assign attribute values)
- [x] Define 0-5 weight presets (custom perspectives)
- [x] Adjust weights with sliders + number inputs
- [x] Weights can exceed 100%, "SQUISH" button to normalize
- [x] Real-time tier updates (on slider release)
- [x] Preset selector (switch between defined perspectives)
- [x] Reset to default / Clear all weights
- [x] Public/private visibility
- [x] Dual creator attribution (template + tier list creators)
- [x] Like functionality
- [x] Share with weight configuration in URL
- [x] Social media preview cards (Open Graph)

#### Visualization
- [x] Custom tier labels (defined by template creator)
- [x] Dynamic tier thresholds (based on score distribution)
- [x] Image-only items (hover shows name, TierMaker style)
- [x] Show tier placement only (hide calculated scores)
- [x] Show empty tiers
- [x] Simplified mobile view
- [x] Smooth animations (when weights change)

#### Categories
- [x] 10 pre-defined categories with 5 subcategories each
- [x] Single category assignment per template/tier list
- [x] Category landing pages with infinite scroll
- [x] Browse by: Recent, Popular, References

#### Discovery
- [x] No direct search (browse-focused like TierMaker)
- [x] Top template + tier list per category
- [x] Infinite scroll for remaining content
- [x] Trending page (most viewed/liked last 7 days)
- [x] New page (recently published 24-48 hours)
- [x] Popular page (all-time most liked)
- [x] Featured page (100+ likes threshold)
- [x] Simple recommendations (category-based)
- [x] Verified Creators section (Twitch OAuth)

#### User Accounts & Profiles
- [x] Google OAuth login (MVP)
- [x] Public/private profile setting
- [x] Profile displays:
  - Templates created
  - Tier lists created
  - Total likes received
  - Bio/description
  - Social links (Twitch, YouTube, Twitter/X, Instagram, TikTok)
  - Verified badge (Twitch connected)
- [x] Private profiles show appropriate message

#### Social Features
- [x] Like templates (one per user, unlike enabled, public count)
- [x] Like tier lists (one per user, unlike enabled, public count)
- [x] Featured threshold: 100 likes for both
- [x] Share templates (copy link)
- [x] Share tier lists with weight config (copy link)
- [x] Open Graph preview cards

### Phase 2 (Post-MVP)

- [ ] Search functionality (templates, tier lists, items, creators)
- [ ] Autocomplete suggestions
- [ ] Advanced filters and sorting
- [ ] Comments system (top-level, moderation)
- [ ] Save custom weight configurations (as presets)
- [ ] Export tier list as image
- [ ] Tagging system (multiple categories)
- [ ] User-proposed subcategories (power users)
- [ ] Template forking/copying
- [ ] Additional OAuth providers (Instagram, Twitter/X, TikTok)
- [ ] Attribute metadata (descriptions, units, icons)
- [ ] Bulk item import (CSV/JSON)
- [ ] Smart recommendations (ML-based)
- [ ] Notifications system
- [ ] Advanced analytics for creators

### Phase 3 (Scale)

- [ ] Premium subscriptions (ad-free, unlimited templates, analytics)
- [ ] Tiered pricing for template limits
- [ ] Google AdSense integration
- [ ] Affiliate link integration (Amazon, REI, etc.)
- [ ] Creator revenue share program
- [ ] Collaborative templates (multiple creators)
- [ ] Template version history UI
- [ ] Email digest notifications
- [ ] Community moderation program
- [ ] Template collections/playlists
- [ ] Public API for third-party integrations

---

## UI/UX Specifications

### Homepage

#### Hero Section
- Headline explaining value proposition
- CTA button ("Create Your Tier List" or "Get Started")
- Clean, minimal design with ample whitespace

#### Main Content
- **Category Grid**: Simple text grid with subtle hover effects
- **Featured Lists Section**: Curated/popular templates and tier lists
- **Featured Creators Section**: Verified creators with profile avatars
- **Search**: Autocomplete that prioritizes verified creators (Phase 2)

#### Bottom
- **How It Works**: 3-4 step explanation

### Template Viewer Page

**Layout**: (Design decisions delegated based on principles)
- Tier visualization (center-focused or left-main layout)
- Weight controls (sidebar, bottom panel, or top bar)
- Template info header (title, creator, like count, share)
- Item details (hover tooltip or click modal)
- Preset selector (prominent placement)

**Key Elements**:
- Dual creator attribution clearly visible
  - "Template by @username" (with profile link)
  - "Rated by @username" (with profile link)
- Like button (requires login)
- Share button (copy link with current weights)
- Weight sliders + number inputs
- "SQUISH" button (normalize weights to 100%)
- Reset / Clear all buttons
- Preset dropdown/selector

### Template Creator Flow

**Multi-step or single page**: (Design decision)
- Step 1: Template details (title, description, category)
- Step 2: Define attributes (2-8 attributes, names, types, scales)
- Step 3: Add items (images + names, manual entry)
- Step 4: Preview & publish (or save draft)

**Features**:
- Auto-save drafts (every X seconds)
- 3-day expiration warning for unpublished drafts
- Preview mode before publishing
- Prompt to create tier list after publishing

### Tier List Creator Flow

**From Template**:
- Step 1: Select template
- Step 2: Rate items (assign attribute values for each item)
- Step 3: Define weight presets (0-5 custom configurations)
- Step 4: Preview & publish

**Rating Interface**:
- Simple input method for attribute values (number input, slider, or quick rating)
- Progress indicator (X/Y items rated)
- Must rate all items before publishing (or allow partial with defaults)

---

## Category System

### 10 Pre-Defined Categories

#### 1. Gaming
- League of Legends
- Valorant
- Fortnite
- Minecraft
- RPG Games

#### 2. Sports & Fitness
- Climbing
- Running
- Basketball
- Soccer
- Gym & Training

#### 3. Food & Drink
- Restaurants
- Recipes
- Snacks
- Coffee & Tea
- Fast Food

#### 4. Technology
- Laptops
- Smartphones
- Software & Apps
- Headphones
- Gaming Gear

#### 5. Entertainment
- Movies
- TV Shows
- Books
- Anime
- Podcasts

#### 6. Music
- Artists
- Albums
- Songs
- Genres
- Music Videos

#### 7. Lifestyle
- Travel
- Fashion
- Home & Decor
- Beauty
- Productivity

#### 8. Outdoor & Adventure
- Hiking
- Camping
- Water Sports
- Gear & Equipment
- Adventure Travel

#### 9. Content Creators
- Streamers
- YouTubers
- Podcasters
- Social Media
- Channels

#### 10. Education & Learning
- Online Courses
- Books & Resources
- Learning Tools
- Languages
- Career & Skills

### Category Expansion (Phase 2)
- Power users can propose new subcategories
- Admin approval process
- Community-driven expansion

---

## Social Features

### Likes
- Both templates and tier lists can be liked
- One like per user per item
- Unlike functionality enabled
- Public like count displayed
- Featured threshold: 100 likes

### Sharing
- Share templates (base blueprint)
- Share tier lists (with current weight configuration in URL params)
- Copy link button
- Open Graph meta tags for social media previews
- Preview cards show:
  - Title
  - Creator(s)
  - Category
  - Thumbnail (top item or tier list preview)
  - Like count

### User Profiles
- Public or private (user-controlled)
- Private profiles show message: "This profile is private"
- Public profiles display:
  - Username
  - Bio (optional)
  - Social links (Twitch, YouTube, Twitter/X, Instagram, TikTok)
  - Verified badge (if Twitch connected)
  - Templates created (count + list)
  - Tier lists created (count + list)
  - Total likes received across all content
  - Join date

### Verified Creators
- **MVP**: Twitch OAuth integration
  - Connect Twitch account → verified badge
  - Appears in "Verified Creators" section
- **Phase 2**: Instagram, Twitter/X, TikTok, YouTube
- Verification persists across all templates and tier lists
- Verification badge visible on profiles and content

---

## Constraints & Limits

### Templates
- **Items per template**: 3-50 (from technical docs)
- **Attributes per template**: 2-8 (enforced)
- **Attribute types**: Numeric (custom scale, default 0-100), Binary (Yes/No)
- **Tier labels**: Custom (defined by template creator)
- **Category**: Single (MVP), multiple via tags (Phase 2)
- **Draft expiration**: 3 days for unpublished templates
- **Versioning**: Frozen on first tier list reference

### Tier Lists
- **Weight presets**: 0-5 per tier list
- **Preset weights**: Must sum to 100% (can exceed temporarily, "SQUISH" to normalize)
- **Rating**: Must rate all items (or define partial rating strategy)

### User Limits
- **Base template limit**: 5 templates per user (free tier)
- **Limit increase**: +1 slot per 20-25 tier list references (across all templates)
- **Free tier cap**: 20-25 templates max
- **Premium tier**: Higher cap or unlimited (Phase 3)

### Featured Content
- **Threshold**: 100 likes (for both templates and tier lists)
- **Display**: Separate featured sections

### Performance (from Technical Docs)
- **Scaling target**: 10k concurrent users
- **Load time**: < 2s
- **Animations**: 60fps
- **Tier updates**: On slider release (test live updates later)

---

## Phasing

### Phase 1 (MVP) - Target: 3-4 months
**Goal**: Launch functional tier list platform with core features

**Focus**:
- Template and tier list creation
- Weight-based dynamic rankings
- Google OAuth login
- 10 categories with subcategories
- Browse/discovery (no search)
- Likes and sharing
- Dual creator attribution
- Twitch verification
- Responsive web + PWA

**Exclusions**:
- Comments
- Search functionality
- Advanced analytics
- Monetization
- Template forking
- Image exports

### Phase 2 (Post-MVP) - Target: +2-3 months
**Goal**: Enhance discovery, engagement, and creator tools

**Focus**:
- Search and autocomplete
- Comments system
- Advanced filters
- Save custom presets
- Export as image
- User-proposed subcategories
- Additional OAuth providers
- Attribute metadata
- Notifications

### Phase 3 (Scale) - Target: +4-6 months
**Goal**: Monetization and advanced features

**Focus**:
- Premium subscriptions
- Google AdSense
- Affiliate links
- Creator revenue share
- Advanced analytics
- Public API
- Template collections
- Email digests
- Community moderation

---

## Success Metrics

### MVP Launch
- 1,000 registered users in first month
- 500 public templates created
- 2,000 tier lists created
- 10% DAU/MAU ratio
- < 2s average load time
- 100+ featured templates (organic)

### Phase 2
- 10,000 registered users
- 5,000 public templates
- 20,000 tier lists
- 100 verified creators
- 20% DAU/MAU ratio

### Phase 3
- 50,000 registered users
- 500 premium subscribers
- $2,000 MRR (ads + subscriptions)
- 500 verified creators

---

## Next Steps

1. **Database Schema Design** (Prisma)
   - Define Template, TierList, User, Like, Category models
   - Relationships and indexes
   - Migration strategy

2. **API Design**
   - RESTful endpoints for templates, tier lists, users
   - Request/response formats
   - Error handling
   - Rate limiting

3. **UI/UX Design**
   - Wireframes for key pages (homepage, template viewer, creator flows)
   - Component library (buttons, inputs, cards)
   - Color palette and typography
   - Dark mode theme

4. **Technical Setup**
   - Initialize Prisma with Supabase
   - Set up Next.js 15 project structure
   - Configure Tailwind with dark mode
   - Set up Google OAuth

5. **MVP Development**
   - Core features first (templates, tier lists, rankings)
   - Authentication and authorization
   - Category and browse pages
   - Social features (likes, sharing)
   - Deploy to Vercel

---

**Document Status**: ✅ Complete
**Ready for**: Database schema design and technical implementation planning
