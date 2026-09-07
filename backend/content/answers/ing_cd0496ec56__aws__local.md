---
qid: ing_cd0496ec56__aws__local
question: 'Explain: Bi-directional messaging — What is Pub/Sub Messaging? - Pub/Sub
  Messaging Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 447
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:10-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a real‑time analytics platform that ingested millions of events per day from mobile devices. The existing batch pipeline introduced 30 min latency, hurting our “Customer Obsession” promise to deliver insights in near‑real time.

**Action**  
I championed a **Pub/Sub** architecture using **Amazon SNS + Amazon SQS** as the messaging backbone (Ownership). I defined two streams: *Events* and *Alerts*. Each publisher (mobile SDK) pushes JSON payloads to an SNS topic; SNS fan‑out delivers to multiple SQS queues (one per consumer microservice).  
- **Scalability**: SNS scales automatically to millions of messages/second, while SQS offers at‑least‑once delivery with configurable visibility timeouts.  
- **Availability**: Both services are fully managed, multi‑AZ, and provide 99.9 % SLA; dead‑letter queues capture failures for audit.  
- **Cost**: $0.50 per million SNS publishes + $0.40 per million SQS requests – far cheaper than a self‑hosted broker at comparable throughput.  
- **Trade‑offs**: We accept eventual consistency and possible duplicate deliveries, mitigated by idempotent consumer logic.

I added CloudWatch metrics (messages published/consumed, queue depth) and alarms; the system reduced latency from 30 min to <5 s for critical alerts, boosting user engagement by 12% within two weeks.

**Result**  
The Pub/Sub pattern delivered a **10× throughput increase**, lowered operational cost by 35%, and enabled new real‑time features that drove a $2M lift in revenue.  

*Bar‑raiser cues*: clear ownership of the redesign, deep dive into service trade‑offs, quantitative impact, and reflection on how duplicate handling improved resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
