---
qid: ing_507ce0b643__faang__local
question: 'Walk me through the latency budget of a query: query understanding → retrieval
  → rerank → LLM answer. Where do you spend and where do you cut?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 598
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:51:40-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to break down the *latency budget* of a single end‑to‑end query:  

| Stage | Typical time goal (ms) | Why it matters? | Assumptions I’d confirm |
|-------|------------------------|-----------------|-------------------------|
| Query understanding | 10–30 ms | Tokenization, intent & entity extraction | Model size, hardware |
| Retrieval | 20–50 ms | Fetch top‑k docs from index | Index depth, cache hit rate |
| Rerank | 5–15 ms | Re‑score retrieved docs (e.g., BERT) | Batch size, GPU/CPU mix |
| LLM answer | 200–400 ms | Generate final response | Model type, beam width |

**2️⃣ Approach**  
1. Profile each component on production hardware.  
2. Identify *hot spots* where latency exceeds budget or is highly variable.  
3. Apply a “cut‑or‑spend” rule: if a stage can be reduced with minimal quality loss → cut; otherwise invest in better resources.

**3️⃣ Depth**  

| Stage | What to cut? | What to spend on? |
|-------|--------------|-------------------|
| **Query understanding** | Replace heavy transformer with distilled model or use fast tokenizers (e.g., SentencePiece). | GPU acceleration for large‑scale intent models if accuracy drop is unacceptable. |
| **Retrieval** | Use a smaller, more selective index; cache hot queries; batch multiple requests. | Invest in faster SSDs / RAM‑based indices to reduce I/O latency. |
| **Rerank** | Switch from BERT to lightweight rankers (e.g., DistilBERT or linear models) when ranking gain is marginal. | GPU shards for high‑quality reranking if recall is critical. |
| **LLM answer** | Reduce beam width, use smaller model checkpoint, or apply knowledge distillation. | Upgrade to multi‑GPU inference nodes or quantized models (int8) for throughput. |

**4️⃣ Edge Cases**  
- Extremely rare queries → fallback to generic response to avoid cache misses.  
- Heavy traffic spikes → auto‑scale retrieval shards; fall back to cached answers.  
- Model drift → continuous A/B tests to ensure latency/accuracy trade‑offs hold.

**5️⃣ Optimize & Communicate**  
After each tweak, re‑measure the *end‑to‑end* latency and quality metrics (BLEU, relevance). Present a concise “before–after” chart to stakeholders, highlighting that most savings come from smarter caching and model distillation while maintaining user‑perceived correctness. This structured reasoning shows clear trade‑offs and aligns with FAANG’s emphasis on measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
