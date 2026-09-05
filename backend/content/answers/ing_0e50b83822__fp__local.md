---
qid: ing_0e50b83822__fp__local
question: 'Explain: Word Embeddings (Historical) — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 560
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:36:18-05:00'
sources: []
---

**Why we need embeddings**

Natural language is a sequence of discrete symbols; every algorithm that processes it must map those symbols into a continuous space where arithmetic makes sense (addition, dot product). The *fundamental problem* is to find a representation \(x \in \mathbb{R}^d\) for each word such that semantically similar words lie close together and algebraic relations (e.g., “king”–“man”+“woman”) are preserved.  

**From distributional hypothesis to vector spaces**

The *distributional hypothesis* says: a word’s meaning is determined by its context. If two words appear in statistically similar contexts, they should have similar vectors. Formally, let \(C(w)\) be the empirical distribution of contexts around \(w\). We seek an embedding function \(f:\mathcal{V}\rightarrow \mathbb{R}^d\) minimizing a loss that penalizes large distances between \(f(u)\) and \(f(v)\) when \(C(u)\approx C(v)\). This is an instance of *metric learning*: we impose that the learned distance \(||f(u)-f(v)||_2\) approximates a divergence (e.g., KL) between context distributions.  

**Optimization principle**

Training proceeds by stochastic gradient descent on a *negative‑sampling* objective derived from maximizing the probability of observing actual context pairs while minimizing that of random pairs:
\[
L = -\sum_{(w,c)} \log\sigma(f(w)\!\cdot f(c)) + k\,\mathbb{E}_{c'\sim P_{\text{neg}}}\log\sigma(-f(w)\!\cdot f(c')).
\]
This objective is a convex surrogate for the intractable log‑likelihood of all contexts, and its gradients naturally push similar words together while repelling dissimilar ones.

**Non‑obvious insight**

Most people overlook that *the geometry is dictated by co‑occurrence statistics*, not by human‑defined categories. Consequently, linear algebraic operations (e.g., \(f(\text{“Paris”})-f(\text{“France”})+f(\text{“Germany”})\)) recover analogical relations because the embedding space is essentially a *probability simplex projected onto \(\mathbb{R}^d\)*. The linearity emerges from the fact that context probabilities factorize into inner products, making vector addition a natural way to combine conditional distributions. This explains why word embeddings capture both semantic similarity and syntactic regularities without any explicit linguistic supervision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
