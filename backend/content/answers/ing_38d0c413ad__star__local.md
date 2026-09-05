---
qid: ing_38d0c413ad__star__local
question: 'Explain: F3: Receipt-PDF IPI — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 343
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:21-05:00'
sources: []
---

**Situation:** At my previous firm we launched an AI‑powered invoicing platform, but our users complained that the system struggled with poorly scanned receipts—low OCR accuracy and missing line items. The product manager set a goal: reduce manual data entry time by 50% for PDF receipts within three months.

**Task:** I was tasked to design and deploy a “Computer Use Agent” that could automatically extract structured purchase information from any receipt PDF, regardless of layout or image quality, using our existing IPI (Intelligent Processing Interface) stack.

**Action:** First, I built an OCR pipeline with Tesseract augmented by a custom post‑processing script that normalizes font anomalies. Then I integrated a rule‑based entity recognizer—leveraging spaCy and a small BERT fine‑tuned on receipt samples—to pull out vendor names, dates, totals, and tax lines. To handle layout variance, I added a lightweight computer vision module (OpenCV) to detect tables and column boundaries before feeding the data into our IPI workflow. Finally, I wrapped everything in an asynchronous worker that monitors a queue of uploaded PDFs and returns JSON payloads via REST.

**Result:** After deployment, OCR accuracy jumped from 68% to 92%, and users reported a 57% reduction in manual entry time—exceeding the target. The project also cut our support tickets related to receipt errors by 35%. I learned that combining classical CV tricks with modern NLP yields robust solutions for noisy document data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
