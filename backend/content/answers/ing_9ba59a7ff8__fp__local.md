---
qid: ing_9ba59a7ff8__fp__local
question: 'Explain: Caching Requirements — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 481
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:36:27-05:00'
sources: []
---

### Why Instagram Needs a Cache Layer

At its core, Instagram serves *images* and *metadata* at massive scale. The fundamental problem is **latency under load**: each request must be answered in milliseconds while the backend stores billions of posts across thousands of servers.  
A cache solves this by materialising the *most frequently accessed* data closer to the client, turning an expensive read‑heavy operation (disk → network) into a cheap in‑memory lookup.

### What Must Be Cached?

| Layer | Reasoning | Typical Eviction Policy |
|-------|-----------|------------------------|
| **User feed** | A user’s home timeline is the most read item; it changes slowly compared to writes. | LRU + time‑to‑live (TTL) of 1–2 h |
| **Post thumbnails & metadata** | Rendering a post requires only small blobs; full images are large and rarely re‑served in the same form. | LFU for hot posts, TTL ~24 h |
| **Profile pages** | Profile data is static; a single cache entry per user suffices. | LRU with larger TTL (7–30 d) |

### Deeper Principle: *Predictive Locality*

Caching exploits two statistical regularities:

1. **Temporal locality** – the same post or feed item will be requested again soon after its first access.  
2. **Spatial locality** – adjacent data (e.g., a user’s consecutive posts) are likely to be fetched together.

Instagram’s backend can *predict* which items fall into these buckets by monitoring request patterns, then pre‑populate the cache accordingly—an application of online learning to caching decisions.

### Non‑Obvious Insight

Most designers focus on *what* to cache; few consider **cache‑coherency** across regions. Because Instagram serves globally, a stale thumbnail in one region can cause a *content‑drift* bug (different users see different image qualities). The solution is to tag each cached entry with a *generation counter* tied to the underlying storage version; when a post is edited, incrementing this counter invalidates all regional caches atomically. This subtle design keeps consistency without sacrificing latency.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
