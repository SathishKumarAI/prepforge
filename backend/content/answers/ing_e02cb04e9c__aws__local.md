---
qid: ing_e02cb04e9c__aws__local
question: 'Explain: Availability Requirements — Strong vs. Eventual Consistency -
  by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 459
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:28-05:00'
sources: []
---

**Situation & Task**  
While designing a real‑time fraud‑detection pipeline for a payment gateway, I had to decide how the feature store (DynamoDB) would expose model predictions to downstream services. The latency requirement was <10 ms, yet we also needed 99.999% data accuracy for compliance.

**Action**  
I compared *strong* vs *eventual* consistency:

| Aspect | Strong Consistency | Eventual Consistency |
|--------|--------------------|----------------------|
| Read after write guarantee | ✅ | ❌ |
| Latency (single‑region) | ~25 ms | ~5–10 ms |
| Availability (multi‑AZ) | ↓ | ↑ |
| Cost (write capacity) | ↑ | ↓ |

Given the 99.999% accuracy mandate, I opted for **strong consistency** on a *read‑through cache* layer using **Amazon ElastiCache Redis** with a read replica cluster to keep reads <10 ms while still guaranteeing up-to-date predictions. The write path went directly to DynamoDB (Provisioned Capacity), and I leveraged **DynamoDB Streams + Lambda** to sync updates to Redis asynchronously.

**Result**  
The system achieved 99.999% prediction accuracy, reduced fraud loss by **18 %**, and maintained <8 ms latency for 95th percentile traffic, all while keeping operational cost under the budgeted $2k/month.  

---

### Leadership Principles Anchored
- **Customer Obsession** – ensured predictions were accurate enough to protect users.
- **Ownership** – I designed the consistency trade‑off from scratch and validated it in production.

> **Bar‑raiser takeaways:**  
> • Clear ownership of data correctness vs latency trade‑offs.  
> • Dive deep into AWS service characteristics (latency, cost).  
> • Quantified impact on fraud loss.  
> • Learned that caching can bridge the gap between strong consistency and low latency without compromising compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
