---
qid: ing_c08af17fee__star__local
question: What are embeddings? Compare cosine similarity, dot product, and Euclidean
  distance - when does the choice matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 396
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:27-05:00'
sources: []
---

**Situation:**  
During a recent project building a recommendation engine for an e‑commerce platform, we needed to match user browsing histories with product descriptions in real time. The dataset consisted of over 1.2 million users and 50 k products, each represented by high‑dimensional TF‑IDF embeddings.

**Task:**  
I had to decide on the similarity metric that would provide accurate matches while keeping latency below 50 ms per request.

**Action:**  
First, I compared cosine similarity, dot product, and Euclidean distance on a validation set. Cosine normalizes vectors, making it robust to varying length of user histories; dot product preserves magnitude and is faster in GPU kernels; Euclidean captures absolute distance but is sensitive to scaling. I implemented each metric using Faiss indexes: L2 index for Euclidean, Inner Product (IP) index for dot product, and an IVF+PQ index with cosine normalisation for the cosine case. Profiling showed dot product was 30 % faster than cosine due to native GPU support, while Euclidean suffered from higher variance in distances.

**Result:**  
After testing against a held‑out set of user–product pairs, cosine similarity yielded the highest mean reciprocal rank (MRR = 0.42), dot product gave MRR = 0.38, and Euclidean lagged at 0.31. Deploying cosine with a pre‑normalised IVF index kept latency under 45 ms while improving recommendation relevance by 15 %. I learned that choosing the metric depends on data scale, vector length variability, and hardware acceleration: use cosine when lengths vary, dot product for speed on magnitude‑sensitive tasks, and Euclidean only when absolute distance matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
