---
qid: ing_dc9b6b2e93__star__local
question: 'Explain: Streaming and Long-Lived Connections — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 331
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:13-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we launched a real‑time fraud monitoring dashboard that needed to display transaction alerts as soon as they were detected. Our existing polling‑based API hit the database every 30 seconds, causing latency and unnecessary load during peak hours.

**Task**  
I was tasked with redesigning the data pipeline so the dashboard received events within 200 ms while keeping infrastructure cost under our $15k/month budget.

**Action**  
I introduced a Kafka cluster as a message broker and built a lightweight Go microservice that listened to the “transactions” topic. The service used HTTP/2 server‑push to establish long‑lived connections with each browser client, pushing JSON payloads directly over WebSockets instead of REST calls. To keep costs low I leveraged Confluent Cloud’s auto‑scaling and set up a small Redis cache for recent alerts, reducing Kafka read latency. I also implemented backpressure handling: if a client fell behind, the service dropped older messages to avoid memory bloat.

**Result**  
Latency dropped from 30 seconds to under 200 ms, boosting user engagement by 35% as analysts could act faster on fraud signals. The new infrastructure ran at $12k/month and added only one extra developer’s worth of maintenance overhead. I learned that combining Kafka for decoupled streaming with HTTP/2 server‑push can deliver real‑time data efficiently when tuned for the right trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
