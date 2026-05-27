const SECTIONS = [
  { id: 'layout-patterns',       label: 'Layout patterns',           color: '#3b82f6' },
  { id: 'navigation-behaviors',  label: 'Navigation behaviors',      color: '#8b5cf6' },
  { id: 'interaction-density',   label: 'Interaction density',       color: '#10b981' },
  { id: 'trust-signals',         label: 'Trust signals',             color: '#ef4444' },
  { id: 'payment-expectations',  label: 'Payment expectations',      color: '#f59e0b' },
  { id: 'accessibility',         label: 'Accessibility',             color: '#06b6d4' },
  { id: 'social-behaviors',      label: 'Social behaviors',          color: '#ec4899' },
  { id: 'color-meaning',         label: 'Color meaning & theory',    color: '#f97316' },
  { id: 'typography',            label: 'Typography preferences',    color: '#64748b' },
  { id: 'visual-language',       label: 'Visual language & imagery', color: '#a855f7' },
  { id: 'heritage',              label: 'Traditional art & heritage',color: '#84cc16' },
  { id: 'heuristics',            label: 'Cultural UX heuristics',    color: '#0ea5e9' },
]

const AMAZON_HOME = {
  sections: SECTIONS.map(s => ({ ...s, countries: ({
    'layout-patterns': {
      US: 'Single full-width hero banner with one promotional focus and CTA above the fold. Below: horizontally scrollable recommendation carousels. The homepage is an entry point, not a catalog — users are expected to search or drill into categories.',
      BR: 'Shares the US structural skeleton but the hero zone surfaces installment pricing (parcelas) and payment method badges as primary content. Financial context is part of the entry experience, not a checkout detail.',
      JP: 'Dense multi-strip layout with no single hero. Stacked promotional strips, category navigation rows, and tightly packed product grids treat the homepage as a comprehensive storefront catalog. Every pixel earns its place.',
    },
    'navigation-behaviors': {
      US: 'Search bar is the primary entry point — deeply habituated behavior. Top category nav and hamburger All-menu for depth. Personalized recently viewed and recommendation sections guide browsing.',
      BR: 'Same search-first structure, but Ofertas (Deals) is a more prominent navigation destination. Localized promotional entry points reflect a deal-seeking navigation pattern.',
      JP: 'Dense horizontal category bar with many visible options simultaneously. Amazon Points balance visible in the nav — points system participation is normalized as part of the browsing context.',
    },
    'interaction-density': {
      US: 'Low-medium above the fold. Generous hero whitespace. Algorithmic carousels fill below-the-fold space. The page minimizes cognitive load at entry.',
      BR: 'Medium. More promotional strips than the US version. Urgency copy and payment badge density increase visual load — consistent with Brazilian retail communication norms.',
      JP: 'High. Multiple promotional strips, dense category navigation, tightly packed product rows with minimal whitespace. Density signals product range and thoroughness to Japanese shoppers.',
    },
    'trust-signals': {
      US: 'Prime badge, review counts (volume matters as much as score), Amazon\'s Choice label, estimated delivery dates, and verified seller ratings.',
      BR: 'Frete grátis (free shipping) as primary trust signal. Parcelas count ("em 12x sem juros"), Pix cashback badge, official store badge, and secure purchase seal.',
      JP: 'Official manufacturer seller verification badges, Amazon Points visibility, precise shipping windows ("arrives tomorrow by 8 PM"), and detailed product specification visibility at card level.',
    },
    'payment-expectations': {
      US: 'Credit/debit, Amazon Pay, BNPL via Affirm, gift cards. One-click purchase is the conversion model. Payment is assumed to be on file.',
      BR: 'Parcelamento is the primary way purchase cost is understood — the monthly installment IS the price in the Brazilian consumer mental model. Pix is a major fast-growing option. Boleto bancário still present.',
      JP: 'Credit cards, Amazon Pay, convenience store payment (konbini), cash on delivery, Amazon gift cards, and points redemption. Konbini payment has deep cultural roots — paying cash at 7-Eleven for an online order is natural.',
    },
    'accessibility': {
      US: 'WCAG 2.1 AA compliance. Skip navigation, keyboard-accessible carousels, alt text on product imagery. Color is not the sole indicator of state.',
      BR: 'Same baseline as US, adapted for PT-BR content. Screen reader support for Portuguese. Financial information (installment breakdowns) must be readable by assistive technology.',
      JP: 'High information density is culturally expected, not an accessibility failure. Strong typographic hierarchy required. Furigana support for kanji in some contexts.',
    },
    'social-behaviors': {
      US: 'Review count as social proof metric. "Customers who bought this also bought" as social navigation. Wishlist sharing. Subscribe & Save as commitment signal.',
      BR: 'Urgency copy ("Só hoje!", "Últimas unidades") has higher social acceptance than in US contexts. Deals shared via WhatsApp between family and friend groups is a significant discovery channel.',
      JP: 'Review count and detail depth are primary social signals. Manufacturer verification functions as institutional social proof. Product ranking within category is displayed and trusted.',
    },
    'color-meaning': {
      US: '#FF9900 orange for CTAs and Prime signaling — action, energy, brand identity. #131921 dark nav conveys premium reliability. White product cards signal clarity. Standard Western tech-retail color vocabulary.',
      BR: 'Core Amazon palette maintained. Promotional banners adopt the saturated visual energy of Brazilian retail advertising — more chromatic intensity is expected and reads as promotional enthusiasm rather than visual noise.',
      JP: 'Same core palette, but the visual field is significantly busier. Red for urgency/deal signaling competes with more visual elements. White space reduction doesn\'t register as cluttered — it registers as comprehensive.',
    },
    'typography': {
      US: 'Amazon Ember (custom sans-serif) — neutral, functional, wide language support. Hierarchy driven by size and weight. Readability over expression. No cultural specificity.',
      BR: 'Portuguese promotional copy tends toward more exclamatory, emotive tone. Installment pricing typography is bold and prominently sized — it\'s a functional information priority, not a footnote.',
      JP: 'Japanese typographic system requires careful balance of kanji (density/authority), hiragana (approachability), and katakana (foreign/technical terms). Smaller type sizes are acceptable at higher density.',
    },
    'visual-language': {
      US: 'Lifestyle photography in hero banners — aspirational, diverse, situation-based. Product pages: pure product photography on white. Clean studio style throughout.',
      BR: 'Similar to US product photography. Promotional banners incorporate Brazilian visual communication conventions: bold type, high saturation, product-prominent framing.',
      JP: 'Product-first photography dominates over lifestyle. Multiple images per unit area. Technical diagrams and specifications as visual content. Manufacturer packaging imagery carries trust weight.',
    },
    'heritage': {
      US: 'No overt cultural heritage references. Generic Western digital commercial aesthetic. Brand consistency prioritized over cultural specificity.',
      BR: 'Brazilian commercial design tradition of vibrant, energetic visual communication. The Saturday market (feira) tradition of visible pricing and direct deal-making has a digital equivalent in the homepage\'s financial transparency.',
      JP: 'Japanese visual culture\'s value of completeness (全体性) — showing the full picture rather than a curated selection. Relationship to the printed mail-order catalog (通販カタログ) tradition. Attention to detail as cultural virtue.',
    },
    'heuristics': {
      US: 'Search-first behavior is deeply habituated — the homepage is a launchpad, not a destination. Algorithmic personalization is expected and trusted. Review count is a primary decision signal — more reviews outweighs a better rating with fewer reviews.',
      BR: 'Parcelamento is not a payment option — it is the primary price frame. Removing it signals financial opacity and immediately undermines trust. Frete grátis is a conversion trigger. Urgency copy is part of the expected commercial register.',
      JP: 'Density signals range and credibility — sparse layouts read as limited inventory. Explicit shipping precision (not "2–3 days" but "tomorrow by 8 PM") is a conversion driver. The points system is habitual participation, not a promotional extra.',
    },
  })[s.id] })),
  sources: [
    { label: 'Nielsen Norman Group — E-Commerce UX: Homepages and Category Pages (2023)', href: '#' },
    { label: 'EBANX — Beyond Borders: Brazil Digital Commerce Report (2024)', href: '#' },
    { label: 'Baymard Institute — International E-Commerce UX Benchmarking (2023)', href: '#' },
    { label: 'Culture & UX — Information Density in East Asian Digital Design (2022)', href: '#' },
  ],
}

