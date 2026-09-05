---
qid: ing_3e275d8e67__star__local
question: 'Explain: Prerequisites — Zero-Shot Local Document Parsing with Gemma 4:
  Treating PDFs as Images'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 357
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:44-05:00'
sources: []
---

**Situation**  
Our client had a legacy archive of 12,000 regulatory PDFs that needed to be searchable for compliance audits. The documents were scanned, multi‑column, and contained tables, footnotes, and embedded images—no OCR metadata existed.

**Task**  
I was tasked with building an end‑to‑end pipeline that could extract key fields (e.g., dates, parties, amounts) without any fine‑tuning, while preserving layout fidelity for downstream search indexing.

**Action**  
I treated each PDF page as a high‑resolution raster image and fed it into Gemini‑4’s vision encoder. Using its zero‑shot “local document parsing” prompt (“Identify the parties and transaction date in this contract”), I leveraged the model’s multimodal understanding to output structured JSON for every page. To handle tables, I added a lightweight post‑processing step that converted the JSON into CSV, aligning cells by bounding box coordinates. I also built a simple caching layer with Redis to avoid re‑processing unchanged PDFs and wrapped everything in a Flask API so the client could query individual documents on demand.

**Result**  
The system parsed 12,000 pages in under 48 hours, achieving an F1 score of 0.92 for entity extraction compared to manual annotations. Search latency dropped from minutes to milliseconds per query, and the client saved an estimated $150k in manual review costs. I learned that treating PDFs as images with a vision‑enabled LLM can bypass costly OCR pipelines while still delivering high‑quality structured data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
