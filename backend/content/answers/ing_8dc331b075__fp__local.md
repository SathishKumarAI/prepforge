---
qid: ing_8dc331b075__fp__local
question: 'Explain: Live coding: build the prompt for the next turn under a fixed
  token budget. The catch is our prefix cache.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 350
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:06:25-05:00'
sources: []
---

### Building a Prompt Under a Fixed Token Budget With Prefix Caching

The core problem is **resource‑constrained generation**: an LLM can process only *N* tokens per turn, yet we want to preserve as much conversational context as possible. The solution hinges on two observations.

1. **Prefix invariance** – the model’s hidden state after processing a prefix is deterministic given that prefix. If we replay the same prefix, we pay no extra compute; we simply reuse its cached hidden activations.
2. **Conditional compression** – downstream tokens are generated conditioned on the *current* context only. Thus, once the prefix’s state is restored, we need not re‑encode it at inference time.

The optimal prompt construction therefore follows a greedy “fit‑in‑budget” rule:

1. **Count** the token length of every candidate turn.
2. **Select** the longest prefix (or sequence of turns) whose cumulative tokens ≤ N, preferring earlier turns to maximize coherence.
3. **Append** the next turn’s text if space permits; otherwise truncate or drop it.

The *non‑obvious insight* is that we can cache **not just the raw tokens but their hidden states**. By storing a dictionary keyed by prefix hash → state vector, we avoid re‑encoding entire histories on each step, reducing latency from O(N) to near‑constant per turn. This transforms the problem into one of **stateful caching** rather than pure token budgeting, enabling efficient live coding or conversational AI within tight resource limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
