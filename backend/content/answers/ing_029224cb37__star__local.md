---
qid: ing_029224cb37__star__local
question: Why LLM for Explanation, Not SHAP/LIME? — Fraud Detection
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 397
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:30-05:00'
sources: []
---

**Situation:**  
At my last role I was leading the fraud‑detection team for a payment platform that processed $5 B in monthly volume. The new model achieved a 12% lift in true positives but our compliance officers complained that SHAP heatmaps were too abstract to justify alerts to regulators.

**Task:**  
I needed an explanation system that could translate complex feature interactions into clear, audit‑ready narratives while keeping latency under 200 ms per transaction.

**Action:**  
I built a lightweight fine‑tuned GPT‑4 model wrapped in a Flask microservice. For each flagged card I passed the top ten contributing features and their SHAP values to the LLM, which generated a concise paragraph (“The transaction was flagged because the device location mismatch, combined with an unusually high purchase amount for this user’s typical spend pattern”). I also included a confidence score derived from the model’s posterior probability. I benchmarked latency (average 180 ms) against SHAP (≈650 ms) and LIME (≈700 ms), and conducted A/B tests with compliance teams.

**Result:**  
The narrative explanations reduced regulator queries by 35% and cut manual review time by 40%. Accuracy remained unchanged, and the team reported higher trust in the system. I learned that a contextual LLM can bridge the gap between black‑box models and human‑readable accountability without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
