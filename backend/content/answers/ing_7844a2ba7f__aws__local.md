---
qid: ing_7844a2ba7f__aws__local
question: 'Q: How do you handle reranking for extremely long queries (e.g., a whole
  paragraph)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 509
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:25-05:00'
sources: []
---

**Situation** – In a previous role I was tasked with improving the relevance of our enterprise search for users who entered full‑paragraph queries (≈ 300 words). The existing TF‑IDF pipeline returned ~20 results in <50 ms but precision@10 was only 0.42, and we were losing revenue from low‑quality clicks.

**Task** – Build a reranking layer that could handle these long queries in real time while keeping cost per query <$0.001 and latency <200 ms.

**Action**  
1. **Chunk & Embed** – Split the paragraph into 5‑sentence chunks, compute embeddings with SageMaker’s *SentenceTransformer* (model `all-MiniLM-L6-v2`). Store chunk vectors in DynamoDB with a TTL of 24 h to keep storage low.  
2. **Initial Retrieval** – Use Amazon OpenSearch for semantic search on the pre‑indexed document embeddings; retrieve top‑50 candidates.  
3. **Reranker** – Deploy a lightweight *XGBoost* model (converted to ONNX) behind an API Gateway + Lambda@Edge for sub‑100 ms inference. The model takes query–candidate similarity, metadata scores, and contextual features (e.g., section importance).  
4. **Feedback Loop** – Store click‑through logs in S3; every 12 h retrain the reranker with gradient boosting on real user interactions.

**Result** – Precision@10 jumped from 0.42 to **0.58** (+38 %) while query latency stayed at **≈ 180 ms** and cost per query fell to **$0.0007**. The system now scales linearly; we added a new indexing cluster when traffic doubled without service interruption.

**Learnings** – Ownership drove me to own the full pipeline, from data ingestion to model serving. By *diving deep* into embedding dimensions and Lambda concurrency, I identified the true bottleneck (chunking latency) and resolved it before deployment. The metric‑driven approach ensured we could quantify impact and iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
