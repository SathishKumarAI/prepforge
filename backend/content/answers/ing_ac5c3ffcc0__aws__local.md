---
qid: ing_ac5c3ffcc0__aws__local
question: 'Explain: Tesla — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 402
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:48-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a real‑time anomaly detector for a fleet of autonomous vehicles during a FAANG interview. The goal: flag sensor failures within **100 ms** so the car can switch to a safe mode.

**Action**  
1. **Data pipeline** – Ingest telemetry via Kinesis Data Streams → process in Lambda (Python, scikit‑learn).  
2. **Model** – Incremental Isolation Forest trained on 10 M historical trips; batch retrain nightly in SageMaker with Hyperparameter Tuning.  
3. **Serving** – Deploy as a container in ECS Fargate behind an Application Load Balancer; use CloudWatch Alarms to trigger rollback if latency >120 ms.  
4. **Metrics** – ROC‑AUC 0.97, false‑positive rate 1.2%, recall 98% on the validation set.

**Result**  
Latency dropped from 350 ms (baseline) to 80 ms, cost per inference < $0.00002. In a simulated 30‑day test, we caught 12 sensor faults that would have caused crashes, preventing an estimated $2M in damage.  

**Leadership Principles**  
- **Customer Obsession** – Built a system that protects drivers and reduces repair costs.  
- **Dive Deep & Ownership** – Hand‑tuned the pipeline, monitored every metric, and owned post‑deployment health checks.  

*Bar‑raiser note:* I quantified impact with latency, cost, and safety metrics; showed depth by explaining trade‑offs (Lambda vs Fargate), and learned to balance false positives against safety from early prototypes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
