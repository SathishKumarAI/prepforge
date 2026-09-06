---
qid: ing_c08af17fee__think__local
question: What are embeddings? Compare cosine similarity, dot product, and Euclidean
  distance - when does the choice matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 382
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:41:00-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   * “Embeddings” – I’ll interpret as vector representations learned by neural nets (word, sentence, image, etc.).  
   * The comparison is about similarity metrics applied to those vectors; assume they’re already normalized or not depending on context.

**2. Adopt a mental framework**  
   * Think of each metric as a way to measure “how alike” two points are in the embedding space.  
   * Map each to a geometric intuition: cosine → angle, dot product → scaled projection, Euclidean distance → straight‑line length.

**3. Reason step by step**  
   * **Cosine similarity:** invariant to vector magnitude; useful when only direction matters (e.g., word meanings).  
   * **Dot product:** scales with magnitude; handy for inner‑product spaces like linear classifiers or attention mechanisms where larger norms carry meaning.  
   * **Euclidean distance:** absolute difference; good for clustering when scale is meaningful and you want a true metric (triangle inequality).

**4. Avoid common traps**  
   * Don’t assume all embeddings are unit‑normed; otherwise cosine ≈ dot product.  
   * Remember that Euclidean distance can be dominated by magnitude, so pre‑normalization may be needed.  
   * Mixing metrics across tasks leads to inconsistent rankings.

**5. Sanity‑check & articulate**  
   * Verify with a toy example (e.g., two vectors differing only in scale).  
   * Explain the choice: “If I care about semantic similarity regardless of confidence, use cosine; if model scores depend on norm, keep dot product; if clustering or nearest‑neighbor search in raw space, Euclidean is appropriate.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
