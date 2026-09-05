---
qid: ing_975db9ec7c__star__local
question: 'Explain: Problem statement — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 360
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:35:32-05:00'
sources: []
---

**Situation:**  
At my last company we had a legacy knowledge base of over 500 GB of PDF contracts and internal policy documents that sales reps could only search via a slow keyword engine. When new regulations came in, the legal team needed to pull up all relevant clauses within minutes—something the existing system couldn’t handle.

**Task:**  
I was tasked with building an Enterprise Retrieval-Augmented Generation (RAG) assistant that could ingest our document corpus, index it efficiently, and answer natural‑language queries in under two seconds while guaranteeing compliance and data privacy.

**Action:**  
I chose a hybrid approach: first I preprocessed documents with spaCy to extract entities and used Hugging Face’s `sentence-transformers` model (all-MiniLM-L6-v2) to embed each paragraph. These embeddings were stored in Pinecone for low‑latency similarity search. For generation, I fine‑tuned a DistilGPT‑Neo on our internal Q&A pairs and wrapped it with LangChain so the assistant could retrieve top‑k passages, pass them as context, and produce concise answers. To meet privacy needs, all embeddings were hashed and never exposed outside the secure VPC; we also added an audit log layer that tracked every query–response pair.

**Result:**  
The RAG system cut search time from 45 seconds to <1.8 seconds on average, increased answer accuracy (BLEU score) by 32%, and reduced legal review cycles by 60% per month. I learned how embedding choice, retrieval latency, and fine‑tuning balance directly impact enterprise AI reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
