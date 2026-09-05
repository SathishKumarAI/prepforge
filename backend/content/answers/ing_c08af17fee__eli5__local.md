---
qid: ing_c08af17fee__eli5__local
question: What are embeddings? Compare cosine similarity, dot product, and Euclidean
  distance - when does the choice matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 263
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:53-05:00'
sources: []
---

Think of an embedding as a *digital fingerprint* for something—words, images, or even whole sentences. It’s just a list of numbers (a vector) that captures the essence of that item so a computer can work with it like any other numeric data.

Now you need to compare fingerprints.  
- **Cosine similarity** looks at how “pointing in the same direction” two vectors are, ignoring their length. Think of two arrows: if they head almost the same way, cosine is high.  
- **Dot product** multiplies each pair of numbers and sums them; it cares about both direction *and* magnitude—like measuring how much one arrow pushes the other.  
- **Euclidean distance** measures straight‑line “as‑the‑crow‑flies” separation between two points, so longer vectors are farther away.

Which to use depends on what you care about: if only relative orientation matters (e.g., word similarity), cosine is common; if magnitude also signals importance (e.g., confidence scores), dot product or distance may be better. For clustering close items together, Euclidean distance often works best.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
