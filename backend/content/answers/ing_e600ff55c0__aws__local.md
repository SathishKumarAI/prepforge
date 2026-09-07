---
qid: ing_e600ff55c0__aws__local
question: 'Explain: Types of Pagination'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 447
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:07-05:00'
sources: []
---

**Situation / Task**  
I led a feature‑flag rollout for the ML model catalog in our data‑science portal, where users needed instant access to thousands of models. The original API returned all results at once, causing >30 s latency and 500 MB payloads—customers complained that the UI froze and billing exploded.

**Action (Design)**  
I introduced **cursor‑based pagination** for forward traversal and a **keyset‑based reverse cursor** for “previous page” support.  
*AWS services:* API Gateway + Lambda (Python) to serve paginated responses; DynamoDB with a Global Secondary Index on `model_id` for fast keyset queries; CloudWatch for latency metrics.  
Key design decisions:  

| Design | Scalability | Availability | Cost | Trade‑offs |
|--------|-------------|--------------|------|------------|
| Cursor (keyset) | O(1) per page, no offset slowness | Stateless Lambda → auto‑scale | Low (no extra DB reads) | Requires client to store cursor tokens |
| Offset (page/size) | Can grow linear with dataset size | Same as above | Higher read cost if high offsets | Simpler UI but poor performance at scale |

I added exponential back‑off on retries and cached the first 50 pages in ElastiCache for further speed.

**Result**  
Latency dropped from **30 s → <200 ms** per page, payload size to **<50 KB**, and API cost fell by **45 %**. Customer satisfaction (CSAT) rose from 3.2 to 4.7/5 within two weeks of launch.

**Learning & Ownership**  
I continuously monitored CloudWatch dashboards; when a spike hit 500 ms, I auto‑scaled the Lambda concurrency and re‑indexed DynamoDB keys—demonstrating *Ownership* and *Dive Deep*. The success was shared in our Q2 All‑Hands, reinforcing a culture of data‑driven decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
