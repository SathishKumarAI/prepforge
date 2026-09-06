---
qid: ing_82efb6db1f__fp__local
question: 'Explain: Few-Shot and In-Context Learning (ICL) — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 401
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:40-05:00'
sources: []
---

**Few‑Shot & In‑Context Learning – a geometric view of implicit optimization**

When a language model is presented with a short prompt that contains *k* examples, it must infer the mapping
\(f_\theta: (x,y)\mapsto y\) for a new input \(x^\*\).  
The prompt can be seen as a *local neighbourhood* in the high‑dimensional token space. The model’s internal weights \(\theta\) are fixed; learning is performed implicitly by conditioning on this neighbourhood.  

1. **Why it must work** – In language, context defines syntax and semantics. By embedding the examples in the same token sequence, the transformer updates its *attention heads* to align positions of similar tokens, effectively performing a local re‑parameterisation of \(\theta\).  
2. **Optimization principle** – The model optimises cross‑entropy on the prompt; this is equivalent to a stochastic gradient step on a *meta‑objective*: minimise loss over any possible few‑shot task sampled from the same distribution. Thus, ICL is an instance of meta‑learning without explicit weight updates.  
3. **Information geometry** – The prompt induces a posterior over latent task parameters \(\phi\) in a Bayesian sense. The transformer’s softmax outputs approximate \(p(y|\mathbf{c},x^\*)\), where \(\mathbf{c}\) is the context embedding.  

*Non‑obvious insight:* The *length* of the prompt acts as a regulariser; longer contexts give more data for the implicit optimiser but risk over‑fitting to spurious correlations in the token order. Balancing this trade‑off is why few‑shot prompts often plateau around 4–8 examples, not because of capacity limits but due to the geometry of attention‑based inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
