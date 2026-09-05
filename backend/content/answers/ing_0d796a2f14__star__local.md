---
qid: ing_0d796a2f14__star__local
question: 'Explain: Vision-LLM for OCR Instead of Traditional OCR'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 372
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:34-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building an invoice‑processing pipeline for a mid‑size retailer that handled ~35,000 documents per month. Our legacy OCR stack (Tesseract + custom regexes) had a 12 % error rate on key fields and took ~3 s per PDF, choking our nightly batch jobs.

**Task:**  
I was tasked to cut the error rate below 5 %, reduce processing time by at least 50 %, and make the system resilient to new invoice formats without manual rule updates.

**Action:**  
I replaced the OCR engine with a Vision‑Large Language Model (Vision‑LLM) pipeline. First, I used a lightweight ViT backbone to embed each page, then passed the embeddings to an LLM fine‑tuned on our invoice schema. The model directly outputs structured JSON for line items, totals, and vendor data. To speed inference, I distilled the vision encoder to a MobileViT and cached embeddings for recurring vendors. I also added a confidence scoring layer that triggers a fallback to Tesseract only when the LLM confidence drops below 0.8.

**Result:**  
The new pipeline cut error rates from 12 % to 3 %, slashed per‑document latency to 1.2 s (a 60 % speedup), and eliminated manual rule maintenance. Quarterly, we saved $18k in labor costs and improved our customer satisfaction score by 8 points. I learned that treating OCR as a perception + language task can dramatically simplify downstream logic and boost robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
