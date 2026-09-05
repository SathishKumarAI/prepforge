---
qid: ing_04c2c62379__fp__local
question: 'Explain: Q: Design a RAG system for a financial research platform that
  needs to answer questions about earnings reports containing text, tables, and charts.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 464
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:15:50-05:00'
sources: []
---

**Why a Retrieval‑Augmented Generation (RAG) is essential**

Financial analysts need *exact* figures, not paraphrased summaries. A pure LLM would hallucinate or mix numbers from different reports because its internal weights lack the up‑to‑date, report‑specific evidence required for regulatory compliance. RAG supplies that evidence by indexing every token of every earnings document (text, tables, SVG charts) and retrieving only the few passages that match a query before generation.

**How to build it**

1. **Document ingestion** – Convert PDFs/HTML into structured JSON:  
   *Text blocks* → plain tokens;  
   *Tables* → row‑column matrices;  
   *Charts* → vectorized SVG paths with captions.  

2. **Vectorization** – Use a domain‑tuned encoder (e.g., finetuned DeBERTa) to embed each block. For tables, flatten rows and columns into a single token sequence so the model learns positional relationships.

3. **Indexing** – Store embeddings in an approximate nearest neighbor index (FAISS). Tag each vector with metadata (`report_id`, `section_type`).

4. **Retrieval pipeline** –  
   * Encode the user query.*  
   * Retrieve top‑k blocks per section type (e.g., 3 text, 2 tables, 1 chart caption).  
   * Rank by semantic similarity + metadata relevance (e.g., most recent quarter).

5. **Generation** – Feed the concatenated retrieved context to a lightweight LLM fine‑tuned for finance. The prompt explicitly instructs: “Use only the provided evidence; cite table rows and chart captions.”

6. **Verification layer** – Post‑generation, run an arithmetic checker that parses numbers from tables/charts and validates computed answers against the text.

**Non‑obvious insight**

Treat *charts* as first‑class textual artifacts: vectorize their SVG path data together with captions so the model can “read” a line graph as a sequence of points. This preserves the geometric meaning (trend, peaks) that pure text extraction would lose, enabling accurate inference about earnings trends directly from the chart.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
