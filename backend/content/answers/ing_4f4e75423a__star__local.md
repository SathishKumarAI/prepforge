---
qid: ing_4f4e75423a__star__local
question: 'Explain: 5.9 Search Users — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 434
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:07:00-05:00'
sources: []
---

**Situation**  
At my previous company we were building a new “Discover” feed and the product team realized that our existing user search was sluggish—searching for a name took over 2 seconds on mobile, and the results weren’t relevant enough to keep users engaged.

**Task**  
I had to design an end‑to‑end search service for Instagram‑style user discovery: fast (≤ 200 ms latency), scalable to 500M users, supporting autocomplete, fuzzy matching, and personalized ranking based on follow relationships and recent interactions.

**Action**  
1. **Data Model & Indexing:** I chose a hybrid approach—store a full‑text inverted index in Elasticsearch for quick keyword lookup, and a separate Redis cache keyed by user ID for real‑time profile attributes (followers count, last active).  
2. **Autocomplete & Fuzzy Search:** Configured n‑gram analyzers in ES to support partial matches and typo tolerance. Implemented a two‑stage query: first fetch top 200 candidates from ES, then score them in memory using Jaccard similarity over recent hashtags.  
3. **Personalization Layer:** Built a lightweight GraphQL resolver that pulls follow relationships from Neo4j; we used a precomputed “follow score” per candidate to boost ranking for users you’re already connected with.  
4. **Pagination & Back‑pressure:** Employed keyset pagination (“search after”) in ES to avoid offset costs, and added circuit breaker logic to fall back to a simpler Redis lookup if latency spikes.

**Result**  
The new search service cut average response time from 2 s to 120 ms on mobile. Click‑through rate for suggested users rose 35%, and the team reduced infrastructure cost by 18% thanks to the caching layer. I learned that combining specialized indexes with a lightweight personalization engine can deliver both speed and relevance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
