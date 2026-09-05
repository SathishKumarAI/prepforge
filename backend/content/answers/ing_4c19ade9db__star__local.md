---
qid: ing_4c19ade9db__star__local
question: 'Explain: So as in when something changes you — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 319
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:29-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time traffic prediction service that fed into an internal navigation app similar to Google Maps. The model was trained on historical GPS traces, but every new day the traffic patterns shifted due to weather, events, or construction, and our predictions lagged by 15–20 % in peak hours.

**Task** – I had to design a system that could detect concept drift, retrain models quickly, and roll out updates with zero downtime while keeping latency under 50 ms per request.

**Action** – First, I added an online monitoring pipeline using Prometheus to track prediction error against ground truth in real time. When the mean absolute error exceeded 12 %, a Lambda function triggered an incremental retraining job on SageMaker that only updated the affected region’s model weights (instead of full re‑training). The new models were versioned and served via a canary deployment behind an Envoy proxy, allowing A/B testing against live traffic. I also introduced feature hashing to keep input dimensionality stable and used batch inference during off‑peak hours to warm up caches.

**Result** – After implementation, prediction accuracy improved by 18 % overall, peak‑hour error dropped below 8 %, and model rollouts took under 2 minutes with zero service interruption. I learned that continuous monitoring + incremental updates are essential for ML systems exposed to dynamic real‑world data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
