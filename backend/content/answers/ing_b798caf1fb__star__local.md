---
qid: ing_b798caf1fb__star__local
question: 'Explain: Online evaluation — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 316
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:22-05:00'
sources: []
---

**Situation:** In my last role as a machine‑learning engineer at a fintech startup, we rolled out a new credit‑scoring model that was expected to reduce false positives by 20 % within the first month of deployment.

**Task:** I had to set up an online evaluation pipeline so we could monitor the model’s real‑time performance, detect drift, and trigger alerts before customers were impacted.

**Action:** First, I instrumented the inference service with Prometheus metrics for latency, prediction confidence, and outcome distribution. Then I built a lightweight “shadow” traffic system that mirrored production requests to the new model without affecting live scores, feeding results into an A/B test dashboard in Grafana. For observability, I added OpenTelemetry traces to capture feature values per request, and set up an anomaly detector (using Prophet) on key metrics. When drift was detected—e.g., a sudden rise in false negatives—I automated a rollback via Kubernetes Canary releases.

**Result:** The pipeline caught a 15 % shift in applicant demographics within two weeks, allowing us to retrain the model before any customers were mis‑scored. Overall, we achieved a 22 % reduction in false positives and cut incident response time from hours to minutes. I learned that coupling online evaluation with full observability turns data science into a resilient, production‑ready practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
