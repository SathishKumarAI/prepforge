---
qid: ing_7ad15a7621__star__local
question: 'Explain: Database Tables — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 405
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:40-05:00'
sources: []
---

**Situation:**  
While leading the backend team at a fintech startup, we launched an internal tool that generated short URLs for marketing campaigns. The initial design used a single monolithic table that stored every click event, URL mapping, and analytics data. By month 6, the table grew to 12 million rows, causing query latency of 4–5 seconds on read operations and making the service unusable during traffic spikes.

**Task:**  
Redesign the database schema so that lookups for a short code remain sub‑millisecond while still allowing real‑time analytics aggregation without locking or downtime.

**Action:**  
I broke the monolith into three tables: `url_mapping` (id, original_url, created_at), `click_stats` (short_code, day, clicks, unique_visitors), and `user_logs` (event_id, short_code, timestamp, user_agent). I added a composite index on `(short_code, day)` for fast aggregation. Using PostgreSQL’s partitioning by month on `click_stats`, I enabled efficient roll‑ups. For high‑write traffic, I introduced Redis as a write buffer for click events, flushing in batches to the database every 10 seconds via an async worker. This kept the OLTP layer lightweight and allowed us to serve reads from a read replica with minimal lag.

**Result:**  
Lookup latency dropped from ~4 s to <50 ms, even under 10k concurrent requests. The partitioned click table handled 1.2 million inserts per minute without degradation. We reduced infrastructure cost by 25% by eliminating the need for a separate analytics cluster. I learned that thoughtful schema decomposition and hybrid storage (SQL + in‑memory caching) can deliver both performance and scalability for real‑time services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
