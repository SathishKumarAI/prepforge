---
qid: ing_3d1fe7eabb__fp__local
question: 'Explain: Perplexity AI — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 440
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:14:13-05:00'
sources: []
---

**Perplexity in Language‑Model Interviews**

*Fundamental problem.*  
A generative model must assign a probability distribution \(p\) over sequences of tokens so that the *expected* surprise to an observer is minimal. If a test set contains tokens \(\{w_i\}\), the natural objective is the average negative log‑likelihood (cross‑entropy)

\[
H(p)= -\,\frac1N\sum_{i=1}^{N}\log p(w_i).
\]

*Why this works.*  
Cross‑entropy measures how many bits are needed, on average, to encode a token under \(p\). If the model perfectly matches the true distribution \(q\), then \(H(p)=H(q)\). Any deviation inflates \(H(p)\) by the Kullback–Leibler divergence \(D_{\text{KL}}(q\,||\,p)\).

*Perplexity as a geometric mean.*  
Exponentiating \(H(p)\) yields

\[
\text{PPL}(p)=2^{H(p)} = \exp\!\left(\frac1N\sum_{i}\!-\log p(w_i)\right),
\]

which is the **geometric mean** of the inverse probabilities. Intuitively, perplexity tells us how many “guesses” a random predictor would need to guess each token correctly—lower is better.

*Non‑obvious insight.*  
Because perplexity is a *multiplicative* aggregation, it is highly sensitive to rare tokens: a single token with tiny probability can blow up the score. Thus, when comparing models on different vocabularies or corpora, one must control for token frequency distribution; otherwise perplexity conflates model quality with data sparsity.

In interviews, ask candidates to derive this connection and explain why perplexity, not raw cross‑entropy, is preferred as a single‑number metric for language modeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
