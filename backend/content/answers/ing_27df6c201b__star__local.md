---
qid: ing_27df6c201b__star__local
question: 'Explain: RAG vs Long Context — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 397
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:08-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were launching a chatbot that needed to pull real‑time regulatory documents and internal policy PDFs while answering user queries. The volume of documents grew from 2 k to 25 k in three months, and latency had to stay under 500 ms for every request.

**Task** – I had to decide whether to implement Retrieval‑Augmented Generation (RAG) or a single long‑context model that would ingest all relevant text at once, ensuring the bot remained accurate, fast, and cost‑effective at scale.

**Action** – I benchmarked two pipelines:  
1. **RAG** with an FAISS index over chunk embeddings (512 dim, HNSW), retrieving top‑5 passages per query, then feeding them to a 6B Llama‑2 fine‑tuned on our domain.  
2. **Long Context** using a 32k token GPT‑4o model that concatenated the entire policy set into one prompt.  

I ran A/B tests on 10 k real user queries, measured latency, GPU usage (A100), and F1 scores against a gold standard. RAG kept inference cost ~40% lower and hit 92 % recall vs 78 % for long context; latency stayed <300 ms.

**Result** – We deployed the RAG stack in production, reducing API calls by 70%, cutting GPU hours from 1200 to 720 per day, and improving user satisfaction scores by 15 points. I learned that hybrid retrieval + generation scales far better than monolithic long‑context models when document size explodes, especially under strict latency budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
