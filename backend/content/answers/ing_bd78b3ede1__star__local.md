---
qid: ing_bd78b3ede1__star__local
question: 'Q: How do you handle a 500-page PDF with Vision LLMs efficiently?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 363
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:55-05:00'
sources: []
---

**Situation** – In a client‑onboarding project I received a 500‑page regulatory compliance PDF that the legal team needed summarized and searchable within two weeks for a due‑diligence audit.

**Task** – My goal was to ingest the entire document, generate concise section summaries, and enable instant question answering via a Vision‑LLM without exceeding GPU memory limits or breaching latency targets (< 2 s per query).

**Action** – I first pre‑processed the PDF with `pdfminer.six` to extract raw text and page images. Then I split it into 1‑page chunks, generating embeddings for each chunk using a fine‑tuned CLIP model (512‑dim vectors) stored in an FAISS index. For summarization I used GPT‑4o Vision in a batched pipeline: every ten pages were sent as a single prompt with the images and text, producing 200‑word summaries. I cached these outputs locally to avoid re‑generation. Finally, I built a retrieval‑augmented QA layer that retrieves the top‑3 relevant chunks via cosine similarity, then passes them to GPT‑4o Vision for a concise answer.

**Result** – The pipeline processed the entire PDF in under 30 minutes on a single RTX 4090. Query latency averaged 1.8 s, and the client reported a 45 % reduction in manual review time. I learned that combining chunked embeddings with batched Vision prompts balances memory usage while preserving context fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
