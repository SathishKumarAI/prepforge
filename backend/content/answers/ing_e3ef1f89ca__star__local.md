---
qid: ing_e3ef1f89ca__star__local
question: 'Explain: Monitoring and Alerting — 8 Common System Design Problems and
  Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 383
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:04:22-05:00'
sources: []
---

**Situation** – In my last role I was responsible for a real‑time fraud detection pipeline that processed ~1 M events per hour. The previous monitoring stack had sporadic alerts and missed anomalies during traffic spikes.

**Task** – Build a robust, low‑latency monitoring & alerting system that could surface 8 common design issues: metric drift, alert fatigue, data loss, high cardinality, false positives, delayed ingestion, resource constraints, and lack of observability. I needed to keep SLA > 99.9% while keeping ops overhead minimal.

**Action** – I introduced a multi‑layer approach:
1. **Metric normalization & baseline modeling** with Prometheus + Grafana to detect drift.
2. **Alert aggregation** using Loki for log correlation, reducing noise by 70%.
3. **Data retention tiers** (influxDB for raw metrics, TimescaleDB for long‑term aggregates) to avoid loss.
4. **Cardinality control** via hash sharding and label pruning.
5. **Anomaly detection** with a lightweight Isolation Forest on top of the stream to catch false positives.
6. **Latency checkpoints** inserted in Kafka consumers; alerts fire if > 500 ms.
7. **Resource monitoring** with cAdvisor, auto‑scaling pods when CPU > 80%.
8. **Observability dashboards** built in Grafana, exposing health checks and SLA metrics.

**Result** – Alert volume dropped 65%, missed incidents fell from 12 per week to 2, and the system maintained a 99.95% uptime. I learned that combining statistical baselines with lightweight ML models and thoughtful data architecture is key to scalable monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
