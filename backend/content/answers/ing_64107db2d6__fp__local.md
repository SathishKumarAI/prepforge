---
qid: ing_64107db2d6__fp__local
question: 'Explain: Sources — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 301
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:37:53-05:00'
sources: []
---

**Gleaning sources in AI: the “why” of data curation**

When an AI system learns, its first job is to *know* what it can learn from. The raw material—text, images, sensor streams—is not a single monolithic file; it’s a vast, noisy web of documents, logs, and user interactions. To extract meaning, the system must **glean** relevant signals: filter duplicates, resolve references, normalize formats, and align timestamps.  

Why this meticulous harvesting? Two principles drive it:

1. **Statistical efficiency** – every extra irrelevant token dilutes gradient signal. By pruning noise, we concentrate the *effective* data size, tightening confidence intervals on learned parameters.
2. **Causal coherence** – downstream tasks (e.g., question answering) rely on a consistent world model. Gleaning ensures that events are ordered and entities are linked, preserving causal chains essential for reasoning.

A non‑obvious insight: *gleaning is itself an inductive bias.* The choice of what to discard shapes the hypothesis space. For instance, discarding rare named entities biases the model toward common knowledge, altering its ability to generalize to niche domains. Thus, source curation isn’t passive preprocessing; it’s a deliberate design decision that embeds prior structure into the learning process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
