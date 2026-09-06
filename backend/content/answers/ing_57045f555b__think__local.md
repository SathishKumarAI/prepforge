---
qid: ing_57045f555b__think__local
question: 'We send you a take-home: build a RAG service over this corpus, we say roughly
  six hours. What do you do before writing any code?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 508
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:44:59-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Confirm the size of the corpus (GB/number of docs), format (PDFs, HTML, JSON), and access method (local, S3, API).  
- Verify performance expectations: latency targets, query volume, concurrency.  
- Ask about licensing or privacy constraints on the data.  
- Decide on acceptable tools: open‑source only vs. paid LLM APIs, vector DB choices.

**2️⃣ Mental model / framework**  
Use a **three‑layer pipeline**:  
1. *Pre‑processing* – ingest & chunking → embeddings.  
2. *Storage* – vector index + metadata store.  
3. *Retrieval + Generation* – RAG chain (retriever ↔ LLM).  
Map each requirement to these layers.

**3️⃣ Step‑by‑step reasoning**  
- **Data ingestion plan**: choose a chunk size that balances context length & retrieval granularity; decide on overlap strategy.  
- **Embedding strategy**: pick a model (e.g., OpenAI’s text‑embedding‑ada‑002, or local alternatives like Sentence‑Transformers) and estimate cost/time for bulk embedding.  
- **Vector store selection**: evaluate FAISS, Milvus, Pinecone, etc., against size & latency constraints.  
- **Metadata schema**: decide which fields to index (title, date, source).  
- **Retrieval algorithm**: cosine similarity + top‑k, optionally re‑rank with BM25.  
- **LLM selection**: choose a model that fits token budget; plan prompt format and safety filters.  
- **API design**: define endpoints, request/response schemas, authentication, rate limits.

**4️⃣ Common traps to avoid**  
- Ignoring chunk overlap → loss of context in retrieval.  
- Over‑embedding large docs without pruning → waste of compute.  
- Neglecting error handling for missing metadata or corrupted files.  
- Underestimating vector DB memory needs; leading to out‑of‑memory crashes.

**5️⃣ Sanity‑check & verbalize**  
- Sketch a high‑level diagram (data flow).  
- Run a quick prototype on 10 documents: ingest → embed → query.  
- Verify latency meets target.  
- Communicate assumptions, trade‑offs, and a rough timeline before coding starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
