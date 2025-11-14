# Technical Design Document: Weighted Tier List Platform

## 1. Project Overview

### 1.1 Concept
A dynamic tier list platform that evolves beyond traditional static rankings by introducing weighted attributes. Instead of placing items in fixed tiers (S, A, B, C, D, F), list creators define measurable attributes for each item, and viewers can adjust attribute weights to see personalized rankings based on their priorities.

### 1.2 Core Innovation
**Traditional Tier Lists**: Static, opinion-based rankings
**Our Platform**: Dynamic, multi-criteria decision tool with personalized rankings

### 1.3 Value Proposition
- **For Creators**: Provide objective, data-driven lists with researched attributes
- **For Users**: Get personalized rankings that match their specific priorities
- **For Community**: Share templates, weight presets, and discover new perspectives

## 2. Core Features

### 2.1 Weighted Attribute System

#### Attribute Types
1. **Numeric Range (0-10 or custom scale)**
   - Example: "Spiciness Level" (0-10), "Performance Score" (0-100)
   - Use case: Quantifiable characteristics

2. **Binary (Yes/No)**
   - Example: "Contains Nuts", "Has Multiplayer", "Is Free-to-Play"
   - Use case: Boolean characteristics

3. **Categorical (Future consideration)**
   - Example: "Genre: Action/RPG/Puzzle", "Region: Asia/Europe/Americas"
   - Use case: Grouping and filtering

#### Weight Adjustment Mechanism
- Users adjust sliders/inputs to set importance (0-100%)
- Weights automatically normalize to 100% total
- Real-time recalculation of scores and rankings
- Smooth animations as items move between tiers

#### Scoring Algorithm
```
Item Score = Σ(attribute_value × attribute_weight) / total_weight

Example:
Laptop A: Performance(9) × 50% + Price(6) × 30% + Portability(7) × 20%
        = 4.5 + 1.8 + 1.4 = 7.7/10
```

### 2.2 Tier Visualization

#### Display
- Maintain familiar tier-style layout (S, A, B, C, D, F or custom tiers)
- Items automatically sorted within tiers or flow into appropriate tier based on weighted score
- Visual indicators showing score values
- Smooth CSS/JS animations when items move between tiers on weight changes

#### Customization
- Custom tier labels (e.g., "God Tier", "Top Pick", "Budget Option")
- Custom tier colors
- Custom tier count (3-8 tiers recommended)
- Score thresholds for each tier

### 2.3 Weight Presets

#### Purpose
Provide quick-select profiles for common use cases so users don't have to manually adjust every weight.

#### Implementation
- Creators define presets when building templates
- Each preset includes:
  - Name (e.g., "Budget Conscious", "Performance First", "Tank Build", "Speed Runner")
  - Description
  - Pre-configured weight distribution
  - Optional icon/badge

#### Examples by Domain

**Climbing Shoes:**
- "Beginner Friendly": High weight on Comfort, Price Value, Durability
- "Sport Climbing": High weight on Edging Performance, Rubber Grip, moderate Downturn
- "Bouldering Beast": High weight on Downturn Aggression, Rubber Grip, Heel/Toe Hooking
- "All-Day Comfort": High weight on Comfort, Fit, Breathability
- "Competition Ready": High weight on Performance, Sensitivity, Downturn

**Gaming Laptops:**
- "Budget Conscious": 50% Price Value, 30% Performance, 20% Other
- "Performance First": 60% Performance, 20% Build Quality, 20% Other
- "Portable Gamer": 40% Portability, 30% Battery Life, 30% Performance

**Food Rankings:**
- "Spice Lover": High weight on Spiciness, Flavor Intensity
- "Health Conscious": High weight on Nutrition, Low Calories
- "Budget Eats": High weight on Price Value, Portion Size

### 2.4 Template System

#### Template Components
1. **Metadata**
   - Title (e.g., "Best Climbing Shoes 2025")
   - Description
   - Category/Domain (Sports, Food, Tech, etc.)
   - Creator info
   - Creation/update date
   - Tags for discoverability

2. **Item List**
   - Each item includes:
     - Name
     - Image
     - Attribute values (scored by creator)
     - Optional description/notes

