---
qid: ing_2163276742__star__local
question: 'Explain: Data Model — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 397
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:26-05:00'
sources: []
---

**Situation** – While working on a scaling project at my last startup, we were asked to re‑architect the property catalog for an Airbnb‑style marketplace that was hitting 200 k listings and 1M daily page views. The existing schema was a single monolithic table with ad‑hoc JSON columns, causing slow queries and data quality drift.

**Task** – I needed to design a robust relational data model that could support fast search, flexible attributes, and maintainable analytics while staying within our PostgreSQL cost limits.

**Action** – I started by normalizing the core entities: `property`, `owner`, `location`, `amenity`, and `review`. To handle dynamic features (e.g., pet policy, Wi‑Fi speed), I introduced a key‑value table (`property_attribute`) and used partial indexes on frequently queried attributes. I leveraged PostgreSQL’s full‑text search for titles/descriptions and created GIN indexes on the JSONB tags for quick filtering. For analytics, I added materialized views that pre‑aggregated booking counts by city and price tier, refreshed nightly via `REFRESH MATERIALIZED VIEW CONCURRENTLY`. I also implemented row‑level security to isolate owner data.

**Result** – Query latency dropped from 1.2 s to under 200 ms for the most common search patterns, and the cache hit rate improved to 92%. The new schema reduced storage by 18% compared to the previous design, and the analytics dashboards now refresh in seconds instead of minutes. I learned that a disciplined normalization coupled with targeted denormalization (for fast reads) can deliver both performance and maintainability in a marketplace setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
