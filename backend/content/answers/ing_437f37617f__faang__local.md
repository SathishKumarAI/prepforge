---
qid: ing_437f37617f__faang__local
question: 'Explain: Security and Privacy — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 550
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:21:15-05:00'
sources: []
---

**Clarify**

We’re asked how a CDC system can be built that preserves *security* and *privacy*.  
Key assumptions:  
1. Data resides in relational or document stores with frequent writes.  
2. Only authorized services should see changes, and data may contain PII.  
3. Latency tolerance is sub‑second for real‑time feeds but bulk loads are acceptable.

**Approach**

1. **Capture** – use database triggers or log‐based CDC (e.g., Debezium) to emit change events.  
2. **Secure transport** – publish to a message broker (Kafka, Pulsar) over TLS, with ACLs per topic.  
3. **Privacy enforcement** – run an *anonymizer* microservice that strips/obfuscates PII before forwarding.  
4. **Audit & replay** – store events in immutable storage (S3/Kinesis‑Firehose) for compliance and replay.

**Depth**

- **Trigger vs log‑based**: triggers give instant capture but add write latency; logs are non‑intrusive but require parsing binlogs.  
- **Encryption at rest/transport**: AES‑256 for Kafka topics, RSA key rotation for broker keys.  
- **Anonymization**: deterministic hashing for identifiers, tokenization for sensitive fields, with a lookup table kept in HSM.  
- **Access control**: role‑based permissions on Kafka and downstream services; use JWTs signed by an auth server.  
- **Complexity**: O(1) per event write; overall throughput ≈ write rate × 1.2 (overhead).  
- **Trade‑offs**: More privacy layers increase latency; stronger encryption can reduce throughput.

**Edge Cases**

- *Data skew*: large bulk inserts may flood the broker → backpressure or batching.  
- *Schema evolution*: new columns must be mapped to anonymizer schema without downtime.  
- *Compromise*: if an adversary gets hold of the Kafka cluster, encrypted topics + ACLs mitigate risk.

**Optimize & Communicate**

- **Batching & compression** reduce network cost; monitor latency with Prometheus/Grafana.  
- **Explainability**: keep a separate “audit” stream that logs raw changes for compliance audits.  
- Narrate by walking through an example: user update → trigger → encrypted event → anonymizer → secure topic → consumer.

This design balances real‑time capture, strong encryption, fine‑grained access control, and privacy preservation—key metrics for any FAANG‑grade CDC system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
