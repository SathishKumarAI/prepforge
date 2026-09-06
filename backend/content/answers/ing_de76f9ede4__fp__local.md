---
qid: ing_de76f9ede4__fp__local
question: 'Q: How do you evaluate a RAG system when you do not have ground-truth answers?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 538
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:52:51-05:00'
sources: []
---

**Why we need an objective score**

A RAG model is a *two‑stage* system:  
1) retrieve documents that are likely relevant;  
2) generate an answer conditioned on those documents.  

If no gold answers exist, the only thing we can observe is how well the retrieved set *supports* a coherent, accurate output. That turns evaluation into a **probability of correctness** problem: we want to estimate \(P(\text{answer correct}\mid \text{retrieved docs})\).

**Deriving the metric**

1. **Define relevance as a latent variable** \(R_i\) for each retrieved document (true if it contains evidence for the answer).  
2. The generation model can be seen as sampling from a distribution \(P_\theta(\hat y \mid R_1,\dots,R_k)\).  
3. By Bayes’ rule, the expected correctness of any output is  
   \[
   E[\text{correct}]=\sum_{r}\!P(R=r)\!\int_{\hat y} P_\theta(\hat y\mid r) I_{\text{correct}}(\hat y,r)\,d\hat y .
   \]
4. We cannot compute this integral directly, but we can *simulate* it: sample \(R_i\) from an oracle that checks whether a document truly supports the query (e.g., via human annotation on a small subset), then let the model generate and score the output with a **semantic similarity** metric to the ground‑truth evidence snippets.  
5. The resulting average score is an unbiased estimator of the expected correctness, even without full gold answers.

**Non‑obvious insight**

Because relevance is latent, *over‑retrieval* can hurt more than help: noisy documents inflate variance in \(R\) and bias the generator toward hallucinations. Therefore, a principled evaluation must penalize not just answer quality but also **retrieval precision**, e.g., by weighting the similarity score with an estimated recall‑precision curve derived from the sampled relevance labels.

In practice:  
- Sample a small set of queries.  
- For each, annotate which retrieved docs truly support the answer.  
- Compute a weighted semantic similarity between generated text and those supporting snippets.  
- Aggregate across samples to estimate overall performance.  

This approach respects the probabilistic structure of RAG and yields a rigorous, data‑driven evaluation without exhaustive ground truth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