const AMAZON_PRODUCT = {
  sections: SECTIONS.map(s => ({ ...s, countries: ({
    'layout-patterns': {
      US: 'Left column: product image gallery. Right column: buy box (title, rating, price, CTA). Below the fold: description, specifications, customer reviews, related products. Hierarchy directs to conversion first, research second.',
      BR: 'Same structural skeleton as US, but the buy box has a fundamentally different information hierarchy. Parcelamento pricing is the headline price — "12x de R$29,90 sem juros" dominates. Total price is secondary. Pix discount badge appears prominently.',
      JP: 'Denser buy box with more visible information — points earned, multiple buying options, extensive specification table often visible without scrolling. Manufacturer information section prominent above the fold.',
    },
    'navigation-behaviors': {
      US: 'Breadcrumb back to category and search results. "Back to results" shortcut. Related product carousels create lateral browsing paths. Sponsored products integrated in browse flow.',
      BR: 'Same as US. WhatsApp sharing CTA may appear for eligible products. Deals and Ofertas navigation entry points more prominent.',
      JP: 'Detailed breadcrumb hierarchy. Category ranking displayed ("Rank #3 in Kitchen Appliances"). Related products organized by function. Sponsored content clearly differentiated.',
    },
    'interaction-density': {
      US: 'Medium-high. Substantial information available, but staged — basic info in buy box, deeper detail below. Expandable sections manage progressive disclosure.',
      BR: 'Medium-high, similar to US but with additional financial information layers: payment breakdown, Pix discount, cashback. These are primary content, not secondary details.',
      JP: 'High. Specification tables are extensive and expected to be read. Multiple condition options. Points information. Manufacturer vs. third-party distinction prominently displayed.',
    },
    'trust-signals': {
      US: 'Aggregate star rating (count matters as much as score), Amazon\'s Choice badge, Prime delivery date, seller rating for third-party listings, Verified Purchase on reviews, Frequently Bought Together.',
      BR: 'Parcelamento terms (installment count, interest rate) displayed upfront. Pix discount prominently badged. "Enviado pela Amazon" (Fulfilled by Amazon) as trust differentiator. Frete grátis indicator.',
      JP: 'Manufacturer-sold badge is the primary trust signal. Amazon Points visible (earned on this purchase). Precise delivery time. Detailed specification table completeness signals quality. Review count and recency.',
    },
    'payment-expectations': {
      US: 'Add to Cart / Buy Now (1-click). BNPL via Affirm ("as low as $X/month"). Subscribe & Save for eligible products. Gift options at checkout.',
      BR: 'Installment structure is the primary price frame. Pix offers a discount (typically 5–10%) and functions as both a payment method and a savings mechanism. Credit card installments dominate.',
      JP: 'Credit cards, Amazon Pay, konbini payment, cash on delivery, points redemption. Installment options available via credit card but not surfaced as prominently as Brazil\'s parcelamento.',
    },
    'accessibility': {
      US: 'Product images require alt text (compliance varies by seller). Size guides accessible. Color/variant selection doesn\'t rely on color alone. Keyboard navigable.',
      BR: 'PT-BR alt text and screen reader compliance. Financial information must be accessible — installment breakdowns need to be readable by assistive technology.',
      JP: 'Extensive specification tables need clear structure for screen reader navigation. Furigana support for complex kanji in product names. High information density requires strong semantic HTML hierarchy.',
    },
    'social-behaviors': {
      US: 'Review count and star distribution as primary social proof. "Customers also bought" as social navigation. Q&A section: community-answered questions. Wishlist and gifting signals.',
      BR: 'WhatsApp share for products is culturally significant — deals spread through family and friend groups. Local Portuguese-language reviews weighted higher in credibility.',
      JP: 'Q&A section actively used — Japanese consumers ask and answer detailed technical questions. Review thoroughness valued over volume. "Helpful" vote on reviews carries weight.',
    },
    'color-meaning': {
      US: 'Orange Add to Cart and Buy Now CTAs — consistent brand action color. Star ratings in Amazon orange. Prime blue for subscription/loyalty signaling.',
      BR: 'Same CTA palette. Pix payment badge (teal/blue-green from Banco Central\'s Pix branding) appears as a distinct trust color in the buy box.',
      JP: 'Same core palette. Points earned displayed in Amazon orange reinforcing the reward system visually. Red for deal pricing urgency. Clean white product area maintained despite density.',
    },
    'typography': {
      US: 'Product titles can be very long (SEO-loaded) — a known UX tension. Hierarchy maintained through size and weight. Review typography: readability-first.',
      BR: 'Installment pricing typography must be large and legible — it\'s primary information. R$ currency symbol precedes all prices. Promotional urgency copy ("Aproveite", "Só restam X") in bold.',
      JP: 'Product names include both Japanese market name and English/romaji technical name. Specification tables use strict tabular alignment. Katakana for technical specs and foreign brand names.',
    },
    'visual-language': {
      US: 'Pure product photography on white background for primary images. Multiple angle views expected. Lifestyle/context images secondary. Video increasingly common for complex products.',
      BR: 'Same photography standards as US. Promotional imagery adopts Brazilian retail visual conventions — bold, price-forward, direct.',
      JP: 'Multiple product images expected, including technical diagrams and use-context shots. Packaging images carry trust weight. Scale reference images valued. Video reviews growing.',
    },
    'heritage': {
      US: 'No specific heritage references. Functional commercial aesthetic — the product is the visual focus.',
      BR: 'Brazilian market culture of direct, relationship-based commerce. The installment system\'s cultural roots in a market where lump-sum prices historically excluded large segments of the population — financial transparency as democratization.',
      JP: 'Monozukuri (ものづくり) — the craft of making things well — as an implicit product evaluation framework. Packaging as product extension. Specification completeness as respect for the customer\'s right to full information.',
    },
    'heuristics': {
      US: 'Review count creates trust through volume — 10,000 reviews at 4.2 stars outweighs 50 reviews at 4.9. The buy box is the conversion zone — everything else is justification.',
      BR: 'Never show only the total price — always lead with parcelamento. Pix discount is a conversion lever. "Fulfilled by Amazon" matters more in markets with delivery trust gaps. Review recency matters — Brazilians check whether reviews are recent.',
      JP: 'Specification completeness builds trust — an incomplete spec table raises doubt about product quality. Manufacturer-sold products are strongly preferred over third-party. Points balance awareness is habitual — shoppers factor it into purchase decisions.',
    },
  })[s.id] })),
  sources: [
    { label: 'Baymard Institute — Product Page UX: 40 Actionable Guidelines (2023)', href: '#' },
    { label: 'EBANX — Beyond Borders: Brazil Digital Commerce Report (2024)', href: '#' },
    { label: 'Rakuten Intelligence — Japanese E-Commerce Consumer Behavior (2023)', href: '#' },
    { label: 'Nielsen Norman Group — Credibility and Trust in E-Commerce (2022)', href: '#' },
  ],
}