3. **Attribute Definitions**
   - Attribute name
   - Type (numeric/binary/categorical)
   - Scale (if numeric: 0-10, 0-100, etc.)
   - Default weight
   - Description/tooltip

4. **Weight Presets**
   - Pre-defined weight distributions
   - Names and descriptions
   - "Default" preset for initial view

5. **Tier Configuration**
   - Number of tiers
   - Tier labels
   - Tier colors
   - Score thresholds

#### Template Creation Flow
1. Choose category/domain
2. Define attributes (name, type, scale, default weight)
3. Add items with images
4. Score each item for each attribute
5. Create weight presets
6. Configure tier display
7. Preview and publish

### 2.5 Community Features

#### Sharing
- Unique URL for each template
- Social media share buttons (Twitter, Reddit, Discord)
- Embed codes for websites/blogs
- Export as image with weight settings visible

#### Discovery
- Browse templates by category
- Search by keywords/tags
- Sort by: Popular, Recent, Most Viewed, Trending, Featured
- User profiles showing created templates

#### Engagement
- View count tracking
- Like/favorite system
- Comments/discussions on templates
- Fork/remix templates (create variants)
- Share custom weight configurations

#### User Accounts
- Create and manage templates
- Save favorite templates
- Save custom weight preferences per template
- Follow creators
- Activity feed

### 2.6 AI-Powered Content Analysis & Contextual Advertising

#### Purpose
Generate revenue through highly relevant, contextual advertising that matches the tier list content, providing value to both users and advertisers.

**IMPORTANT**: AI content analysis is **only performed on Featured tier lists** (100+ likes). This optimizes costs and focuses resources on high-quality, high-traffic content.

#### AI Content Analysis (Featured Templates Only)
- **Automated Content Digestion**: AI analyzes template metadata, attributes, items, and descriptions to understand context
- **Topic Extraction**: Identifies primary topics, domains, and related keywords
  - Example: "Climbing Shoes" → Topics: outdoor sports, rock climbing, athletic gear, footwear
- **Semantic Understanding**: Goes beyond keywords to understand intent and user interests
  - Example: "Best Budget Gaming Laptops" → User interested in gaming, tech, value-conscious shopping
- **Attribute Analysis**: Uses weighted attributes to understand user priorities
  - Example: High weight on "Performance" → Show ads for high-end components
  - Example: High weight on "Price Value" → Show ads for deals and discounts

#### Ad Placement Strategy

**Featured Templates** (with AI analysis):
1. **Sidebar/Header Ads**: Highly targeted contextual display ads matched to AI-analyzed topics
2. **Native Ads**: Items in tier lists could be sponsored (clearly labeled)
3. **Affiliate Links**: AI-optimized product recommendations with affiliate revenue
4. **Recommended Products**: "Based on this tier list, you might like..." section with smart suggestions

**Non-Featured Templates** (without AI analysis):
1. **Generic Ads**: Standard ad network ads (Google AdSense auto-targeting)
2. **Category-Based Ads**: Simple matching based on template category field
3. **Optional**: No ads, or minimal ads to encourage reaching featured status

#### AI Implementation
- **Service Options**:
  - OpenAI GPT-4 API for content analysis
  - Anthropic Claude API (cost-effective for analysis tasks)
  - Custom fine-tuned model for specific tier list categories
- **Processing Flow**:
  1. **Trigger**: When template reaches featured status (100+ likes)
  2. Send template data to AI for analysis
  3. AI returns: primary topics, secondary topics, user intent, recommended ad categories
  4. Store analysis results in database (`aiAnalysis` field)
  5. Match with ad network categories (Google AdSense, Media.net, etc.)
  6. Serve highly relevant ads on template page
- **Cost Optimization**:
  - Only analyze featured templates (estimated 5-10% of all templates)
  - Reduces AI API costs by 90%+
  - Re-analyze if template is significantly updated

#### Example Analysis

**Template**: "Best Climbing Shoes for Beginners 2025"
```
AI Analysis Output:
{
  primaryTopics: ["rock climbing", "climbing shoes", "outdoor sports"],
  secondaryTopics: ["beginner gear", "athletic footwear", "sport equipment"],
  userIntent: "purchasing decision, beginner education",
  targetDemographics: ["outdoor enthusiasts", "beginners", "fitness-conscious"],
  adCategories: ["sporting goods", "outdoor gear", "climbing equipment", "athletic wear"],
  affiliateOpportunities: ["REI", "Backcountry", "Amazon Sports"],
  seasonality: "year-round with spring/summer peak"
}
```

