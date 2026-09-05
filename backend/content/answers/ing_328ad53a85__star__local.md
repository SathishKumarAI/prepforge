---
qid: ing_328ad53a85__star__local
question: 'Explain: And uh part of the reason we''re — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 420
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:29-05:00'
sources: []
---

**Situation**  
I was part of the Cloud AI team building a recommendation engine for Google Ads that had to serve over 1 million prediction requests per day while keeping latency under 50 ms and cost below $2 M/month.

**Task**  
My goal was to redesign the ML serving pipeline so it could scale elastically, handle traffic spikes during holiday campaigns, and provide real‑time monitoring for model drift without disrupting users.

**Action**  
I broke the system into three layers: a data‑ingestion microservice in Go that streamed feature updates via Pub/Sub; a TensorFlow Serving cluster behind a gRPC load balancer that used per‑request batching and GPU acceleration; and an observability layer built on Prometheus, Grafana, and custom OpenTelemetry traces. I introduced model version pinning with A/B rollout, automated canary tests, and set up a CI/CD pipeline in Cloud Build to push new models only after passing drift checks. We also switched from monolithic Docker images to lightweight OCI containers for faster cold starts.

**Result**  
Latency dropped from 120 ms to 38 ms, and we cut inference cost by 35 %. The system handled a 4× traffic spike during the holiday season without any outages. I learned that in large‑scale ML at Google, modularity, automated observability, and rigorous version control are as critical as the model itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
