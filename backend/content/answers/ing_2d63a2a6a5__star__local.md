---
qid: ing_2d63a2a6a5__star__local
question: 'Explain: Tool-Based Resolution, Not Pure Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 371
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:51-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time recommendation engine for an e‑commerce platform that had to scale to 10 k concurrent users during flash sales. The data volume (millions of clickstreams per day) made it impossible to generate all recommendations purely in memory; latency would exceed our SLA of 200 ms.

**Task** – Deliver a system that could produce personalized product suggestions with <200 ms response time, while keeping cost and complexity manageable.

**Action** – I chose a tool‑based resolution approach. First, I used Apache Kafka to stream click data into a dedicated processing cluster. Then I leveraged Redis Streams as an in‑memory queue for low‑latency message passing. For the heavy lifting of model inference, I wrapped a pre‑trained transformer (BERT) inside a lightweight C++ inference engine exposed via gRPC. Rather than generating embeddings on the fly, I cached them in Redis, refreshing only every 5 minutes. Finally, I orchestrated everything with Kubernetes, using HPA to spin up additional pods during peak traffic.

**Result** – The system consistently hit the <200 ms target, handling 12 k concurrent requests during a 3‑hour sale without any timeouts. We reduced GPU usage by 70% compared to a pure generation pipeline, saving roughly $1.2K per month in cloud spend. I learned that judiciously combining specialized tools—streaming, caching, and micro‑services—often outperforms monolithic AI generation when performance constraints are tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
