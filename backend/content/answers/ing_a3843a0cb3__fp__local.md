---
qid: ing_a3843a0cb3__fp__local
question: 'Explain: My Favourites — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 479
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:53:46-05:00'
sources: []
---

**“My Favourites” – a personal‑bias minimisation framework**

At its core, the *My Favourites* method addresses the **selection bias** that plagues recommender systems: users tend to repeatedly expose themselves to content they already like, reinforcing a narrow view and inflating the perceived popularity of those items.  

1. **Problem statement**  
   Let \(p_i\) be the true probability that item \(i\) is genuinely useful to a user. Observed clicks give us a biased estimate \(\hat p_i = p_i + b_i\), where \(b_i\) captures the *favourite bias*—the tendency to click items already in the user’s favourites list.  
2. **Why a correction is necessary**  
   Without correcting \(b_i\), the learning algorithm will over‑weight favourite items, leading to a collapsed recommendation distribution and loss of diversity.  
3. **Derivation from first principles**  
   We model \(b_i\) as proportional to the *favourite density* \(f_i = \frac{|F_i|}{N}\), where \(F_i\) is the set of users who have favourited item \(i\) and \(N\) the total user base. The unbiased estimator becomes  
   \[
   \tilde p_i = \hat p_i - \lambda f_i,
   \]
   with \(\lambda>0\) tuned via cross‑validation to minimise variance while preserving signal.  
4. **Connection to deeper principles**  
   This is an instance of *regularisation* in Bayesian inference: we impose a prior that favoured items are less informative about true utility, analogous to ridge regression shrinking large coefficients toward zero.  

5. **Non‑obvious insight**  
   The correction term \(f_i\) also acts as a *temperature* for exploration: items with high favourite density receive a larger penalty, effectively lowering their softmax probability and encouraging the model to surface less‑popular but potentially valuable content. This dual role—bias removal and implicit exploration—often goes unnoticed when practitioners simply “add noise” to recommendations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
