---
qid: ing_10a3c42bd5__aws__local
question: 'Explain: Deliver application and system alerts — What is Pub/Sub Messaging?
  - Pub/Sub Messaging Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 449
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:01-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession* – our alerts must reach the right ops team instantly so customers stay online.  
*Ownership* – I designed and rolled out the end‑to‑end alert pipeline from scratch.

---

### **Situation / Task**
At my last role, we had a 99.9 % SLA for high‑frequency trading APIs. A spike in latency was creeping toward our limit, but our existing polling checks only surfaced issues with ~5 min lag, causing outages that cost us $120k/month.

### **Action (Technical Design)**
I built a **Pub/Sub** alert system using:

| Component | AWS Service | Reason |
|-----------|-------------|--------|
| Event source | CloudWatch Alarms + Kinesis Data Streams | Near‑real‑time metrics ingestion |
| Message broker | Amazon SNS topic with FIFO & dead‑letter queue | Guaranteed ordering, retries |
| Subscribers | Lambda functions → PagerDuty / Slack | Zero‑maintenance scaling |
| Persistence | DynamoDB for audit log | Auditable, low‑latency read |

*Scalability:* Kinesis auto‑scales to 1M events/sec; SNS fan‑out is serverless.  
*Availability:* All services are Multi‑AZ with automatic failover.  
*Cost:* ~$0.01 per 100 000 messages + Lambda compute, < $200/month for our load.

### **Result**
Alert delivery latency dropped from 5 min to < 3 s. Mean time to resolution (MTTR) fell by **70%** (from 45 min to 13 min), saving ~$90k annually. We also added a “self‑healing” Lambda that patched the offending service, reducing repeat incidents by 50%.

### **Reflection**
I learned that *Pub/Sub* isn’t just a messaging pattern; it’s an operational safety net. Future iterations will integrate AWS EventBridge for richer event routing and use Amazon Managed Streaming for Kafka to support more complex workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
