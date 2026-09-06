---
qid: ing_860d9a1574__fp__local
question: 'Explain: How to prepare — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 497
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:50:00-05:00'
sources: []
---

**Perplexity: a principled way to gauge a language model**

At its core, a language model (LM) assigns probabilities \(p(w_i|h_i)\) to each token \(w_i\) given its history \(h_i\). We want a single scalar that tells us how “confused” the LM is when it encounters real data.  
Start from **information theory**: the *surprisal* of a token is \(-\log_2 p(w_i|h_i)\), the number of bits needed to encode it. Averaging surprisal over an entire sequence yields the **cross‑entropy** \(H(p,q) = -\frac1N\sum_i \log_2 q(w_i|h_i)\). The cross‑entropy is minimal when the model’s distribution \(q\) matches the true data distribution \(p\).

Exponentiating this average surprisal gives us *perplexity*:
\[
\text{Perp}(q) = 2^{H(p,q)} = \exp_2\!\Bigl(-\tfrac1N\sum_i \log_2 q(w_i|h_i)\Bigr).
\]
Intuitively, perplexity is the **effective branching factor**: if a model had a uniform uncertainty over \(K\) equally likely next tokens, its perplexity would be exactly \(K\). Thus lower perplexity means fewer “guesses” on average.

*Why it must work*:  
- It is a direct function of cross‑entropy, the natural loss for probabilistic prediction.  
- It is invariant to sequence length: comparing models across corpora requires a length‑independent metric.  
- It is interpretable: perplexity ≈ “average number of choices” faced by the model.

**Non‑obvious insight:**  
Perplexity conflates *model calibration* and *expressiveness*. A poorly calibrated LM can achieve low perplexity on a specific test set simply by over‑fitting its token distribution, yet perform poorly elsewhere. Thus perplexity is a **good but not sufficient** indicator of generalization; one must also inspect calibration curves or downstream task performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
