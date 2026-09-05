---
qid: vq_3ebe0f7c15__fp__local
question: Q18- What’s the F1 score? How would you use it?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 467
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:32:01-05:00'
sources: []
---

**From first principles**

Suppose a classifier outputs *positive* or *negative*.  
Let  

\[
\text{TP}= \#\{\text{true positives}\},\;
\text{FP}=\#\{\text{false positives}\},\;
\text{FN}=\#\{\text{false negatives}\}.
\]

A single number that balances *precision* \(P=\frac{TP}{TP+FP}\) and *recall* \(R=\frac{TP}{TP+FN}\) is needed because optimizing one alone can ruin the other (e.g., a model that predicts everything as positive has perfect recall but zero precision).  

The harmonic mean of two positive numbers favours the smaller:  
\[
H(P,R)=\frac{2PR}{P+R}.
\]
If either \(P\) or \(R\) is very low, \(H\) collapses toward that low value.  
Thus the **F1 score** emerges naturally as

\[
\boxed{\text{F1}= \frac{2\,TP}{2\,TP + FP + FN}}
      = 2\;\frac{P\,R}{P+R}.
\]

This is a *weighted* measure of overall correctness that penalizes asymmetry: you cannot achieve a high F1 by excelling in only one dimension.

**When to use it**

- **Imbalanced data**: accuracy can be misleading; F1 rewards correct minority predictions.  
- **Information retrieval, NLP, medical diagnosis**: where both false positives and false negatives carry cost.  
- **Model comparison**: choose the model with higher F1 when precision–recall trade‑off is critical.

**Non‑obvious insight**

F1 is *scale invariant* to the total number of samples; it depends only on TP, FP, FN counts. Therefore adding more negative examples (increasing the dataset size) does **not** alter F1 unless they change these three counts. This explains why a classifier can appear “better” on a larger test set even if its raw error rate stays constant—a subtlety that often confuses practitioners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
