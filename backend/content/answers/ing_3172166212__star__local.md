---
qid: ing_3172166212__star__local
question: 'Explain: Cost Metrics — Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 342
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:15-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we launched an automated fraud‑detection model that processed ~10 million transactions daily. Our cloud bill ballooned to $75k/month, and the latency of model inferences was creeping up after each new feature roll‑out.

**Task:** I needed to build a cost‑aware observability framework that could pinpoint where money was being spent—compute, storage, or data transfer—and correlate those costs with model performance (latency & accuracy).

**Action:** First, I instrumented the inference pipeline with OpenTelemetry and exported metrics to Prometheus. Using Grafana dashboards, I visualised per‑service CPU, GPU, and memory usage alongside a custom “Inference Cost” metric calculated from AWS CloudWatch billing APIs. Then I set up anomaly detection alerts that triggered when cost spikes exceeded 15% of baseline or latency rose above 200 ms. To surface root causes, I added trace context to each request so I could see which feature flags or data enrichment steps were inflating compute time.

**Result:** The observability stack cut our monthly AI spend by 27% (from $75k to $55k) while keeping latency under 180 ms for 99.9% of requests. We also discovered that a legacy data pipeline was doubling storage charges, so we migrated it to S3 Glacier, saving an additional $5k/month. The experience taught me that tying cost metrics directly to model performance is essential for sustainable AI operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
