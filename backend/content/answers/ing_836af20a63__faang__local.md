---
qid: ing_836af20a63__faang__local
question: 'Explain: Monitoring, Logging, and Alerting — How to Prepare for System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 441
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:50:34-05:00'
sources: []
---

**Clarify**  
We’re asked how to design a *monitoring‑logging‑alerting* stack that scales with ML workloads (model serving, training pipelines). Key assumptions: data volume is high, latency‑sensitive inference traffic, need for real‑time anomaly detection, and compliance requirements.

**Approach**  
1. **Metrics layer** – expose Prometheus‑style counters/latencies per model endpoint.  
2. **Log ingestion** – ship structured logs (JSON) via Fluentd to a log store like Loki or Elasticsearch.  
3. **Alerting engine** – use Alertmanager or PagerDuty integration, with rules on SLA breaches, error rates, and drift in predictions.

**Depth**  
- *Metric collection*: instrument inference code with OpenTelemetry; batch export every 5 s.  
- *Log schema*: include request ID, user context, feature vector hash, model version, prediction confidence.  
- *Storage*: use time‑series DB (Prometheus/InfluxDB) for metrics, immutable object store (S3) for raw logs, and a searchable index (Elasticsearch).  
- *Alerting logic*: threshold‑based (e.g., 99th percentile latency > 200 ms), anomaly detection (ARIMA or Prophet) to catch gradual drift. Complexity: O(1) per metric emit; log ingestion O(log n) for indexing.

**Edge Cases**  
- Sudden traffic spikes → backpressure on metrics exporter.  
- Model version rollouts causing data shift → false positives in alerts.  
- GDPR logs requiring redaction – implement field‑level masking before ingestion.

**Optimize & Communicate**  
- Use a CDN of metric scrapers to reduce load on the central Prometheus server.  
- Cache frequent query results for dashboards (Grafana).  
- In conversation, emphasize trade‑offs: latency vs. observability granularity, cost of storage vs. compliance needs, and how each component scales horizontally. This shows clear structured thinking and depth expected from FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
