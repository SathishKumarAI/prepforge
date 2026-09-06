---
qid: ing_c145e94efe__fp__local
question: 'Explain: How do you decide whether to trust your LLM judge? Walk me through
  calibration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 645
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:12-05:00'
sources: []
---

**Why a language‑model judge must be calibrated**

The core problem is *decision quality*: we want the model’s verdicts to be as close as possible to the true (human‑annotated) outcome while keeping costs low.  
A raw probability output \(p\in[0,1]\) tells us how likely the model thinks a claim is correct, but it does **not** tell us whether that confidence reflects reality. If a model is systematically overconfident or underconfident, its decisions will be sub‑optimal—over‑trusting leads to errors, under‑trusting wastes human effort.

---

### 1. Measure calibration error

For each score bin \(b\) (e.g., 0.70–0.80), compute the empirical accuracy \(\hat{a}_b\).  
The *expected calibration error* (ECE)

\[
\text{ECE}=\sum_b \frac{|S_b|}{N}\,|\hat{a}_b-p_b|
\]

quantifies how far the model’s predicted probabilities are from observed frequencies. A low ECE means “probabilities ≈ truth”.

---

### 2. Calibrate with a held‑out set

Use temperature scaling: adjust logits by a scalar \(T>0\) to minimize cross‑entropy on a validation split.  
The transformed probability is  

\[
p' = \sigma(\tfrac{z}{T}),
\]

where \(z\) are the raw logits and \(\sigma\) the sigmoid.  
Temperature scaling preserves rank ordering (important for decision thresholds) while aligning probabilities with observed frequencies.

---

### 3. Decide trust threshold

Pick a confidence cutoff \(c^*\) such that:

* Above \(c^*\): model‑only decision (cost = 0, risk ≈ ECE).
* Below \(c^*\): human review (cost > 0).

Set \(c^*\) by optimizing expected cost:  

\[
\min_{c} \; C_{\text{human}}\Pr(p'<c)+C_{\text{error}}\Pr(\text{mistake}|p'\ge c).
\]

The non‑obvious insight here is that **the optimal cutoff is not simply “high confidence”**—it balances the *cost of error* against the *cost of human review*, which may vary by context (e.g., legal vs. customer support).

---

### 4. Continuous re‑calibration

Because data drift changes \(\hat{a}_b\), periodically recompute ECE on fresh validation samples and update \(T\).  
A lightweight online calibration (e.g., Bayesian updating of temperature) keeps the judge trustworthy without retraining.

---

**Bottom line:** Calibration turns raw model scores into honest probabilities, enabling principled trade‑offs between automation and human oversight. The subtlety is that *calibration alone does not guarantee trust*; you must also align confidence with downstream cost functions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
