---
qid: ing_539bcdae35__faang__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 506
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:58:36-05:00'
sources: []
---

**Clarify**  
We’re asked to explain what a Cohen’s κ (kappa) score below 0.6 means for inter‑rater agreement and to rewrite the typical criteria. I’ll assume we’re talking about pairwise categorical labeling (e.g., sentiment, intent) in an AI annotation task.

---

### 1️⃣ Approach  
* Define κ and its range.  
* Summarize conventional thresholds.  
* Re‑frame those thresholds into a concise “rewrite” table that matches common practice.

---

### 2️⃣ Depth  

| κ | Interpretation (common) | Re‑written label |
|---|--------------------------|------------------|
| < 0.00 | Poor/No agreement | **“None”** |
| 0.00–0.20 | Slight agreement | **“Very Low”** |
| 0.21–0.40 | Fair agreement | **“Low”** |
| 0.41–0.60 | Moderate agreement | **“Moderate”** |
| 0.61–0.80 | Substantial agreement | **“High”** |
| > 0.81 | Almost perfect agreement | **“Very High”** |

- **κ < 0.6** falls into the “Low to Moderate” band, indicating that annotators disagree more often than not; the model’s labeling is unreliable without further cleaning or training.

---

### 3️⃣ Edge Cases  
* *Skewed class distribution*: κ can be inflated; use weighted κ for imbalanced data.  
* *Small sample size*: Confidence intervals widen—report p‑values or bootstrapped CIs.  
* *Multiple raters*: Use Fleiss’ κ instead of Cohen’s.

---

### 4️⃣ Optimize & Communicate  

- **Explain** why thresholds are arbitrary but widely accepted (Landis & Koch, 1977).  
- **Highlight** that in AI pipelines, a κ < 0.6 usually triggers re‑annotation or model retraining.  
- **Recommend** visualizing the confusion matrix alongside κ to surface specific disagreement patterns.

This structured explanation satisfies FAANG interviewers: clear problem restatement, logical plan, precise technical detail, awareness of pitfalls, and actionable next steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
