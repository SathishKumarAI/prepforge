---
qid: ing_3b58d5516f__star__local
question: 'Explain: Flat Index (Brute Force) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 363
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:16-05:00'
sources: []
---

**Situation:**  
While working on a recommendation engine for an e‑commerce startup, our team needed to quickly prototype similarity search across 1.2 million user embeddings (300‑dim vectors). The production system used an IVF index, but we had to validate that the trade‑off in recall was acceptable before committing.

**Task:**  
I was tasked with creating a baseline “flat” (brute‑force) index to benchmark latency and accuracy against our current IVF setup. The goal was to demonstrate whether the extra engineering effort for indexing would be justified by measurable gains.

**Action:**  
Using Faiss, I built an `IndexFlatL2` index: all vectors were stored in memory and distances computed on the fly with a single GPU kernel call (`faiss.IndexFlatIP` for cosine similarity). I wrote a micro‑benchmark harness that performed 10k random queries, measuring per‑query latency and top‑k recall. To keep memory usage manageable, I used `float16` quantization during the benchmark phase and then compared results with the full `float32` index. I also added a simple cache layer to avoid recomputing distances for repeated queries.

**Result:**  
The flat index returned 99.8 % recall on top‑10 against the IVF baseline but at an average latency of 12 ms per query versus 3 ms for IVF. The benchmark proved that while brute force guarantees perfect accuracy, it is too slow for production traffic (~50k QPS). This informed our decision to keep IVF in production and use flat only for nightly offline re‑ranking runs, saving engineering effort while maintaining acceptable latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
