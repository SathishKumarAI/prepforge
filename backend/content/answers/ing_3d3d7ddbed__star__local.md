---
qid: ing_3d3d7ddbed__star__local
question: 'Explain: so this is at an edit distance — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 322
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:30:39-05:00'
sources: []
---

**Situation:** In my last role, our product team was building a recommendation engine that needed to match user-entered search terms with product titles stored in a PostgreSQL cluster. The search latency had spiked to 250 ms per query because we were doing naive string comparisons across millions of rows.

**Task:** I was tasked with reducing the average lookup time below 80 ms while keeping memory usage under 2 GB and ensuring the system could handle 5k concurrent searches during peak hours.

**Action:** I introduced an approximate matching layer using edit distance (Levenshtein) calculated on the fly via a PostgreSQL extension (`pg_trgm`). First, I pre‑computed trigram indexes for all product titles. During search, I fetched candidates within a 0.4 Jaccard similarity threshold and then applied the exact Levenshtein distance in C‑extension code to rank them. I also added a caching layer (Redis) for popular queries and tuned PostgreSQL’s `work_mem` to 64 MB per session.

**Result:** Query latency dropped from 250 ms to 70 ms on average, with a 35% reduction in CPU usage. The system now scales comfortably to 10k concurrent users, and I learned how lightweight extensions can bridge the gap between database performance and ML‑style string similarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
