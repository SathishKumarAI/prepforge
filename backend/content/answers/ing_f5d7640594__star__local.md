---
qid: ing_f5d7640594__star__local
question: 'Explain: PDF/Layout Chunking — Chunking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 339
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:40:03-05:00'
sources: []
---

**Situation:**  
During a contract with a legal tech firm, we had to extract structured data from thousands of court‑order PDFs—each document varied in formatting, page orientation, and contained embedded tables. The existing line‑by‑line OCR pipeline was choking on long text blocks and lost context, yielding only 45 % accurate entity extraction.

**Task:**  
Redesign the preprocessing step so that the downstream NLP model could reliably parse paragraphs, headings, and tables while keeping processing time under an hour per batch of 5,000 PDFs.

**Action:**  
I introduced a two‑tier chunking strategy. First, I used **pdfplumber** to build a layout graph: bounding boxes were clustered by proximity and font size, yielding semantic blocks (headings, body text, tables). Second, for each block I applied a sliding‑window token chunker with overlap, limiting chunks to 512 tokens but preserving cross‑block context. I added a lightweight rule‑based filter that merged adjacent heading‑and‑paragraph pairs when the heading font size exceeded the paragraph’s by >20 %. The pipeline was wrapped in Dask for parallel execution across GPU workers.

**Result:**  
Accuracy of entity extraction jumped from 45 % to 87 %, and total processing time dropped to 35 minutes per batch. I learned that respecting document layout semantics dramatically reduces noise for language models, and that a hybrid rule‑based + token chunk approach balances precision with scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
