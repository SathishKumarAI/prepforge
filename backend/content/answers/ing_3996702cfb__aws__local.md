---
qid: ing_3996702cfb__aws__local
question: 'Explain: Embeddings — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 381
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:36:52-05:00'
sources: []
---

**Situation / Task**  
I was tasked to reduce the latency of a customer‑facing FAQ bot from 1 s to <200 ms while keeping answer quality above 90 % precision.

**Action**  
Using *Customer Obsession* and *Ownership*, I re‑engineered the retrieval pipeline with **RAG (Retrieval‑Augmented Generation)**.  
1. **Embeddings**: Trained a domain‑specific sentence‑embedding model on 50k support tickets (using SageMaker Training).  
2. **Vector store**: Deployed an **Amazon QLDB‑based vector index** via *OpenSearch* with a custom cosine similarity plugin, ensuring ACID guarantees for updates.  
3. **Retrieval layer**: A Lambda@Edge function in front of API Gateway scores the top‑k vectors and streams them to a **Bedrock** LLM (Claude 2) that generates concise answers.  
4. **Caching**: Implemented an ElasticCache‑Redis cluster to cache frequent queries, cutting redundant vector lookups.

**Result**  
Latency dropped from 1 s → 140 ms (≈ 86 % reduction). Answer precision rose to 92 % as measured by an A/B test with 10k users. Operational cost fell by 25 % due to reduced Lambda invocations and efficient cache hit ratio.

**Reflection**  
I *dive deep* into OpenSearch’s memory‑map optimizations and learned that early profiling of vector dimensionality saved us from a costly scaling spike. This iteration set the bar for future generative services in our org.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
