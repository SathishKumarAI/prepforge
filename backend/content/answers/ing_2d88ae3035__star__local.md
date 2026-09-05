---
qid: ing_2d88ae3035__star__local
question: 'Explain: Pattern 2: Modality-Specific Retrieval with Fusion'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:20-05:00'
sources: []
---

**Situation**  
At my previous startup we were building a cross‑modal search engine for e‑commerce: users could upload an image of a dress and get textual reviews that matched the style. Our retrieval pipeline was slow; every query triggered two independent searches—one over images, one over text—then we tried to merge the results in memory, which hit latency limits during peak traffic.

**Task**  
I had to design a more efficient retrieval strategy that kept modality‑specific relevance while fusing results on demand, reducing response time below 200 ms without sacrificing precision (we were at 68 % MAP).

**Action**  
I introduced a two‑stage approach: first, each modality ran its own lightweight ANN index (Faiss for images, ElasticSearch vectors for text). The top‑k candidates from both indices were then re‑ranked by a learned fusion model—a simple XGBoost that combined cosine similarity scores, user click logs, and semantic embeddings. To avoid duplicate work, I cached the modality scores per query token so subsequent queries reused them when the same image or keyword appeared. I also switched to async IO in our API layer to run both retrievals concurrently.

**Result**  
Latency dropped from 350 ms to 140 ms on average, while MAP improved to 74 %. The system now handles 4× more concurrent users during flash sales. I learned that modality‑specific optimizations combined with lightweight fusion can outperform monolithic pipelines, especially when latency is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
