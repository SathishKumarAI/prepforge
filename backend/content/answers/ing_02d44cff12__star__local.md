---
qid: ing_02d44cff12__star__local
question: 'Explain: Push vs Pull model — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 332
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:59-05:00'
sources: []
---

**Situation:**  
At a mid‑size startup building an internal analytics dashboard, our data team was struggling to keep up with the real‑time engagement metrics from Facebook and Instagram. The dashboards were lagging by minutes, which made it hard for product managers to react quickly to viral posts.

**Task:**  
I had to design a data ingestion pipeline that could deliver near‑real‑time updates without overwhelming our servers or violating platform rate limits.

**Action:**  
I evaluated two architectures: a pull model—periodic API calls every 30 seconds—and a push model—using Facebook’s Webhooks and Instagram’s real‑time subscription endpoints. I implemented the push approach, setting up secure HTTPS callbacks that streamed event payloads directly into our Kafka cluster. To handle bursts, I added an auto‑scaling consumer group and used back‑pressure throttling in the broker to keep latency under 5 seconds. I also built a fallback polling mechanism for when webhooks failed, ensuring no data loss.

**Result:**  
Latency dropped from ~3 minutes to <5 seconds, and our product team reported a 40 % faster decision cycle on high‑impact posts. The pipeline now processes ~1,200 events per second during peak hours with <0.2 % error rate. I learned that for high‑velocity social data, a push model coupled with resilient consumer scaling delivers the best mix of freshness and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
