---
qid: ing_c6b4be0ecb__fp__local
question: Why do output tokens cost more than input tokens, and how should that shape
  how you build?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 437
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:04:06-05:00'
sources: []
---

**Why the asymmetry in token costs matters for model design**

At its core, a transformer learns to predict *next* symbols from a context. The learning objective is cross‑entropy over the vocabulary; each training step updates weights proportional to how well the model guesses the next token. In inference, every output token requires a forward pass through all layers, whereas an input token only contributes to the initial embedding and positional encoding before being “forgotten” by the attention mask. Thus:

1. **Computational footprint** – A single output token forces a full‑attention computation on *all* previous tokens (the self‑attention matrix grows quadratically). The cost scales with sequence length, so each extra generated token multiplies the workload.
2. **Memory pressure** – Generating tokens keeps activations alive for back‑propagation in training or beam search during inference, inflating VRAM usage per output step.
3. **Energy and latency budgets** – In real deployments, latency is dominated by the number of generation steps; each token incurs a fixed time slice.

Because of this asymmetry, *model architects* should:

- **Prioritize efficient decoding**: use causal pruning (e.g., reversible layers), sparse attention, or kernel‑optimized self‑attention so that each output step is cheap.
- **Cap the output length** where possible: design prompts or stopping criteria that keep generation short without sacrificing quality.
- **Bundle outputs**: generate multiple tokens in one pass (grouped decoding) to amortize the per‑step cost.

**Non‑obvious insight**  
Many overlook that the *attention mask* itself is a source of asymmetry. In training, the causal mask only blocks future positions; during inference, every output step expands this mask by one row and column, causing a *new* attention matrix to be computed from scratch. Optimizing how the mask grows—e.g., reusing cached key‑value projections or incremental computation—can reduce the per‑token cost by orders of magnitude without changing the model’s representational power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