**Ad Targeting**:
- Show ads for climbing gyms, outdoor retailers, climbing courses
- Affiliate links to recommended shoes on REI/Backcountry
- Sponsored content from climbing shoe brands

#### Privacy & User Experience
- Clearly labeled sponsored content
- No personal data collection for ads (contextual only)
- Option for ad-free experience (premium subscription)
- Non-intrusive ad placement that doesn't interfere with functionality
- Respect user preferences and browsing experience

### 2.7 Featured Tier Lists

#### Purpose
Highlight high-quality, community-validated tier lists to improve content discovery and incentivize creators to produce valuable content.

#### Featured Status Criteria

**Dynamic Threshold System**:
- **Initial Threshold**: 100 likes
- **Scaling Algorithm**: Threshold increases as platform grows
  ```
  Featured Threshold = Base Threshold × (1 + Platform Growth Factor)

  Platform Growth Factor = (Total Users / 1000) × 0.1
  OR
  Platform Growth Factor = (Total Likes / 10000) × 0.1

  Example Stages:
  - Launch (0-1000 users): 100 likes required
  - Growing (1000-5000 users): 150 likes required
  - Established (5000-20000 users): 250 likes required
  - Mature (20000+ users): 400+ likes required
  ```

#### Additional Quality Signals (Optional)
Beyond just likes, consider:
- **Engagement Rate**: Views to likes ratio (high engagement = quality)
- **Completion Rate**: Users who interact with weight sliders (shows utility)
- **Share Rate**: How often it's shared
- **Fork/Remix Count**: Community building on template
- **Recency**: Newer templates with high likes rank higher
- **Creator Reputation**: Established creators with history of quality content

#### Featured Template Benefits
1. **Visibility**:
   - Prominent placement on homepage
   - "Featured" badge on template card
   - Higher ranking in search results
   - Inclusion in "Featured" category/filter

2. **Monetization**:
   - **AI-powered ad targeting**: Featured templates receive AI content analysis
   - **Premium ads**: Higher CPM rates from better-targeted ads
   - **Affiliate opportunities**: AI identifies best affiliate partners
   - **Higher revenue share**: Featured creators earn more from ads (future)

3. **Creator Rewards** (Future):
   - Premium creator badge
   - Analytics dashboard
   - Priority support

4. **User Trust**:
   - Featured status signals quality and community validation
   - Helps users find best content quickly

#### Featured Template Display
- **Homepage Section**: "Featured Tier Lists" carousel/grid
- **Category Pages**: Featured templates at top of each category
- **Visual Indicator**: Gold/star badge, special border, "Featured" label
- **Sorting Option**: "Sort by: Featured First"

#### Automatic Status Updates
- Background job runs daily/hourly to recalculate featured status
- Templates can lose featured status if threshold increases and they fall below
- Notifications to creators when template becomes featured or loses status

## 3. Technical Architecture

### 3.1 Technology Stack
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API or Zustand (for complex state)
- **Drag & Drop**: @dnd-kit/core (modern, accessible, performant)
- **Animations**: Framer Motion or CSS transitions
- **Image Handling**: Next.js Image optimization
- **Database**: PostgreSQL (via Vercel Postgres or Supabase)
- **ORM**: Prisma or Drizzle ORM
- **Authentication**: NextAuth.js or Clerk
- **Storage**: Vercel Blob or AWS S3 for image uploads
- **AI/LLM**: Anthropic Claude API or OpenAI GPT-4 API for content analysis
- **Ad Networks**: Google AdSense, Media.net, or custom affiliate integration
- **Background Jobs**: Vercel Cron or dedicated job queue (BullMQ/Redis)
- **Deployment**: Vercel

### 3.2 Data Models

