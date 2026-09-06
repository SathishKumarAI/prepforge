---
qid: ing_78feb793ae__fp__local
question: How would you detect that a parser silently corrupted documents, at scale,
  without reading every page?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 430
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:21:57-05:00'
sources: []
---

Detecting silent corruption in millions of parsed documents is an *inverse‑problem*: we must infer the presence of a hidden error from observable statistics without inspecting every page.  
**1. Formalise the task** – let \(X\) be the true document set, \(Y=\mathcal{P}(X)\) its parsed form, and \(\tilde Y\) the corrupted output. We observe only \(\tilde Y\); we wish to test whether \(\tilde Y = Y\).  
**2. Choose a low‑dimensional sufficient statistic** – parsing is a many‑to‑one mapping; most of the information lives in *syntactic and semantic distributions* (e.g., part‑of‑speech tag frequencies, dependency arc counts). These can be computed in linear time per document and summed across shards.  
**3. Build a generative model for clean statistics** – fit a multivariate Gaussian \(N(\mu,\Sigma)\) to the empirical distribution of these vectors on a trusted validation set.  
**4. Apply an outlier detector at scale** – compute the Mahalanobis distance \(d^2=(\tilde y-\mu)^T\Sigma^{-1}(\tilde y-\mu)\) for each shard’s aggregate vector \(\tilde y\). Under the null hypothesis of no corruption, \(d^2\sim\chi^2_k\). Flag shards with \(p<\alpha\).  
**5. Aggregate evidence** – use a hierarchical Bayesian model to combine shard‑level p‑values into a global corruption probability, avoiding multiple‑testing penalties.

*Non‑obvious insight*: The **Mahalanobis distance automatically accounts for correlation structure among statistics**, so even if the parser drops a specific tag type, the remaining correlated tags will still flag the shard. This geometric test is far more sensitive than naïve per‑feature thresholds and scales linearly with corpus size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
