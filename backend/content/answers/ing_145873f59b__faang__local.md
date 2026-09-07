---
qid: ing_145873f59b__faang__local
question: 'Explain: Notification flow — Smart alerts in ThirdEye, LinkedIn\u2019s
  real-time monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 490
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:30-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the *notification flow* for **Smart Alerts** within **ThirdEye**, LinkedIn’s real‑time monitoring system that surfaces anomalies in production metrics.  
Assumptions:  
1. Metrics arrive via Kafka → Spark streaming → ThirdEye anomaly detector.  
2. Smart Alerts are rule‑based or ML‑driven notifications sent to Slack/Email/CLI.  
3. The flow must handle high volume, low latency, and user‑customizable suppression.

**Approach**  
1. Ingest → Detect → Enrich → Route → Acknowledge.  
2. Use a lightweight event bus (Kafka) for each stage.  
3. Decouple alert generation from notification delivery via an *Alert Service* that subscribes to the “smart‑alert” topic.

**Depth**  
- **Ingestion**: Spark Structured Streaming consumes metric windows, computes anomaly scores using statistical or ML models.  
- **Detection**: If score > threshold → emit `SmartAlertEvent`.  
- **Enrichment**: Attach context (service name, host, tags) and compute a *deduplication key*.  
- **Routing**: The Alert Service partitions by user subscription; for each event it checks suppression rules, then pushes to the appropriate channel. Delivery is idempotent via Kafka offsets and retry back‑off.  
- **Acknowledgement**: Users can “snooze” or “dismiss”; those actions are persisted in a Cassandra store, influencing future suppression.

Complexity: O(1) per event for routing; overall latency < 2 s from ingestion to notification.  

**Edge Cases**  
- Duplicate events → deduplication key prevents double notifications.  
- Network partitions → Kafka guarantees at‑least‑once delivery; Alert Service retries with exponential back‑off.  
- Scaling out: horizontal workers per partition keep throughput linear.

**Optimize & Communicate**  
We can batch notifications to reduce API calls, cache user preferences in Redis for O(1) lookups, and use predictive models to pre‑filter false positives. When explaining, emphasize how each layer isolates concerns, enabling fast iteration on ML models without touching the notification stack—critical for a platform that must stay online 24/7.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
