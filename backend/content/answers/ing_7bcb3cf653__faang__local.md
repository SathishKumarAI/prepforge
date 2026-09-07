---
qid: ing_7bcb3cf653__faang__local
question: 'Explain: Metrics — Logging, Tracing, and Metrics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 454
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:02-05:00'
sources: []
---

**Clarify**  
You’re asking how we monitor an ML system—specifically the three pillars: *logging*, *tracing* and *metrics*.  
Assumptions I’d confirm:  
1. The system is production‑grade (multiple services, batch + streaming).  
2. We need observability for both model quality and infra health.  
3. Stakeholders include data scientists, ops and product.

**Approach**  
1. **Define what to capture** per pillar.  
2. **Select tooling** that scales across micro‑services.  
3. **Implement instrumentation** with minimal overhead.  
4. **Create dashboards & alerts** aligned to SLAs.

**Depth**  

| Pillar | Typical Data | Use‑Case |
|--------|--------------|----------|
| Logging | Structured JSON logs (request ID, model version, payload hash). | Debug errors, audit data drift, trace request paths. |
| Tracing | Distributed traces (span IDs, parent/child relationships). | Identify latency bottlenecks in inference pipelines or feature extraction. |
| Metrics | Counter & histogram metrics (latency, error rate, batch size, CPU/mem usage). | Alert on SLA violations, auto‑scale models, monitor data quality scores. |

Instrumentation: use OpenTelemetry for unified tracing/metrics; log to a central ELK stack or CloudWatch. Keep logs at *INFO* level in prod, *DEBUG* only in dev.

**Edge Cases**  
- **Data privacy** – mask PII before logging.  
- **High cardinality** – aggregate metrics to avoid cardinality explosion.  
- **Model rollback** – version tags in logs/traces ensure reproducibility.

**Optimize & Communicate**  
Start with a minimal viable observability stack, then iterate: add custom business KPIs, enrich traces with feature importance, and use anomaly detection on metrics. I’d explain the trade‑off between detail (better debugging) vs overhead (CPU, storage). Finally, document SLAs tied to each metric so stakeholders can act quickly when thresholds are breached.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
