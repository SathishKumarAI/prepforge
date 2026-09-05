---
qid: ing_9bc3bf0d86__star__local
question: Design a document-extraction system. When do you use an OCR pipeline versus
  sending pages to a VLM?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 300
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:37-05:00'
sources: []
---

**Situation:**  
At my last job we were building a digital filing solution for a law firm that needed to process thousands of court filings per month. The documents came in scanned PDFs, some with handwritten notes and varied layouts.

**Task:**  
I had to decide when to use a traditional OCR pipeline versus leveraging a vision‑language model (VLM) to extract structured data like case numbers, dates, and parties.

**Action:**  
First, I profiled the dataset: 70 % were clean, machine‑printed pages; 30 % had mixed fonts or marginalia. For the majority, I set up an OCR stack with Tesseract + a custom post‑processing regex engine that achieved >99 % character accuracy. For the problematic subset, I built a VLM pipeline (CLIP+BLIP) fine‑tuned on our domain, which could understand context and ignore handwriting noise. I added a rule to route documents based on an OCR confidence score; if <85 %, they automatically fell back to the VLM path.

**Result:**  
Processing time dropped from 12 hrs/day to 4 hrs/day, while extraction accuracy improved from 92 % to 97 %. I learned that hybrid routing—using lightweight OCR for clean data and a powerful VLM for noisy cases—offers the best trade‑off between speed, cost, and precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
