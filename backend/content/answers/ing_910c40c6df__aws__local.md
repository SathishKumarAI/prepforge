---
qid: ing_910c40c6df__aws__local
question: 'Explain: Dimension 3: Answer Relevance — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 444
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:54:04-05:00'
sources: []
---

**Situation & Task**  
I led a feature‑release for our internal “Ask‑AI” chatbot that had to surface *relevant* answers from millions of knowledge documents. The goal was to cut the average time users spent searching by 40 % while keeping answer precision above 85 %.

**Action – Design & AWS Services**  
1. **RAG Pipeline (Retrieval‑Augmented Generation)**  
   * Retrieval: Elasticsearch + Amazon OpenSearch Service for fast vector search on embeddings generated with SageMaker’s `text-embedding-ada-002`.  
   * Generation: Amazon Bedrock’s Claude 2 fine‑tuned on our domain corpus.  
2. **Evaluation Patterns**  
   * *Pattern A – Exact Match*: Indexed key phrases → high precision, low recall.  
   * *Pattern B – Semantic Similarity*: Cosine similarity threshold → higher recall but risk of noise.  
   * *Pattern C – Hybrid*: First filter with Pattern A, then re‑rank with Pattern B to balance speed and relevance.  
3. **Metrics & Automation**  
   * Implemented a Lambda nightly job that runs 1,000 synthetic queries against each pattern, logs precision/recall, and feeds results into an Amazon QuickSight dashboard.  
   * Auto‑scales OpenSearch nodes via DynamoDB Streams to keep latency < 200 ms during peak hours.

**Result**  
*User search time dropped from **12 s** to **7 s** (≈ 42 % reduction).  
Precision rose from 78 % to **86 %**, exceeding the 85 % target.  
Cost increased by only **9 %** due to efficient scaling.*

**Reflection & Bar‑raiser Takeaways**  
*Owned end‑to‑end pipeline, diving deep into vector search trade‑offs.*  
*Quantified impact with clear A/B metrics.*  
*Learned that a hybrid pattern outperforms pure semantic matching; this insight guided the next iteration of our recommendation engine.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
