---
qid: ing_4e379203f7__faang__local
question: 'Explain: SMS Processor — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 630
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:46:34-05:00'
sources: []
---

**Clarify**

> *What is the “SMS Processor” and what do we mean by a “Notification Service”?*  
> We need an end‑to‑end system that ingests SMS messages (incoming or outgoing), processes them (e.g., routing, deduplication, enrichment), and triggers notifications to downstream consumers.  
> **Assumptions to confirm**: volume (msgs/sec), latency budget (<100 ms for user‑visible flows), delivery guarantees (at least once vs exactly once), compliance needs (GDPR/SS7), and supported channels (SMS only or also push/email).

---

**Approach**

1. **Ingestion Layer** – API gateway → rate limiter → Kafka topic (`sms_raw`).  
2. **Processing Workers** – consumer microservice that:
   * validates schema, deduplicates via a Redis cache keyed by message ID,  
   * enriches (e.g., lookup user prefs),  
   * routes to the appropriate notification queue.
3. **Notification Engine** – separate workers consume from `sms_route` topic and call the SMS provider SDKs or push services.  
4. **State & Reliability** – use Kafka offsets + transactional writes; store processed IDs in a TTL‑based Redis set for idempotency.  
5. **Monitoring** – Prometheus metrics (`in_flight`, `failed`, `latency`), alerting on SLA breaches.

---

**Depth**

*Kafka* gives horizontal scalability and durability (partitioned topics).  
*Redis* provides O(1) deduplication with TTL to keep memory bounded.  
Processing workers are stateless; they can scale via Kubernetes deployments.  
The notification engine uses the provider’s API rate limits; we implement back‑pressure by pausing consumer offsets.

**Complexity**:  
- Ingestion → **O(log N)** for partition routing, but practically O(1).  
- Deduplication lookup → **O(1)**.  
- Notification dispatch → depends on external API latency (usually ~200–300 ms).

---

**Edge Cases**

*Duplicate SMS*: dedupe cache hit → drop.  
*Provider outage*: retry with exponential back‑off, fallback to alternative carrier.  
*Burst traffic*: Kafka’s buffer absorbs spikes; consumer scaling kicks in automatically.  
*Compliance revocation*: immediate stop‑send flag stored in Redis and propagated.

---

**Optimize & Communicate**

Future enhancements:  
- **Schema registry** for evolving message formats.  
- **Serverless functions** for cost‑effective burst handling.  
- **Observability dashboards** with tracing (OpenTelemetry) to pinpoint failures.  

I would narrate the design by walking through a single message’s lifecycle, highlighting where we enforce latency, reliability, and compliance, then discuss trade‑offs (e.g., Kafka vs. RabbitMQ, Redis TTL limits). This structured explanation showcases problem‑solving depth and clear communication expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
