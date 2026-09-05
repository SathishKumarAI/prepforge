---
qid: ing_2d714d40c0__fp__local
question: 'Explain: This will always have a higher probability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 456
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:41:18-05:00'
sources: []
---

In a probabilistic learning setting we often compare two events:  
* **Prior** – how likely an outcome \(A\) is before seeing any data;  
* **Posterior** – how likely \(A\) becomes after observing evidence \(B\).

Because the posterior incorporates extra information, it can only move in one direction relative to the prior:  

\[
P(A|B)=\frac{P(B|A)\,P(A)}{P(B)} \;.
\]

If the evidence is *informative* for \(A\) (i.e. \(P(B|A) > P(B|\bar A)\)), then the likelihood ratio \(P(B|A)/P(B|\bar A)\) exceeds one and the posterior exceeds the prior.  
Conversely, if the evidence is uninformative or contradicts \(A\), the ratio falls below one and the posterior drops.

**Why this monotonicity holds:**  
The denominator \(P(B)=P(B|A)P(A)+P(B|\bar A)(1-P(A))\) is a weighted average of two likelihoods, so it can never be smaller than the larger of them. Thus if the evidence favours \(A\), the numerator dominates the average, pushing \(P(A|B)\) upward; otherwise it pulls downward.

**Non‑obvious insight:**  
The “always higher probability” claim is only true for *conditional* updates that are strictly informative in one direction. In practice, most real‑world evidence is noisy and partially overlapping, so many posteriors will actually be lower than their priors—especially when the class imbalance is extreme or the feature space is high‑dimensional. Hence, assuming a posterior will always exceed its prior can lead to overconfident predictions unless the data’s informativeness is rigorously quantified.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
