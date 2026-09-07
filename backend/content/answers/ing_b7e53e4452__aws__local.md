---
qid: ing_b7e53e4452__aws__local
question: 'Explain: How does metadata filtering interact with ANN indexes? Explain
  pre- vs post-filtering.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 451
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:56-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role designing a recommendation service for a media platform, I had to decide how best to combine **metadata filtering** with an **Approximate Nearest Neighbor (ANN) index** built in **FAISS on EC2 Spot Instances**.

*Situation*: Users could filter by genre, release year, and language before the ANN search returned similar titles.  
*Task*: Maximize query latency (<50 ms) while keeping cost < $0.03 per request.  
*Action*:  

1. **Pre‑filtering** – I built a small inverted index in DynamoDB for each metadata field. A single SQL‑like query on the key (e.g., `genre='Sci‑Fi'`) returned ~10 k candidate IDs. This reduced the search space fed into FAISS, cutting GPU memory usage by 70% and saving $0.01 per request.  
2. **Post‑filtering** – For highly selective filters (e.g., “released in 2024”), I ran them after ANN to avoid DynamoDB read costs when the candidate set was already tiny (<50 items).  

*Result*: Query latency dropped from 120 ms to 35 ms, and monthly spend fell by 40 %. The system now scales linearly with user traffic because each component is independently scalable (DynamoDB auto‑scales; FAISS runs on spot fleets).

**Leadership Principles**:  
- **Customer Obsession** – Delivered a faster, cheaper experience.  
- **Dive Deep** – Chose pre vs post filtering based on empirical read/write costs and latency measurements.

**Bar‑raiser signals**: Ownership of cost & performance metrics, deep dive into trade‑offs (DynamoDB vs GPU memory), learning from A/B tests that showed diminishing returns beyond 10 k candidates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
