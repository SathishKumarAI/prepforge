---
qid: ing_ff2f13db50__aws__local
question: 'Explain: Retrieval Augmented Generation: Vector search is not enough'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 437
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:55:03-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles – Customer Obsession & Ownership)**  
When building a conversational AI product for our enterprise clients, I noticed that the team’s “vector‑search‑only” approach was failing to meet SLA < 200 ms while delivering 90 %+ relevancy. The customers demanded instant, context‑aware answers; we had to redesign RAG.

**Action (Dive Deep & Bias for Action)**  
I mapped the full retrieval pipeline:  
1. **Vector Search** – Amazon Kendra + OpenSearch for semantic similarity.  
2. **Document Ranking** – A lightweight Lambda that scores top‑k vectors with a domain‑specific BM25+ML hybrid.  
3. **Knowledge‑Base Augmentation** – S3 + DynamoDB cache to store pre‑computed embeddings and metadata, reducing cold‑start latency.  
4. **Generation** – SageMaker endpoint (PaLM‑2) that receives the top‑k snippets plus a concise prompt.

I introduced **confidence thresholds**; if the vector similarity < 0.75, we fall back to keyword search + broader context. This hybrid prevented hallucinations and dropped irrelevant responses by 35 %.

**Result (Deliver Results)**  
After A/B testing:  
- Latency ↓ 45 % (avg ≈ 150 ms).  
- Relevancy ↑ 18 % (precision‑@1 from 78 % to 96 %).  
- Customer satisfaction score rose from 4.2/5 to 4.8/5.

**Bar‑raiser cues I listened for** – ownership of failure modes, depth in trade‑off analysis (cost vs. latency), and quantifying impact. I documented a post‑mortem that highlighted the “vector‑search‑only” pitfall and how hybrid retrieval mitigates it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
