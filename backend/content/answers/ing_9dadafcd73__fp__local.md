---
qid: ing_9dadafcd73__fp__local
question: 'Explain: Title: Fast Inference from Transformers via Speculative Decoding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 397
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:40:44-05:00'
sources: []
---

**Fast inference from Transformers via Speculative Decoding**

The core problem is that a Transformer’s autoregressive decoder must evaluate the next token distribution \(p_\theta(y_t|y_{<t})\) after every generated symbol. Each evaluation costs a full forward pass over all layers, which dominates latency even for lightweight models.

Speculative decoding reframes this as *early‑exit* inference. Let a **fast, approximate model** \(q\) (e.g., a shallow Transformer or a distilled network) produce a candidate sequence \(\hat y_{1:T}\). A **slow, accurate model** \(p_\theta\) is only queried for the top‑\(k\) tokens in each position where \(q\)’s confidence falls below a threshold. Formally, we maintain a set
\[
S_t = \{y : q(y|y_{<t}) > \tau\},
\]
and evaluate \(p_\theta\) only on \(S_t\). This reduces the number of expensive evaluations from \(T\) to roughly \(\sum_t |S_t|\), which is much smaller when \(q\) is well calibrated.

The technique relies on **importance sampling**: the fast model provides a proposal distribution that, if close to the true posterior, concentrates probability mass on few tokens. The slow model corrects any bias by re‑scoring only those candidates, preserving exactness while cutting cost.

*Non‑obvious insight*: Speculative decoding implicitly performs *adaptive computation time* at the token level; the number of layers evaluated per token becomes a learned function of the input context rather than a fixed schedule. This dynamic allocation can be leveraged to train models that explicitly trade off accuracy for speed, opening avenues for energy‑aware deployment without sacrificing fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
