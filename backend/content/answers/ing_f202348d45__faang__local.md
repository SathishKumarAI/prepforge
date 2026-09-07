---
qid: ing_f202348d45__faang__local
question: 'Explain: Used Mobiles, Tablets — Designing Data-Intensive Applications
  Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 508
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:06-05:00'
sources: []
---

**Clarify**  
You’re asking how *Designing Data‑Intensive Applications* (DDIA) applies when the data is collected from mobile phones and tablets—i.e., high‑velocity, heterogeneous, and often offline‑first sources. Key assumptions:  

1. **Data arrives in bursts** (e.g., app launches, sensor spikes).  
2. **Device connectivity is intermittent**; data may be buffered locally.  
3. **Privacy constraints** (GDPR, CCPA) limit raw payload size.  

**Approach**  
1. Use a *client‑side buffering* layer that serializes events in a lightweight format (e.g., protobuf).  
2. Push to the backend via an *event ingestion service* (Kafka/Flink) once connectivity is available.  
3. Store in a *time‑series store* (Cassandra, InfluxDB) for raw telemetry; materialize aggregates into OLAP cubes (Druid/ClickHouse) for analytics.  

**Depth**  
- **Ingestion:** Mobile SDK emits JSON events → local queue → background sync using HTTP/2 or gRPC. On failure, retry with exponential back‑off.  
- **Schema evolution:** Use a *schema registry*; clients send a version header so the broker can route to the correct deserializer.  
- **Backpressure & throttling:** Implement client‑side rate limiting (e.g., token bucket) to avoid draining battery or exceeding data caps.  
- **Security:** Encrypt payloads at rest and in transit; sign with device certificates.  

**Edge Cases**  
- Devices that never reconnect → data loss risk; mitigate with local retention limits.  
- Large events (video, logs) – use chunked uploads or resumable streams.  
- Schema drift causing deserialization failures → fall back to raw bytes for later replay.  

**Optimize & Communicate**  
- Profile end‑to‑end latency: aim < 200 ms for user‑visible actions.  
- Use *partitioning by device ID* to enable horizontal scaling and locality of reference.  
- Explain trade‑offs: local buffering reduces network traffic but increases on‑device storage; aggressive compression saves bandwidth at CPU cost.  

This pipeline aligns with DDIA’s principles—robust ingestion, flexible storage, and scalable analytics—all while respecting mobile constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
