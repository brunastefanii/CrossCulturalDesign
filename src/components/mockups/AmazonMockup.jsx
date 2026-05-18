import './AmazonMockup.css'

// ─── Country-specific copy ───────────────────────────────────────────────────
const COPY = {
  US: {
    greeting: 'Hello, sign in',
    account: 'Account & Lists',
    returns: 'Returns',
    orders: '& Orders',
    cart: 'Cart',
    deliverTo: 'Deliver to',
    location: 'New York 10001',
    searchPlaceholder: 'Search Amazon',
    allLabel: 'All',
    navLinks: ["Today's Deals", 'Customer Service', 'Registry', 'Gift Cards', 'Sell'],
    heroBg: 'linear-gradient(135deg, #1a2744 0%, #232F3E 100%)',
    heroTagline: 'BACK TO SCHOOL',
    heroTitle: 'Stock up & save big',
    heroSub: 'Electronics, supplies, and more — all in one place.',
    heroCta: 'Shop deals',
    section1: 'Top picks for you',
    section2: "Today's Deals",
    primeLabel: 'prime',
    freeShipping: 'FREE delivery',
    products: [
      { name: 'Sony WH-1000XM5 Wireless Headphones', price: '$279.99', oldPrice: '$349.99', stars: 4.8, reviews: '14,203', badge: 'Best Seller', prime: true },
      { name: 'Apple AirPods Pro (2nd Gen)', price: '$189.00', oldPrice: '$249.00', stars: 4.9, reviews: '41,720', badge: '', prime: true },
      { name: 'Kindle Paperwhite 16GB', price: '$99.99', oldPrice: '$139.99', stars: 4.7, reviews: '8,540', badge: "Amazon's Choice", prime: true },
      { name: 'Instant Pot Duo 7-in-1', price: '$59.99', oldPrice: '$99.95', stars: 4.7, reviews: '132,450', badge: 'Best Seller', prime: true },
      { name: 'LEGO Star Wars Millennium Falcon', price: '$169.99', stars: 4.9, reviews: '9,813', badge: '', prime: true },
      { name: 'Ninja AF101 Air Fryer 4QT', price: '$79.98', oldPrice: '$99.99', stars: 4.7, reviews: '37,221', badge: '', prime: false },
    ],
    searchQuery: 'wireless headphones',
    searchResultsCount: '1-24 of over 70,000 results',
    productTitle: 'Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones',
    productPrice: '$279.99',
    productOldPrice: '$349.99',
    productDiscount: 'Save $70.00',
    productRating: '4.8 out of 5 stars',
    productReviews: '14,203 ratings',
    inStock: 'In Stock',
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    cartTitle: 'Shopping Cart',
    cartItem: 'Sony WH-1000XM5 Noise Canceling Headphones',
    cartQty: 'Qty: 1',
    cartItemPrice: '$279.99',
    subtotalLabel: 'Subtotal',
    proceedLabel: 'Proceed to Checkout',
    shippingLabel: 'Shipping Address',
    paymentLabel: 'Payment Method',
    placeOrderLabel: 'Place your order',
    orderSummaryLabel: 'Order Summary',
  },
  BR: {
    greeting: 'Olá, faça login',
    account: 'Conta e Listas',
    returns: 'Devoluções',
    orders: 'e Pedidos',
    cart: 'Carrinho',
    deliverTo: 'Entregar em',
    location: 'São Paulo, SP',
    searchPlaceholder: 'Pesquisar na Amazon',
    allLabel: 'Todos',
    navLinks: ['Ofertas do Dia', 'Atendimento', 'Prime', 'Mais Vendidos', 'Lançamentos'],
    heroBg: 'linear-gradient(135deg, #1B4F72 0%, #154360 100%)',
    heroTagline: 'MEGA OFERTA',
    heroTitle: 'Aproveite agora',
    heroSub: 'em 12x sem juros · Pix com 5% de desconto',
    heroCta: 'Ver ofertas',
    section1: 'Recomendado para você',
    section2: 'Ofertas imperdíveis',
    primeLabel: 'prime',
    freeShipping: 'Frete GRÁTIS',
    products: [
      { name: 'Fone de Ouvido Sony WH-1000XM5 Noise Canceling', price: 'R$ 1.399,90', oldPrice: 'R$ 1.799,90', stars: 4.8, reviews: '3.204', badge: 'Mais Vendido', prime: true, installment: '12x R$ 116,66' },
      { name: 'Apple AirPods Pro (2ª geração)', price: 'R$ 1.149,00', oldPrice: 'R$ 1.499,00', stars: 4.9, reviews: '8.340', badge: '', prime: true, installment: '12x R$ 95,75' },
      { name: 'Kindle Paperwhite 16GB — sem anúncios', price: 'R$ 599,00', oldPrice: 'R$ 699,00', stars: 4.7, reviews: '2.109', badge: 'Escolha Amazon', prime: true, installment: '10x R$ 59,90' },
      { name: 'Panela de Pressão Elétrica Mondial Pratic Cook', price: 'R$ 179,90', oldPrice: 'R$ 249,90', stars: 4.6, reviews: '18.432', badge: 'Mais Vendido', prime: true, installment: '6x R$ 29,98' },
      { name: 'LEGO Star Wars Millennium Falcon 75192', price: 'R$ 2.349,00', stars: 4.9, reviews: '1.203', badge: '', prime: false, installment: '12x R$ 195,75' },
      { name: 'Fritadeira Air Fryer Philco 4,5L Digital', price: 'R$ 329,90', oldPrice: 'R$ 499,90', stars: 4.6, reviews: '9.021', badge: '', prime: true, installment: '5x R$ 65,98' },
    ],
    searchQuery: 'fone de ouvido bluetooth',
    searchResultsCount: '1-24 de mais de 30.000 resultados',
    productTitle: 'Fone de Ouvido Sony WH-1000XM5 Noise Canceling sem Fio, Bluetooth, Preto',
    productPrice: 'R$ 1.399,90',
    productOldPrice: 'R$ 1.799,90',
    productDiscount: 'Economize R$ 400,00',
    productRating: '4,8 de 5 estrelas',
    productReviews: '3.204 avaliações',
    inStock: 'Em estoque',
    addToCart: 'Adicionar ao carrinho',
    buyNow: 'Comprar agora',
    cartTitle: 'Carrinho de compras',
    cartItem: 'Sony WH-1000XM5 Fone Noise Canceling',
    cartQty: 'Qtd: 1',
    cartItemPrice: 'R$ 1.399,90',
    subtotalLabel: 'Subtotal',
    proceedLabel: 'Ir para o pagamento',
    shippingLabel: 'Endereço de entrega',
    paymentLabel: 'Método de pagamento',
    placeOrderLabel: 'Fazer pedido',
    orderSummaryLabel: 'Resumo do pedido',
  },
  JP: {
    greeting: 'こんにちは、ログイン',
    account: 'アカウント&リスト',
    returns: '返品',
    orders: 'と注文',
    cart: 'カート',
    deliverTo: 'お届け先',
    location: '東京都 100-0001',
    searchPlaceholder: 'Amazonを検索',
    allLabel: 'すべて',
    navLinks: ['タイムセール', 'カスタマーサービス', 'プライム', 'ランキング', '新着商品', 'Amazonポイント', 'ギフト券'],
    heroBg: 'linear-gradient(135deg, #232F3E 0%, #131921 100%)',
    heroTagline: 'タイムセール開催中',
    heroTitle: '特選タイムセール',
    heroSub: 'Amazonポイント最大10倍 · プライム会員限定割引',
    heroCta: '今すぐチェック',
    section1: 'あなたへのおすすめ',
    section2: '本日のお得情報',
    primeLabel: 'prime',
    freeShipping: '翌日お届け無料',
    products: [
      { name: 'Sony ワイヤレスノイズキャンセリングヘッドホン WH-1000XM5', price: '¥39,600', oldPrice: '¥44,000', stars: 4.8, reviews: '8,432', badge: 'ベストセラー', prime: true, points: 'Amazonポイント: 396pt' },
      { name: 'Apple AirPods Pro（第2世代）', price: '¥26,800', oldPrice: '¥39,800', stars: 4.9, reviews: '22,103', badge: '', prime: true, points: 'Amazonポイント: 268pt' },
      { name: 'Kindle Paperwhite (16GB) — 広告なしモデル', price: '¥15,980', oldPrice: '¥17,980', stars: 4.7, reviews: '4,201', badge: 'Amazonの選択', prime: true, points: 'Amazonポイント: 159pt' },
      { name: 'ティファール 電気圧力鍋 Cook4me ワンタッチ', price: '¥14,980', oldPrice: '¥19,800', stars: 4.5, reviews: '6,218', badge: 'ベストセラー', prime: true, points: 'Amazonポイント: 149pt' },
      { name: 'レゴ スター・ウォーズ ミレニアム・ファルコン', price: '¥69,980', stars: 4.9, reviews: '2,341', badge: '', prime: false, points: 'Amazonポイント: 699pt' },
      { name: 'フィリップス ノンフライヤー プレミアム HD9741', price: '¥12,880', oldPrice: '¥15,980', stars: 4.6, reviews: '11,034', badge: '', prime: true, points: 'Amazonポイント: 128pt' },
    ],
    searchQuery: 'ワイヤレスイヤホン ノイズキャンセリング',
    searchResultsCount: '1-24件（全体で50,000件以上）',
    productTitle: 'Sony ワイヤレスノイキャンヘッドホン WH-1000XM5 業界最高峰のノイズキャンセリング',
    productPrice: '¥39,600',
    productOldPrice: '¥44,000',
    productDiscount: '¥4,400 (10%) OFF',
    productRating: '5つ星のうち4.8',
    productReviews: '8,432個の評価',
    inStock: '在庫あり',
    addToCart: 'カートに入れる',
    buyNow: '今すぐ買う',
    cartTitle: 'ショッピングカート',
    cartItem: 'Sony WH-1000XM5 ワイヤレスノイキャンヘッドホン',
    cartQty: '数量: 1',
    cartItemPrice: '¥39,600',
    subtotalLabel: '小計',
    proceedLabel: 'レジに進む',
    shippingLabel: 'お届け先住所',
    paymentLabel: 'お支払い方法',
    placeOrderLabel: '注文を確定する',
    orderSummaryLabel: '注文サマリー',
  },
}

