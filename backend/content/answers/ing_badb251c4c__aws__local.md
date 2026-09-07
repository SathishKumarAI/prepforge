---
qid: ing_badb251c4c__aws__local
question: 'Explain: Statistical correction with judgy — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 413
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:07-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I was tasked to roll out an automated ML‑pipeline that evaluated credit risk models in real time. The models produced highly skewed probability scores, so downstream decision rules were unfairly biased toward low‑risk customers.

**Action**  
I introduced a *statistical correction* layer—“judgy”—to the CI/CD pipeline.  
1. **Data‑driven review:** We collected 10 M inference logs over 30 days and computed bias metrics (e.g., disparate impact).  
2. **Correction algorithm:** Applied a quantile‑based calibration (Platt scaling) to map raw scores into equal‑probability buckets, then gated the output via an *Eval Gated* step that ran unit tests against fairness constraints before merging.  
3. **CI/CD integration:** Leveraged **AWS CodePipeline** + **CodeBuild** for automated testing; **SageMaker Pipelines** for model training and deployment; **Step Functions** orchestrated the gating workflow.  
4. **Monitoring:** Deployed **CloudWatch Alarms** on bias metrics, triggering rollback if thresholds were breached.

**Result**  
Bias reduced from 0.28 to 0.05 (95 % CI), while model AUC only dropped by 1.2 %. Deployment latency stayed under 3 s; cost increased < 5 % due to added Step Functions and CloudWatch metrics.

---

### Leadership Principles Highlighted
- **Customer Obsession** – ensured fair treatment for all applicants.  
- **Ownership & Dive Deep** – took end‑to‑end responsibility, dug into bias data, and engineered a production‑ready solution.  

Bar‑raisers look for ownership of the problem, deep technical dive (quantile scaling + gating logic), quantified impact (bias metric reduction), and learning from early failures (initial rollback triggers).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
