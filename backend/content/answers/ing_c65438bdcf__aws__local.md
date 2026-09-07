---
qid: ing_c65438bdcf__aws__local
question: 'Explain: Are Right, A Lot — Leadership Principles'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 556
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:13-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principle(s) Anchored:** *Customer Obsession* & *Dive Deep*  
> **Behavioral Framework:** *STAR + Quantified Impact*

### S – Situation
I led the migration of a production recommendation engine from an on‑prem Spark cluster to AWS SageMaker for a global e‑commerce platform. The model needed 99.5 % accuracy, <10 ms latency, and cost ≤ $0.02 per inference.

### T – Task
My goal was to **“are right, a lot”**: reduce error rate by at least 15 % while keeping inference costs down, all within a two‑month sprint, without disrupting the live traffic of ~200k requests/second.

### A – Action (Dive Deep & Customer Obsession)
1. **Data audit & feature engineering**  
   *Used AWS Glue to crawl raw logs → cleaned schema → identified 30 % missing values.*  
2. **Model selection**  
   *Compared LightGBM, XGBoost, and a deep neural net (DNN) in SageMaker Experiments.*  
   *DNN achieved +18 % lift over the baseline, but training time doubled.*
3. **Hyper‑parameter tuning**  
   *Ran Bayesian optimization with SageMaker Hyperparameter Tuning (2 GPU instances, 48 h total).*  
4. **Deployment strategy**  
   *Built a Blue/Green rollout on SageMaker Endpoints, integrated with AWS CloudWatch for A/B metrics.*  
5. **Cost & scalability controls**  
   *Enabled Spot Instances for training; used Multi‑Model Endpoints to share inference capacity across 10 models.*

### R – Result
*Accuracy improved from 87 % → 96.2 % (15 pp gain).  
Inference latency dropped to 8 ms, meeting SLA.*  
*Operational cost fell by 35 % ($45k/month saved).  
Customer satisfaction scores rose 12 pts in the next NPS survey.*

### Learning & Bar‑Raiser Notes
- **Ownership:** Took full ownership of data quality, model choice, and cost optimization.  
- **Dive Deep:** Uncovered hidden feature leakage that had capped performance.  
- **Quantified Impact:** Clear metrics (accuracy, latency, cost) demonstrate success.  
- **Failure Handling:** Early prototype with XGBoost failed; pivoted to DNN after quick root‑cause analysis, illustrating adaptability and learning from setbacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
