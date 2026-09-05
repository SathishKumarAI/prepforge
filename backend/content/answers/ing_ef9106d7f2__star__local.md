---
qid: ing_ef9106d7f2__star__local
question: How does an answer engine handle breaking news - a query about something
  that happened 20 minutes ago?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 321
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:27:00-05:00'
sources: []
---

**Situation:** At my last role as a search platform engineer, our product launched a “live feed” feature for the newsroom team. One morning, during a live election coverage, a user typed “latest on the Supreme Court decision.” The system had to pull in the most recent article and social‑media reactions that were still being posted.

**Task:** I needed to design an answer engine that could surface up‑to‑minute content while keeping relevance scores high, without overloading our indexing pipeline or returning stale results from cache.

**Action:** I added a short‑lived “hot” index layer backed by Redis Streams. Every new article or tweet was pushed in real time via Kafka to this stream and immediately scored with a freshness decay factor (exponential decay of 5 minutes). The query engine first hit the hot index; if no match, it fell back to the main Lucene index. I also tweaked the ranking function to boost content from verified sources by +2 points and applied a “time‑sensitive” weight that gradually decreased over an hour. Finally, I built a lightweight monitoring dashboard in Grafana to track latency and hit rates.

**Result:** Query latency dropped from 1.8 s to 0.4 s for live queries, and user engagement (click‑through) on breaking news stories increased by 35%. I learned that combining stream processing with dynamic scoring is key to delivering real‑time relevance without sacrificing system stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
