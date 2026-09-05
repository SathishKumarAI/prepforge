---
qid: ing_38c149ed6e__star__local
question: 'Explain: Gemma 4 — Zero-Shot Local Document Parsing with Gemma 4: Treating
  PDFs as Images'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 376
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:06-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building an internal knowledge‑base search for a legal firm that had over 200,000 PDF contracts stored in a flat file system. The existing full‑text extraction pipeline was brittle – OCR errors and formatting quirks caused 30 % of the documents to be unreadable, leading to poor search relevance.

**Task**  
I needed to create a zero‑shot parsing solution that could reliably extract structured data (party names, effective dates, key clauses) from any PDF without retraining on every new contract type, while keeping latency under 2 s per document for the live dashboard.

**Action**  
I leveraged Gemma 4’s image‑to‑text capabilities: first, I rasterised each PDF page to high‑resolution PNGs (300 dpi) using Ghostscript. Then I fed these images into a fine‑tuned Gemma 4 model that had been prompted with a concise instruction set (“Extract the parties, dates, and termination clause from this contract”). The model treats the PDF as an image, so it ignores layout inconsistencies and OCR noise. To speed up inference, I wrapped the model in a FastAPI microservice behind a Redis cache for frequently accessed documents. For post‑processing, I used spaCy to normalise entity types and store them in Elasticsearch.

**Result**  
Accuracy on a held‑out test set rose from 68 % to 92 % F1 for key entities. Search relevance scores improved by 15 %, and the average processing time dropped to 1.3 s per document. I learned that treating PDFs as images with a zero‑shot model can dramatically simplify pipelines, but careful rasterisation and post‑processing are still essential for production quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
