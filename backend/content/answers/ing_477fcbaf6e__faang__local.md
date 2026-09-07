---
qid: ing_477fcbaf6e__faang__local
question: 'Explain: Metrics to Track — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 570
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:26-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a *Capability Assessment* framework for an AI system—what metrics best reflect its ability to solve the target problem? Assume we’re evaluating a supervised model (e.g., image classifier) in production, with downstream business impact and regulatory constraints.

**2️⃣ Approach**  
- Define *capability* (accuracy, robustness, fairness, latency).  
- Map each to measurable KPIs.  
- Prioritize based on stakeholder goals (customer satisfaction vs. compliance).  
- Build a dashboard that aggregates them over time.

**3️⃣ Depth**  

| Metric | What it tells us | Typical value range | Calculation |
|--------|------------------|---------------------|-------------|
| **Precision / Recall** | Trade‑off between false positives/negatives | 0–1 | TP/(TP+FP), TP/(TP+FN) |
| **F1‑score** | Harmonic mean of precision & recall | 0–1 | 2·(P·R)/(P+R) |
| **Area Under ROC (AUC‑ROC)** | Ranking quality across thresholds | 0.5–1 | Integral of TPR vs FPR |
| **Calibration Error (ECE)** | Probability reliability | 0–1 | Weighted avg(|p_pred – y_true|) |
| **Inference Latency** | Real‑time responsiveness | ms | Avg/95th percentile |
| **Fairness Gap (e.g., disparate impact)** | Bias across protected groups | < 0.8 (ideal) | Ratio of success rates |
| **Robustness Score** | Adversarial or distribution shift resilience | 0–1 | Accuracy on perturbed data |

Track *Model Drift* via a monitoring window: compare current metrics to baseline. Trigger retraining if drift exceeds thresholds.

**4️⃣ Edge Cases**  
- Imbalanced classes → rely on AUC‑ROC & precision/recall curves.  
- Multiclass > 10 categories → use macro/micro averaging.  
- Rare events → supplement with cost‑sensitive metrics.  
- Regulatory changes → add compliance‑specific checks (e.g., GDPR “right to explanation” score).

**5️⃣ Optimize & Communicate**  
- Automate metric collection in CI/CD pipelines; surface alerts.  
- Use feature importance drift as early warning.  
- Present a concise executive dashboard: top‑line accuracy + latency + fairness bar.  
- Explain trade‑offs verbally: “Improving precision by 2% reduces recall by 1%, impacting customer churn.”  

This structured, metric‑driven assessment keeps AI performance transparent, actionable, and aligned with business & ethical goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
