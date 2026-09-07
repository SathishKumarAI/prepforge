---
qid: ing_04c2c62379__faang__local
question: 'Explain: Q: Design a RAG system for a financial research platform that
  needs to answer questions about earnings reports containing text, tables, and charts.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 503
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:39-05:00'
sources: []
---

**Clarify**  
We need a Retrieval‑Augmented Generation (RAG) pipeline that can ingest heterogeneous earnings‑report assets—plain text, tabular data, and chart images—and answer user queries in natural language. Assume we have OCR for scanned PDFs, an API to extract tables into CSV/JSON, and a vector store that supports multimodal embeddings. The system must respect privacy (no leaking sensitive data) and provide explanations.

**Approach**  
1. **Pre‑processing** – tokenize text, run OCR on charts, convert tables to tabular embeddings.  
2. **Multimodal embedding** – use a model like CLIP‑finetuned for finance or separate encoders: BERT for text, TabNet for tables, and a vision transformer for charts; concatenate vectors.  
3. **Indexing** – store embeddings in a dense vector DB (FAISS/Elastic) with metadata linking back to source segments.  
4. **Retrieval** – given a query, encode it with the same multimodal encoder, retrieve top‑k relevant chunks across modalities.  
5. **Generation** – feed concatenated retrieved snippets into a LLaMA‑based decoder fine‑tuned on financial Q&A; prompt includes “Explain using tables/charts if available.”  
6. **Post‑processing** – highlight which source (text/table/chart) supported each answer part, embed visual thumbnails or table previews.

**Depth**  
- Retrieval latency <200 ms with 1M vectors: use IVF index + product quantization.  
- Generation uses beam‑search (k=3) for faithfulness; fine‑tune on a curated earnings‑report QA corpus to reduce hallucination.  
- Explainability layer extracts attention weights to map answer segments back to source modality.

**Edge Cases**  
- Ambiguous queries: fall back to broader retrieval or ask clarifying question.  
- Missing charts/tables: system still answers with textual data.  
- OCR errors: confidence thresholds trigger re‑processing.

**Optimize & Communicate**  
Iteratively profile retrieval vs generation; cache frequent queries. Use A/B testing to measure answer accuracy and user satisfaction. Explain trade‑offs (e.g., richer multimodal embeddings increase index size but improve recall). This structured plan balances speed, explainability, and multimodal fidelity—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
