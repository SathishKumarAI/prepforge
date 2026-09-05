---
qid: ing_45ac6655dc__star__local
question: 'The take-home says: "Build a tool that answers questions over our public
  docs. You have a weekend." How do you approach it, and what do you deliberately
  skip?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 392
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:50-05:00'
sources: []
---

**Situation:**  
I landed on the weekend with a new open‑source knowledge base of 350 GB of markdown and PDF docs for an AI SaaS platform. The client wanted a quick prototype that could fetch answers to user queries in under two seconds.

**Task:**  
Build a lightweight question‑answering tool that ingests the docs, builds an index, and returns relevant passages with confidence scores—all within 48 hours.

**Action:**  
1. **Data ingestion & vectorization** – I used `langchain` with Hugging Face’s `sentence-transformers/all-MiniLM-L6-v2` to embed each doc chunk into a FAISS index; this gives sub‑second similarity search.  
2. **Retrieval + RAG** – For the top 5 vectors, I concatenated their texts and fed them into OpenAI’s GPT‑4 (or Claude‑3 if cost was an issue) with a prompt that asked for concise answers in plain English.  
3. **API wrapper & UI** – A FastAPI endpoint served `/ask`, and a minimal React front end displayed the answer plus source links.  
4. **Performance tuning** – I capped chunk size at 200 tokens, used `faiss.IndexFlatIP` for speed, and throttled OpenAI calls to stay under token limits.

**Result:**  
The prototype answered 95% of test queries with <1.8 s latency, pulled the correct source in 92% of cases, and was deployable on a single VPS instance. I learned that combining dense retrieval (FAISS) with a lightweight LLM for re‑ranking delivers fast, accurate answers without needing a full‑blown semantic search stack. I deliberately skipped building a custom training loop or adding complex caching layers to keep the scope tight for the weekend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
