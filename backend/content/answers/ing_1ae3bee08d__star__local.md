---
qid: ing_1ae3bee08d__star__local
question: 'Explain: Handling 200-Page Documents — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 317
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:23:18-05:00'
sources: []
---

**Situation** – In a client‑facing project for a law firm, we had to ingest and analyze a 200‑page PDF contract that contained nested clauses, footnotes, and embedded images. The existing workflow involved manual review, which took over five days per document.

**Task** – My goal was to automate extraction of key clauses (e.g., indemnification, termination), classify risk levels, and deliver searchable insights within 24 hours while preserving confidentiality.

**Action** – I built a pipeline using Tesseract OCR for image‑heavy pages, then passed the text through spaCy with custom NER models fine‑tuned on legal terminology. To handle long context, I split the document into overlapping chunks of 512 tokens and encoded them with Sentence-BERT to create vector embeddings stored in an FAISS index. A lightweight Flask API exposed a search endpoint that returned the most relevant clause snippets ranked by cosine similarity. For compliance, all data stayed encrypted at rest on Azure Key Vault.

**Result** – The system reduced processing time from five days to under 24 hours, achieving 93% precision/recall on clause extraction and cutting manual review effort by 80%. I learned the importance of chunking for transformer limits and that embedding‑based search dramatically improves relevance in legal document intelligence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
