---
qid: ing_c5226d7099__faang__local
question: 'Explain: Prediction drift — What is concept drift in ML, and how to detect
  and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 568
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:19:16-05:00'
sources: []
---

**Clarify**  
We’re asked to define *concept drift* (often called prediction drift) in a supervised‑learning setting and outline practical ways to spot it and remediate it.

**Approach**  
1. Define the statistical notion of concept drift.  
2. Describe typical detection signals.  
3. Explain how to react: retraining, online learning, or model redesign.

**Depth**  
*Concept drift* occurs when the joint distribution \(P(X,Y)\) changes over time while the training data was drawn from a different distribution. Two common forms are  
- **Covariate shift**: \(P(X)\) changes but \(P(Y|X)\) stays constant.  
- **Real concept drift**: \(P(Y|X)\) itself shifts (e.g., user preferences evolve).  

Detection strategies:  
1. **Monitoring evaluation metrics** – a sudden drop in accuracy, precision, or AUC on a hold‑out window signals drift.  
2. **Statistical tests** – KS or chi‑square tests between feature distributions of recent vs. historical batches; use population stability index (PSI).  
3. **Model‑based drift detectors** – maintain a sliding‑window model and compare predictions to a reference model using the *Drift Detection Method* (DDM) or *Early Drift Detection Method* (EDDM).  

Remediation:  
- **Retraining** on recent data (batch learning) or employing *online/streaming* algorithms that update weights incrementally.  
- **Ensemble approaches** such as *Online Bagging* or *Adaptive Random Forests*, which weight newer samples more heavily.  
- **Model redesign** if drift is systematic (e.g., add new features, change feature engineering).  

Complexity: Batch retraining costs \(O(n \cdot d)\); online updates are \(O(d)\) per instance. Trade‑off between responsiveness and computational budget.

**Edge cases**  
- *Noisy labels* can masquerade as drift; validate with domain knowledge.  
- *Delayed feedback* (e.g., click‑through lag) may hide drift until a batch is collected.  
- *Feature drift only*: if \(P(Y|X)\) stable, covariate shift mitigation (reweighting) suffices.

**Optimize & communicate**  
I’d build an automated pipeline: continuous metric monitoring → statistical test → trigger retrain or model update. Communicate findings to stakeholders with visual dashboards showing PSI and AUC trends, explaining that drift detection is a proactive health check rather than a fault indicator. This structured flow aligns with FAANG expectations for clarity, depth, and actionable insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
