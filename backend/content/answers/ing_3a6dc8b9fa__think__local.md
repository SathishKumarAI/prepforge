---
qid: ing_3a6dc8b9fa__think__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 219
output_tokens: 728
total_tokens: 947
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:43:49-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Explain where the “latency” figures in the Twitter‑design section come from and what they really mean.  
- *Assumptions to state up front*:  
  - We’re looking at **request latency** (user → API server → DB → back‑end services).  
  - The numbers are *illustrative*, not hard‑coded benchmarks; they assume a “typical” deployment in a data center with SSDs, 10 Gbps links and a modest load.  

**2️⃣ Mental model / framework**  
Treat the request path as a pipeline:  
```
Client → Front‑end server (load balancer) → API service → DB/Cache → Back‑end services
```
Each hop contributes a *latency component*: network RTT, serialization/deserialization, CPU time, disk or cache access.  

**3️⃣ Step‑by‑step reasoning**  
1. **Network**: 10 Gbps link gives ~0.01 µs per byte; round‑trip (RTT) between data center racks ≈ 2–5 ms.  
2. **API service**: parsing JSON, auth checks, routing – ≈ 1–3 ms CPU time.  
3. **Cache hit**: SSD or in‑memory store → 0.1–0.5 ms read; cache miss → disk seek (~10 ms).  
4. **DB query**: simple key/value lookup on a sharded NoSQL store ≈ 2–5 ms if cached, otherwise add another 5–10 ms for network + DB processing.  
5. **Back‑end aggregation** (e.g., fetching followers list): each sub‑request is ~1 ms; parallelism reduces total to ~5 ms.  

Add them:  
- *Cache hit path*: 2 ms (network) + 3 ms (API) + 0.5 ms (cache) + 5 ms (DB) ≈ **10–12 ms**.  
- *Cache miss / heavy aggregation*: 2 ms + 3 ms + 10 ms + 15 ms ≈ **30–35 ms**.  

These are the ranges quoted in the README.

**4️⃣ Common traps to avoid**  
- Mixing **service‑level latency** with **overall user experience** (UI rendering, JavaScript).  
- Forgetting that **caching layers** can dramatically skew numbers; a single miss can dominate.  
- Assuming linear scaling: doubling users doesn’t double latency unless you hit resource limits.

**5️⃣ Sanity‑check & verbalize**  
- Compare to real‑world metrics (e.g., Twitter’s own “50 ms for 90 % of requests” benchmark).  
- Ask: *“If we add another hop (e.g., a CDN), how much does the RTT change?”* – this keeps the explanation grounded.  

By walking through each component, stating assumptions, and summing realistic numbers, you can confidently explain the latency figures in the README.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
