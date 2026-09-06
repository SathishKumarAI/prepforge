---
qid: ing_8c00eca9b0__think__local
question: How do you evaluate a reward model? Why is held-out pairwise accuracy not
  enough?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 470
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:18:45-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   - *Goal*: Assess how well a reward model predicts human preference for content.  
   - *Assumptions*: We have a set of paired outputs, human‑labeled “preferred” choices, and a trained reward function that assigns scalar scores to each output.

**2. Adopt a multi‑criterion mental model**  
   - Treat evaluation as a **ranking problem**: we care about ordering many samples correctly, not just binary classification on pairs.  
   - Use the *expected utility* perspective: higher reward should correlate with higher human satisfaction over all possible comparisons.

**3. Step‑by‑step reasoning**  
   1. Compute pairwise accuracy on a held‑out set (fraction of times model’s ranking matches humans).  
   2. Observe that this metric ignores **magnitude** of preference differences and **scale invariance** issues.  
   3. Add complementary metrics:  
      - *Spearman/Pearson correlation* between reward scores and human ranks over a larger set.  
      - *Kendall‑tau* to capture overall ordering quality.  
      - *Calibration* checks (e.g., Platt scaling) to see if score differences correspond to probability of preference.  
   4. Validate that the model generalizes: test on *unseen content domains* or longer sequences.

**4. Common traps**  
   - Relying solely on pairwise accuracy can hide systematic bias (e.g., always predicting “first” is correct if class imbalance).  
   - Ignoring score calibration leads to overconfident decisions in downstream RLHF.  
   - Overfitting the held‑out set: a model may achieve high pairwise accuracy by memorizing specific pairs.

**5. Sanity checks & communication**  
   - Plot reward vs. human preference distribution; look for overlap and separation.  
   - Explain that pairwise accuracy is necessary but not sufficient; it measures only local ordering, whereas we need global ranking quality, calibration, and robustness across domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
