---
qid: ing_a3cf06ea03__aws__local
question: 'Explain: Weak consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 373
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:46-05:00'
sources: []
---

**Situation / Task**  
I led a redesign of our open‑source ML platform’s model registry to support millions of concurrent users. The legacy system had “strong consistency” guarantees that caused write contention and 30 % slower model promotion pipelines.

**Action (Design)**  
* Adopted **eventual (weak) consistency** for the registry, using Amazon DynamoDB with a **partition key = `model_id`** and a **sort key = `version`**.  
* Introduced an asynchronous **SQS FIFO queue** that streams write events to a Lambda pipeline which updates a read‑optimized **Amazon Aurora Serverless v2** replica (for dashboards).  
* Implemented **optimistic locking** on the DynamoDB writes (`expected_version`) and a retry back‑off strategy.  
* Added a **CloudWatch alarm** for stale reads (> 5 min) to trigger an automated consistency check.

**Result**  
Write latency dropped from 350 ms to 70 ms (−80 %). Model promotion throughput increased from 1,200 models/hr to 4,500 models/hr. The read replica handled 95 % of analytics queries with <10 ms latency, while the eventual consistency model avoided a single point of contention.

**Reflection**  
I owned the trade‑off between consistency and performance, diving deep into DynamoDB’s consistency semantics. We learned that for non‑critical metadata (tags, description) weak consistency is acceptable, but for versioning we preserved linearizability with optimistic locking. This approach aligns with Amazon’s **Customer Obsession** (faster UX) and **Ownership** (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
