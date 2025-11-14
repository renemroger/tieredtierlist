# Critical Decisions & Constraints

This document captures the key decisions that shape the platform's architecture, features, and scope. Use this as a quick reference during development.

**Last Updated**: 2025-11-13

---

## 1. Scaling Targets

| Metric | Target |
|--------|--------|
| **Concurrent Users** | 10,000 |
| **Total Users (Year 1)** | 50,000+ |
| **Templates** | 5,000-10,000 |
| **Featured Templates** | 500-1,000 (5-10%) |
| **Monthly Page Views** | 500,000 at scale |

**Performance SLAs**:
- Page Load: < 2s
- Time to Interactive: < 3s
- Animation FPS: 60fps
- API Response: < 500ms (p95)

---

## 2. Template Constraints

### Conservative Initial Limits
Based on TierMaker patterns, expandable as platform grows.

| Resource | Min | Max | Default | Notes |
|----------|-----|-----|---------|-------|
| **Title** | 10 chars | 100 chars | - | Required |
| **Description** | 20 chars | 500 chars | - | Required |
| **Items** | 3 | 50 | - | Can increase to 100 later |
| **Attributes** | 2 | 8 | - | Can increase to 10-12 later |
| **Weight Presets** | 0 | 5 | - | Optional |
| **Tiers** | 3 | 8 | 6 | S, A, B, C, D, F |
| **Image Upload** | - | 5MB | - | Compressed to 1MB |
| **Image Dimensions** | 100px | 4096px | 800px recommended |

### Validation Rules
- All items must have scores for all attributes
- Weights auto-normalize to 100%
- XSS prevention on all text inputs
- Basic profanity filter (Phase 1)
- Rate limiting: 10 templates/day per user

---

## 3. Authentication

### Google OAuth Only (MVP)
**Decision**: Start with Google OAuth exclusively

**Rationale**:
- Reduces spam and fake accounts
- Email verification automatic
- Simpler implementation (single provider)
- Real identity improves moderation

**Future Providers (Phase 2)**:
- GitHub (developers)
- Discord (gamers)
- Facebook (broad reach)
- Apple (iOS users)

**Session Management**:
- JWT tokens, 30-day expiration
- Secure httpOnly cookies
- Auto-renewal on activity

---

## 4. Content Moderation

### Flag/Report System

**Phase 1 (Manual)**:
- User reports with categories
- Admin dashboard (you as moderator initially)
- Actions: Dismiss, Warn, Remove, Ban

**Phase 2 (AI-Assisted)**:
- AI pre-screens reports
- Auto-flag violations (adult content, hate speech, spam)
- Prioritize reports for human review

**Report Categories**:
- Inappropriate content
- Spam
- Copyright infringement
- Misleading information
- Harassment
- Other (with description)

**Automated Filters (Phase 1)**:
- Basic profanity filter
- Duplicate template detection
- Rate limiting on template creation
- Image format/size validation

---

## 5. AI Content Analysis

### Featured Templates Only
**Critical Cost Optimization**: AI analysis performed **only on featured templates** (100+ likes)

**Benefits**:
- 90%+ reduction in AI API costs
- Focus on high-quality, high-traffic content
- Strong creator incentive
- Better ROI (premium ads on validated content)

**Process**:
1. Template reaches 100 likes → Featured status
2. Trigger AI analysis (async job)
3. AI analyzes content and generates ad targeting data
4. Store results in `aiAnalysis` database field
5. Serve premium, targeted ads

**AI Service**: Anthropic Claude API (cost-effective) or OpenAI GPT-4

---

## 6. Featured Tier Lists

### Dynamic Threshold System

**Initial Threshold**: 100 likes

**Scaling Formula**:
```
Featured Threshold = 100 × (1 + Growth Factor)
Growth Factor = (Total Users / 1000) × 0.1
```

**Example Stages**:
- Launch (0-1k users): 100 likes
- Growing (1k-5k users): 150 likes
- Established (5k-20k users): 250 likes
- Mature (20k+ users): 400+ likes

