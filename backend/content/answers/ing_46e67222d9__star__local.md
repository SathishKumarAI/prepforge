---
qid: ing_46e67222d9__star__local
question: 'Explain: Parsing: the unglamorous bottleneck — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 337
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:30-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time FAQ chatbot for a telecom client that had to pull answers from over 300 GB of internal knowledge base documents. The bot needed to respond in under 1.2 seconds per user query.

**Task** – My goal was to reduce the end‑to‑end latency while maintaining answer relevance, so I had to identify and eliminate the biggest performance bottleneck: the parsing step that tokenized every document into embeddings for retrieval.

**Action** – I first profiled the pipeline with PyTorch and found that the transformer encoder (BERT-base) was consuming 60 % of total time. I replaced it with a distilled, quantized model (DistilBERT‑Tiny) and switched to ONNX Runtime for inference. To keep quality, I added a lightweight rule‑based pre‑filter that discarded documents whose metadata didn’t match the query’s intent before embedding. Finally, I batch‑processed the parsing on GPU and cached frequently accessed embeddings in Redis.

**Result** – Latency dropped from 3.4 seconds to 0.9 seconds per request, a 73 % improvement, while precision@1 stayed at 82 %. The exercise taught me that in RAG systems, the “parsing” phase is often the hidden choke point, and careful model selection plus smart pre‑filtering can yield dramatic gains without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
