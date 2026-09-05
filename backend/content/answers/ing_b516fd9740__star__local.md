---
qid: ing_b516fd9740__star__local
question: 'Explain: Clogged stream — Asynchronous computing at Meta: Overview and
  learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 352
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:42-05:00'
sources: []
---

**Situation:**  
At Meta I was part of the data‑pipeline team responsible for ingesting real‑time clickstream data from over 1.2 billion daily active users. The existing batch‑oriented pipeline had a “clogged stream” problem: late‑arriving events piled up, causing latency spikes and stale metrics that affected ad targeting.

**Task:**  
I needed to redesign the ingestion layer so it could handle bursts of traffic without back‑pressure, maintain event order for downstream analytics, and keep latency under 200 ms during peak hours.

**Action:**  
I introduced an asynchronous microservice architecture using Apache Pulsar as a distributed commit log. Each worker subscribed to topic partitions via non‑blocking I/O (Netty) and processed events in parallel, leveraging back‑pressure signals from the consumer API to pause producers when needed. I added a lightweight state store (Redis Streams) to track event sequence numbers per user session, ensuring idempotent processing. Finally, I implemented health‑checks that auto‑scaled workers based on queue depth, integrating with Kubernetes HPA for dynamic scaling.

**Result:**  
Latency dropped from 1.8 s to 120 ms during peak traffic, and throughput increased by 4× without increasing cost. The new system reduced data loss incidents by 98% and enabled real‑time ad relevance scoring with sub‑second freshness. I learned the importance of decoupling ingestion from processing, using back‑pressure correctly, and designing for idempotency in high‑volume async streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
