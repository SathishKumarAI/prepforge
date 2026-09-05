---
qid: vq_a18d323d4f__star__local
question: Real-time dashboards or batch reports?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 386
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:12:45-05:00'
sources: []
---

**Situation:**  
At my previous company we were rolling out a new customer‑support analytics platform for the flagship product. The product manager wanted instant visibility into ticket volumes and resolution times so the support team could react to spikes in real‑time. However, our data pipeline was built on nightly batch jobs that processed raw logs from the helpdesk system.

**Task:**  
I had to decide whether to keep the existing batch approach or shift to a streaming architecture that would deliver near‑real‑time dashboards without breaking the current reporting cadence.

**Action:**  
After profiling the log ingestion, I discovered that 80 % of the data was time‑sensitive (ticket creation timestamps) and only 20 % required heavy aggregation. I prototyped an Apache Kafka pipeline coupled with Spark Structured Streaming to ingest logs as they arrived. For the batch part, I kept our existing Airflow DAG for nightly deep analytics on historical trends. I built a unified metrics store in ClickHouse that exposed both streaming and batched data through Grafana dashboards. To keep costs low, I limited the stream window to 5 minutes and throttled the ingestion rate during off‑peak hours.

**Result:**  
The new hybrid solution reduced dashboard latency from 24 hours to under 2 minutes for real‑time metrics while still delivering comprehensive nightly reports unchanged. Support agents reported a 35 % faster response time to high‑volume periods, and we saved roughly $3k/month by avoiding an additional cloud streaming service. I learned that a mixed batch/streaming strategy can satisfy both immediate operational needs and long‑term analytical requirements without overhauling the entire pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
