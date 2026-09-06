---
qid: ing_f9df6442d6__fp__local
question: How do chunk size and overlap affect retrieval quality, and what numbers
  would you start with?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 564
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:50:49-05:00'
sources: []
---

When an LLM is asked to answer a question, it first looks up “relevant” text fragments from a knowledge base.  
The *chunk size* determines how much context each fragment contains; the *overlap* determines how many tokens are shared between adjacent fragments.

### Why chunk size matters
- **Coverage vs granularity**: A larger chunk guarantees that any word is covered by at least one fragment, but it also dilutes local signals.  
- **Entropy budget**: The index can store only so much entropy; if a chunk exceeds the model’s context window (≈ 8 k tokens for GPT‑4), the retrieval becomes useless.  

### Why overlap matters
- **Boundary loss**: Sentences that cross a boundary would be split, hurting recall.  
- **Redundancy vs efficiency**: Every extra token increases storage and lookup cost linearly; too little overlap means many queries miss the exact phrase.

#### Derivation (simplified)
Let \(T\) be the average sentence length (~20 tokens). To guarantee that every sentence is fully contained in at least one chunk, we need  
\( \text{chunk size} \ge T + \text{overlap} \).  
If we set overlap to half a sentence (\(\approx 10\) tokens), a chunk of 200–400 tokens will cover 5–20 sentences, giving high recall while keeping the fragment size manageable.

### Practical starter numbers
| Parameter | Suggested range |
|-----------|-----------------|
| Chunk size (tokens) | **200–400** (≈ 1–2 paragraphs) |
| Overlap (tokens) | **50–100** (≈ 3–5 sentences) |

These values strike a balance: they keep the index small, avoid boundary loss, and respect the model’s context window.  
> **Non‑obvious insight:** The *effective* chunk size is not just about token count; it should be tuned to the average *semantic unit* (e.g., clause or argument) in your domain. A 300‑token chunk that spans two unrelated clauses can degrade precision more than a 200‑token chunk that stays within one coherent idea. Tailoring chunk boundaries to semantic units yields higher retrieval quality without increasing token count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
