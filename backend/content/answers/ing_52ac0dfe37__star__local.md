---
qid: ing_52ac0dfe37__star__local
question: 'Explain: Specialized Index Types — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 415
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:37-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a recommendation engine for an e‑commerce platform that served millions of users. The catalog had over 10 million products, each tagged with dozens of attributes (category, brand, price range, user‑generated tags). Our initial prototype used a simple inverted index on product IDs and keyword matches, but query latency spiked to 1.2 seconds during peak traffic, far above the 200 ms SLA.

**Task:**  
I needed to redesign the indexing strategy so that each request could return top‑10 personalized recommendations in under 200 ms while still supporting real‑time updates as new products and user interactions streamed in.

**Action:**  
1. Implemented a *bitmap index* for categorical fields (brand, category) to allow constant‑time set intersection.  
2. Built a *Hilbert curve–based spatial index* on the 2‑D space of price vs. popularity score so that nearest‑neighbor queries could be answered with O(log N).  
3. Leveraged Apache Parquet and Arrow for columnar storage, enabling predicate pushdown and SIMD‑accelerated scans.  
4. Deployed a hybrid cache: hot items in Redis (keyed by product ID) and cold items served from the disk‑based index via RocksDB.  
5. Added a nightly materialized view that pre‑aggregated user‑segment statistics to reduce per‑query computation.

**Result:**  
Latency dropped from 1.2 s to 140 ms on average, with peak queries staying below 180 ms. The system handled a 3× traffic spike during a flash sale without degradation. I learned that choosing the right index type—bitmap for high‑cardinality categories and space‑filling curves for continuous features—can deliver dramatic performance gains when paired with columnar storage and caching layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
