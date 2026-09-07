---
qid: ing_3124d02800__faang__local
question: 'Explain: Reliability and Fault Tolerance — Event-Driven Architecture (EDA):
  A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 427
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:38:35-05:00'
sources: []
---

**Reliability & Fault‑Tolerance in an Event‑Driven Architecture (EDA)**  
*(FAANG interview style – 170 words)*  

| **Step** | **What to say** |
|----------|----------------|
| **Clarify** | “You want me to explain how EDA can stay reliable and tolerant to faults. I’ll assume we’re talking about a micro‑service stack on cloud (Kafka/Redis Streams, SQS, etc.) with stateless consumers and eventual consistency.” |
| **Approach** | 1️⃣ Decouple producers & consumers → independent lifecycles.<br>2️⃣ Use durable event stores (topic partitions) for replay.<br>3️⃣ Design idempotent handlers to avoid duplicates.<br>4️⃣ Employ dead‑letter queues (DLQs) and retry policies. |
| **Depth** | *Durability*: Persist every event; replication factor ≥ 3 ensures no single point of failure. <br>*Idempotence*: Store a unique event‑id in a cache or DB before processing; if seen again, skip. <br>*Retries*: Exponential back‑off + max attempts → avoid hammering downstream services.<br>*DLQ*: Unprocessed events go to DLQ for manual triage; automated alerts can trigger auto‑repair pipelines. <br>*Circuit Breaker*: Detect failing consumers and pause event dispatch until health is restored. |
| **Edge Cases** | Duplicate events, out‑of‑order delivery (partition ordering), partial consumer failure, network partitions. Test by injecting duplicates, throttling consumers, simulating broker outages. |
| **Optimize & Communicate** | • Cache recent event‑ids to reduce DB load.<br>• Scale consumer groups horizontally; use partition rebalancing.<br>Explain trade‑offs: higher durability → more latency; aggressive retries → resource consumption. End with a diagram reference and note that observability (metrics, traces) is essential for detecting faults early. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
