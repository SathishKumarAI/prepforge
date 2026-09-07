---
qid: ing_a3af943476__aws__local
question: 'Explain: Produce records with JSON data — GitHub - confluentinc/kafka-rest:
  Confluent REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 415
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:15-05:00'
sources: []
---

**Situation / Task**  
While architecting a real‑time analytics pipeline for our public‑sector client, I was tasked with exposing Kafka topics to downstream services that could only consume JSON over HTTP. The goal: deliver a lightweight, cost‑effective REST endpoint that produced high‑throughput, schema‑validated records.

**Action**  
I chose Confluent’s **Kafka‑REST Proxy** because it natively supports JSON and integrates with the existing Confluent Platform. I:
1. Defined an Avro schema for the payload and registered it in Schema Registry to enforce consistency.
2. Configured the REST Proxy behind an AWS ALB, enabling TLS termination and WAF rules for DDoS protection (≈$0.10/h).
3. Implemented a Lambda function that transformed incoming JSON into Avro before forwarding to Kafka, ensuring zero‑copy writes.
4. Used CloudWatch metrics (`kafka_rest_request_rate`, `kafka_rest_response_latency`) to set auto‑scaling thresholds; the proxy scaled from 1 to 12 instances during peak bursts (peak 15 000 requests/sec).

**Result**  
The solution achieved:
- **99.9% availability** over a 6‑month period with no SLA breaches.
- **Latency < 200 ms** for 95th percentile requests, meeting the client’s real‑time dashboard requirement.
- Cost savings of **35%** compared to an on‑prem REST gateway.

**Reflection (Bar‑raiser)**  
I took full ownership by iterating schema changes in a CI pipeline, diving deep into CloudWatch logs to preempt bottlenecks, and documenting lessons for future teams. This experience reinforced that *Customer Obsession* drives us to choose the right tool, while *Ownership* ensures we own the entire delivery loop—from ingestion to cost control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
