---
qid: ing_5dbe6bf93c__star__local
question: 'Explain: AI SRE vs. AI SRE "Add-Ons" vs. Traditional SRE Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 352
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:36-05:00'
sources: []
---

**Situation:** In my last role at a cloud‑native startup, we launched an ML inference platform that handled over 5 M requests per day. The existing SRE team was built around traditional automation—Helm charts, Terraform, and Grafana alerts—but the new AI workloads had latency spikes every 15 minutes that our baseline scripts missed.

**Task:** I was tasked with designing a “AI‑SRE” layer: a set of observability and resiliency add‑ons tailored for ML pipelines, while still leveraging our existing automation stack. The goal was to reduce mean‑time‑to‑detect (MTTD) from 12 min to under 2 min and keep the error budget within 0.5%.

**Action:** I first built a lightweight telemetry shim that streamed model‑level metrics (e.g., queue depth, GPU utilization) into Prometheus via custom exporters. Then I implemented an “auto‑scaler” policy that used Bayesian change‑point detection to trigger pod rescheduling before latency breached thresholds—essentially a predictive add‑on on top of our Kubernetes autoscaler. Finally, I wrapped the entire flow in Terraform modules so new AI services could inherit the same observability and scaling logic out of the box.

**Result:** Within three weeks of rollout, MTTD dropped to 1.3 min and we cut production errors by 35%. The SRE team now treats the AI add‑ons as first‑class infrastructure, and we’re reusing the same Terraform modules for every new model deployment—making our automation both AI‑aware and reusable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
