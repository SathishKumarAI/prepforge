---
qid: ing_3b23ae56a9__star__local
question: 'Explain: Job’s Not Finished — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 346
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:55-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was tasked with building an anomaly‑detection system for a smart‑grid sensor network that streamed millions of data points per day. The initial model, a simple one‑class SVM, flagged too many false positives and missed subtle power‑fluctuation patterns.

**Task:**  
I needed to reduce the false‑positive rate by at least 30 % while keeping latency under 200 ms so operators could act in real time.

**Action:**  
First I profiled the data pipeline with PyTorch Profiler, discovering that the feature extraction step was a bottleneck. I rewrote it using NumPy vectorization and off‑loaded heavy matrix ops to GPU via CuPy, cutting compute time by 40 %. Next, I replaced the SVM with an ensemble of one‑class Autoencoders trained on sliding windows; I tuned their reconstruction thresholds using a Bayesian optimization loop (Optuna). Finally, I deployed the model as a FastAPI microservice behind an Nginx reverse proxy and set up Prometheus alerts to monitor inference latency.

**Result:**  
The false‑positive rate dropped from 18 % to 12.5 %, meeting the 30 % target, while inference latency stayed at ~150 ms. The system was adopted by the university’s research lab for live monitoring, and I learned that iterative profiling + hardware‑aware optimization can turn a “job not finished” scenario into a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
