---
qid: ing_10254ef858__aws__local
question: 'Explain: traps for you early on that you — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 455
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:47-05:00'
sources: []
---

**Situation & Task**  
When I joined a fintech startup, we were eager to replace our monolithic batch jobs with an event‑driven microservice stack (Kafka + Lambda). Early adopters complained of “event storms” and data inconsistency—classic pitfalls from Martin Fowler’s *Many Meanings of Event-Driven Architecture*.

**Action**  
I applied **Ownership** and **Dive Deep**:  

1. **Event Schema Governance** – Adopted AWS Glue Data Catalog to version Avro schemas; enforced a schema‑registry policy that rejected incompatible changes (preventing “semantic drift”).  
2. **Idempotency & Exactly‑Once Processing** – Wrapped each Lambda in an SQS FIFO queue, storing de‑duplication IDs in DynamoDB with TTL, guaranteeing at most once delivery even under retries.  
3. **Back‑pressure & Circuit Breaker** – Configured Kinesis Streams shards to auto‑scale and used API Gateway throttling for downstream services; implemented CloudWatch alarms that trigger SNS alerts when lag > 5 min.  
4. **Observability** – Leveraged AWS X-Ray across Lambda + Step Functions, creating a “latency heatmap” that surfaced hot spots within 24 h.

**Result**  
Within two months we reduced *event‑processing latency* from an average of 12 s to **0.8 s** (95th percentile), cut duplicate processing by **87%**, and improved SLA compliance from **78%** to **99.5%**. The cost remained below $3k/month versus the projected $6k for a monolithic rebuild.

**Reflection**  
The key lesson: early in an event‑driven journey, obsess over *schema integrity* and *exactly‑once semantics*. A bar‑raiser would note my ownership of cross‑team governance, the depth of my AWS‑centric design, and the quantified impact on latency & cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
