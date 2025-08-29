<script lang="ts">
  import Card from "$lib/components/base/Card.svelte";

  // Mock data for dashboard
  const feedStats = {
    totalFeeds: 12,
    unreadArticles: 47,
    lastUpdate: "2 minutes ago",
  };

  const latestArticles = [
    {
      title: "The Future of Artificial Intelligence",
      source: "Tech News",
      time: "5 min ago",
      excerpt:
        "Exploring the rapid development of AI and its societal impact...",
    },
    {
      title: "New Features in Svelte 5",
      source: "Dev Blog",
      time: "15 min ago",
      excerpt:
        "A detailed look at Svelte 5's new runes API and improvements...",
    },
    {
      title: "Sustainable Development Practices",
      source: "Green Tech",
      time: "1 hour ago",
      excerpt:
        "Environmental considerations in modern development workflows...",
    },
    {
      title: "Building Design Systems",
      source: "Design Weekly",
      time: "2 hours ago",
      excerpt:
        "Best practices for creating efficient and scalable design systems...",
    },
    {
      title: "Web Performance Optimization",
      source: "Performance",
      time: "3 hours ago",
      excerpt:
        "Practical methods to improve website speed and user experience...",
    },
  ];

  const favoriteFeeds = [
    { name: "Tech News", articles: 12, category: "Technology" },
    { name: "Dev Blog", articles: 8, category: "Development" },
    { name: "Design Weekly", articles: 5, category: "Design" },
    { name: "Green Tech", articles: 3, category: "Environment" },
  ];

  const todayHighlight = {
    articlesRead: 15,
    timeSpent: "45 min",
    topCategory: "Technology",
  };

  const categoryStats = [
    { name: "Technology", count: 25, percentage: 40 },
    { name: "Development", count: 18, percentage: 30 },
    { name: "Design", count: 12, percentage: 20 },
    { name: "Environment", count: 6, percentage: 10 },
  ];
</script>

