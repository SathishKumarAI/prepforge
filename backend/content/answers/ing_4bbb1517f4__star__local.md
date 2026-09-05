---
qid: ing_4bbb1517f4__star__local
question: 'Why Treat a PDF as an Image? — Zero-Shot Local Document Parsing with Gemma
  4: Treating PDFs as Images'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 339
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:37-05:00'
sources: []
---

**Situation:**  
At a fintech startup we had to extract structured data from quarterly reports that were only available as scanned PDFs. The documents varied in layout—tables, footnotes, and handwritten signatures—and our existing OCR pipeline was choking on the mixed content.

**Task:**  
I needed to build an end‑to‑end system that could read any PDF without manual template creation, returning clean JSON for downstream analytics, all within a 3‑week sprint.

**Action:**  
Instead of parsing PDFs with low‑level libraries, I treated each page as a raster image and fed it into Gemma 4’s zero‑shot vision–language model. By providing a concise prompt like “Extract the balance sheet table,” the model understood layout semantics directly from pixel data. I wrapped this in a microservice that first converted PDF pages to 300 dpi PNGs, then streamed them to Gemma via its REST API, and finally post‑processed the JSON output with a lightweight schema validator. This approach eliminated the need for custom OCR or table‑detection code.

**Result:**  
Accuracy jumped from ~65% (handcrafted OCR) to 92% F1 on our test set in just 10 days. Processing time per document fell by 40%, and we saved $3,000/month in licensing costs. I learned that treating PDFs as images lets powerful multimodal models handle layout variability out of the box, dramatically simplifying pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
