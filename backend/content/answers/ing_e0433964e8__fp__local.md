---
qid: ing_e0433964e8__fp__local
question: 'Q62: Your search results are relevant but the LLM ignores them and answers
  from its training data. How do you fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 432
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:56:47-05:00'
sources: []
---

When an LLM “ignores” a search result, it is not a bug in the model but a mismatch between **information representation** and **inference strategy**.

1. **The fundamental problem** – The model must decide which tokens to generate given two sources of evidence: its internal weights (training data) and the retrieved text. If the retrieval signal is weak or mis‑aligned, the network will default to the stronger prior (its own knowledge).

2. **Why it happens** – Retrieval embeddings are usually shorter, lower‑dimensional, and tokenized differently from the model’s vocab. The attention mechanism treats them as just another sequence; without explicit weighting they contribute little to the next‑token probability.

3. **Solution principle** – Treat retrieval as a *prior* that should be amplified.  
   - **Contextualize**: prepend a cue (“Fact: …”) and separate it with a distinct token so the model learns to read it first.  
   - **Reweight**: during training, add a learnable bias or use a *retrieval‑augmented loss* that penalizes ignoring the retrieved text.  
   - **Fine‑tune**: expose the model to many “retrieve–generate” pairs so its attention pattern aligns with the cue token.

4. **Non‑obvious insight** – The tokenization gap is the root of the issue. Converting the search result into a *retrieval embedding* that matches the model’s hidden space (e.g., using cross‑encoder or dense passage retrieval) dramatically improves the signal strength, even before any reweighting.

In short: give the retrieved text a distinct, weighted position in the input and train the LLM to attend to it; this aligns the inference with the external knowledge source.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
