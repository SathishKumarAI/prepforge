---
qid: vq_b1f780a840__fp__local
question: What is the definition of precision?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 346
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:51:59-05:00'
sources: []
---

**Precision** is the *conditional probability* that a predicted positive actually belongs to the positive class.  
Mathematically  

\[
\text{Precision}=P(\text{True Positive}\mid \text{Predicted Positive})
   =\frac{\text{TP}}{\text{TP}+\text{FP}} .
\]

Why this ratio?  
When a model flags an instance as positive, we care about *how often* that flag is correct.  The numerator counts the successes (true positives), while the denominator counts all attempts to declare positivity (both successes and false alarms).  This mirrors the Bayesian notion of evidence: each predicted positive supplies evidence for the true class; precision measures the average evidential weight per prediction.

Precision is a *utility‑weighted* measure. In many applications, false positives are costly (e.g., medical screening or spam filtering), so we want to maximize the expected reward of each positive prediction.  By conditioning on the event “Predicted Positive,” we isolate the decision’s impact and avoid conflating it with class imbalance.

**Non‑obvious insight:** Precision is *invariant under scaling* the score threshold only if the model’s ranking is perfect. In practice, precision changes non‑linearly with thresholds because the denominator (TP+FP) grows at a different rate than the numerator. Thus, optimizing for precision often requires careful calibration of decision boundaries rather than merely adjusting a global threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
