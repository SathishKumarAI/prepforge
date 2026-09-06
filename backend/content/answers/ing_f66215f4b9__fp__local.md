---
qid: ing_f66215f4b9__fp__local
question: 'Explain: Medusa & Multi-Token Heads — Speculative Decoding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 578
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:33-05:00'
sources: []
---

**Speculative decoding with Medusa and multi‑token heads**

The core problem is *latency* in autoregressive language models: each token requires a forward pass, yet the model’s internal state must be updated for every step. If we could predict several tokens at once, we would reduce the number of passes.

Let \(p_\theta(x_{t+1}\mid x_{\le t})\) denote the true conditional distribution given parameters \(\theta\). The *speculative* idea is to approximate this by a cheaper surrogate \(q_\phi(x_{t+1}\mid x_{\le t})\), trained to mimic \(p_\theta\) but faster (e.g., a distilled or shallow network). We generate a *proposal sequence* \(\tilde{x}_{t+1},\dots,\tilde{x}_{t+k}\) from \(q_\phi\). To correct for the mismatch we perform an acceptance test on each token, using the exact model:

\[
\alpha_i = \frac{p_\theta(\tilde{x}_{t+i}\mid x_{\le t},\tilde{x}_{<i})}
                 {q_\phi(\tilde{x}_{t+i}\mid x_{\le t},\tilde{x}_{<i})}.
\]

Tokens are accepted with probability \(\min(1,\alpha_i)\). This is essentially a multi‑step Metropolis–Hastings correction that preserves the target distribution while amortizing expensive evaluations.

**Medusa’s multi‑token heads**

Medusa extends this by training *multiple* lightweight heads, each predicting a different horizon \(k\) (e.g., 1, 2, 4 tokens). The hypothesis: longer‑horizon heads learn to exploit higher‑level syntax and semantics, reducing variance in the proposal distribution. During inference we run all heads in parallel, concatenate their outputs, then perform the acceptance tests sequentially. This yields a *bandwidth* of \(k_{\max}\) tokens per model pass.

**Non‑obvious insight**

The key subtlety is that the acceptance probability depends on the *joint* conditional distribution up to that token, not just the marginal. Therefore, even if each head is trained independently, their outputs must be jointly consistent; otherwise the correction step will reject many proposals, negating speed gains. Medusa implicitly learns this consistency by sharing the same encoder and only branching in lightweight heads, ensuring correlated predictions across horizons.

In short, speculative decoding with Medusa turns a serial autoregressive process into a *batched* one: cheap multi‑token heads generate a proposal bundle; the exact model filters it, guaranteeing correctness while cutting latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
