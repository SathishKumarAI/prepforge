---
qid: ing_15d01e830d__fp__local
question: Kimi extended usable context far beyond typical training lengths. How do
  you take a model trained at, say, 8K-32K and make it work at 128K or more?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 505
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:33-05:00'
sources: []
---

**How to stretch an 8‑K/32‑K model to 128 K+ context**

1. **Fundamental problem**  
   A transformer’s self‑attention is *O*(L²) in sequence length L; its weight matrix is fixed at training time, so it can only “see” the tokens it was trained on. To process longer text we must give the model a *new* way to aggregate information without blowing up complexity.

2. **Chunk‑wise encoding**  
   Split the long document into overlapping chunks that fit the native context window (e.g., 8 K). Encode each chunk independently, obtaining a *chunk embedding*. This preserves local coherence while keeping computation tractable.

3. **Hierarchical or cross‑attention aggregation**  
   Build a lightweight “summary transformer” that attends over the chunk embeddings. Its parameters are either frozen (so we avoid re‑training) or fine‑tuned on long‑range tasks. The attention cost is now *O*(C²) where C ≪ L, so 128 K tokens become a handful of chunks.

4. **Memory‑augmented adapters**  
   Insert an external key–value memory (e.g., FlashAttention‑style KV cache) that stores the most salient past activations. During decoding, the model can query this memory instead of recomputing attention over all previous tokens. This is essentially a learned “short‑term buffer” that grows with context.

5. **Why it works**  
   By decomposing the problem into *local* (within chunk) and *global* (between chunks) subproblems, we respect the transformer’s inductive bias: local dependencies are dense, long‑range ones sparse. The hierarchical attention mirrors how humans read—focus on a paragraph, then skim the whole book.

**Non‑obvious insight:**  
The bottleneck isn’t just quadratic scaling; it’s *information density*. Most tokens in a 128 K passage carry little new signal beyond their neighbors. A learned memory that compresses chunks into salient “concept vectors” is therefore far more efficient than naïvely extending the window. This compression can be viewed as an implicit *variational* inference over latent topics, giving the model a principled way to prune irrelevant context before it reaches the core transformer layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
