---
qid: ing_b77f3e7afc__fp__local
question: 'Explain: Software — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 352
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:34:00-05:00'
sources: []
---

**Spaced‑repetition software (SRS)** is an algorithmic tool that schedules review sessions to counteract the *forgetting curve*—the exponential decay of recall strength over time.  
The fundamental problem it solves: **maximize long‑term retention with minimal study effort**. In information theory, each memory trace has a probability \(p(t)\) of being recalled after time \(t\). The optimal schedule is one that keeps \(p(t)\) above a target threshold while minimizing the total number of reviews.  

Mathematically, this becomes an **optimal control problem**: choose inter‑review intervals \(\Delta t_i\) to maximize
\[
\sum_{i} w_i\, p(t_i)
\]
subject to constraints on study time. The classic solution is exponential spacing: each interval grows by a constant factor \(k>1\). SRS systems estimate the *forgetting rate* for each item (often via Bayesian updating of user responses) and adapt \(k\) dynamically, thus turning a static theory into a personalized optimization loop.

A non‑obvious insight: **the spacing effect is not merely about timing but also about *contextual variability***. By varying retrieval contexts—different media, prompts, or environments—SRS can implicitly increase the dimensionality of memory traces, making them more robust to interference and further reducing the need for future reviews. This hidden “variability bonus” explains why well‑designed flashcard apps outperform simple fixed‑interval schedules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
