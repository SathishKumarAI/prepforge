---
qid: ing_e7724ecb7e__aws__local
question: 'Explain: Eliminate polling — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 522
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:05-05:00'
sources: []
---

**Situation / Task**  
At my previous company we had a fleet of IoT devices that sent telemetry every 30 seconds to an API gateway. The backend pulled the data via HTTP polling, which caused >10 k requests per minute and bursty costs in Lambda. I was tasked with reducing latency, cost, and operational overhead while ensuring no loss of events.

**Action (Technical)**  
I re‑architected the pipeline using **Amazon SNS (Publisher) → Amazon SQS FIFO (Subscriber) → AWS Lambda**. Devices publish to an SNS topic; SNS fan‑out pushes each message to a single‑message FIFO queue. A Lambda function is triggered by the queue, processes the payload, and writes aggregated metrics to DynamoDB.  
*Scalability:* SNS scales to millions of publishes/sec; SQS guarantees at‑least‑once delivery with visibility timeouts for deduplication.  
*Availability:* Both services are fully managed and 99.999% SLA; we added a dead‑letter queue for failed messages.  
*Cost:* Eliminated 90 % of API calls (from 10 k/min to ~2 k/min) and reduced Lambda invocations by 70 %, cutting monthly spend from $1,200 to $350.

**Result**  
Latency dropped from an average of 8 s (polling interval) to <500 ms real‑time processing. The new system handled a peak of 120 k messages/day with zero data loss and enabled predictive analytics on the aggregated metrics—boosting downstream revenue by 12 % in Q4.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered instant telemetry to product managers, improving feature prioritization.  
- **Ownership & Dive Deep:** Took end‑to‑end responsibility, measured every metric, and iterated on the design until SLA targets were met.

**Bar‑raiser Insight**  
A good candidate shows ownership by taking a problem from hypothesis to production, dives deep into trade‑offs (SNS vs. EventBridge, queue type), quantifies impact with real numbers, and reflects on what could be improved—here, we later moved to Kinesis for higher throughput after scaling tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
