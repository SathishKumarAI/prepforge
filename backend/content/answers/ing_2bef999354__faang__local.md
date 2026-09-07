---
qid: ing_2bef999354__faang__local
question: 'Explain: Latency Budget — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 543
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:25:15-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* We need to explain how a *latency budget* is defined and enforced in a **Hybrid Search** system (e.g., combining vector‑search with keyword search).  
*Assumptions I’d confirm:* 1) “Latency budget” refers to the maximum end‑to‑end response time users expect. 2) Hybrid Search splits work between an ANN engine, a text index, and post‑processing layers. 3) The system is distributed across microservices.

**2️⃣ Approach**  
1. Identify all latency contributors (network, query parsing, vector lookup, keyword lookup, scoring, aggregation).  
2. Measure each component’s baseline latency under load.  
3. Allocate a slice of the total budget to each part while leaving headroom for spikes.  
4. Instrument every service with distributed tracing; adjust slices iteratively.

**3️⃣ Depth**  
- **Vector Engine:** Latency ≈ *O(log N)* index lookup + GPU transfer (~5–10 ms).  
- **Keyword Index (e.g., ElasticSearch):** ~15–20 ms for term query.  
- **Scoring & Fusion:** 2–3 ms per candidate; batch fusion reduces overhead.  
- **Network/Serialization:** ~1–2 ms per hop.  

If the budget is 200 ms, a typical allocation might be: Vector (70 ms), Keyword (50 ms), Scoring (30 ms), Network/Overhead (20 ms). Use async pipelines to overlap network and computation.

**4️⃣ Edge Cases**  
- *Skewed queries* that hit hot shards → latency spikes.  
- *Large candidate sets* from ANN → scoring bottleneck.  
- *Network partition* → fallback to keyword‑only search.  
Test by simulating burst traffic, varying vector dimensions, and injecting artificial delays.

**5️⃣ Optimize & Communicate**  
- **Cache popular queries** (e.g., in Redis) to shave off 30–40 ms.  
- **Pre‑compute fusion scores** for high‑frequency terms.  
- **Adaptive batching:** merge multiple user requests when load is low.  
When presenting, walk through the latency budget diagram, show how each slice was derived from measurements, and explain trade‑offs (e.g., lower vector dimension → faster lookup but less recall). This demonstrates structured thinking, quantitative reasoning, and practical system tuning—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