const MCDONALDS_HOME = {
  sections: SECTIONS.map(s => ({ ...s, countries: ({
    'layout-patterns': {
      US: 'Full-width hero showcasing a featured menu item with a prominent Order Now CTA above the fold. Below: simplified module rows for delivery, app download, and featured offers. Navigation is sparse — speed and simplicity are the primary values.',
      BR: 'Similar hero structure to US but with more promotional content visible in the initial viewport. McDelivery (iFood/Rappi context) and app offers surface higher. Combo pricing and special offers get prominent card placement.',
      JP: 'Clean, grid-organized homepage with seasonal campaign hero. Below the fold: current campaign items, limited-time products, and nutrition/allergen access. Structure emphasizes category clarity over promotional maximalism.',
    },
    'navigation-behaviors': {
      US: 'Sticky top nav with minimal links: Menu, Deals, Rewards, Locations. App download CTA persistently surfaced. Search is secondary — users are expected to browse or go directly to order.',
      BR: 'McDelivery pathway is a primary CTA alongside Order Now. App download surfaced aggressively. Location and delivery address selection featured early in the flow.',
      JP: 'Organized top nav with clear categories. Seasonal items get dedicated navigation entry points. Allergen and nutrition info is a visible navigation option — not buried.',
    },
    'interaction-density': {
      US: 'Low. Large visual blocks, generous whitespace, one primary action per section. Designed to minimize decision fatigue and convert to order quickly.',
      BR: 'Medium. More promotional strips than the US version. Special offers, limited-time combos, and McDelivery deals increase visual density without feeling cluttered by Brazilian market standards.',
      JP: 'Medium-low. Organized, purposeful. Whitespace used deliberately. The page is informative without being dense — thoroughness without maximalism.',
    },
    'trust-signals': {
      US: 'Brand recognition is the primary trust signal. Nutritional information accessible but not foregrounded. Rewards program membership signals habitual trust.',
      BR: 'McDelivery reliability, official app badges, local menu items that signal cultural authenticity (pão de queijo, Cheddar McMelt). Pricing clarity is a trust signal.',
      JP: 'Food safety and allergen transparency are primary trust mechanisms. Quality certification imagery. Precise calorie counts and ingredient transparency. The brand\'s presence in Japan since 1971 provides institutional trust.',
    },
    'payment-expectations': {
      US: 'Credit/debit, Apple Pay, Google Pay, McDonald\'s app balance, contactless at POS. Digital wallet and app-native payment are increasingly primary for the loyalty segment.',
      BR: 'Cartão de crédito, Pix, cash at POS, McDelivery platform payment. App-based payment growing rapidly.',
      JP: 'IC transit cards (Suica, Pasmo), credit cards, QR code payment (PayPay, LINE Pay), cash still accepted. App payment growing. Contactless expectation is very high.',
    },
    'accessibility': {
      US: 'High contrast between red, white, and yellow. Large tap targets, clear button labels. Meets WCAG 2.1 AA. Color alone is not used to convey meaning.',
      BR: 'Similar to US baseline. Portuguese alt text and screen reader support. Color contrast maintained across promotional banners.',
      JP: 'Strong allergen accessibility — filtering by allergy type is a key feature. Visual hierarchy clear. High standards for information availability.',
    },
    'social-behaviors': {
      US: 'MyMcDonald\'s Rewards prominently featured. Limited-time offers (LTOs) create social sharing moments. App-first ordering reinforces habitual engagement.',
      BR: 'Strong social media integration; campaign hashtags visible. McHappy Day charity campaign has high cultural resonance. Peer sharing of limited-time items is common.',
      JP: 'Seasonal limited items function as cultural events — collectible campaigns and collaborations. Japanese consumers document and share limited-time items significantly on social platforms.',
    },
    'color-meaning': {
      US: 'Red triggers appetite and urgency — a deliberate fast food convention. Yellow (Golden Arches) signals happiness, warmth, and approachability. The palette is a Western commercial fast food standard, instantly recognizable globally.',
      BR: 'Same brand colors, but promotional banners adopt the saturated, high-contrast visual energy typical of Brazilian retail and advertising. More visual intensity than the US equivalent — expected and read as enthusiasm.',
      JP: 'Same brand colors applied with more restraint. Red carries urgency but is balanced by clean white space to avoid aggression. Yellow used decoratively rather than dominantly. Japanese design sensibility moderates the Western color intensity.',
    },
    'typography': {
      US: 'Lovin\' Sans (custom typeface) — bold, rounded, optimistic. Communicates approachability and Americanized confidence. Headline-heavy; body copy minimal.',
      BR: 'Portuguese copy tends toward more exclamatory, emotive tone. Brand typeface maintained but adapted for Portuguese linguistic rhythm and promotional energy.',
      JP: 'Balance of kanji, hiragana, and romaji requires careful typographic hierarchy. Seasonal product names often use katakana for freshness and novelty signaling.',
    },
    'visual-language': {
      US: 'Studio-lit food photography with hero-style composition. Food presented at peak appetite appeal. Lifestyle imagery shows diverse, happy consumers. Clean white backgrounds.',
      BR: 'Same food photography quality as US, supplemented with local menu item hero moments. Brazilian cultural references (carnival colors, football imagery) in seasonal campaigns.',
      JP: 'Precise, technically controlled food photography — often more exacting than US equivalent. Seasonal visual themes (sakura, autumn leaves, winter warmth) integrated into campaign imagery. Product accuracy is paramount.',
    },
    'heritage': {
      US: 'Rooted in 1950s American diner and roadside culture. Pop art sensibility in color use. Nostalgia and consistency as brand equity.',
      BR: 'Connects to Brazilian visual vibrancy — the tropicalist aesthetic tradition of intense color and energy. Street food culture parallel: fast, abundant, social.',
      JP: 'Seasonal sensitivity (四季/shiki, the four seasons) deeply embedded in visual choices. The concept of 旬 (shun — peak season/moment) drives the appeal of limited items. Craft and precision as aesthetic values.',
    },
    'heuristics': {
      US: 'Speed is the implicit contract. Reduce friction to order. Rewards loyalty loops keep users returning. Limited-time urgency drives revisits without feeling manipulative.',
      BR: 'Local menu items are cultural signals of belonging — their absence reads as generic globalism. McDelivery is a primary channel, not a secondary one. Promotional energy is expected and does not read as desperate.',
      JP: 'Seasonal scarcity drives stronger urgency than permanent promotional discounts. Allergen transparency is non-negotiable. Precision in food photography builds trust — ambiguous imagery undermines appetite appeal.',
    },
  })[s.id] })),
  sources: [
    { label: 'Euromonitor — Fast Food in Brazil: Consumer Trends (2024)', href: '#' },
    { label: 'Hakuhodo Institute of Life and Living — Japanese Consumer Behavior Report (2023)', href: '#' },
    { label: 'Nielsen — QSR Digital Ordering and Loyalty Report (2023)', href: '#' },
    { label: 'IBGE — Brazilian Digital Commerce and Payment Habits (2024)', href: '#' },
  ],
}

export const ANALYSIS_DATA = {
  'Amazon': {
    home:    AMAZON_HOME,
    product: AMAZON_PRODUCT,
  },
  "McDonald's": {
    home: MCDONALDS_HOME,
  },
}
