---
qid: ing_727558fa99__faang__local
question: Your fine-tune gained 8 points on your benchmark. How do you know the gain
  is real and not contamination?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 441
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:09:48-05:00'
sources: []
---

**Clarify**  
You’re measuring an 8‑point lift on a standard benchmark after fine‑tuning. The goal: prove the gain is genuine and not due to data leakage or evaluation bias.

Assumptions to confirm:  
1. The test set was unseen during training.  
2. All preprocessing steps (tokenization, padding) are identical for base & tuned models.  
3. No target leakage from auxiliary signals.

**Approach**  
1. **Hold‑out validation** – split the original benchmark into train/val/test; use only train to fine‑tune.  
2. **Cross‑validation** – repeat training with k‑fold splits and aggregate scores.  
3. **Randomized baselines** – retrain with shuffled labels or random seeds to gauge variance.  
4. **Leakage audit** – run a similarity check between training data and test examples (e.g., Jaccard, cosine).  

**Depth**  
- Compute mean ± std over folds; an 8‑point lift should exceed the baseline’s confidence interval.  
- Use permutation tests: shuffle predictions, recompute metric 1k times to get a null distribution; the observed gain should lie in the extreme tail (p < 0.01).  
- For contamination detection, run a “token overlap” analysis: if >5% of test tokens appear verbatim in training, flag leakage.

**Edge Cases**  
- Small datasets may produce high variance; ensure folds are stratified.  
- If test set contains domain shifts, the lift might be due to over‑fitting to that shift rather than true generalization.  
- Model size changes can inflate scores via capacity, not fine‑tuning quality.

**Optimize & Communicate**  
Explain that a statistically significant improvement across multiple random seeds and folds, coupled with zero overlap between train/test, confirms the gain is real. Highlight trade‑offs: more rigorous validation increases compute but yields trustworthiness—essential for production deployments at Meta/Google/etc.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
