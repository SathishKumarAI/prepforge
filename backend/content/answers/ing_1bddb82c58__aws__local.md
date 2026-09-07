---
qid: ing_1bddb82c58__aws__local
question: 'Explain: Chunking — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 435
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:29:08-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A client’s product search needed instant answers from a massive knowledge base (≈ 5 TB of PDFs).  
*Task*: Build an on‑demand RAG pipeline that delivers relevant excerpts in < 200 ms per query.

*Action*: I designed a **chunk‑and‑embed** workflow:

1. **Chunking** – split docs into 2 KB overlapping segments using `spaCy` (tokenizer + sentence splitter).  
2. **Vector store** – persist embeddings (OpenAI‑Ada) in **Amazon QLDB** for immutability and DynamoDB for quick lookup.  
3. **RAG retrieval** – use **Amazon Kendra** with a custom query parser; it returns top‑k chunks via cosine similarity.  
4. **Answer generation** – feed the retrieved snippets into **Amazon Bedrock (Claude 2)**, limiting context to 8 KB to stay within token budget.

*Result*: Latency dropped from 1.3 s to **180 ms**, throughput scaled to 10k QPS with 99.9% availability. Cost per query fell by **32 %** compared to a naive full‑text search, and the client reported a 25 % increase in user engagement.

*Learnings*: Early profiling revealed that chunk size was the biggest bottleneck; we iterated until the “sweet spot” of 2 KB chunks. I documented the trade‑off between embedding dimensionality (384 vs 1024) to balance precision and storage cost.

**Bar‑raiser takeaways**:  
- Demonstrated *ownership* by owning the full pipeline, not just a component.  
- Showed *dive deep* through profiling and iterative tuning.  
- Quantified impact with clear latency, cost, and engagement metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
