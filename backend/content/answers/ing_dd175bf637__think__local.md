---
qid: ing_dd175bf637__think__local
question: 'Explain: Approach #2: Choreography — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 509
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:33:12-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Identify what “Choreography” means in this context (distributed coordination without central orchestrator).  
   - Assume we’re designing a web‑crawler that scales horizontally, handles failures, and respects robots.txt / rate limits.  
   - Decide on key metrics: crawl depth, freshness, politeness, throughput.

**2️⃣ Adopt a distributed systems framework**  
   - Use the *choreography* pattern: each node knows only its neighbors (e.g., frontier queue shards).  
   - Map concepts to ML terms: each worker is an “agent” that learns URL relevance scores locally.  
   - Treat the system as a graph of services where messages flow peer‑to‑peer.

**3️⃣ Step‑by‑step reasoning**  
   1. **Frontier partitioning** – hash URLs across shards; workers pull batches, reducing contention.  
   2. **Politeness enforcement** – embed domain‑level rate limits in each shard’s state machine.  
   3. **Failure handling** – when a worker dies, its frontier items are redistributed via gossip.  
   4. **Learning component** – workers update a shared model (e.g., RL policy) through periodic parameter syncs.  
   5. **Scalability knobs** – adjust shard count or batch size to tune latency vs throughput.

**4️⃣ Common traps to avoid**  
   - *Over‑centralization*: even in choreography, a single “leader” for URL deduplication can become a bottleneck.  
   - *Stale policies*: if workers use outdated ML models, crawl quality drops; enforce timely syncs.  
   - *Ignoring politeness*: aggressive crawling leads to IP bans; always respect robots.txt and per‑domain limits.

**5️⃣ Sanity‑check & communicate**  
   - Run a small prototype with two shards; log URL assignments, rate‑limit hits, and model updates.  
   - Explain the flow: “Each worker pulls URLs, crawls, scores them, pushes back high‑priority links, and periodically shares its model weights.”  
   - Highlight benefits: no single point of failure, linear scalability, and natural integration with ML pipelines.

This structured reasoning can be reused for any distributed choreography design question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
