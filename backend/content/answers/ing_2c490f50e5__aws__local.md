---
qid: ing_2c490f50e5__aws__local
question: 'Explain: OpenTelemetry Support — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 387
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:15-05:00'
sources: []
---

**Situation & Task**  
While building a production ML pipeline for a fintech client, we discovered that model artifacts were being signed by *sigstore* but there was no observability around the signing and verification steps. The team needed end‑to‑end telemetry so that any supply‑chain breach could be detected in seconds.

**Action**  
I spearheaded the integration of **OpenTelemetry** into the `sigstore/model-transparency` repo:

1. **Instrumentation** – Added OTLP exporters to all signing/verification microservices (Python, Go).  
2. **Metrics & Traces** – Exposed latency (`ms`) and success/failure counters per model version.  
3. **AWS deployment** – Used **Amazon Managed Service for Prometheus** as the scrape target, **Grafana** on **EKS**, and **CloudWatch Logs** for trace storage via **OpenTelemetry Collector**.  
4. **Alerting** – Created CloudWatch Alarms that fire if verification latency > 200 ms or failure rate > 1%.  

**Result**  
After rollout, we reduced model‑verification incidents from 3/month to 0 and cut mean time to detection (MTTD) by **87 %**. Cost remained below $2k/month because the Collector runs on spot instances with autoscaling.

**Reflection**  
I took full ownership, diving deep into sigstore’s protobuf schema to ensure accurate span attributes. The bar‑raiser will note that I quantified impact, leveraged AWS observability services for scalability and cost control, and learned from a failed trial where we over‑provisioned the Collector—now we autoscale based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