#### Template
```typescript
{
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  creatorId: string
  createdAt: Date
  updatedAt: Date
  viewCount: number
  likeCount: number
  shareCount: number
  forkCount: number
  isPublic: boolean
  isFeatured: boolean
  featuredAt?: Date

  // AI-generated content analysis (only populated for featured templates)
  aiAnalysis?: {
    primaryTopics: string[]
    secondaryTopics: string[]
    userIntent: string
    targetDemographics: string[]
    adCategories: string[]
    affiliateOpportunities: string[]
    seasonality?: string
    lastAnalyzed: Date
  }

  attributes: Attribute[]
  items: Item[]
  presets: WeightPreset[]
  tierConfig: TierConfig
}
```

#### Attribute
```typescript
{
  id: string
  templateId: string
  name: string
  type: 'numeric' | 'binary' | 'categorical'
  scale?: { min: number, max: number }
  defaultWeight: number
  description: string
  order: number
}
```

#### Item
```typescript
{
  id: string
  templateId: string
  name: string
  imageUrl: string
  description?: string
  attributeScores: { attributeId: string, value: number | boolean }[]
  order: number
}
```

#### WeightPreset
```typescript
{
  id: string
  templateId: string
  name: string
  description: string
  weights: { attributeId: string, weight: number }[]
  isDefault: boolean
}
```

#### TierConfig
```typescript
{
  tiers: {
    label: string
    color: string
    minScore: number
    maxScore: number
  }[]
}
```

### 3.3 Key Interactions

#### Real-Time Ranking Updates
1. User adjusts weight slider
2. Client-side calculation of new scores for all items
3. Sort items by new scores
4. Animate items moving to new tier positions
5. Update tier assignments

#### Template Viewer Page
- URL structure: `/template/[templateId]`
- Load template data (SSR or ISR for SEO)
- Initialize with default weights/preset
- Interactive weight controls
- Tier display with items
- Share/like/comment UI

#### Template Creator Page
- URL structure: `/create` or `/edit/[templateId]`
- Multi-step wizard or tabbed interface
- Image upload with preview
- Attribute management (add/remove/reorder)
- Item scoring interface (table or card grid)
- Preset creation
- Live preview

#### AI Analysis & Ad Serving Flow

1. **Featured Status Check** (Background Job):
   - Runs periodically (hourly/daily)
   - Calculate current featured threshold
   - Update `isFeatured` status for all templates
   - **When template becomes featured**: Trigger AI analysis job
   - Send notifications to creators on status change

2. **AI Analysis** (Only for Featured Templates):
   - Template reaches featured status (100+ likes)
   - Trigger async AI analysis job
   - AI analyzes title, description, attributes, items
   - Store analysis results in `aiAnalysis` field
   - Template now eligible for premium ad targeting

3. **Template Page Load - Featured**:
   - Load template data (SSR)
   - Retrieve AI analysis from database
   - Map AI categories to ad network categories
   - Request highly targeted ads from ad network
   - Render page with contextual ads

4. **Template Page Load - Non-Featured**:
   - Load template data (SSR)
   - Use basic category field for simple ad matching
   - Request generic ads from ad network (or no ads)
   - Render page with minimal/generic ads

5. **Dynamic Ad Adjustment** (Advanced - Featured Only):
   - User adjusts weights
   - Client-side detection of user intent shift
   - Request different ad categories if needed
   - Example: User shifts to high "Price Value" → Show discount/deal ads

## 4. MVP Scope (Proof of Concept)

### 4.1 Must-Have Features
- [ ] Template creation with basic form
- [ ] Numeric attribute support (0-10 scale)
- [ ] Binary attribute support (yes/no)
- [ ] Manual item entry with image URL (no upload yet)
- [ ] Default tier layout (S, A, B, C, D, F)
- [ ] Weight adjustment interface
- [ ] Real-time ranking calculation
- [ ] Animated tier transitions
- [ ] Template viewing page with shareable URL
- [ ] Basic responsive design

### 4.2 Nice-to-Have (Post-MVP)
- [ ] Weight presets
- [ ] User authentication
- [ ] Image upload to cloud storage
- [ ] Template browsing/discovery
- [ ] Social features (likes, comments)
- [ ] Export to image
- [ ] Template forking/remixing
- [ ] Custom tier configuration
- [ ] Categorical attributes
- [ ] Advanced animations and transitions

