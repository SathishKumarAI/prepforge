---
qid: ing_a27d09040b__fp__local
question: 'Explain: Embeddings and similarity — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 410
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:51:08-05:00'
sources: []
---

**Embeddings & similarity – a first‑principles view**

At its core, an embedding system tackles the *representation problem*: how to turn discrete entities (words, images, users) into vectors so that “similar” items lie close in a geometric space.  
The loss is usually a *contrastive* or *triplet* objective: for a query \(q\), a positive sample \(p\) and a negative sample \(n\),

\[
L(q,p,n)=\max \bigl(0,\; d(f(q),f(p)) - d(f(q),f(n)) + \alpha\bigr),
\]

where \(d(\cdot)\) is a distance (often Euclidean or cosine) and \(\alpha>0\) a margin.  
Optimizing this loss forces the network to *compress* the manifold of similar items while *expanding* dissimilar ones, exactly what we want for nearest‑neighbour search.

The key insight that most overlook is that **the similarity metric itself is learned**. If you fix \(d(\cdot)\) (e.g., cosine), you implicitly assume a Euclidean geometry that may be too restrictive; instead, the network can learn a Mahalanobis transform or even a non‑linear kernel via attention layers. This turns embedding into a *probabilistic inference* problem: we’re estimating a latent space where conditional probabilities \(P(\text{similar}\mid q,p)\) are high.

Thus embeddings solve a geometric optimisation that balances reconstruction of pairwise relations with tractable similarity queries, and the hidden lesson is that choosing or learning the right metric can dramatically change performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
