---
qid: ing_5342ad04bc__fp__local
question: 'Explain: The interview loop — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 428
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:02:00-05:00'
sources: []
---

**Perplexity – the “interview” score of a language model**

A language model assigns a probability \(p(w_{1}^{n})\) to a sentence \(w_{1}\dots w_{n}\).  
If we ask *“How surprised would an ideal judge be if this sentence were spoken?”* we need a single scalar.  

The **perplexity** is defined as

\[
\text{PP} = 2^{-\frac{1}{n}\sum_{i=1}^{n}\log_2 p(w_i|w_{<i})}
       = \exp\!\Bigl(\tfrac{1}{n} H(p_{\text{true}}\Vert p_{\text{model}})\Bigr),
\]

where \(H\) is cross‑entropy.  
It is the exponential of average negative log‑likelihood, i.e., the geometric mean of the per‑token probabilities.  

Why this form?  
* **Optimization**: Minimizing cross‑entropy is equivalent to maximizing likelihood; perplexity is just a reparameterisation that makes values comparable across datasets.  
* **Information theory**: Cross‑entropy measures average bits needed to encode tokens under the model; exponentiating converts bits into an “effective number of choices” per token—hence the name *perplexity*.  
* **Geometry**: Perplexity is a distance metric on probability distributions (via KL divergence) that respects multiplicative scaling, unlike raw log‑likelihood.

**Non‑obvious insight:** A low perplexity does not guarantee human‑like fluency; it merely indicates the model’s *entropy* aligns with the data. Models can achieve low perplexity by memorising frequent phrases while still producing incoherent long‑range structure. Thus perplexity is a **global statistical fit**, not a local linguistic competence measure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
