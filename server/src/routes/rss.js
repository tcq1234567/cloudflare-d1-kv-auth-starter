import { Hono } from 'hono';

const rss = new Hono();

rss.get('/', (c) => {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Feed</title>
    <description>RSS Feed</description>
    <link>/</link>
  </channel>
</rss>`;
  return c.text(feed, 200, { 'Content-Type': 'application/xml' });
});

export default rss;
