---
qid: ing_2c490f50e5__star__local
question: 'Explain: OpenTelemetry Support — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 354
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:35-05:00'
sources: []
---

**Situation:**  
While working on a production AI platform at my previous company, we started receiving alerts that some of our model artifacts were being tampered with during CI/CD pipelines. The security team had requested a way to trace every step in the supply chain from data ingestion to model deployment.

**Task:**  
I was tasked with implementing end‑to‑end observability for our machine learning pipeline using OpenTelemetry, integrating it with the sigstore/model‑transparency framework so that each artifact could be cryptographically signed and its provenance logged.

**Action:**  
First, I added an OpenTelemetry Collector as a sidecar to our Kubeflow Pipelines. Using the OTLP exporter, I instrumented every step—data validation, feature engineering, training job, and model push—to emit spans with custom attributes (model hash, version, dataset fingerprint). Next, I configured the sigstore “attestation” client to sign each span’s trace ID and attach a transparency log entry. This required writing a small Go middleware that intercepted OTLP export requests, generated a signed attestation bundle, and pushed it to the sigstore API. Finally, I set up Grafana dashboards to correlate spans with their corresponding transparency entries.

**Result:**  
Within two weeks we had full visibility: each model deployment now shows a trace ID linked to an immutable log entry. We reduced manual audit time by 70 % and detected a rogue build attempt that would have slipped through otherwise. The experience taught me how to marry observability tooling with supply‑chain security, ensuring both transparency and compliance in AI workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