### 4.3 Revenue Features (Phase 2 - Post-MVP)
- [ ] AI content analysis integration
  - [ ] Set up AI API (Claude or GPT-4)
  - [ ] Build content analysis pipeline
  - [ ] Store AI analysis results in database
  - [ ] Test analysis accuracy across different domains
- [ ] Contextual advertising
  - [ ] Google AdSense integration
  - [ ] Ad placement UI (non-intrusive)
  - [ ] A/B testing for ad performance
- [ ] Featured tier lists system
  - [ ] Implement dynamic threshold calculation
  - [ ] Background job for featured status updates
  - [ ] Featured badge UI
  - [ ] Homepage featured section
  - [ ] Creator notifications
- [ ] Affiliate link integration
  - [ ] Amazon Associates setup
  - [ ] Affiliate link UI on items
  - [ ] Click tracking and analytics

### 4.4 Initial Domain Examples
1. **Climbing Shoes Rankings**
   - Attributes: Edging Performance, Comfort, Downturn Aggression, Rubber Grip, Durability, Price Value
   - Presets: Beginner Friendly, Sport Climbing, Bouldering Beast, All-Day Comfort, Competition Ready

2. **Marvel Characters** (MCU)
   - Attributes: Power Level, Popularity, Character Development, Screen Time, Comic Accuracy
   - Presets: Comic Fan, Casual Viewer, Action Focused

3. **Classic Novels**
   - Attributes: Writing Quality, Plot Complexity, Character Depth, Accessibility, Cultural Impact
   - Presets: Academic, Casual Reader, First-Time Reader

## 5. User Flows

### 5.1 Creator Flow
1. Click "Create Template"
2. Enter template details (title, description, category)
3. Define attributes (name, type, default weight)
4. Add items (name, image, attribute scores)
5. Create weight presets (optional)
6. Preview template
7. Publish and share

### 5.2 Viewer Flow
1. Land on template page via share link or browse
2. See default ranking with default weights
3. Read attribute descriptions
4. Adjust weights using sliders or select preset
5. Watch items animate to new positions
6. Share with custom weights (URL params)
7. Like/comment (if logged in)

### 5.3 Community Flow
1. Browse template gallery by category
2. Search for specific topics
3. View popular/trending templates
4. Save favorites
5. Fork template to create variant
6. Follow favorite creators

## 6. Technical Challenges & Solutions

### 6.1 Performance
**Challenge**: Recalculating scores for 50+ items on every weight change
**Solution**:
- Debounce weight changes (100-200ms)
- Memoize calculations with React.useMemo
- Consider Web Workers for heavy calculations

### 6.2 Animations
**Challenge**: Smooth transitions when many items change tiers simultaneously
**Solution**:
- Use Framer Motion's layout animations
- Stagger animations slightly for visual appeal
- CSS transform for GPU acceleration

### 6.3 State Management
**Challenge**: Complex state with items, attributes, weights, scores
**Solution**:
- Zustand or React Context for global template state
- Separate concerns: template data vs. user preferences
- Local storage for unsaved weight preferences

### 6.4 SEO & Sharing
**Challenge**: Dynamic content needs good preview cards
**Solution**:
- SSR template pages for initial load
- Generate Open Graph images with current rankings
- URL parameters for weight configurations

### 6.5 Image Optimization
**Challenge**: Many images loading simultaneously affects performance
**Solution**:
- Next.js Image component with lazy loading
- Optimize on upload (resize, compress, WebP conversion)
- CDN delivery

## 7. Future Enhancements

### 7.1 Advanced Features
- Comparison mode: Side-by-side comparison of 2-4 items
- AI suggestions: "Based on your weights, you might also like..."
- Historical tracking: See how rankings changed over time
- Collaborative templates: Multiple creators
- Version control: Track template changes

### 7.2 Monetization Strategy

#### Primary Revenue Streams

1. **Contextual Advertising** (Primary - Immediate)
   - AI-powered ad targeting based on tier list content
   - Google AdSense integration
   - Direct deals with niche advertisers (e.g., outdoor brands for climbing content)
   - Non-intrusive placement that maintains user experience
   - Estimated revenue: $1-5 CPM depending on niche

