---
qid: ing_e68938fd52__aws__local
question: 'Explain: Comparison for RAG — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 426
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:28-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a feature to let users ask questions about product catalogs that contain text, images and videos. The requirement was a Retrieval‑Augmented Generation (RAG) pipeline that could surface multimodal evidence while keeping latency < 2 s for 10k concurrent users.

**Action**  
I architected a two‑stage system:  
1. **Indexing & Retrieval** – used Amazon Kendra with custom *Multimodal* indexing (text + image embeddings from Amazon Rekognition and text from Textract). Kendra’s built‑in relevance scoring returned the top 5 documents per query.  
2. **Generation** – deployed a fine‑tuned `meta-llama/Llama-3-8B-Instruct` on SageMaker Neo for inference, wrapped in an API Gateway + Lambda layer that injects the retrieved multimodal snippets into the prompt.

I added a *confidence filter* (retrieval score > 0.7) to avoid hallucinations and used DynamoDB TTL for cache invalidation. Cost was capped at $1k/month with on‑demand SageMaker, while scaling automatically via Lambda concurrency limits.

**Result**  
Post‑launch, user satisfaction (NPS) rose from 68 to **82**; query latency dropped to 1.4 s average. The system handled a 3× traffic spike without degradation, proving both scalability and cost‑efficiency.

**Reflection**  
Ownership drove me to prototype Kendra first, learn its limits, then iterate on prompt engineering. I *dive deep* into AWS metrics (CloudWatch) to fine‑tune cache hit rates. The biggest failure was an initial over‑reliance on raw OCR text; switching to Rekognition embeddings fixed hallucination rate by 35 %. This demonstrates continuous learning and bias for action—core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