**Featured Benefits**:
- Homepage placement
- Featured badge
- AI-powered ad targeting
- Higher CPM rates
- Affiliate opportunities

---

## 7. SEO Strategy

### URL Structure
```
Template:  /t/best-climbing-shoes-2025-abc123
          (slug + short ID)
Category:  /category/sports
Profile:   /@username
Featured:  /featured
```

### Rendering Strategy
- **ISR** for template pages (revalidate: 1hr)
- **ISR** for category pages (revalidate: 30min)
- **ISR** for homepage (revalidate: 15min)
- **SSR** for search results, profiles

### MVP SEO Checklist
- ✓ Clean URLs with slugs
- ✓ ISR for static generation
- ✓ Meta tags (title, description)
- ✓ Open Graph + Twitter cards
- ✓ Dynamic sitemap
- ✓ robots.txt
- ✓ Mobile-responsive
- ✓ Fast load times (< 2s)

### Phase 2 SEO
- Structured data (JSON-LD)
- Auto-generated OG images
- Internal linking system
- Category landing pages

---

## 8. Technology Stack

### Core
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma or Drizzle
- **Auth**: NextAuth.js + Google OAuth
- **Deployment**: Vercel

### Services
- **Storage**: Vercel Blob → AWS S3 (at scale)
- **AI**: Anthropic Claude API
- **Ads**: Google AdSense
- **Email**: Resend or SendGrid
- **Jobs**: Vercel Cron
- **Monitoring**: Vercel Analytics + Sentry

### Libraries
- **State**: Zustand or React Context
- **Animations**: Framer Motion
- **Drag & Drop**: @dnd-kit/core
- **Images**: Next.js Image (automatic optimization)

---

## 9. Monetization Strategy

### Primary Revenue (Immediate)
1. **Contextual Ads** - Featured templates only
   - AI-powered targeting
   - Google AdSense
   - Est: $1-5 CPM

2. **Affiliate Marketing**
   - Amazon Associates, REI, etc.
   - "Buy Now" buttons on items
   - Higher intent = higher conversion

### Secondary Revenue (Post-Launch)
3. **Premium Subscriptions** - $5-10/mo
   - Ad-free experience
   - Advanced analytics
   - Custom branding

4. **Sponsored Placements**
   - Brands pay for promoted tier lists
   - Separate from organic "Featured"

### Long-term Revenue
5. **Creator Revenue Share**
   - YouTube Partner Program model
   - Threshold: X featured templates

6. **API Access**
   - Paid API for developers
   - Enterprise pricing tiers

---

## 10. Cost Projections

### Phase 1: MVP (Months 1-6)
- **Users**: 0-1,000
- **Templates**: 50-100
- **Monthly Cost**: **$0-50**
  - Vercel: $0-20
  - Database: $0-25
  - Storage: $0-5
  - Domain: $1
  - AI: $0 (no featured templates yet)

### Phase 2: Growth (Months 6-12)
- **Users**: 1,000-5,000
- **Templates**: 500-1,000 (50 featured)
- **Monthly Cost**: **$71-116**
  - Vercel Pro: $20
  - Database Pro: $25
  - Storage: $15-30
  - AI (50 featured): $10-30
  - Email: $0-10
  - Other: $1

### Phase 3: Scale (10k Users)
- **Users**: 10,000+
- **Templates**: 5,000+ (500 featured)
- **Monthly Cost**: **$166-410**
  - Vercel: $20
  - Database: $25-99
  - Storage: $50-100
  - AI (500 featured): $50-150
  - Email: $20
  - Monitoring: $0-20
  - Other: $1

### Revenue at Scale
- **Monthly Revenue**: $350-1,000
  - Ads: $200-500
  - Affiliates: $100-300
  - Subscriptions: $50-200

**Net Profit**: Break-even to **+$590/month** 🎉

---

## 11. Key Architectural Decisions

