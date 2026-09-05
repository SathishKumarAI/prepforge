---
qid: ing_3c7e37b702__fp__local
question: What's the relationship between cross-entropy, KL divergence, and perplexity
  - and why is cross-entropy the training loss for language models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 519
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:13:09-05:00'
sources: []
---

**From the problem to the penalty**

A language model supplies a probability distribution \(p_\theta(x)\) over tokens.  
When we observe data \(x\sim q(x)\) (the true empirical distribution of the corpus), we want our model to assign high likelihood to those tokens and low likelihood to the rest.  

1. **Cross‑entropy**  
   \[
   H(q,p_\theta)= -\sum_x q(x)\log p_\theta(x)
   \]
   is precisely the expected negative log‑likelihood of a token drawn from \(q\). Minimizing it pushes \(p_\theta\) toward \(q\).

2. **KL divergence**  
   \[
   D_{\mathrm{KL}}(q\|p_\theta)=H(q,p_\theta)-H(q)
   \]
   is the extra loss incurred by using \(p_\theta\) instead of the true distribution \(q\). Since \(H(q)\) is constant w.r.t. \(\theta\), minimizing cross‑entropy automatically minimizes KL.

3. **Perplexity**  
   \[
   \mathrm{PP}(p_\theta)=2^{\,H(q,p_\theta)}=e^{\,H(q,p_\theta)/\ln 2}
   \]
   is an exponential transform of cross‑entropy that measures the “effective number of choices” the model makes per token. Lower perplexity means higher certainty.

**Why cross‑entropy?**  
Because it is the *maximum‑likelihood* objective: we observe samples from \(q\) and choose \(\theta\) to maximize their likelihood, which algebraically becomes minimizing cross‑entropy. It respects the probabilistic nature of language data (a multinomial over a fixed vocabulary), is convex in the log‑probabilities, and decomposes neatly into a sum over tokens—exactly what stochastic gradient descent requires.

**Non‑obvious insight:**  
Cross‑entropy’s minimization is *equivalent* to minimizing KL divergence, not just “making probabilities close.” The constant entropy term \(H(q)\) hides the fact that cross‑entropy penalizes only the *difference* between \(q\) and \(p_\theta\). Thus perplexity, though often used as a metric, carries no extra training signal; it’s simply a re‑scaling of the same objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
