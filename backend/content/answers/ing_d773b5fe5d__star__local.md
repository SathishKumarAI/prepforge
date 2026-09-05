---
qid: ing_d773b5fe5d__star__local
question: 'Explain: Embedding Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 339
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:43-05:00'
sources: []
---

**Situation**  
During a product‑launch sprint for our recommendation engine, the click‑through rate had dropped by 18% after we migrated from keyword matching to a new search feature. The engineering team needed a way to better capture semantic similarity between user queries and content.

**Task**  
I was tasked with designing an embedding pipeline that could transform text into dense vectors so that the recommendation algorithm could score relevance in real time, all while keeping inference latency under 30 ms on our existing GPU‑free servers.

**Action**  
First I benchmarked several pre‑trained models (FastText, BERT, and Sentence‑Transformers) on a held‑out validation set. FastText offered the fastest inference but poor semantic capture; BERT was accurate but too slow. I settled on a distilled DistilBERT fine‑tuned with our domain data, then quantized it to 8‑bit using ONNX Runtime for a 4× speedup. The embeddings were stored in an IVF index (FAISS) for sub‑millisecond similarity search. I also added a lightweight caching layer for the top 100 vectors per user session.

**Result**  
After deployment, the recommendation relevance score rose from 0.42 to 0.56 (a 33% lift), and the overall click‑through rate improved by 12%. The latency stayed below our target of 25 ms. I learned that careful model selection combined with quantization and efficient indexing can bring state‑of‑the‑art NLP into production at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