// ─── Shared Nav ──────────────────────────────────────────────────────────────
function Nav({ country }) {
  const d = COPY[country]
  return (
    <div className="amz-nav">
      <div className="amz-logo">
        <span className="amz-logo-text">amazon</span>
        {country === 'BR' && <span className="amz-logo-tld">.com.br</span>}
        {country === 'JP' && <span className="amz-logo-tld">.co.jp</span>}
      </div>

      <div className="amz-deliver">
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M8 0a5 5 0 00-5 5c0 3.5 5 11 5 11s5-7.5 5-11a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" fill="#fff"/></svg>
        <div>
          <div className="amz-deliver-top">{d.deliverTo}</div>
          <div className="amz-deliver-bottom">{d.location}</div>
        </div>
      </div>

      <div className="amz-search">
        <div className="amz-search-all">{d.allLabel} ▾</div>
        <div className="amz-search-input">{d.searchPlaceholder}</div>
        <button className="amz-search-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#131921" strokeWidth="2.5"/><path d="M21 21l-4.35-4.35" stroke="#131921" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
      </div>

      <div className="amz-right">
        <div className="amz-right-item">
          <div className="amz-right-top">{d.greeting}</div>
          <div className="amz-right-bottom">{d.account} ▾</div>
        </div>
        <div className="amz-right-item">
          <div className="amz-right-top">{d.returns}</div>
          <div className="amz-right-bottom">{d.orders}</div>
        </div>
        <div className="amz-cart-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#fff" strokeWidth="1.5"/><line x1="3" y1="6" x2="21" y2="6" stroke="#fff" strokeWidth="1.5"/><path d="M16 10a4 4 0 01-8 0" stroke="#fff" strokeWidth="1.5"/></svg>
          <span className="amz-cart-count">0</span>
          <span className="amz-cart-label">{d.cart}</span>
        </div>
      </div>
    </div>
  )
}

