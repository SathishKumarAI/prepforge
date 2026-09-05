---
qid: ing_30001e45bf__star__local
question: 'Explain: Portfolio & projects that actually impress'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 283
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:04:27-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with revamping our demo pipeline after investors complained the prototype didn’t showcase the AI‑driven fraud detection model’s real‑time capabilities.

**Task:**  
Build an end‑to‑end portfolio piece that could be run in under 30 seconds, highlight explainability, and demonstrate performance on a live data stream.

**Action:**  
I selected TensorFlow Lite for model quantization to reduce latency, wrapped the inference in a Docker container with FastAPI, and used Grafana dashboards to surface SHAP value heatmaps. I scripted a synthetic transaction generator that fed the API via Kafka, ensuring realistic throughput (≈5 kTPS). The codebase was published on GitHub with CI/CD pipelines on GitHub Actions, including unit tests for model drift detection.

**Result:**  
The demo loaded in 18 seconds, achieved 99.2% precision/recall on a held‑out fraud set, and the explainability dashboard earned positive feedback from both product and compliance teams. The portfolio piece was later used as the core exhibit at our Series B pitch, contributing to a $12 M raise. I learned that marrying performance tuning with transparent AI features is key to convincing stakeholders of technical value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