<main class="min-h-screen p-6" style="background: var(--app-bg);">
  <!-- Header -->
  <header class="mb-8 p-8">
    <h3
      class="text-2xl font-bold mb-2"
      style="color: var(--text-primary); font-family: var(--font-display);"
    >
      Alt-NV Home
    </h3>
  </header>

  <!-- Dashboard Grid -->
  <div class="dashboard-grid">
    <!-- Feed Statistics Card -->
    <Card class="stats-card" hover={true}>
      <h3 class="card-title">Feed Statistics</h3>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">{feedStats.totalFeeds}</div>
          <div class="stat-label">Total Feeds</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{feedStats.unreadArticles}</div>
          <div class="stat-label">Unread Articles</div>
        </div>
        <div class="stat-item">
          <div class="stat-update">Last updated: {feedStats.lastUpdate}</div>
        </div>
      </div>
    </Card>

    <!-- Latest Articles Card -->
    <Card class="articles-card" hover={true}>
      <h3 class="card-title">Latest Articles</h3>
      <div class="articles-list">
        {#each latestArticles as article}
          <div class="article-item">
            <h4 class="article-title">{article.title}</h4>
            <div class="article-meta">
              <span class="article-source">{article.source}</span>
              <span class="article-time">{article.time}</span>
            </div>
            <p class="article-excerpt">{article.excerpt}</p>
          </div>
        {/each}
      </div>
    </Card>

    <!-- Favorite Feeds Card -->
    <Card class="feeds-card" hover={true}>
      <h3 class="card-title">Favorite Feeds</h3>
      <div class="feeds-list">
        {#each favoriteFeeds as feed}
          <div class="feed-item">
            <div class="feed-info">
              <div class="feed-name">{feed.name}</div>
              <div class="feed-category">{feed.category}</div>
            </div>
            <div class="feed-count">{feed.articles}</div>
          </div>
        {/each}
      </div>
    </Card>

    <!-- Today's Summary Card -->
    <Card class="summary-card" hover={true}>
      <h3 class="card-title">Today's Summary</h3>
      <div class="summary-stats">
        <div class="summary-item">
          <div class="summary-label">Articles Read</div>
          <div class="summary-value">{todayHighlight.articlesRead}</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Time Spent</div>
          <div class="summary-value">{todayHighlight.timeSpent}</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Top Category</div>
          <div class="summary-value">{todayHighlight.topCategory}</div>
        </div>
      </div>
    </Card>

    <!-- Category Statistics Card -->
    <Card class="category-card" hover={true}>
      <h3 class="card-title">Category Statistics</h3>
      <div class="category-list">
        {#each categoryStats as category}
          <div class="category-item">
            <div class="category-info">
              <span class="category-name">{category.name}</span>
              <span class="category-count">{category.count}件</span>
            </div>
            <div class="category-bar">
              <div
                class="category-progress"
                style="width: {category.percentage}%"
              ></div>
            </div>
          </div>
        {/each}
      </div>
    </Card>

    <!-- Quick Actions Card -->
    <Card class="actions-card" hover={true}>
      <h3 class="card-title">Quick Actions</h3>
      <div class="actions-grid">
        <button class="btn-primary action-btn">
          <span class="action-icon">+</span>
          Add New Feed
        </button>
        <button class="btn-primary action-btn">
          <span class="action-icon">⚙</span>
          Settings
        </button>
        <button class="btn-primary action-btn">
          <span class="action-icon">📊</span>
          Detailed Stats
        </button>
        <button class="btn-primary action-btn">
          <span class="action-icon">📤</span>
          Export
        </button>
      </div>
    </Card>
  </div>
</main>

<style>
  /* Dashboard Grid Layout */
  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-6);
    max-width: 1400px;
    margin: 0 auto;
  }

  /* Card specific sizing */
  :global(.stats-card) {
    grid-column: span 1;
  }

  :global(.articles-card) {
    grid-column: span 2;
    min-height: 400px;
  }

  :global(.feeds-card) {
    grid-column: span 1;
  }

  :global(.summary-card) {
    grid-column: span 1;
  }

  :global(.category-card) {
    grid-column: span 1;
  }

  :global(.actions-card) {
    grid-column: span 1;
  }

  /* Card Titles */
  .card-title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-4);
    border-bottom: 2px solid var(--surface-border);
    padding-bottom: var(--space-2);
  }

  /* Stats Card Styles */
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
  }

  .stat-item:last-child {
    grid-column: span 2;
    text-align: center;
    margin-top: var(--space-2);
  }

  .stat-number {
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--alt-primary);
    font-family: var(--font-display);
    line-height: 1;
  }

  .stat-label {
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-top: var(--space-1);
    font-weight: 500;
  }

  .stat-update {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    font-style: italic;
  }

  /* Articles Card Styles */
  .articles-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    max-height: 320px;
    overflow-y: auto;
  }

  .article-item {
    padding: var(--space-3);
    border: 1px solid var(--surface-border);
    background: var(--background);
    transition: all var(--transition-speed) ease;
  }

  .article-item:hover {
    border-color: var(--alt-primary);
    box-shadow: var(--shadow-sm);
  }

  .article-title {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-2);
    font-family: var(--font-display);
    line-height: 1.3;
  }

  .article-meta {
    display: flex;
    justify-content: space-between;
    font-size: var(--text-xs);
    margin-bottom: var(--space-2);
  }

  .article-source {
    color: var(--alt-primary);
    font-weight: 600;
  }

  .article-time {
    color: var(--text-muted);
  }

  .article-excerpt {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.5;
  }

  /* Feeds Card Styles */
  .feeds-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .feed-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3);
    border: 1px solid var(--surface-border);
    background: var(--background);
    transition: all var(--transition-speed) ease;
  }

  .feed-item:hover {
    border-color: var(--alt-secondary);
    background: var(--surface-hover);
  }

  .feed-name {
    font-weight: 600;
    color: var(--text-primary);
    font-size: var(--text-base);
  }

  .feed-category {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .feed-count {
    background: var(--alt-primary);
    color: white;
    padding: var(--space-1) var(--space-2);
    font-size: var(--text-xs);
    font-weight: 700;
    min-width: 24px;
    text-align: center;
  }

  /* Summary Card Styles */
  .summary-stats {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3);
    border: 1px solid var(--surface-border);
    background: var(--background);
  }

  .summary-label {
    font-size: var(--text-sm);
    color: var(--text-muted);
    font-weight: 500;
  }

  .summary-value {
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--alt-primary);
    font-family: var(--font-display);
  }

  /* Category Card Styles */
  .category-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .category-item {
    padding: var(--space-3);
    border: 1px solid var(--surface-border);
    background: var(--background);
  }

  .category-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-2);
  }

  .category-name {
    font-weight: 600;
    color: var(--text-primary);
  }

  .category-count {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  .category-bar {
    height: 4px;
    background: var(--surface-border);
    position: relative;
  }

  .category-progress {
    height: 100%;
    background: var(--alt-primary);
    transition: width var(--transition-smooth) ease;
  }

  /* Actions Card Styles */
  .actions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3);
  }

  .action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-4);
    text-align: center;
    font-size: var(--text-sm);
    min-height: 80px;
  }

  .action-icon {
    font-size: var(--text-xl);
    opacity: 0.8;
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    :global(.articles-card) {
      grid-column: span 1;
    }
  }

  @media (max-width: 768px) {
    .dashboard-grid {
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }

    :global(.stats-card),
    :global(.articles-card),
    :global(.feeds-card),
    :global(.summary-card),
    :global(.category-card),
    :global(.actions-card) {
      grid-column: span 1;
    }

    .stats-grid {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .stat-item:last-child {
      grid-column: span 1;
    }

    .actions-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
