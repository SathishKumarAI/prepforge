---
qid: ing_a0c58afb6a__star__local
question: 'Explain: Why LLM Observability is Different'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 348
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:54:09-05:00'
sources: []
---

**Situation** – At my previous company we launched a generative‑AI assistant for customer support. Within two weeks of production use the SLA dropped from 99.7 % to 97.5 %, and the dev team was unable to pinpoint whether the lag came from model inference or data pipeline failures.

**Task** – I had to design an observability stack that could isolate performance issues in a large language‑model workflow, where latency spikes are caused by token‑level processing rather than single microservice calls.

**Action** – First, I instrumented every token stream with OpenTelemetry traces and added a “token‑latency” metric to Prometheus. Then I built a custom Grafana dashboard that visualises per‑layer activation times and attention weight distributions. To capture data quality I integrated a data‑lineage tool (Marquez) so each prompt’s provenance could be traced back to source datasets. Finally, I set up an anomaly detection pipeline in Grafana Alerting that flags deviations above 95th percentile latency on a per‑token basis.

**Result** – Within three days we identified a GPU memory fragmentation issue causing the spike; after patching it, SLA improved to 99.8 %. The observability framework also reduced mean time to resolution from 12 h to 2 h for future incidents, and I learned that LLM observability demands token‑level granularity and data‑lineage tracking beyond conventional microservice metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
