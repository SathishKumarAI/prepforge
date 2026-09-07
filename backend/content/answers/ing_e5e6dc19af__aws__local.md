---
qid: ing_e5e6dc19af__aws__local
question: 'Explain: Reciprocal Rank Fusion (RRF) — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 440
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:51-05:00'
sources: []
---

**Reciprocal Rank Fusion (RRF) – A hybrid search glue**

*Leadership Principles:* **Customer Obsession & Ownership**

**Situation:**  
At my previous firm we launched a product‑search feature that combined an internal knowledge base with external web results. Users complained the top hits were often irrelevant, hurting conversion.

**Task:**  
I owned the redesign of our ranking pipeline to surface the most useful documents regardless of source.

**Action:**  
1. **Requirements & Design** – RRF assigns a score `score = Σ 1/(k + rank_i)` for each document across all engines (`k=60`). I implemented this as an AWS Lambda that ingests ranked lists from two services:  
   - *Amazon Kendra* (structured enterprise search)  
   - *AWS OpenSearch* (web‑crawl index).  

2. **Scalability & Availability** – The Lambda is stateless, runs in multiple AZs, and triggers via an Amazon EventBridge rule on every batch job. Results are stored in DynamoDB for low‑latency retrieval by the front‑end.

3. **Cost & Trade‑offs** – Using serverless keeps spend tightly coupled to usage; we avoided provisioning EC2 clusters that would idle 70% of the time. The only trade‑off was a slight increase (~5 ms) in query latency, acceptable given the higher relevance.

4. **Bias for Action & Dive Deep** – I quickly prototyped RRF in Python, measured precision@10 and recall@50, then iterated on `k` to balance freshness vs. depth.

**Result:**  
After deployment, click‑through rate rose 28 % and user satisfaction scores climbed from 4.1 to 4.6/5 within two weeks—directly impacting revenue by an estimated $120K/month. I documented lessons learned in a post‑mortem, emphasizing the importance of blending multiple signals for true customer value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
