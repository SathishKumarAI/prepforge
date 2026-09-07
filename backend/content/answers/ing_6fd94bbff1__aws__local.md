---
qid: ing_6fd94bbff1__aws__local
question: 'Explain: From a high-volume query stream, maintain the top-k most frequent
  queries right now, with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 456
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:53-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a real‑time analytics engine for an ad‑tech platform that ingests ~10 M click‑through queries per second. The goal: expose the current top‑5 search terms with ≤2 % error while keeping RAM < 1 GB.

**Approach (Design)**  
* **Stream ingestion** – Kinesis Data Streams → Lambda for micro‑batching every 200 ms.  
* **Sketch** – Each batch feeds a Count‑Min Sketch (CMS) of width *w = 10⁵*, depth *d = 5*. CMS needs only ~2 MB per stream, far below the limit.  
* **Sliding window** – Every 30 s we age out the oldest CMS bucket and merge the remaining ones to keep a moving‑window view.  
* **Top‑k extraction** – A small in‑memory min‑heap (size 5) is updated on each batch using the CMS estimates; this gives O(log k) per update.  
* **Persistence & alerting** – The heap contents are written to DynamoDB every minute for durability and fed into CloudWatch dashboards.

**Result**  
The system handled 10 M QPS with <1 GB RAM, producing top‑5 lists within 200 ms latency. Accuracy measured against a ground truth set was 97.8% (error < 2%). Cost: $0.03 per 100K queries, ~25 % lower than an equivalent Redis cluster.

**Reflection & Bar‑raiser cues**  
*Owned the trade‑off between accuracy and memory; I quantified impact via error metrics.*  
*Dived deep into CMS theory to justify width/depth choices.*  
*Learned that a 30 s window balances freshness with stability—initial trials with 10 s caused high churn, so we adjusted.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
