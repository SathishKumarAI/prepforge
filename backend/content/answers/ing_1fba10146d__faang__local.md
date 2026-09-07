---
qid: ing_1fba10146d__faang__local
question: 'Explain: Per-tenant eval suite as the gate — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 474
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:58:32-05:00'
sources: []
---

**Clarify**  
We’re building a *Per‑Tenant Evaluation Suite* that serves as the “gate” for a *Multi‑Tenant Fine‑Tuning (FT) Platform*. The idea is: each tenant can upload data, run an evaluation pipeline, and only if their model passes predefined metrics does it get released to production.  

**Assumptions**  
- Tenants are isolated by namespace/tenant ID.  
- Evaluation includes accuracy, bias, latency, and cost constraints.  
- The platform supports both supervised and reinforcement‑learning FT workloads.

**Approach**  
1. **Tenant Metadata Service** – store tenant config (quota, evaluation thresholds).  
2. **Data Ingestion & Validation** – ingest raw data, run schema/quality checks, flag anomalies.  
3. **Evaluation Pipeline** – chain of containers: preprocessing → inference on validation set → metric aggregation.  
4. **Gatekeeper API** – receives the aggregated metrics, compares against tenant thresholds; if pass, triggers a “release” event.

**Depth**  
- Use Kubernetes Jobs for isolation; each job gets a namespace‑scoped PVC to keep data private.  
- Metrics stored in Prometheus + Thanos for long‑term retention.  
- Gatekeeper uses a lightweight Go service that watches the metrics stream and writes an `EvalResult` CRD.  
- Complexity: O(N × M) where N = number of tenants, M = size of validation set; we parallelize jobs to keep per‑tenant latency < 5 min.

**Edge Cases**  
- *Data drift*: re‑run evaluation on a rolling window.  
- *Missing metrics*: fallback to last known good value but flag for manual review.  
- *Tenant overload*: rate‑limit job submissions.

**Optimize & Communicate**  
- Cache pre‑computed feature embeddings to shave inference time.  
- Expose a real‑time dashboard (Grafana) so tenants see their gate status instantly.  
- Document API contract and threshold logic; provide a self‑service portal for tenants to adjust thresholds within policy bounds.  

This design balances isolation, scalability, and transparency—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
