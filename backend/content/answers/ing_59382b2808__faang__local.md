---
qid: ing_59382b2808__faang__local
question: 'Explain: Hard — Amazon Simple Notification Service endpoints and quotas
  - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 524
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:21-05:00'
sources: []
---

**Clarify**  
> *What are the endpoint limits for SNS?*  
I’ll explain the per‑region API call quotas (requests/sec), the maximum number of endpoints you can subscribe to a topic, and the per‑topic subscription cap. I’ll confirm whether we’re talking about **publish** limits or **subscription** limits.

---

### 1️⃣ Approach
| Step | Action |
|------|--------|
| **Define scope** | Publish API calls vs. subscription API calls |
| **List core quotas** | Requests/second, topics per account, endpoints per topic |
| **Explain calculation** | How AWS scales these numbers across regions |
| **Show trade‑offs** | Throttling behavior, back‑off strategy |

---

### 2️⃣ Depth
- **Publish requests/sec:** Default is 30 k requests/region (soft limit). Exceeded → throttled; use exponential back‑off.  
- **Subscriptions per topic:** Max 10 000 endpoints per topic. Each subscription consumes a quota of 1 request/sec for health checks.  
- **Topics per account:** 100 000 topics per region (soft).  
- **Endpoint types:** HTTP/S, email, SMS, Lambda, SQS; each has its own *delivery* quota (e.g., 10 k messages/second for SQS).  

AWS provides the `GetTopicAttributes` API to retrieve current usage. If you hit a limit, request an increase via Support Center.

---

### 3️⃣ Edge Cases
- **Burst traffic**: Short spikes can exceed the per‑second cap even if the average is fine.  
- **Multiple endpoints**: A single device may be subscribed through several protocols (e.g., SMS + Lambda). Each counts separately.  
- **Cross‑region replication**: Endpoints in different regions share the same account limit.

---

### 4️⃣ Optimize & Communicate
- **Throttling strategy:** Implement exponential back‑off + jitter to spread retries.  
- **Monitoring:** Use CloudWatch metrics (`PublishRate`, `NumberOfMessagesPublished`) and set alarms before hitting limits.  
- **Scaling**: If you need >10 k endpoints, partition into multiple topics or use SNS topic hierarchy.

By structuring the answer—clarifying scope, outlining steps, diving deep with numbers, testing edge cases, and presenting a scalable plan—you demonstrate the analytical rigor Amazon values in technical interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
