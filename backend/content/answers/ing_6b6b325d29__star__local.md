---
qid: ing_6b6b325d29__star__local
question: 'Explain: notification to the driver and if the — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 361
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:09-05:00'
sources: []
---

**Situation:**  
When I was working on a ride‑hailing platform for a new market launch, we noticed that drivers were missing surge‑price notifications and early trip requests, causing missed earnings and customer complaints.

**Task:**  
I had to design an efficient, low‑latency notification system that reliably pushed real‑time alerts to drivers’ mobile apps while keeping the backend scalable as our driver base grew from 2 k to 50 k in a month.

**Action:**  
First, I split notifications into two streams: *system events* (surge, promotions) and *trip events* (request, cancellation). For system events I used a publish/subscribe model with Apache Kafka; each driver’s device token was stored in Redis for quick lookup. For trip events, I built a lightweight microservice that leveraged AWS SNS to push APNs/FCM messages directly. To avoid over‑loading drivers during peak hours, I implemented back‑pressure by batching notifications and using exponential backoff for retries. I also added a metrics dashboard (Prometheus + Grafana) to monitor delivery latency and failure rates in real time.

**Result:**  
Within two weeks, the average notification delivery time dropped from 4 s to under 300 ms, and driver response rate increased by 18 %. Customer‑reported missed trips fell by 32 %, and overall rider satisfaction rose from 82 % to 91 %. I learned that combining Kafka for high‑throughput events with targeted push services, plus real‑time observability, is key to building a robust notification layer in large‑scale ride‑hailing systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
