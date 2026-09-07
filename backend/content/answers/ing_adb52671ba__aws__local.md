---
qid: ing_adb52671ba__aws__local
question: 'Explain: We only have two features, age, and — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 557
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:19-05:00'
sources: []
---

**Situation**  
I was hired to build a churn‑prediction model for a subscription service that only logged two raw attributes: **age** (numeric) and **subscription start date** (derived into tenure). The business wanted a quick, production‑ready solution that could be rolled out across 3 regions with minimal latency.

**Task**  
Deliver a scalable ML pipeline on AWS that turns those two features into actionable churn scores, while staying within the $5K/month budget and achieving at least a **0.78 AUC** on held‑out data.

**Action**  

| Step | Technical Design | AWS Services | Rationale |
|------|------------------|--------------|-----------|
| 1 | Feature engineering: bin age into deciles, compute tenure in months, create interaction term `age * tenure`. | **Amazon SageMaker Processing** | Keeps CPU‑heavy transforms isolated; auto‑scales with dataset size. |
| 2 | Train a lightweight XGBoost model (tree depth = 3). | **SageMaker Training** | Low memory footprint, fast convergence (<10 min on m5.xlarge). |
| 3 | Deploy as a real‑time endpoint; cache recent predictions in Redis for 30 s to reduce latency. | **SageMaker Endpoint + Amazon ElastiCache** | 0.2 ms inference latency, high availability via multi‑AZ deployment. |
| 4 | Monitor model drift with SageMaker Model Monitor; retrain weekly if AUC falls below 0.75. | **SageMaker Model Monitor** | Automated alerts keep accuracy in check without manual intervention. |

**Result**  
- Achieved **AUC = 0.81** on the test set, exceeding target by 5%.  
- Endpoint sustained 10k RPS with <1 ms latency, costing ~$2K/month (≈$0.0008 per inference).  
- Weekly retraining automated reduced data scientist effort by 70%.

---

### Leadership Principles  

* **Ownership** – I drove the entire end‑to‑end pipeline, from feature engineering to deployment and monitoring, taking responsibility for both performance and cost.  
* **Dive Deep** – By profiling each step (CPU usage, inference latency), I identified bottlenecks and tuned the model accordingly.  

### What a bar‑raiser looks for  

* **Quantified Impact**: Clear AUC numbers and cost per inference.  
* **Depth**: Detailed justification of service choices and trade‑offs.  
* **Learning from Failure**: Implemented drift monitoring to catch degradation early, turning potential downtime into proactive maintenance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
