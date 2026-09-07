---
qid: ing_4344a09046__faang__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 608
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:20:40-05:00'
sources: []
---

**Clarify**  
The question asks how to interpret a Cohen’s kappa coefficient that falls below 0.60 in an AI‑driven labeling or classification context. We’ll assume: (1) two annotators or an algorithm vs ground truth; (2) categorical labels; (3) the kappa is calculated over a sufficient sample size.

**Approach**  
1. Define what “poor agreement” means relative to kappa’s scale.  
2. Explain the statistical basis of kappa and its thresholds.  
3. Translate the numeric range into actionable guidance for AI model evaluation or data annotation quality control.

**Depth**  
Cohen’s kappa measures observed agreement corrected for chance:  

\[
\kappa = \frac{p_o - p_e}{1-p_e}
\]

- \(p_o\) = proportion of identical labels.  
- \(p_e\) = expected agreement if labels were random given marginal distributions.

A kappa < 0.60 indicates that after adjusting for chance, the actual concordance is lower than “moderate” agreement. Commonly used interpretive bands (Landis & Koch, 1977) are:  

| κ | Interpretation |
|---|----------------|
| < 0.00 | Poor |
| 0.00–0.20 | Slight |
| 0.21–0.40 | Fair |
| **0.41–0.60** | *Moderate* (often labeled “poor” in stricter AI settings) |
| 0.61–0.80 | Substantial |
| > 0.81 | Almost perfect |

In many ML pipelines, a κ < 0.60 flags that the model or annotators are not reliably reproducing ground truth. It signals potential data quality issues (ambiguous labels), class imbalance, or model overfitting to noise.

**Edge cases**  
- **Skewed classes:** κ can be high even with poor minority‑class performance; examine per‑class kappa or confusion matrices.  
- **Small sample size:** Confidence intervals widen; report 95% CI.  
- **Multiple annotators:** Use Fleiss’ κ instead of Cohen’s.

**Optimize & Communicate**  
When reporting, present both κ and its confidence interval, and complement it with a macro‑F1 score to capture predictive performance. If κ is low, recommend:  

1. Re‑annotate ambiguous samples or provide clearer guidelines.  
2. Use active learning to target hard examples.  
3. Retrain the model with balanced loss functions.

Narratively, I’d say: “A kappa below 0.60 indicates that our labeling process or model predictions are only moderately aligned after chance correction—essentially a warning sign for data quality and reliability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
