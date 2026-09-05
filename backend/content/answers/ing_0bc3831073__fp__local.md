---
qid: ing_0bc3831073__fp__local
question: 'Explain: Algorithms — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 519
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:30:58-05:00'
sources: []
---

**Spaced‑repetition algorithms (e.g., SM2)**

At their core a spaced‑repetition system solves the *forgetting curve* problem: after learning a fact, recall probability decays roughly exponentially with time since last exposure. The algorithm’s job is to schedule future reviews so that each item is seen just before its probability dips below a threshold—maximizing long‑term retention while minimizing effort.

1. **Modeling decay**  
   Let \(p(t)\) be the probability of recalling an item after time \(t\). Empirically, \(p(t)=e^{-\lambda t}\), where \(\lambda\) depends on difficulty and prior strength. We want to choose next interval \(I\) so that \(p(I)=c\) (a target recall level, e.g., 0.8). Solving gives \(I = -\ln c / \lambda\).

2. **Updating difficulty**  
   After each review we observe success/failure and update \(\lambda\) via Bayesian inference or a simple linear rule: if the user answers correctly, reduce \(\lambda\); otherwise increase it. The SM2 algorithm encodes this as an *ease factor* \(E\), updated by \(E_{new}=E_{old} + 0.1 - (5-q)(0.08+(5-q)*0.02)\) where \(q\in[0,5]\) is the quality score.

3. **Interval schedule**  
   The next interval multiplies the previous one by \(E\): \(I_{new}=I_{old}\times E\). This multiplicative growth captures the exponential decay model while keeping the algorithm simple and memory‑friendly.

4. **Deep insight**  
   Most users treat spaced repetition as a heuristic; the hidden principle is *information theory*. The algorithm implicitly maximizes entropy reduction per review: each spaced exposure moves the system from an uncertain state to a more certain one, achieving the greatest expected information gain for minimal time. This explains why even simple multiplicative schedules outperform fixed‑interval or random practices.

Thus, spaced repetition emerges naturally from modeling memory decay, updating difficulty with feedback, and greedily maximizing information gain—an elegant blend of probability, optimization, and human cognition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
