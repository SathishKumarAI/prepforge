---
qid: ing_fcbfc88a42__think__local
question: 'Explain: Design the Twitter timeline and search — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 460
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:41:17-05:00'
sources: []
---

**1️⃣ Clarify the ask & set scope**  
   *Identify what “design the Twitter timeline and search” means:* are we sketching a high‑level architecture, focusing on data flow, consistency, or scalability? Note assumptions: millions of users, real‑time feeds, eventual consistency acceptable for timelines, strong consistency needed for search queries.

**2️⃣ Adopt a design framework**  
   *Use the classic “5‑P” model:* **Problem definition → Constraints → Trade‑offs → Solution sketch → Evaluation.**  
   *Alternatively, break it into sub‑systems: ingestion (tweets), storage (user timelines & inverted index), query engine (timeline API, search API), cache layer, and scaling strategy.*

**3️⃣ Reason step‑by‑step**  
   1. **Ingestion** – event queue → tweet service → persistence.  
   2. **Timeline generation** – fan‑out (push) vs. pull; decide on materialized feeds per user or on‑demand aggregation.  
   3. **Search indexing** – build an inverted index, shard by keyword, keep a recent segment for hot queries.  
   4. **Caching** – use Redis/LRU for popular timelines and search results.  
   5. **Consistency & latency** – eventual consistency for feeds; strong read‑after‑write for search if needed.

**4️⃣ Avoid common traps**  
   *Don’t over‑optimize early:* keep the model simple, then layer in complexity (e.g., sharding, replication).  
   *Beware of “single point of failure” when choosing a cache or queue.  
   *Remember that read/write ratios differ: timelines are read‑heavy, search is write‑heavy.*

**5️⃣ Sanity‑check & communicate**  
   *Run through edge cases:* user with 10k followers, tweet containing hashtags, deleted tweets.  
   *Explain trade‑offs clearly (e.g., push vs pull feeds).  
   *Summarize the high‑level diagram and key components before diving into implementation details.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
