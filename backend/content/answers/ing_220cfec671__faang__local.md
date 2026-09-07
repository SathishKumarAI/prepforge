---
qid: ing_220cfec671__faang__local
question: 'Explain: Evals & Observability - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 498
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:51-05:00'
sources: []
---

**Evals & Observability – Interview Deep‑Dive**

| Step | What I’ll Say |
|------|---------------|
| **Clarify** | *“You’re asking how we evaluate AI models and monitor their behaviour in production.”*<br>Assumptions: 1️⃣ We have a training/serving pipeline, 2️⃣ Metrics matter (accuracy, latency, drift), 3️⃣ Observability means logging, alerts, dashboards. |
| **Approach** | 1️⃣ Define *evaluation metrics* per use‑case.<br>2️⃣ Build an automated evaluation suite that runs on new checkpoints.<br>3️⃣ Instrument the model serving stack for real‑time telemetry.<br>4️⃣ Correlate eval scores with production signals (e.g., error rates, latency spikes). |
| **Depth** | • **Evals:** Accuracy/Precision/Recall, F1, AUC, calibration curves; for language models: perplexity, BLEU, ROUGE, human‑in‑the‑loop. <br>• **Observability:** Prometheus metrics (latency percentiles, request counts), Jaeger traces, OpenTelemetry logs of input & output embeddings. <br>• **Data drift detection:** KS‑test on feature distributions; concept drift via online performance monitoring. <br>Complexity: Eval pipeline is *O(N)* over dataset size; observability overhead ~1–2 % latency if batching metrics. |
| **Edge Cases** | • Model output distribution shifts (e.g., new vocabulary).<br>*Mitigation:* fallback to a safe baseline, alert on high variance.<br>• Production failures due to GPU memory spikes.<br>*Test:* simulate load‑testing with synthetic inputs. |
| **Optimize & Communicate** | 1️⃣ Cache eval results to avoid recomputation.<br>2️⃣ Use feature flags to roll out models gradually.<br>3️⃣ Build a “model health” dashboard that auto‑remediates (e.g., re‑train, rollback).<br>When explaining: start with the business impact (“reducing latency improves UX”), then walk through metrics → instrumentation → alerting loop. |

*Key takeaway:* A robust eval framework feeds continuous feedback into observability pipelines, enabling proactive model maintenance and safe deployments in a production AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
