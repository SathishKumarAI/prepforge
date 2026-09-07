---
qid: ing_87704fecbb__faang__local
question: 'Explain: The eval taxonomy — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 551
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:59:01-05:00'
sources: []
---

**1️⃣ Clarify**  
The question asks for a high‑level description of the *Evaluation & Observability* (E&O) taxonomy in AI systems—how we judge model quality and monitor it during operation. Key assumptions:  
- We’re dealing with production ML pipelines, not research prototypes.  
- Stakeholders care about accuracy, fairness, safety, and runtime health.

**2️⃣ Approach**  
Outline the two pillars: *Evaluation* (offline metrics & benchmarks) and *Observability* (real‑time monitoring). For each pillar list its sub‑categories and why they matter.

**3️⃣ Depth**  

| Pillar | Sub‑domain | Purpose |
|--------|------------|---------|
| **Evaluation** | 1. Performance metrics (accuracy, AUC, BLEU, etc.) | Quantifies predictive power on held‑out data. |
| | 2. Calibration & reliability | Ensures predicted probabilities match true rates. |
| | 3. Fairness & bias tests | Detects disparate impact across protected groups. |
| | 4. Robustness checks (adversarial, distribution shift) | Measures resilience to noisy or out‑of‑distribution inputs. |
| | 5. Benchmarking against baselines | Provides relative progress and reproducibility. |
| **Observability** | 1. Data drift detectors | Signals when input statistics change. |
| | 2. Model drift & concept drift monitoring | Alerts when predictions diverge from ground truth over time. |
| | 3. Latency, throughput, resource usage | Ensures SLA compliance and cost control. |
| | 4. Alerting & anomaly detection | Enables rapid incident response. |
| | 5. Explainability dashboards | Gives human‑readable insights for trust and debugging. |

**4️⃣ Edge Cases**  
- *Cold start*: no labeled data → rely on unsupervised drift metrics.  
- *Highly imbalanced classes*: use precision‑recall curves, not plain accuracy.  
- *Non‑stationary environments*: continuous re‑evaluation loops or online learning.

**5️⃣ Optimize & Communicate**  
Start with a minimal viable set (accuracy + data drift) then layer fairness and latency monitoring as the product matures. Use open‑source tools (MLflow, Evidently AI) to avoid reinventing dashboards. Communicate trade‑offs: tighter thresholds reduce false negatives but increase alert noise; heavier explainability costs compute time. Summarize with a clear “E&O health score” that stakeholders can monitor daily.

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
