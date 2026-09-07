---
qid: ing_3dbcafeaf0__faang__local
question: 'Explain: Build systems and infrastructure monitoring that scales'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 487
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:27-05:00'
sources: []
---

**Clarify**  
We need a monitoring stack that (1) collects metrics from thousands of ML infra nodes, (2) aggregates & stores them for real‑time alerts and long‑term analysis, and (3) scales horizontally without single points of failure. I’ll assume we’re on Kubernetes, using cloud storage, and have a mix of GPU workers, data pipelines, and model serving endpoints.

**Approach**  
1. **Instrumentation** – expose Prometheus‑compatible metrics from each pod (CPU/GPU usage, latency, queue depth).  
2. **Scraping & Aggregation** – run Prometheus federation: a local scrape pool per cluster that pushes to an external Thanos sidecar for global time‑series storage.  
3. **Alerting** – use Alertmanager with deduplication rules; route alerts to PagerDuty or Slack, and auto‑scale based on thresholds.  
4. **Observability UI** – Grafana dashboards built from Prometheus/Thanos queries, with alert graphs.  
5. **Data Retention & Cost** – Thanos compacted blocks in S3 for long‑term retention; keep recent 30 days in local TSDB.

**Depth**  
- Complexity: O(N) scraping per node, but federated query scales as log N thanks to block compaction.  
- Trade‑offs: Prometheus is simple and fast but limited storage; Thanos adds cost but gives global visibility.  
- Failure modes: If a sidecar fails, data loss is mitigated by S3 persistence.

**Edge Cases**  
- Sudden spike in nodes → auto‑scale Prometheus workers via HPA.  
- Metric cardinality explosion (e.g., per‑model latency) → bucket or aggregate early.  
- Network partitions → Thanos query layer still serves from local blocks.

**Optimize & Communicate**  
Start with a minimal viable stack (Prometheus + Grafana). Once stable, add Thanos for scalability and cost control. Explain to stakeholders how each component reduces alert noise, improves MTTR, and keeps ops overhead low while supporting thousands of ML jobs. This narrative shows structured thinking, depth in tooling choice, and clear trade‑off analysis—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