### Performance Optimizations
1. **Caching**:
   - ISR for static pages (1hr revalidation)
   - CDN for images (automatic via Vercel)
   - Client-side caching (React Query/SWR)

2. **Image Handling**:
   - Upload: 5MB max
   - Compress: to 1MB
   - Convert: to WebP
   - Generate: 3 sizes (thumbnail, medium, full)
   - Lazy load: Next.js Image component

3. **Code Splitting**:
   - Route-based (automatic)
   - Dynamic imports for heavy components
   - Separate creator bundle

4. **Database**:
   - Indexed queries (templateId, creatorId, isFeatured)
   - Connection pooling
   - Supabase for better free tier

### Rate Limiting
- Template creation: 10/day per user
- Likes/comments: 100/hour per user
- API requests: 1000/hour per IP

---

## 12. Development Phases

### MVP (Phase 1)
**Goal**: Prove core concept works

**Must-Have**:
- Template creation/viewing
- Weighted attributes (numeric, binary)
- Real-time ranking calculation
- Animated tier transitions
- Google OAuth
- Basic responsive design

**Out of Scope**:
- Image uploads (use URLs)
- Weight presets
- Social features
- AI analysis
- Ads

### Phase 2 (Growth)
**Goal**: Build community, start monetization

**Features**:
- Image upload to cloud
- Weight presets
- Likes, comments, shares
- Featured tier lists (100 likes)
- AI content analysis (featured only)
- Google AdSense integration
- User profiles
- Template browsing/discovery

### Phase 3 (Scale)
**Goal**: Sustainable revenue, advanced features

**Features**:
- Affiliate links
- Premium subscriptions
- Creator revenue share
- Advanced analytics
- Template forking/remixing
- Export to image
- Mobile app
- API access

---

## 13. Success Metrics

### Engagement
- Templates created/week
- Weight adjustments/session
- Time on template page
- Return visitor rate

### Community
- Share rate
- Comment activity
- Template forks
- Creator retention
- Featured template count

### Revenue
- CPM (ad revenue)
- CTR (click-through rate)
- Affiliate conversion rate
- Subscription conversion rate
- MRR (monthly recurring revenue)

### Technical
- Page load < 2s ✓
- Interactive < 3s ✓
- 60fps animations ✓
- Error rate < 0.1% ✓
- AI analysis < 5s ✓

---

## 14. Open Questions / Future Decisions

### To Decide Later
- [ ] Specific profanity filter implementation
- [ ] Affiliate partners to prioritize
- [ ] Premium subscription pricing ($5 or $10?)
- [ ] When to launch mobile app
- [ ] Community moderation program details
- [ ] Creator revenue share percentage
- [ ] API pricing tiers

### Monitor & Adjust
- [ ] Template item limit (50 → 100?)
- [ ] Attribute limit (8 → 12?)
- [ ] Featured threshold scaling formula
- [ ] AI API provider (Claude vs GPT-4?)
- [ ] Database provider (Supabase vs Vercel Postgres?)

---

## Quick Reference Table

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Auth** | Google OAuth only | Reduce spam, simple MVP |
| **Database** | Supabase + Prisma | Better free tier, great scaling |
| **AI** | Featured only (100+ likes) | 90% cost savings, quality focus |
| **Hosting** | Vercel | Perfect Next.js integration, free tier |
| **Items/Template** | Max 50 (MVP) | Conservative start, TierMaker-based |
| **Attributes/Template** | Max 8 (MVP) | Enough variety, avoid complexity |
| **Moderation** | Manual (Phase 1) | Simple, you as admin initially |
| **SEO** | ISR + slugs | Fast, SEO-friendly, scales well |
| **Monetization** | Ads + affiliates first | Immediate revenue, no paywall |
| **Featured Threshold** | 100 likes (dynamic) | Achievable, validates quality |

---

**Document Version**: 1.0
**Companion to**: TECHNICAL_DESIGN.md (v1.3)
**Purpose**: Quick reference for critical decisions and constraints
