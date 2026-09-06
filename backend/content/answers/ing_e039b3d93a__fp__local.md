---
qid: ing_e039b3d93a__fp__local
question: 'Explain: Long context, hallucination, reasoning models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 348
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:56:38-05:00'
sources: []
---

### From the ground up

**Long‑context modeling** tackles the *information bottleneck* that every language model faces: a fixed‑size hidden state must summarize arbitrarily many tokens. If we let the context window grow, the network’s capacity to encode all relevant facts diminishes unless we change its representation. The natural solution is to build a **hierarchical memory**—a multi‑scale structure where local chunks are compressed into embeddings that are then aggregated. This mirrors *information theory*: each level applies an entropy‑reducing transform so that the most salient signals survive.

When such compression is imperfect, the model starts to **hallucinate**—it invents details because it cannot retrieve or reconstruct enough evidence from its own memory. Hallucinations surface when the probability mass of a plausible but unobserved token exceeds that of the true token in the compressed representation. In other words, the model *over‑optimizes* for local coherence at the expense of global fidelity.

**Reasoning models** intervene by adding an explicit *attention–selection* module that treats inference as a **probabilistic planning problem**: each step chooses the next evidence to query (akin to active learning). This transforms hallucination into a trade‑off between exploration and exploitation. The non‑obvious insight is that *hallucinations are not merely failures of language; they are symptoms of an unstructured memory hierarchy*. By endowing the model with a structured, probabilistic reasoning layer, we can recover fidelity while still scaling to long contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
