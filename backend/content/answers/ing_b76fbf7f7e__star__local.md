---
qid: ing_b76fbf7f7e__star__local
question: 'Explain: How Pub/Sub Works — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 321
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:53-05:00'
sources: []
---

**Situation:** While leading the migration of our legacy order‑processing pipeline at a fintech startup, we noticed that real‑time fraud alerts were lagging by minutes, causing delayed transaction reversals and customer dissatisfaction.

**Task:** I needed to design an event‑driven architecture that could decouple microservices, guarantee at least‑once delivery, and scale to millions of events per day without bottlenecks.

**Action:** I proposed a publish/subscribe model using Google Cloud Pub/Sub. Orders were published as JSON messages on the “orders” topic; fraud, compliance, and analytics services subscribed to this topic via dedicated subscription queues. I implemented dead‑letter handling for malformed payloads and set message retention to 7 days to support replay during outages. To meet latency requirements, I used flow control with a maximum outstanding message count of 10,000 per subscriber and leveraged push delivery to trigger Cloud Functions that performed lightweight fraud checks before pushing results back onto a “fraud‑alerts” topic. Monitoring was added via Pub/Sub metrics in Stackdriver, enabling us to auto‑scale the subscriber pool based on queue depth.

**Result:** The new architecture cut alert latency from 3 minutes to under 500 ms, increased throughput by 400%, and reduced operational overhead by eliminating manual polling scripts. I learned that proper topic/subscription design, coupled with robust error handling, is key to building resilient event‑driven systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
