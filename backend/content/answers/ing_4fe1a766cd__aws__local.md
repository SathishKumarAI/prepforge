---
qid: ing_4fe1a766cd__aws__local
question: 'Explain: Chunking & embedding — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 471
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:31-05:00'
sources: []
---

**Scenario (Situation)**  
At my previous firm we built an internal knowledge‑base assistant for the sales team. The data spanned 200 GB of PDFs, emails, and product specs stored in S3. Customers complained that answers were vague or irrelevant—our *Customer Obsession* score dropped to 68/100.

**Task**  
I was tasked with redesigning the retrieval pipeline so the assistant could surface precise, context‑rich snippets within seconds while keeping costs under $2 k/month.

**Action**  
1. **Chunking** – Implemented a recursive text splitter (max 2000 tokens) using *Amazon Comprehend* for sentence boundaries, storing chunks in DynamoDB with `chunk_id` and metadata (`source`, `doc_id`).  
2. **Embedding** – Deployed *Bedrock* with the “Titan‑embed” model to generate 768‑dim embeddings per chunk. Stored vectors in *Pinecone* (managed vector DB) for sub‑millisecond similarity search.  
3. **RAG Flow** – Orchestrated via *Step Functions*:  
   - Query → Pinecone similarity → top‑10 chunks → pass to *Bedrock* “ChatGPT” model with prompt engineering.  
4. **Observability** – Tracked latency and accuracy in CloudWatch; set up an automated A/B test that routed 30 % of traffic to the new pipeline.

**Result (Outcome)**  
- Query latency dropped from 8 s to 1.2 s (90 % reduction).  
- Accuracy (precision@1) improved from 45 % to 78 %.  
- Monthly cost fell from $5 k to $1.6 k, saving 68 %.  
- Customer satisfaction score climbed to 92/100.

**Reflection**  
I owned the failure of our earlier monolithic approach and *dive deep* into data quality and vector similarity. The key learning: chunk size matters—too large leads to noise; too small dilutes context. Future iterations will experiment with hierarchical embeddings to balance depth and breadth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