// ─── Category Nav ─────────────────────────────────────────────────────────────
function CategoryNav({ country }) {
  const d = COPY[country]
  return (
    <div className={`amz-cat-nav ${country === 'JP' ? 'amz-cat-nav--jp' : ''}`}>
      <button className="amz-hamburger">☰ {country === 'JP' ? 'すべて' : country === 'BR' ? 'Todos' : 'All'}</button>
      {d.navLinks.map(link => (
        <a key={link} className="amz-cat-link">{link}</a>
      ))}
    </div>
  )
}

// ─── Star Rating ──────────────────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <span className="amz-stars">
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
      <span className="amz-rating-num">{rating}</span>
    </span>
  )
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ p, country }) {
  return (
    <div className="amz-card">
      <div className="amz-card-img">
        {p.badge && <span className="amz-badge">{p.badge}</span>}
        <div className="amz-card-img-placeholder" />
      </div>
      <div className="amz-card-body">
        <div className="amz-card-name">{p.name}</div>
        <Stars rating={p.stars} />
        <div className="amz-card-reviews">{p.reviews}</div>
        <div className="amz-card-price">
          {p.oldPrice && <span className="amz-old-price">{p.oldPrice}</span>}
          <span className="amz-price">{p.price}</span>
        </div>
        {p.installment && <div className="amz-installment">{p.installment} sem juros</div>}
        {p.points && <div className="amz-points">{p.points}</div>}
        {p.prime && (
          <div className="amz-prime">
            <span className="amz-prime-badge">prime</span>
            <span className="amz-free-ship">{COPY[country].freeShipping}</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────
function HomeScreen({ country }) {
  const d = COPY[country]
  const isJP = country === 'JP'

  return (
    <div className={`amz-page amz-page--home ${isJP ? 'amz-jp' : ''}`}>
      <Nav country={country} />
      <CategoryNav country={country} />

      {/* Hero Banner */}
      <div className="amz-hero" style={{ background: d.heroBg }}>
        <div className="amz-hero-tag">{d.heroTagline}</div>
        <div className="amz-hero-title">{d.heroTitle}</div>
        <div className="amz-hero-sub">{d.heroSub}</div>
        <button className="amz-hero-cta">{d.heroCta} ›</button>
      </div>

      {/* JP Extra Promo Strips */}
      {isJP && (
        <div className="amz-promo-strips">
          <div className="amz-promo-strip amz-promo-strip--a">
            <span>🔥</span> セール開催中 — プライム会員は最大30%OFF
          </div>
          <div className="amz-promo-strip amz-promo-strip--b">
            <span>📦</span> 本日注文で明日お届け — 東京・大阪対応
          </div>
        </div>
      )}

      {/* BR Payment Badges */}
      {country === 'BR' && (
        <div className="amz-br-badges">
          <span className="amz-br-badge amz-br-badge--pix">PIX 5% OFF</span>
          <span className="amz-br-badge amz-br-badge--parcel">até 12x sem juros</span>
          <span className="amz-br-badge amz-br-badge--frete">Frete GRÁTIS Prime</span>
        </div>
      )}

      {/* Product Grid Section 1 */}
      <div className="amz-section">
        <h2 className="amz-section-title">{d.section1}</h2>
        <div className={`amz-grid ${isJP ? 'amz-grid--jp' : ''}`}>
          {d.products.map((p, i) => (
            <ProductCard key={i} p={p} country={country} />
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="amz-section amz-section--alt">
        <h2 className="amz-section-title">{d.section2}</h2>
        <div className="amz-deals-row">
          {[0,1,2,3].map(i => (
            <div key={i} className="amz-deal-card">
              <div className="amz-deal-img" />
              <div className="amz-deal-off">Up to {20 + i * 10}% off</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SEARCH SCREEN ───────────────────────────────────────────────────────────
function SearchScreen({ country }) {
  const d = COPY[country]
  const isJP = country === 'JP'

  return (
    <div className={`amz-page ${isJP ? 'amz-jp' : ''}`}>
      <Nav country={country} />
      <CategoryNav country={country} />

      <div className="amz-search-page">
        {/* Filters Sidebar */}
        <div className="amz-filters">
          <div className="amz-filter-section">
            <div className="amz-filter-title">
              {country === 'JP' ? '絞り込み' : country === 'BR' ? 'Filtrar por' : 'Filters'}
            </div>
            {[
              country === 'JP' ? '★4以上' : country === 'BR' ? '4 estrelas ou mais' : '4 Stars & Up',
              country === 'JP' ? 'プライム対応' : country === 'BR' ? 'Elegível para Prime' : 'Prime Eligible',
              country === 'JP' ? '翌日配送' : country === 'BR' ? 'Entrega rápida' : 'Fast Delivery',
            ].map(f => (
              <label key={f} className="amz-filter-item">
                <input type="checkbox" /> <span>{f}</span>
              </label>
            ))}
          </div>
          <div className="amz-filter-section">
            <div className="amz-filter-title">
              {country === 'JP' ? '価格帯' : country === 'BR' ? 'Preço' : 'Price'}
            </div>
            <div className="amz-price-range">
              <input className="amz-price-input" placeholder={country === 'JP' ? '最低' : country === 'BR' ? 'Mín' : 'Min'} />
              <span>–</span>
              <input className="amz-price-input" placeholder={country === 'JP' ? '最高' : country === 'BR' ? 'Máx' : 'Max'} />
            </div>
          </div>
          <div className="amz-filter-section">
            <div className="amz-filter-title">
              {country === 'JP' ? 'ブランド' : country === 'BR' ? 'Marca' : 'Brand'}
            </div>
            {['Sony', 'Apple', 'Bose', 'JBL', 'Jabra'].map(b => (
              <label key={b} className="amz-filter-item">
                <input type="checkbox" /> <span>{b}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="amz-results">
          <div className="amz-results-header">
            <div className="amz-results-query">
              {country === 'JP' ? '検索:' : country === 'BR' ? 'Resultados para:' : 'Results for:'}{' '}
              <strong>"{d.searchQuery}"</strong>
            </div>
            <div className="amz-results-count">{d.searchResultsCount}</div>
            <div className="amz-results-sort">
              {country === 'JP' ? '並び替え: おすすめ順 ▾' : country === 'BR' ? 'Ordenar por: Relevância ▾' : 'Sort by: Featured ▾'}
            </div>
          </div>

          {d.products.map((p, i) => (
            <div key={i} className="amz-result-row">
              <div className="amz-result-img" />
              <div className="amz-result-info">
                <div className="amz-result-name">{p.name}</div>
                <Stars rating={p.stars} />
                <div className="amz-card-reviews">{p.reviews}</div>
                <div className="amz-result-price">
                  {p.oldPrice && <span className="amz-old-price">{p.oldPrice}</span>}
                  <span className="amz-price">{p.price}</span>
                </div>
                {p.installment && <div className="amz-installment">{p.installment}</div>}
                {p.points && <div className="amz-points">{p.points}</div>}
                {p.prime && (
                  <div className="amz-prime">
                    <span className="amz-prime-badge">prime</span>
                    <span className="amz-free-ship">{COPY[country].freeShipping}</span>
                  </div>
                )}
                {p.badge && <span className="amz-badge amz-badge--inline">{p.badge}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── PRODUCT SCREEN ──────────────────────────────────────────────────────────
function ProductScreen({ country }) {
  const d = COPY[country]
  const isJP = country === 'JP'

  return (
    <div className={`amz-page ${isJP ? 'amz-jp' : ''}`}>
      <Nav country={country} />
      <CategoryNav country={country} />

      <div className="amz-product-page">
        {/* Breadcrumb */}
        <div className="amz-breadcrumb">
          {country === 'JP'
            ? 'Amazonトップ › 家電 › オーディオ › ヘッドホン'
            : country === 'BR'
            ? 'Amazon.com.br › Eletrônicos › Áudio › Fones de Ouvido'
            : 'Amazon.com › Electronics › Headphones › Over-Ear'}
        </div>

        <div className="amz-product-layout">
          {/* Images */}
          <div className="amz-product-images">
            <div className="amz-thumbs">
              {[0,1,2,3,4].map(i => <div key={i} className="amz-thumb" />)}
            </div>
            <div className="amz-main-img">
              <div className="amz-main-img-placeholder" />
            </div>
          </div>

          {/* Info */}
          <div className="amz-product-info">
            <div className="amz-product-title">{d.productTitle}</div>
            <div className="amz-product-rating">
              <Stars rating={4.8} />
              <span className="amz-product-review-count">{d.productReviews}</span>
            </div>
            <div className="amz-divider" />
            {d.productOldPrice && (
              <div className="amz-product-oldprice">{d.productOldPrice}</div>
            )}
            <div className="amz-product-price">{d.productPrice}</div>
            {d.productDiscount && (
              <div className="amz-product-discount">{d.productDiscount}</div>
            )}
            {country === 'BR' && (
              <div className="amz-product-installment">ou em 12x R$ 116,66 sem juros</div>
            )}
            {country === 'JP' && (
              <div className="amz-points" style={{ marginTop: 4 }}>Amazonポイント: 396ポイント (1%)</div>
            )}
            <div className="amz-divider" />
            <div className="amz-color-select">
              <span className="amz-select-label">{country === 'JP' ? 'カラー:' : country === 'BR' ? 'Cor:' : 'Color:'}</span>
              <span className="amz-color-val">Black</span>
            </div>
            <div className="amz-stock">{d.inStock}</div>
            <button className="amz-add-cart">{d.addToCart}</button>
            <button className="amz-buy-now">{d.buyNow}</button>
            {country === 'BR' && (
              <div className="amz-pix-block">
                <span className="amz-pix-tag">PIX</span> R$ 1.329,91 com 5% de desconto
              </div>
            )}
            {country === 'JP' && (
              <div className="amz-jp-delivery">
                <div>最短明日 {new Date().toLocaleDateString('ja-JP', { month: 'long', day: 'numeric' })} お届け</div>
                <div className="amz-jp-delivery-note">お急ぎ便利用可能</div>
              </div>
            )}
          </div>

          {/* Buy Box */}
          <div className="amz-buy-box">
            <div className="amz-buy-box-price">{d.productPrice}</div>
            {country === 'BR' && (
              <div className="amz-buy-box-install">12x R$ 116,66</div>
            )}
            {country === 'JP' && (
              <div className="amz-jp-points-box">396pt獲得</div>
            )}
            <div className="amz-buy-box-delivery">
              {country === 'JP' ? '明日お届け' : country === 'BR' ? 'Entrega amanhã' : 'Deliver tomorrow'}
            </div>
            <div className="amz-buy-box-stock">{d.inStock}</div>
            <button className="amz-add-cart amz-add-cart--box">{d.addToCart}</button>
            <button className="amz-buy-now amz-buy-now--box">{d.buyNow}</button>
            <div className="amz-buy-box-secure">
              {country === 'JP' ? '🔒 安全な取引' : country === 'BR' ? '🔒 Compra segura' : '🔒 Secure transaction'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── CART SCREEN ─────────────────────────────────────────────────────────────
function CartScreen({ country }) {
  const d = COPY[country]
  const isJP = country === 'JP'

  return (
    <div className={`amz-page ${isJP ? 'amz-jp' : ''}`}>
      <Nav country={country} />
      <CategoryNav country={country} />

      <div className="amz-cart-page">
        <h1 className="amz-cart-title">{d.cartTitle}</h1>

        <div className="amz-cart-layout">
          <div className="amz-cart-items">
            {/* Cart Item */}
            <div className="amz-cart-item">
              <div className="amz-cart-item-img" />
              <div className="amz-cart-item-info">
                <div className="amz-cart-item-name">{d.cartItem}</div>
                {country === 'BR' && (
                  <div className="amz-installment" style={{ marginTop: 4 }}>em 12x R$ 116,66 sem juros</div>
                )}
                {country === 'JP' && (
                  <div className="amz-points" style={{ marginTop: 4 }}>Amazonポイント: 396pt</div>
                )}
                <div className="amz-prime" style={{ marginTop: 6 }}>
                  <span className="amz-prime-badge">prime</span>
                  <span className="amz-free-ship">{COPY[country].freeShipping}</span>
                </div>
                <div className="amz-cart-item-controls">
                  <select className="amz-qty-select">
                    <option>{d.cartQty}</option>
                    <option>Qty: 2</option>
                  </select>
                  <button className="amz-cart-delete">
                    {country === 'JP' ? '削除' : country === 'BR' ? 'Excluir' : 'Delete'}
                  </button>
                  <button className="amz-cart-save">
                    {country === 'JP' ? '後で購入' : country === 'BR' ? 'Salvar para depois' : 'Save for later'}
                  </button>
                </div>
              </div>
              <div className="amz-cart-item-price">{d.cartItemPrice}</div>
            </div>

            {/* Prime upsell */}
            <div className="amz-prime-upsell">
              <span className="amz-prime-badge">prime</span>
              {country === 'JP'
                ? ' プライム会員なら配送料無料 + ポイント2倍'
                : country === 'BR'
                ? ' Membros Prime têm frete grátis + conteúdo exclusivo'
                : ' Members enjoy FREE delivery and exclusive deals'}
            </div>
          </div>

          <div className="amz-cart-summary">
            <div className="amz-summary-box">
              <div className="amz-summary-title">
                {d.subtotalLabel} (1 {country === 'JP' ? '点' : country === 'BR' ? 'item' : 'item'}):
                <span className="amz-summary-price"> {d.cartItemPrice}</span>
              </div>
              {country === 'BR' && (
                <div className="amz-summary-pix">
                  <span className="amz-pix-tag">PIX</span> R$ 1.329,91
                </div>
              )}
              {country === 'JP' && (
                <div className="amz-summary-points">ポイント合計: 396pt</div>
              )}
              <button className="amz-proceed-btn">{d.proceedLabel}</button>
              <div className="amz-summary-secure">
                {country === 'JP' ? '🔒 安全な取引' : country === 'BR' ? '🔒 Compra segura' : '🔒 Secure transaction'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── CHECKOUT SCREEN ─────────────────────────────────────────────────────────
function CheckoutScreen({ country }) {
  const d = COPY[country]
  const isJP = country === 'JP'

  return (
    <div className={`amz-page ${isJP ? 'amz-jp' : ''}`}>
      <Nav country={country} />

      <div className="amz-checkout-page">
        <h1 className="amz-checkout-title">
          {country === 'JP' ? 'レジ' : country === 'BR' ? 'Checkout' : 'Checkout'}
        </h1>

        <div className="amz-checkout-layout">
          <div className="amz-checkout-steps">

            {/* Step 1 — Shipping */}
            <div className="amz-checkout-step">
              <div className="amz-step-header">
                <span className="amz-step-num">1</span>
                <span className="amz-step-title">{d.shippingLabel}</span>
              </div>
              <div className="amz-step-body">
                <div className="amz-form-row">
                  <input className="amz-input" placeholder={country === 'JP' ? '姓' : country === 'BR' ? 'Nome' : 'First name'} />
                  <input className="amz-input" placeholder={country === 'JP' ? '名' : country === 'BR' ? 'Sobrenome' : 'Last name'} />
                </div>
                <input className="amz-input amz-input--full" placeholder={country === 'JP' ? '住所' : country === 'BR' ? 'Endereço' : 'Address'} />
                <div className="amz-form-row">
                  <input className="amz-input" placeholder={country === 'JP' ? '市区町村' : country === 'BR' ? 'Cidade' : 'City'} />
                  <input className="amz-input" placeholder={country === 'JP' ? '都道府県' : country === 'BR' ? 'Estado' : 'State'} />
                  <input className="amz-input" placeholder={country === 'JP' ? '郵便番号' : country === 'BR' ? 'CEP' : 'ZIP'} />
                </div>
              </div>
            </div>

            {/* Step 2 — Payment */}
            <div className="amz-checkout-step">
              <div className="amz-step-header">
                <span className="amz-step-num">2</span>
                <span className="amz-step-title">{d.paymentLabel}</span>
              </div>
              <div className="amz-step-body">
                <div className="amz-payment-options">
                  <label className="amz-payment-opt amz-payment-opt--selected">
                    <input type="radio" defaultChecked />
                    <span>💳 {country === 'JP' ? 'クレジットカード' : country === 'BR' ? 'Cartão de crédito' : 'Credit card'}</span>
                  </label>
                  {country === 'BR' && (
                    <>
                      <label className="amz-payment-opt">
                        <input type="radio" />
                        <span className="amz-pix-tag">PIX</span>
                        <span> — 5% de desconto</span>
                      </label>
                      <label className="amz-payment-opt">
                        <input type="radio" />
                        <span>🏦 Boleto bancário</span>
                      </label>
                    </>
                  )}
                  {country === 'JP' && (
                    <>
                      <label className="amz-payment-opt">
                        <input type="radio" />
                        <span>🏦 コンビニ払い</span>
                      </label>
                      <label className="amz-payment-opt">
                        <input type="radio" />
                        <span>💴 代金引換</span>
                      </label>
                    </>
                  )}
                  {country === 'US' && (
                    <label className="amz-payment-opt">
                      <input type="radio" />
                      <span>🏦 Checking account (ACH)</span>
                    </label>
                  )}
                  <label className="amz-payment-opt">
                    <input type="radio" />
                    <span>🎁 {country === 'JP' ? 'Amazonギフト券' : country === 'BR' ? 'Cartão-presente Amazon' : 'Amazon Gift Card'}</span>
                  </label>
                </div>
                <div className="amz-form-row">
                  <input className="amz-input amz-input--card" placeholder={country === 'JP' ? 'カード番号' : country === 'BR' ? 'Número do cartão' : 'Card number'} />
                </div>
                <div className="amz-form-row">
                  <input className="amz-input" placeholder={country === 'JP' ? '有効期限' : country === 'BR' ? 'Validade' : 'Expiry'} />
                  <input className="amz-input" placeholder="CVV" />
                </div>
              </div>
            </div>

            {/* Step 3 — Review */}
            <div className="amz-checkout-step">
              <div className="amz-step-header">
                <span className="amz-step-num">3</span>
                <span className="amz-step-title">
                  {country === 'JP' ? '注文内容の確認' : country === 'BR' ? 'Revisar pedido' : 'Review your order'}
                </span>
              </div>
              <div className="amz-step-body">
                <div className="amz-review-item">
                  <div className="amz-review-img" />
                  <div>
                    <div className="amz-review-name">{d.cartItem}</div>
                    <div className="amz-review-price">{d.cartItemPrice}</div>
                  </div>
                </div>
                <button className="amz-place-order">{d.placeOrderLabel}</button>
                <p className="amz-legal">
                  {country === 'JP'
                    ? '注文を確定することで、Amazonの利用規約に同意したことになります。'
                    : country === 'BR'
                    ? 'Ao fazer o pedido, você concorda com os Termos de Uso da Amazon.'
                    : 'By placing your order, you agree to Amazon\'s privacy notice and conditions of use.'}
                </p>
              </div>
            </div>

          </div>

          {/* Order Summary */}
          <div className="amz-order-summary">
            <div className="amz-summary-box">
              <div className="amz-summary-heading">{d.orderSummaryLabel}</div>
              <div className="amz-summary-row">
                <span>{country === 'JP' ? '商品の小計:' : country === 'BR' ? 'Itens:' : 'Items:'}</span>
                <span>{d.cartItemPrice}</span>
              </div>
              <div className="amz-summary-row">
                <span>{country === 'JP' ? '配送料:' : country === 'BR' ? 'Frete:' : 'Shipping:'}</span>
                <span className="amz-free">{country === 'JP' ? '無料' : country === 'BR' ? 'Grátis' : 'FREE'}</span>
              </div>
              <div className="amz-summary-divider" />
              <div className="amz-summary-row amz-summary-row--total">
                <span>{country === 'JP' ? '合計:' : country === 'BR' ? 'Total do pedido:' : 'Order total:'}</span>
                <span>{d.cartItemPrice}</span>
              </div>
              {country === 'BR' && (
                <div className="amz-summary-pix">
                  <span className="amz-pix-tag">PIX</span> R$ 1.329,91 (5% off)
                </div>
              )}
              {country === 'JP' && (
                <div className="amz-summary-points">獲得ポイント: 396pt</div>
              )}
              <button className="amz-place-order">{d.placeOrderLabel}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Export ─────────────────────────────────────────────────────────────
export default function AmazonMockup({ country, screen }) {
  if (screen === 'home')     return <HomeScreen country={country} />
  if (screen === 'search')   return <SearchScreen country={country} />
  if (screen === 'product')  return <ProductScreen country={country} />
  if (screen === 'cart')     return <CartScreen country={country} />
  if (screen === 'checkout') return <CheckoutScreen country={country} />
  return null
}
