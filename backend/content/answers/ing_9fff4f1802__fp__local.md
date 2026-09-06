---
qid: ing_9fff4f1802__fp__local
question: 'Explain: Translation: Statistical & learned evals for quality'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 524
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:41-05:00'
sources: []
---

**From the problem to the solution**

When a machine translates a sentence we need to decide *how good* it is.  
Formally we want an estimator \(q(\hat y\,|\,x)\) that approximates the true
quality of the hypothesis \(\hat y\) given source \(x\).  The only data available are
reference translations \(y^\*\), so the task reduces to estimating a function
of the joint distribution \(P(x,\hat y,y^\*)\).

**Statistical metrics (e.g., BLEU)**  
These arise from *distribution matching*: we count how many n‑gram tokens in
\(\hat y\) appear in \(y^\*\).  The estimator is essentially the empirical
Kullback–Leibler divergence between the token distributions of \(\hat y\)
and \(y^\*\), penalised for brevity.  It works because matching local
statistics correlates with human judgments, but it ignores long‑range syntax
and semantics.

**Learned metrics (e.g., BERTScore, COMET)**  
Here we embed tokens in a high‑dimensional semantic space using a pretrained
model \(E(\cdot)\) and compute similarity:
\[
q_{\text{BERT}} = \frac{1}{|\,\hat y\,|}\sum_{i} \max_j \cos(E(\hat y_i),E(y^\*_j)).
\]
This is an estimator of *mutual information* between the hidden representations
of hypothesis and reference, capturing higher‑order dependencies that n‑gram
counts miss.  Training a regression head on human scores (COMET) further
optimises \(q\) to minimise expected squared error under the empirical
distribution of quality annotations.

**Non‑obvious insight**

Learned metrics can *overfit* to the style and vocabulary of the training data,
so a translation that uses rare but correct terminology may receive a low
score.  The remedy is to regularise the embedding space or mix statistical
and learned signals, ensuring the estimator remains robust across domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
