---
qid: ing_53b8741c18__faang__local
question: 'Explain: Zero downtime cut-over and fast rollback strategy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 481
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:58:49-05:00'
sources: []
---

**Zero‑downtime cut‑over & Fast Rollback – A FAANG‑style Answer**

| Step | What I’d say |
|------|--------------|
| **1️⃣ Clarify** | “You want to deploy a new ML model without any service interruption, and if something goes wrong we must revert instantly.  Key assumptions: we have versioned data pipelines, can run inference in parallel, and have monitoring/alerting in place.” |
| **2️⃣ Approach** | *Blue‑Green Deployment*: keep two identical serving stacks (A = current, B = new). <br>• Route a tiny traffic fraction to B. <br>• Gradually shift traffic while observing latency, accuracy, error rates.<br>• If metrics stay within SLA → fully switch A→B.<br>• If any metric spikes → instantly redirect all traffic back to A and terminate B. |
| **3️⃣ Depth** | *Implementation*: use a load balancer (e.g., Envoy) with weighted routing; model artifacts stored in S3/Artifact Registry, versioned. <br>*Monitoring*: real‑time metrics via Prometheus + Grafana; set thresholds on MAE, latency > X ms, error rate > Y%. <br>*Rollback*: a single config change to the balancer flips traffic; no code changes needed. Complexity: O(1) for routing switch; cost of running two serving nodes during overlap (≈ 2× compute). |
| **4️⃣ Edge Cases** | • Data drift between training and production data → detect via feature distribution monitoring.<br>• Model failure under load → autoscale B before full cut‑over.<br>• Network partition could split traffic; use health checks to avoid partial routing. |
| **5️⃣ Optimize & Communicate** | *Improvements*: automated canary release with A/B testing, rollback triggers based on ML‑specific metrics (e.g., concept drift). <br>*Narration*: “We’ll keep both stacks alive for a 30‑second window, monitor KPIs in real time, and use a single flag flip to roll back—ensuring zero downtime while preserving data integrity.” |

**Word count:** ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
