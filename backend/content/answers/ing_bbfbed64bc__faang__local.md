---
qid: ing_bbfbed64bc__faang__local
question: 'Explain: Monitoring Scenarios — Monitoring Machine Learning Models in Production'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:07-05:00'
sources: []
---

**Clarify**  
You’re asked how to keep an ML model healthy once it’s live—detect drift, performance loss, and operational anomalies. Key assumptions: we have a serving API, access to raw inputs, predictions, and ground‑truth labels (or delayed labels), plus metrics dashboards.

**Approach**  
1. **Data monitoring** – track feature distributions, missingness, and outliers against training data.  
2. **Prediction monitoring** – log prediction confidence, class imbalance, and rate of change.  
3. **Performance monitoring** – compute metrics (accuracy, AUC, MAPE) on a hold‑out or delayed‑label set; compare to baseline.  
4. **Alerting & roll‑back** – thresholds trigger alerts; automated canary deployments rollback if drift is severe.  
5. **Model governance** – versioning, lineage, and audit logs for reproducibility.

**Depth**  
- *Feature drift*: use KS or Wasserstein distance per feature; aggregate with a drift score.  
- *Concept drift*: sliding‑window evaluation of metrics; apply statistical tests (e.g., Welch’s t‑test) to detect significant drops.  
- *Latency & throughput*: monitor response time, error rates, and resource utilization.  
- Complexity: O(n·d) for feature statistics per batch; negligible overhead if batched. Trade‑off between granularity of monitoring and cost—weekly full checks vs. real‑time lightweight stats.

**Edge Cases**  
- Rare classes may never get labels → use semi‑supervised feedback or synthetic labeling.  
- Data leakage in production pipelines can mask drift.  
- Sudden spikes (e.g., holiday traffic) may falsely flag drift; include contextual covariates.

**Optimize & Communicate**  
Start with a lightweight “heartbeat” dashboard, then add deeper analytics as trust grows. Emphasize that monitoring is an iterative loop: detect → investigate → remediate or retrain → redeploy. This keeps the model reliable and compliant, satisfying both engineering rigor and business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
