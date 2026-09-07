---
qid: ing_00c540fbb3__aws__local
question: 'Explain: Idempotency in Messaging — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 508
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:16-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a migration of a real‑time order‑processing pipeline to AWS. The system had to guarantee that duplicate messages from upstream services (e.g., payment retries) never caused double‑billing or inventory mis‑counting.

**Action**  
I designed an *idempotent* messaging layer using **Amazon SQS + DynamoDB + Lambda**.  
1. Each message carries a unique `order_id`.  
2. A Lambda function, triggered by the SQS queue, first checks a **DynamoDB idempotency table** (`PK = order_id`, `SK = timestamp`).  
3. If the key exists, the lambda logs “duplicate” and returns; otherwise it writes the record (using conditional write) and proceeds to downstream processing.  

Key AWS services & trade‑offs:  
- **SQS FIFO** guarantees ordering and one‑by‑one delivery for a given `order_id`.  
- DynamoDB’s *conditional put* is **event‑driven** and cost‑efficient; we keep the table small by TTL on processed keys.  
- Using **Step Functions** for orchestration keeps the system resilient and observable.

I also added a CloudWatch alarm that triggers when duplicate detections exceed 1% of total messages—this surfaced a mis‑configured upstream retry policy early.

**Result**  
After deployment, duplicate processing dropped from **4.7 % to <0.01 %**, cutting unnecessary billing by $12k/month and preventing any customer chargebacks. The solution ran at <$200/month, 99.999% availability, and scaled automatically with traffic spikes.

---

### Leadership Principles Highlighted
- **Ownership** – I owned the end‑to‑end reliability of the pipeline.
- **Dive Deep** – Detailed DynamoDB conditional logic and SQS FIFO semantics ensured correctness.
- **Deliver Results** – Quantified impact on cost & customer experience.  

Bar‑raisers listen for: clear ownership, depth in design choices, quantified outcomes, and lessons learned from any early failures (e.g., the alarm that caught upstream mis‑config).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
