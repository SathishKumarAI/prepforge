---
qid: ing_9ff6b52413__fp__local
question: You have a 200k-token context with instructions and 50 documents. Where
  do you put what, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 500
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:34-05:00'
sources: []
---

**Where to place the 200 k‑token context**

| Section | Placement | Why it works |
|---------|-----------|--------------|
| **Instruction (prompt) + system message** | *Front of the buffer* | LLMs treat early tokens with higher positional weight; the first words set a “soft” prior that influences every subsequent token. Placing the instruction at the very beginning ensures the model’s internal attention heads keep it in active focus, especially when the rest of the 200 k‑token stream is saturated. |
| **Document embeddings (or summaries)** | *Middle* | After the instruction, feed a compact representation of each document (e.g., a 512‑dim embedding or a 50‑word summary). The middle slot keeps the model’s key content in its “working memory” while still being far enough from the tail that it isn’t lost to positional decay. |
| **Full documents (if needed)** | *End of the buffer* | If you must include the raw text, append it after the embeddings. The LLM will use the embeddings as a cue to retrieve the correct passage when generating an answer, reducing the chance of hallucination from unrelated sections. |

**Why this ordering matters**

1. **Positional encoding bias** – Transformers give earlier tokens more weight; placing the instruction first guarantees it’s never forgotten.
2. **Attention capacity** – The middle section is where the model can form a “memory snapshot” that balances being fresh yet not overwritten by later tokens.
3. **Gradient flow during training** – Models learn to treat early prompts as guiding signals, so mimicking this during inference leverages that learned bias.

**Non‑obvious insight**

*The “sweet spot” for document cues is not the very beginning or end but a narrow window roughly 20 % into the context.* In practice, this position maximizes recall while preserving instruction priming. By sandwiching embeddings between instruction and raw text, you harness both positional advantage and efficient memory retrieval—something most prompt designers overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
