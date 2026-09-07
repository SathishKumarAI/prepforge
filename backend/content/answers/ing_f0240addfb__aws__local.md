---
qid: ing_f0240addfb__aws__local
question: 'Explain: Self-Consistency (Majority Voting) — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 523
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:08-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑science sprint for a consumer‑finance app that needed to predict loan default risk with >95 % precision. The baseline logistic model hit 88 %. I proposed a self‑consistency ensemble (majority voting) to boost accuracy.

**Action – Technical Design**  
1. **Base models**: XGBoost, LightGBM, CatBoost, and a shallow neural net—each trained on the same pre‑processed feature set.  
2. **Voting mechanism**: For each instance, majority vote across 4 models; ties resolved by weighted confidence from validation AUC.  
3. **AWS stack**:  
   * Amazon SageMaker training jobs (managed spot instances) for cost efficiency.  
   * SageMaker Model Registry to version each base model.  
   * Endpoint deployed behind an Application Load Balancer with auto‑scaling (target 70 % CPU).  
4. **Scalability & Availability**: Multi‑AZ deployment; health checks on the ALB keep traffic away from unhealthy nodes, ensuring <0.1 % downtime.  
5. **Cost trade‑off**: Spot pricing reduced training spend by ~60 %, while inference cost rose 15 %—still within budget due to higher ROI.

**Result**  
- Accuracy jumped from 88 % to 96 % (AUC 0.93→0.98).  
- False‑positive rate dropped 4×, saving the company ~$1.2 M annually in unnecessary loan approvals.  
- The model served >10k requests/sec with <50 ms latency.

**Reflection – Bar‑raiser cues**  
*Ownership*: I owned the end‑to‑end pipeline and negotiated spot‑pricing discounts.  
*dive deep*: I benchmarked each algorithm, analyzed error patterns, and tuned voting weights.  
*Quantified impact*: 8 % accuracy lift = $1.2 M saved.  
*Learning from failure*: Initial single‑model deployment failed to meet SLA; the ensemble mitigated variance and improved robustness.

**Leadership Principles Highlighted**  
- **Ownership** – Took full responsibility for model performance and cost.  
- **Customer Obsession** – Delivered a more reliable risk score, directly protecting customers from bad loans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
