---
qid: ing_8fbb54924c__aws__local
question: 'Explain: Types of concept drift — What is concept drift in ML, and how
  to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 580
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:09-05:00'
sources: []
---

**Concept Drift in a nutshell**

*Situation*: While launching an ad‑tech recommendation engine for a global publisher, the click‑through rate (CTR) dropped from **4.2 % to 1.8 %** within two weeks of deployment—an alarming 57 % decline.

*Task*: Diagnose why the model’s predictions became stale and build a robust pipeline that self‑detects and adapts to drift without manual intervention.

*Action*  
1. **Define Drift Types** –  
   * **Covariate (Data) Drift**: Feature distribution changes (e.g., user device mix shifts).  
   * **Concept Drift**: The underlying relationship between features and target changes (e.g., ad relevance evolves with new content).  
2. **Detection Strategy** – Implement two parallel monitoring stacks on AWS:  
   * **Feature‑Distribution Check** using `Amazon CloudWatch` metrics + custom Python Lambda that runs `scipy.stats.kde` to compute KL‑divergence weekly; threshold set at 0.3.  
   * **Prediction‑Quality Drift** via `AWS SageMaker Model Monitor`. It logs predictions, compares them against ground truth (CTR), and triggers an alert if the **Area Under ROC** falls below 0.78.  
3. **Remediation Pipeline** – Upon alarm:  
   * Auto‑trigger a **SageMaker Hyperparameter Tuning Job** on the latest 30 days of data, using `AutoML` to explore feature engineering and model families (XGBoost vs. LightGBM).  
   * Deploy the new model through **SageMaker Endpoints** with an A/B rollout controlled by **AWS AppConfig**, ensuring no single point failure.  
4. **Cost & Availability** – The monitoring Lambda runs 5 min/week, costing <$10/month. SageMaker Hyperparameter Tuning averages $0.50/hour; A/B rollout reduces risk and keeps latency < 200 ms.

*Result*: Within 48 hours of the first drift detection, the new model restored CTR to **4.1 %**, a 140 % lift over the degraded state. Over the next quarter, drift events dropped from 3 per month to 0.5, cutting manual retraining effort by 80 %.  

**Leadership Principles Reflected**

- **Ownership**: Built end‑to‑end monitoring and remediation, not just a patch.  
- **Dive Deep**: Quantified exact drift metrics (KL‑divergence, AUC) rather than surface symptoms.  
- **Bias for Action & Deliver Results**: Automated the entire cycle, turning detection into instant recovery with measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
