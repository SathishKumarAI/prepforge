---
qid: ing_156327ea32__star__local
question: 'Explain: Scaling Strategy — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 376
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:59-05:00'
sources: []
---

**Situation** – In Q3 of last year my team built a generative‑AI chatbot for a fintech client that needed to answer regulatory queries in real time. The prototype worked well on a single GPU but hit latency limits when we scaled from 10 to 1,000 concurrent users during peak hours.

**Task** – I had to design a scaling strategy that kept response times under 200 ms while maintaining high accuracy across thousands of documents in the retrieval‑augmented generation (RAG) pipeline.

**Action** – First, I profiled the RAG loop with PyTorch Profiler and discovered that the embedding step was the bottleneck. I switched from a single‑GPU BERT encoder to an approximate nearest‑neighbour index using FAISS on a GPU cluster, reducing similarity search time by 6×. Next, I introduced sharding: each user request is routed to one of four stateless inference nodes behind a Kubernetes ingress that autoscaled based on CPU usage. For the retrieval phase I cached top‑k passages in Redis with an LRU policy, cutting redundant disk reads. Finally, I added a lightweight evaluation layer that samples 1% of responses for human review and automatically flags low‑confidence answers for re‑retrieval.

**Result** – After deployment, average latency dropped from 450 ms to 170 ms at peak load, and the overall answer accuracy improved by 12 percentage points. The system handled a 100× increase in traffic without any additional hardware investment. I learned that profiling early, using approximate search, and combining caching with selective human review are key levers for scaling RAG at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
