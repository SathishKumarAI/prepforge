---
qid: ing_8eb0bec577__think__local
question: Which distance metric should you use for embedding search - cosine, dot
  product, or Euclidean - and does the choice actually matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 597
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:30:26-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- What is “embedding search”? Nearest‑neighbor retrieval in an embedding space.  
- Assume embeddings are learned by a neural net and typically *unit‑norm* or roughly comparable magnitudes.  
- We only care about relative similarity, not absolute distances.

**2️⃣ Pick a mental model**  
- Think of the metric as a *similarity function* that orders pairs: higher → more similar.  
- Cosine = dot product on unit vectors; Euclidean = distance (smaller → more similar).  
- All three induce an ordering; only scaling/offset differs.

**3️⃣ Reason through each option**  

| Metric | Formula | Properties | Practical notes |
|--------|---------|------------|-----------------|
| **Cosine** | \( \frac{q\cdot r}{\|q\|\|r\|} \) | Scale‑invariant; bounded [-1,1]. | Works best if vectors are roughly unit‑norm. |
| **Dot product** | \( q\cdot r \) | Equivalent to cosine when norms fixed; unbounded. | Faster on GPUs (no division). |
| **Euclidean** | \( \|q-r\|_2 \) | Sensitive to magnitude differences; needs careful normalization. | Requires extra step if you want cosine‑like ordering. |

- If embeddings are *already normalized*, dot product ≈ cosine, and both beat Euclidean unless you re‑normalize.  
- If not normalized, cosine is safer because it removes magnitude bias.  
- For ANN libraries (FAISS, Annoy), many use inner‑product search; they can be configured to treat it as cosine by normalizing vectors.

**4️⃣ Avoid common traps**  

- Don’t assume Euclidean always “wins”; it often fails when norms differ.  
- Forget that some libraries expect non‑negative scores; dot product can be negative.  
- Don’t ignore the impact of *indexing tricks* (e.g., LSH for cosine vs. PQ for Euclidean).

**5️⃣ Sanity check & communicate**  

- Ask: “Do I care about vector magnitude?” → If yes, use cosine/dot; if no, consider Euclidean.  
- Explain that choice mainly affects **ordering**; if your embeddings are normalized, dot product is a fast drop‑in for cosine.  
- Emphasize that the difference rarely changes top‑k results dramatically but can matter in edge cases or when scaling to billions of vectors.

*Bottom line:* For typical NLP/vision embeddings that are roughly unit‑norm, use **cosine** (or unnormalized dot product if you prefer speed). If magnitudes carry meaning, consider Euclidean after proper normalization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
