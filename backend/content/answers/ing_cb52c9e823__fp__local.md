---
qid: ing_cb52c9e823__fp__local
question: 'Explain: 2- Score — The Illustrated GPT-2 (Visualizing Transformer Language
  Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a
  time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 520
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:12:42-05:00'
sources: []
---

**Why we need a “score” for GPT‑2**

A language model predicts the next token \(t_{i+1}\) given a context
\(c_i=(t_1,\dots ,t_i)\).  
Its quality is measured by *cross‑entropy* (or equivalently *perplexity*):

\[
\mathcal{L}(c_i)= -\log p_{\theta}(t_{i+1}\mid c_i).
\]

This loss is the negative log‑likelihood of the true next token.  
If we minimize \(\mathcal{L}\) over a dataset, we maximize the probability that
the model generates the observed text—exactly what we want for generation.

**From loss to score**

Because cross‑entropy sums over all positions in a sequence, it is natural to
plot a running “score” as the model processes a sentence.  
At step \(k\) we compute

\[
S_k = \sum_{i=1}^{k} \mathcal{L}(c_i).
\]

This cumulative score tells us how confident (or surprised) the model is up to
token \(k\).  A steep rise indicates a token that was unlikely under the model,
while a gentle slope signals fluent continuation.

**Why it works**

The Transformer’s self‑attention yields *contextualized* hidden states
\(h_i = \text{Transformer}(c_i)\).  
These are fed to an output softmax

\[
p_{\theta}(t_{i+1}\mid c_i)=\frac{\exp(h_i^\top W)}{\sum_j \exp(h_i^\top w_j)},
\]

so the loss is simply a function of \(h_i\).  The cumulative score therefore
mirrors how well the attention heads have aligned the current token with the
distribution learned during training.  

**Non‑obvious insight**

The *shape* of the score curve can reveal **semantic boundaries**: sudden
jumps often occur at clause or topic shifts, even though the model has no
explicit notion of syntax.  Thus a simple scalar track uncovers latent
structural cues that other diagnostics miss.

In short, the “score” visualisation is just cumulative cross‑entropy,
derived directly from maximum‑likelihood training, and it exposes how a
Transformer’s internal attention translates into confidence over text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
