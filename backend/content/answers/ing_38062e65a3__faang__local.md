---
qid: ing_38062e65a3__faang__local
question: 'Explain: NFR — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 520
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:54:13-05:00'
sources: []
---

**Clarify**  
The interview asks for a *non‑functional requirement (NFR)* that applies to the social‑media domain, e.g., Facebook or Instagram. I’ll interpret it as “a key quality attribute that must be engineered across the platform” and confirm that we’re looking at system‑wide constraints rather than a single feature.

**Approach**  
1. Identify core NFRs (scalability, reliability, latency, security, privacy).  
2. Pick one that uniquely shapes product design—*latency*.  
3. Explain why low latency is critical for user engagement, the trade‑offs it forces, and how it drives architectural choices.

**Depth**  
- **Why Latency?** Users expect instantaneous reactions (likes, comments, stories). A 1 s delay noticeably hurts retention; studies show a 100 ms increase reduces daily active users by ~0.5 %.  
- **Architectural Implications:**  
  - *Edge caching* (CDNs) for static assets and pre‑computed feeds.  
  - *Real‑time data pipelines* (Kafka, Pulsar) to push updates to clients with minimal buffering.  
  - *Microservices* that expose lightweight REST/GraphQL endpoints; heavy business logic is offloaded to background workers.  
- **Tech Stack:** Use in‑memory stores (Redis, Memcached) for hot feeds; partition user data by geography to reduce cross‑region latency.  
- **Measurement:** Deploy synthetic traffic and real‑user monitoring (RUM) to track tail latencies (<95th percentile <300 ms).  

**Edge Cases**  
- *Network churn*: Mobile users in 2G zones may experience higher RTTs; fallback to lower‑fidelity feeds.  
- *Hot spikes*: Viral posts can overwhelm caches—implement rate‑limiting and dynamic cache invalidation.  
- *Global scaling*: Multi‑region deployments must reconcile eventual consistency with user expectations.

**Optimize & Communicate**  
I’d iterate latency by profiling the “slowest” path (end‑to‑end request → database → feed assembly) and applying targeted optimizations: pre‑fetching, batching, and sharding. I would present this as a continuous improvement loop tied to business metrics—engagement, revenue per session, churn. This demonstrates structured problem solving, clear communication, and deep technical insight—all key for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