2. **Affiliate Marketing** (Primary - Immediate)
   - Affiliate links on items in tier lists
   - "Buy Now" buttons with affiliate tracking
   - Commission on purchases driven by tier lists
   - Partners: Amazon Associates, REI, specialized retailers
   - Higher revenue potential in high-intent niches (product reviews, buying guides)

3. **Premium Subscriptions** (Secondary - Post-Launch)
   - Ad-free browsing experience
   - Advanced creator analytics
   - Custom branding/white-label templates
   - Early access to new features
   - Higher storage limits for images
   - Priority support
   - Estimated: $5-10/month

4. **Featured Placements** (Secondary - Post-Launch)
   - Sponsored tier lists from brands
   - "Promoted" badge separate from "Featured"
   - Brands pay to have their tier lists highlighted
   - Clearly labeled as sponsored content

5. **Creator Revenue Share** (Long-term)
   - Share ad revenue with high-performing creators
   - Incentivize quality content creation
   - Similar to YouTube Partner Program model
   - Threshold: Must have X featured templates or Y total views

6. **API Access** (Long-term)
   - Paid API for developers to integrate tier lists
   - Webhook access for real-time updates
   - Bulk data exports
   - Enterprise pricing tiers

#### Revenue Optimization with AI (Featured Templates Only)
- **Dynamic Ad Selection**: AI continuously optimizes which ads perform best for each topic
- **User Intent Matching**: Serve different ads based on user's weight preferences
  - High "Price Value" weight → Budget/deal ads
  - High "Performance" weight → Premium product ads
- **A/B Testing**: AI-driven testing of ad placements and formats
- **Seasonal Adjustments**: Boost relevant content during peak seasons (climbing gear in spring/summer)

#### Benefits of Featured-Only AI Analysis
1. **Cost Efficiency**: 90%+ reduction in AI API costs
2. **Quality Focus**: Resources spent on high-traffic, validated content
3. **Creator Incentive**: Strong motivation to reach featured status
4. **Scalability**: System remains economical as platform grows
5. **Better ROI**: Premium ads on featured templates generate more revenue than generic ads on all templates

### 7.3 Mobile App
- Native iOS/Android apps
- Offline mode
- Push notifications for new templates
- Mobile-optimized creator tools

## 8. Success Metrics

### 8.1 Engagement
- Templates created per week
- Weight adjustments per session
- Time spent per template view
- Return visitor rate
- Weight preset usage rate

### 8.2 Community
- Share rate
- Comment activity
- Template forks/remixes
- User retention
- Featured templates count
- Average likes per template
- Creator retention rate

### 8.3 Revenue
- **Ad Performance**:
  - CPM (Cost Per Thousand Impressions)
  - CTR (Click-Through Rate)
  - Revenue per template view
  - Ad relevance score (AI-measured)
- **Affiliate Performance**:
  - Conversion rate
  - Average commission per click
  - Revenue per template
- **Subscription Metrics**:
  - Free to paid conversion rate
  - Monthly recurring revenue (MRR)
  - Churn rate
  - Lifetime value (LTV)

### 8.4 Content Quality
- Featured template percentage (target: 5-10% of all templates)
- Average template quality score
- AI analysis accuracy/relevance
- Templates reaching featured threshold
- Time to reach featured status

### 8.5 Technical
- Page load time < 2s
- Time to interactive < 3s
- Animation frame rate (60fps target)
- Error rate < 0.1%
- AI analysis processing time < 5s
- Ad serving latency < 200ms

## 9. Next Steps

1. Review and expand this document with stakeholders
2. Create wireframes/mockups for key pages
3. Set up development environment
4. Design database schema in detail
5. Build MVP template creator
6. Build MVP template viewer with weight adjustment
7. Implement scoring algorithm and animations
8. Create 2-3 example templates for testing
9. User testing and feedback
10. Iterate and add post-MVP features

---

**Document Version**: 1.2
**Last Updated**: 2025-11-13
**Author**: Technical Design based on initial concept discussion

**Changelog**:
- v1.2 (2025-11-13): **Important constraint**: AI analysis only for featured templates (cost optimization)
- v1.1 (2025-11-13): Added AI-powered content analysis & contextual advertising, Featured tier lists system, expanded monetization strategy
- v1.0 (2025-11-13): Initial document with core features, weighted attributes, and basic architecture
