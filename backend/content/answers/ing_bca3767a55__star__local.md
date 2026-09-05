---
qid: ing_bca3767a55__star__local
question: Build the evaluation harness for a new frontier model release. What does
  it need to do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 367
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:32-05:00'
sources: []
---

**Situation:** At my previous company we were preparing the first public release of a generative AI model that could write code and generate natural language explanations. The engineering team was on a tight 6‑week sprint to ship, but the product manager insisted on rigorous bias, safety, and performance validation before launch.

**Task:** I had to design an end‑to‑end evaluation harness that would automatically test every new training checkpoint for factual accuracy, hallucination rate, toxicity, latency, and inference cost across multiple deployment environments (GPU, TPU, edge).

**Action:** I built a modular Python framework using PyTest for unit tests, integrated with Weights & Biases for experiment tracking. For factuality, I scripted a retrieval‑augmented question set against the OpenAI Evals API, scoring each answer’s correctness via cosine similarity to ground truth embeddings. Toxicity was measured with Perspective API and custom regex filters. Latency benchmarks ran on Docker containers mimicking production hardware, while inference cost was logged from cloud billing APIs. I added CI/CD hooks so every pull request triggered a full harness run, and visual dashboards in Grafana displayed pass/fail rates and regression alerts.

**Result:** The harness cut release cycle time by 25% because we caught 12 critical safety regressions before production. Accuracy scores improved from 78 % to 92 %, latency stayed under 150 ms, and cost per inference dropped 18 %. I learned that a reusable, metric‑driven pipeline not only speeds up delivery but also builds trust with stakeholders by providing transparent, data‑backed validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
