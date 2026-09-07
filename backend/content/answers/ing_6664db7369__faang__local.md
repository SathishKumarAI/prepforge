---
qid: ing_6664db7369__faang__local
question: 'Explain: Now it doesn''t query Third Party Data — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 435
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:26-05:00'
sources: []
---

**Clarify**  
We’re asked why a modern ML‑based mapping system (e.g., Google Maps) would avoid querying external third‑party data during inference.  
Assumptions: *The model must serve high‑volume requests in real time, with strict SLAs; the external API is rate‑limited or costly; and the service already has rich internal telemetry.*

**Approach**  
1. **Identify latency & cost drivers** – external calls add network hops, authentication, billing per request.  
2. **Quantify impact on throughput** – estimate request‑rate × average round‑trip time vs. in‑memory lookup.  
3. **Assess data freshness needs** – determine how often third‑party data changes relative to our update cadence.

**Depth**  
- *Latency*: External API latency (~100 ms) versus internal cache (<1 ms). For 10⁶ req/s, this adds ~100 s of cumulative wait per second.  
- *Cost*: If $0.01/req, a 1‑million‑request day costs $10k; scaling to global traffic is prohibitive.  
- *Reliability*: Third‑party outages would cascade into our service, violating uptime SLAs.  
- *Data consistency*: Our own data pipelines (sensor streams, crowdsourced edits) are updated every few minutes, ensuring fresher context than a static external source.

**Edge Cases**  
- Sudden data gaps where internal sources lack coverage → fallback to cached or historical third‑party snapshots.  
- Regulatory changes requiring explicit external verification → temporary hybrid mode.

**Optimize & Communicate**  
We’ll pre‑compute feature embeddings and serve via in‑memory sharded caches, reducing latency to <5 ms. Periodic bulk ingestion of third‑party data (daily/hourly) keeps the model’s knowledge up‑to‑date without real‑time calls. This balances freshness, cost, and SLA compliance while maintaining a clean, scalable architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
