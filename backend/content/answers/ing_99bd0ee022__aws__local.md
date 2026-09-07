---
qid: ing_99bd0ee022__aws__local
question: 'Explain: Embedding model & representation — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 509
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:18-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to replace a keyword‑based internal knowledge base with a **semantic search** layer so that engineers could find relevant docs in under 2 seconds, even as the corpus grew from 50 k to 500 k pages.  

**Action**  
I owned the solution end‑to‑end:  

1. **Embedding model & representation** – I selected **Amazon SageMaker’s `sagemaker-huggingface` container** with a distilled BERT (distilBERT) fine‑tuned on our domain corpus. Each document was tokenized, passed through the encoder, and the `[CLS]` vector was stored as a 768‑dimensional float32 embedding.  
2. **Vector store & search** – I leveraged **Amazon Kendra** for semantic ranking and **Amazon OpenSearch Service (formerly Elasticsearch)** with the `knn` plugin to perform cosine similarity queries in sub‑millisecond latency.  
3. **Scalability / Availability** – The embeddings were indexed in an auto‑scaling OpenSearch cluster (minimum 2 AZs), while Kendra handled query routing and fallback to keyword search.  
4. **Cost & trade‑offs** – Using SageMaker for training kept the total cost <$5k/month, compared to a self‑hosted GPU cluster that would have exceeded $20k/month. The trade‑off was a 10 % higher storage footprint due to dense vectors.

**Result**  
After launch, **search relevance (measured by NDCG@3)** improved from 0.42 to 0.71 (+69 %), and the average query latency dropped from 1.8 s to 0.4 s. The solution handled a peak of 10k concurrent searches with <2 % error rate, meeting our SLA.  

**Reflection (Bar‑raiser lens)**  
I demonstrated **Ownership** by steering the project across data science, DevOps, and product teams; I practiced **Dive Deep** through iterative embedding fine‑tuning; I quantified impact via NDCG and latency metrics; and after an initial mis‑calibrated vector dimension, I learned to validate dimensionality against downstream similarity thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
