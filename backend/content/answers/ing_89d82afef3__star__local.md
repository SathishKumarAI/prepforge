---
qid: ing_89d82afef3__star__local
question: Can I get feedback on my application or interview?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 322
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:34-05:00'
sources: []
---

**Situation:**  
I was preparing for a data‑science role at a fintech startup where the product team needed an anomaly‑detection model for fraud monitoring. The hiring manager asked me to submit a small prototype and then interview me on it.

**Task:**  
My goal was to build a reproducible, production‑ready pipeline that could ingest streaming transactions, train a LightGBM model, and output real‑time risk scores within 500 ms per transaction—all while keeping the codebase clean for future team members.

**Action:**  
I used Python’s FastAPI as the API layer, Pandas for feature engineering, and Optuna to tune hyperparameters. I containerized the entire stack with Docker, wrote unit tests with PyTest, and set up a CI pipeline in GitHub Actions that automatically ran a smoke test on every push. During the interview, I walked through my architecture diagram, explained why I chose LightGBM over XGBoost (lower inference latency), and showed live metrics from Prometheus monitoring CPU/latency.

**Result:**  
The prototype achieved 92 % precision at 95 % recall, with an average inference time of 320 ms. The hiring team praised the end‑to‑end workflow and asked me to join immediately. I learned that demonstrating a complete, deployable solution—rather than just code snippets—is what convinces interviewers about your engineering mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
