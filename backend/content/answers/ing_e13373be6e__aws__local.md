---
qid: ing_e13373be6e__aws__local
question: 'Explain: Database Schema Design — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 469
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:44-05:00'
sources: []
---

**Situation** – While leading a data‑science team at my previous company, we needed a real‑time comment feed for our flagship app that could scale to **10 M daily active users (DAU)** while keeping latency under 200 ms.

**Task** – Design the database schema and overall system so that comments appear instantly, can be moderated, and support analytics without blocking writes.

**Action**  
1. **Schema** – A single *Comments* table in DynamoDB with a composite key `(PostID, SortKey)` where `SortKey = Timestamp + RandomSuffix`. Secondary indexes:  
   - `UserIndex (UserID, SortKey)` for per‑user feeds.  
   - `ModerationIndex (Status, SortKey)` to pull pending comments.  
2. **Writes** – Use an **AWS Lambda** triggered by API Gateway; it writes the comment atomically and publishes a message to **SNS**.  
3. **Ingestion** – SNS → **Kinesis Data Streams** → **Lambda** → **DynamoDB** (batch write) for high throughput and replayability.  
4. **Read** – Application reads via **DynamoDB Accelerator (DAX)** for sub‑50 ms cache hits; fallback to DynamoDB if stale.  
5. **Analytics** – Stream Kinesis data into **Redshift Spectrum** for historical aggregation, enabling monthly comment volume reports in <2 min.

**Result** – The system handled 12 M concurrent writes during a product launch with 99.9% availability and kept read latency at 120 ms average. Costs stayed below \$3K/month, 30 % less than the monolithic SQL baseline.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant feedback for users.  
- **Ownership & Dive Deep** – Designed end‑to‑end flow, tuned partitioning and caching.  

*Bar‑raiser notes:* Look for clear ownership of all layers, depth in DynamoDB key design, quantified performance metrics, and a learning loop from the launch spike to cost optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
