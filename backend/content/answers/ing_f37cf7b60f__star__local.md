---
qid: ing_f37cf7b60f__star__local
question: 'Explain: will retain the integrity of the document'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 286
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:51-05:00'
sources: []
---

**Situation:** At my previous company, we were launching a compliance‑tracking platform that automatically scanned legal documents for policy violations. A client flagged that the system was altering formatting and metadata, compromising the original documents’ integrity.

**Task:** I had to redesign the ingestion pipeline so that every uploaded PDF or DOCX remained unchanged while still enabling full-text analysis, all within the same 24‑hour processing window.

**Action:** First, I introduced a two‑stage architecture: (1) an immutable “blob” storage layer that stored raw files with cryptographic hashes; (2) a lightweight OCR and NLP microservice that read from the blob without writing back. We used Apache Tika for metadata extraction and spaCy for entity recognition, but we kept the original bytes untouched. I added a checksum verification step after each transformation to ensure no accidental modifications occurred. Finally, I built a dashboard showing hash comparisons so auditors could see the exact state of the document before and after processing.

**Result:** The new pipeline cut processing time by 15% while guaranteeing 100 % file integrity—no client reported formatting changes. It also reduced downstream support tickets by 30 %. I learned that preserving raw data is as critical as extracting insights, especially in regulated industries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
