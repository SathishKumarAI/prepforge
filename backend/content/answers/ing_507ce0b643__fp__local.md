---
qid: ing_507ce0b643__fp__local
question: 'Walk me through the latency budget of a query: query understanding → retrieval
  → rerank → LLM answer. Where do you spend and where do you cut?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 608
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:56:27-05:00'
sources: []
---

**Latency budget from user prompt to answer**

| Stage | Core objective | Typical cost (ms) | Where we *must* invest | Where we can trim |
|-------|----------------|-------------------|------------------------|--------------------|
| 1️⃣ **Query understanding** | Convert raw text → semantic intent + slot set. | 10–30 ms | *Model size*: a transformer that sees the full prompt (≈ 12 B tokens) gives far better disambiguation than a tiny n‑gram. | *Beam width*: drop from 4 to 2; use knowledge‑aware pruning; cache frequent intents. |
| 2️⃣ **Retrieval** | Fetch candidate documents / snippets. | 20–80 ms (per shard). | *Index depth*: deeper inverted lists give higher recall → fewer downstream rerank passes. | *Vector compression*: product quantization reduces IO; approximate nearest neighbor (ANN) algorithms cut search time by > 5× with < 1 % recall loss. |
| 3️⃣ **Rerank** | Re‑score candidates with a fine‑tuned dense model. | 15–40 ms per batch of ~10 docs. | *Batching*: process 32 candidates at once to amortize GPU kernel launch overhead. | *Early exit*: stop ranking after top‑k are already highly confident; use a lightweight “confidence head”. |
| 4️⃣ **LLM answer** | Generate the final response. | 200–600 ms (depends on length). | *Model size*: larger models reduce hallucinations → fewer post‑processing steps. | *Sampling strategy*: top‑k with small k + temperature; avoid beam search unless quality gain outweighs latency. |

### Why it looks this way

- **Optimization principle**: Each stage is a *convex* subproblem (retrieval recall, rerank ranking loss, generation likelihood). The end‑to‑end loss is non‑convex, so we break it into modular pieces that each can be tuned independently.
- **Information bottleneck**: Early stages must compress the raw query into the minimal representation that preserves intent. Spending more compute here (larger Q‑model) reduces downstream uncertainty and thus overall latency.
- **Probability amplification**: Retrieval gives a set of high‑probability candidates; rerank sharpens this distribution. Skipping any step inflates variance, forcing later stages to spend extra time correcting errors.

### Non‑obvious insight

*The most expensive part is often the **post‑processing** after generation—parsing, safety filtering, and formatting. By integrating a lightweight “policy head” into the LLM that predicts safe vs. unsafe tokens in‑line, you can cut ~30 % of the post‑generation latency without adding any extra model inference time.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
