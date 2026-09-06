---
qid: ing_580ffa64ac__fp__local
question: 'Explain: 124: System Design Interview — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 500
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:11:37-05:00'
sources: []
---

**Why a crawler needs a “system”**

A web crawler must *discover* URLs, *fetch* content, *store* it, and *schedule* future visits under bandwidth, latency, and politeness constraints.  
The core optimisation problem is: **minimise total crawl time while respecting per‑domain rate limits and storage capacity**. This turns into a constrained scheduling + graph traversal problem.

---

### 1. Frontier & URL Normalisation
- The frontier (priority queue) stores *canonicalised* URLs.  
- Canonicalisation removes query‑string noise, normalises case, and resolves redirects.  
- **Insight:** Treat the frontier as a *dynamic DAG*: edges are “follow‑up” links; nodes are pages. When a node is fetched, all outgoing edges become new frontier candidates. This graph view lets us apply topological pruning (e.g., avoid re‑adding already visited subtrees).

### 2. Politeness & Rate‑Limiting
- Per‑domain token buckets enforce `maxRequestsPerSecond`.  
- **Insight:** Use *adaptive* bucket sizes: estimate a domain’s bandwidth from recent responses and scale the bucket accordingly, rather than a static cap.

### 3. Distributed Fetchers & Sharding
- Hash URLs to shards → guarantees no two fetchers hit the same host concurrently.  
- Each shard owns its own frontier slice; sharding is *consistent* so that adding/removing workers causes minimal re‑assignment.

### 4. Storage & Deduplication
- Store pages in a content‑addressable store (hash of body).  
- Duplicate detection uses *simhash* fingerprints to catch near‑identical pages before writing disk, saving space and bandwidth.

### 5. Failure Handling
- Retry policies with exponential back‑off + circuit breaker per host.  
- If a host repeatedly fails, move it to a “blacklist” queue that is retried after a cooldown.

---

**Non‑obvious takeaway:** *Viewing the crawl as a DAG lets you apply graph‑theoretic pruning (e.g., detecting strongly connected components) to avoid endless loops in sites with cyclic navigation. This reduces unnecessary fetches far beyond simple URL deduplication.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
