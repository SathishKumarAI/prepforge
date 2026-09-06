---
qid: ing_a12f6dc48e__fp__local
question: 'Explain: Q: Explain the difference between prefill and decode phases.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 430
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:48:27-05:00'
sources: []
---

**Prefill vs. Decode in autoregressive language models**

The *fundamental problem* is to generate a sequence \(y_1,\dots,y_T\) that maximizes the joint probability
\[
P(y_{1:T})=\prod_{t=1}^{T} P(y_t \mid y_{<t}, x),
\]
where \(x\) is an optional conditioning input.  
The **prefill** phase is a *parallel* inference step: we compute the hidden representation of the entire context (the prompt or previous tokens) once, then evaluate the conditional distribution for every future token simultaneously. This works because the model’s internal state after seeing the context does not depend on the yet‑unseen tokens; it depends only on \(x\) and \(\{y_{<t}\}\). Hence we can “prefill” a cache of logits or embeddings that will be reused.

The **decode** phase is *sequential*: each token’s probability is conditioned on all previously generated tokens, so the next‑token distribution must be recomputed after every sampling step. The sequentiality enforces causal dependencies and guarantees that the chain rule holds exactly; any shortcut would break the factorisation of \(P(y_{1:T})\).

**Why this division matters**  
- **Efficiency:** Prefilling amortises the cost of encoding once, while decoding handles the combinatorial explosion of possibilities.
- **Correctness:** Decoding preserves the autoregressive nature; prefill cannot substitute for it because future tokens influence each other.

**Non‑obvious insight**  
The prefill cache is *not* a final answer; it is merely a set of “ready‑to‑use” logits. The quality of sampling in decode hinges on how well the prefilled representation captures long‑range dependencies—an implicit assumption that the transformer’s self‑attention can encode all necessary context in a single forward pass, which fails for extremely long prompts unless architectural tricks (e.g., sparse attention) are employed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
