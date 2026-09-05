---
qid: ing_17ae18036d__fp__local
question: We set temperature to 0, so outputs should be deterministic. Why do users
  still get different answers to the same prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 583
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:56:14-05:00'
sources: []
---

When the temperature \(T\) is set to zero the probability distribution over the next token collapses to a *deterministic* rule:

\[
P_{\text{out}}(x_i \mid h)=
  \begin{cases}
   1 & \text{if } x_i=\arg\max_{x} P(x\mid h)\\[4pt]
   0 & \text{otherwise}
  \end{cases}
\]

where \(h\) is the hidden state (the entire context).  
In theory this means that, given **exactly** the same hidden state and **exactly** the same model parameters, every run must produce the identical token sequence.

The observed divergence comes from three subtle sources:

| Source | Why it breaks determinism |
|--------|---------------------------|
| **Tied maxima** | If two or more tokens share the maximum probability, the soft‑max implementation must break ties. Most libraries choose the first occurrence in memory order, but that order can differ across runs (different GPU kernels, thread scheduling, or even different model weights). |
| **Floating‑point non‑determinism** | The logits are computed with floating‑point arithmetic on GPUs/TPUs. Parallel reductions and fused ops introduce tiny rounding differences that propagate through the soft‑max, shifting the argmax in edge cases. |
| **Context variation** | Even a single differing character (e.g., a trailing space or newline) changes the tokenization and thus the hidden state. A different system prompt, user instruction, or model version will also alter \(h\). |

### Non‑obvious insight
Even with \(T=0\), *entropy* is not eliminated; the entropy of the output distribution is still present because ties are resolved arbitrarily. In practice, most LLMs do **not** enforce a consistent tie‑breaking rule across runs or hardware. Thus, temperature zero guarantees *local* determinism (the same token at each step) only if the entire computational graph and its floating‑point state are identical—an assumption rarely satisfied in production deployments.

In short, setting \(T=0\) removes stochastic sampling but does **not** guarantee reproducibility unless every component of the inference pipeline is strictly deterministic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
