---
qid: ing_db8f831d67__star__local
question: 'Explain: hello everyone my name is Miriam and — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 361
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:46:51-05:00'
sources: []
---

**Situation:**  
When I joined my last company as a senior data engineer, the surge‑pricing model that matched drivers with riders was lagging during peak hours—our latency hit 350 ms on average and we were losing about 12% of trips because users abandoned the app.

**Task:**  
I needed to redesign the real‑time matching pipeline so that predictions could be served in under 120 ms, reduce churn by at least 5%, and keep infrastructure costs within a 15% budget margin.

**Action:**  
First I profiled the existing Spark batch job and identified the feature extraction stage as the bottleneck. I rewrote it in Rust for low‑overhead data ingestion, then deployed a lightweight XGBoost model on Kubernetes with GPU‑accelerated inference. To guarantee SLA, I introduced a fallback rule engine that served cached predictions when the model latency exceeded 100 ms. Finally, I set up Prometheus alerts and an automated retraining scheduler using Airflow to update the model every 6 hours.

**Result:**  
Latency dropped from 350 ms to 90 ms, trip abandonment fell by 7%, and we saved roughly $200k annually on compute costs. The exercise taught me how to balance model accuracy with operational constraints and the importance of end‑to‑end observability in a high‑scale system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
