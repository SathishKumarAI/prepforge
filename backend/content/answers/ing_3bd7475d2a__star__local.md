---
qid: ing_3bd7475d2a__star__local
question: 'Explain: Long-document path (contracts) — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 367
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:20-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with automating the review of supplier contracts that averaged 120 pages each. The legal team spent weeks manually extracting clauses, and we were losing up to $2 M in potential savings because key terms slipped through.

**Task:**  
Build a scalable “long‑document” pipeline that could ingest, split, index, and retrieve clause‑level information with high accuracy, while keeping latency under 3 seconds for end users.

**Action:**  
I designed a multi‑stage workflow: first, I used **Apache Tika** to parse PDFs into clean text. Next, I applied a custom **sentence‑tokenizer + BERT‑based chunking model** to split the document into semantically coherent 512‑token segments, preserving clause boundaries. For indexing, I leveraged **Elasticsearch with dense vector fields**, storing embeddings from a fine‑tuned **SBERT** model. To speed up retrieval, I implemented **FAISS GPU index** on our server farm and added a caching layer in Redis for frequent queries. Finally, I built an API gateway in FastAPI that exposed a simple “search clause” endpoint to the legal UI.

**Result:**  
The pipeline cut contract review time from 5 days to under 3 hours per document, yielding an estimated $1.8 M annual cost saving. Accuracy of clause extraction improved from 68% to 94%, and user satisfaction scores rose by 37%. I learned that careful chunking and vector indexing are critical for long‑document understanding, and that a small caching layer can dramatically reduce perceived latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
