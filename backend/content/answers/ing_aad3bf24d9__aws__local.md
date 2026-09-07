---
qid: ing_aad3bf24d9__aws__local
question: 'Explain: Summary — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 425
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:48-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a real‑time analytics platform that ingested telemetry from thousands of IoT devices. The team needed to decide whether to use **TCP** (reliable, ordered) or **UDP** (low‑latency, unordered) for the data pipeline.

**Action – Technical Design**  
I performed a *dive deep* into packet loss rates, required ordering, and downstream processing latency. I designed two parallel ingestion streams:

| Service | Protocol | Use Case |
|---------|----------|----------|
| **Kinesis Data Streams (TCP)** | Reliable delivery to the analytics microservice – guarantees exactly‑once semantics for critical metrics. |
| **Kinesis Data Firehose (UDP via Nginx proxy)** | Near‑real‑time dashboards – tolerates occasional packet loss but delivers sub‑second updates. |

I added a *deduplication layer* with DynamoDB TTL to handle replays, and an *exponential back‑off retry* for TCP failures. Cost modeling showed 15 % savings on data transfer by offloading non‑critical streams to UDP.

**Result**  
Within two sprints we saw:

- **Latency drop from 350 ms → 90 ms** on dashboards (UDP path).  
- **Error‑rate reduction** for critical metrics: 0.02 % packet loss vs the previous 1.5 %.  
- **Cost savings of $12k/month** by leveraging UDP where appropriate.

**Reflection & Ownership**  
I owned the decision, consulted stakeholders, and iterated on the design after a failure test (simulated 30 % packet loss). The bar‑raiser looked for my *ownership* over trade‑offs, *quantified impact*, and *learning from failure*.  

> **Leadership Principles:** Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
