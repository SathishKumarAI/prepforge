---
qid: ing_bdde0b74c0__fp__local
question: 'Explain: Title: Measuring Chain-of-Thought Monitorability Through Faithfulness
  and Verbosity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 514
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:47:17-05:00'
sources: []
---

**Why we need a *monitorability* score for Chain‑of‑Thought (CoT) reasoning**

A large language model (LLM) solves a problem by emitting a sequence of intermediate steps—its “thoughts.”  
From an information‑theoretic view the LLM is transmitting a *policy* \(p(s\mid x)\) over sequences \(s\).  The user, however, only receives the final answer \(a\), not the entire policy. To audit or improve such systems we must quantify how well the observable transcript reflects the underlying reasoning process.

**Faithfulness & Verbosity as the two axes**

1. **Faithfulness (F)** measures *semantic alignment*: does every step in the transcript actually contribute to the final answer?  
   Formally, for each token \(t_i\) in the CoT we compute a relevance score \(r(t_i)\) via gradient‑based attribution or causal intervention.  
   \(F = \frac{1}{|s|}\sum_{i} r(t_i)\).  A faithful chain has high average relevance; spurious “noise” steps lower it.

2. **Verbosity (V)** captures *information density*: how much extraneous content is present?  
   We estimate the Shannon entropy of the transcript conditioned on the final answer, \(H(s|a)\).  High entropy implies many irrelevant tokens; low entropy indicates a concise chain.

The **monitorability** metric is then
\[
M = \alpha F - \beta V,
\]
with tunable weights \(\alpha,\beta>0\) reflecting the relative cost of missing useful steps versus wasting bandwidth.  
Because \(F\) and \(V\) are derived from first principles—relevance gradients and entropy—they satisfy desirable properties: monotonicity under pruning, invariance to token‑level re‑ordering that preserves semantics, and decomposability across sub‑tasks.

**Non‑obvious insight:**  
High verbosity can *mask* low faithfulness. A model may emit a perfectly faithful but extremely long chain; the verbosity penalty will still reduce \(M\). Thus, monitoring must jointly optimize both axes rather than treating them independently—otherwise we risk approving models that are either too verbose or too terse for human oversight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
