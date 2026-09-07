---
qid: ing_0542bb261a__aws__local
question: 'Explain: Interval Merging and Processing — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 489
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:44-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of our ad‑targeting engine that ingested >10 M time‑intervals per day from disparate data sources. The existing batch job took 8 h and produced stale segments, hurting campaign ROI by ~12 %. My goal was to build a near‑real‑time pipeline that merged overlapping intervals in under **2 minutes** while keeping costs <15 % of the legacy system.

**Action**  
1. **Design** – I decomposed the problem into *ingest → transform → merge → store* stages, choosing Kinesis Data Streams for low‑latency ingestion and Lambda for stateless transformation.  
2. **Merge Logic** – Implemented a *segment tree* in DynamoDB (global secondary index on start/end) to allow O(log n) range queries; the merge step ran inside a single‑threaded Lambda that kept an in‑memory buffer of 1 M intervals, spilling to S3 for overflow.  
3. **Scalability & Availability** – Used AWS Fargate with auto‑scaling for the merge worker; each task had a *dead‑letter queue* (SQS) to capture malformed records.  
4. **Cost Control** – Enabled DynamoDB on‑demand mode and leveraged reserved capacity for predictable traffic, reducing spend by 22 %.  

**Result**  
The new pipeline processed 12 M intervals in 1.6 minutes, a **95 % reduction in latency**, and increased campaign revenue by **18 %** within the first quarter of deployment.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered faster, more accurate targeting that directly lifted ad revenue.  
- **Ownership & Dive Deep** – Took full responsibility for end‑to‑end design, dissecting each component’s trade‑offs and iterating on cost/latency balance.  

*Bar‑raiser cues*: clear ownership narrative, concrete metrics, deep dive into AWS services, acknowledgment of failure points (e.g., handling spikes) and how those lessons shaped the final architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
