---
qid: ing_9fcc990ef6__fp__local
question: 'Q46: How do you manage context window limits with long conversations?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 386
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:10-05:00'
sources: []
---

**Why the problem exists**

A transformer’s attention is quadratic in sequence length; to keep inference tractable it caps the number of tokens (the *context window*). In a long chat, every turn consumes part of that budget, so past utterances get truncated or lost, breaking coherence. The underlying principle is **information bottleneck**: you can only keep as much history as the model’s capacity allows.

**How to make it work**

1. **Hierarchical summarisation**  
   - *Local*: compress each turn into a fixed‑length embedding (e.g., via an encoder or a lightweight RNN).  
   - *Global*: maintain a running summary of the dialogue by feeding previous embeddings into another recurrent or transformer layer that outputs a single “conversation state” token.  
   This mirrors a Kalman filter: you keep a compressed, continuously updated estimate rather than raw data.

2. **Dynamic windowing**  
   - Prioritise tokens by relevance scores (e.g., attention‑based salience or topic similarity).  
   - Replace low‑scoring older tokens with their summarised counterparts until the window fits.

3. **External memory**  
   - Store forgotten turns in a key–value store; retrieve them on demand via retrieval‑augmented generation, keeping the prompt lean.

**Non‑obvious insight**

Most systems treat summarisation as a one‑off pre‑processing step. The deeper trick is to *treat the summary itself as an evolving latent variable* that the model can query and update at every turn—essentially turning the dialogue into a **continuous belief state** rather than discrete snippets. This keeps the context window fixed while preserving long‑term dependencies, enabling truly open‑ended conversations without sacrificing fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
