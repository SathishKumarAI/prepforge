---
qid: ing_74613ce2b6__fp__local
question: You are asked to ship an LLM-assisted CV screening feature. How do you approach
  fairness, and what do you tell the product team?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 505
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:12:21-05:00'
sources: []
---

### Fairness from First Principles

The core problem of a CV‑screening model is **ranking candidates by predicted future performance** while respecting the *law of equal opportunity*.  
If we formalise “performance” as a latent variable \(Y\) and the model’s score as \(\hat{y}=f(x)\), fairness means that for any protected attribute \(A\),

\[
P(\hat{y}\ge t\mid A=a,Y=1)=P(\hat{y}\ge t\mid A=b,Y=1)
\]

for all thresholds \(t\).  
Why must we enforce this? Because the model’s predictions are *causal proxies* for hiring decisions; any systematic bias in \(\hat{y}\) becomes a barrier to entry.  

The deeper principle is **information theory**: a well‑calibrated estimator maximises mutual information \(I(Y;\hat{Y})\). However, calibration alone can mask disparate error rates across groups. Thus we add a *disparity penalty*—e.g., the difference in false‑negative rates—to the loss:

\[
L = \mathbb{E}\bigl[(Y-\hat{y})^2\bigr] + \lambda\,|FN_A-FN_B|
\]

where \(FN_A\) is the false–negative rate for group \(A\).  
This joint objective guarantees that improving predictive power cannot come at the expense of fairness; the penalty forces the model to spread errors evenly.

### What to Tell the Product Team

1. **Explain the causal logic**: “Our scores are only as fair as the data we feed them; we’re explicitly penalising any systematic error gap.”  
2. **Show the trade‑off curve**: present a Pareto frontier between accuracy and fairness so stakeholders can choose an acceptable operating point.  
3. **Highlight the non‑obvious insight**: *Bias is often hidden in the “right” predictions.* A model that predicts high scores for all candidates may look accurate but will systematically over‑filter minorities. Our penalty targets those hidden errors, not just overall accuracy.

By grounding fairness in a formal optimisation framework and communicating its practical implications, we can ship an LLM‑assisted CV screening tool that is both high‑performing and principled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
