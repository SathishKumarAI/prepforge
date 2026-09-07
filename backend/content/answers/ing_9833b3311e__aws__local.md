---
qid: ing_9833b3311e__aws__local
question: 'Explain: CDC vs Events vs Event Sourcing — Change Data Capture (CDC) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 592
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:52-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of a legacy monolith that exposed 200+ REST endpoints to a server‑less microservice architecture. The data layer had to stay consistent while we introduced real‑time analytics. I chose **Change Data Capture (CDC)** as the backbone, but needed to explain how it differs from **Events** and **Event Sourcing** for stakeholders.

**Action**  
1. **Clarify requirements** – We required *eventual consistency* for downstream analytics and *auditability* for compliance.  
2. **Design** –  
   - **CDC**: Use **AWS DMS** to stream binlog changes from RDS MySQL → **Amazon Kinesis Data Streams** → consumer Lambda that writes a *snapshot* into DynamoDB.  
   - **Events**: Publish domain events (e.g., `OrderCreated`) to the same Kinesis stream, processed by independent services for notifications and reporting.  
   - **Event Sourcing**: Store every event in an immutable **Amazon EventBridge** event store; rebuild state only when needed (rare).  
3. **Trade‑offs** – CDC gives *low latency* (<1 s) and *high reliability* at moderate cost (~$0.02/GB for DMS). Events decouple services but add complexity in versioning. Event Sourcing offers full audit trails but increases storage and rebuild time.

**Result**  
After deployment, the data pipeline processed 5 M records/day with <200 ms latency, enabling real‑time dashboards that grew user engagement by **18%** over three months. Cost was kept under $1K/month versus an estimated $3K if we had used a full Event Sourcing stack.

---

### Leadership Principles Anchored
- **Customer Obsession** – Delivered instant insights for business users, improving decision speed.  
- **Ownership & Dive Deep** – I owned the end‑to‑end design, drilled into DMS performance metrics, and iterated on Kinesis shard sizing to avoid throttling.

---

#### What a bar‑raiser looks for
| Trait | How I demonstrated it |
|-------|------------------------|
| Ownership | Took full responsibility from requirement gathering through deployment. |
| Dive Deep | Benchmarked CDC vs Event Sourcing, tuned shard count, and quantified latency gains. |
| Quantified Impact | 18% engagement lift, <$1K/month cost. |
| Learning from Failure | After a Kinesis burst, we added auto‑scaling shards; this prevented data loss in a critical rollout. |

This approach showcases clear technical reasoning while meeting Amazon’s high standards for customer impact and operational excellence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
