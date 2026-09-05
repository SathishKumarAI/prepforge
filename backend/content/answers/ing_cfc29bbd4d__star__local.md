---
qid: ing_cfc29bbd4d__star__local
question: 'Explain: Design the evaluation for a document understanding feature: users
  upload invoices and scanned forms and ask questions about them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 382
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:37-05:00'
sources: []
---

**Situation:**  
When I joined my previous company, we were building an AI‑powered invoice assistant for our finance platform. Users could upload PDFs or scans of invoices and then ask natural‑language questions like “What’s the total amount?” or “Did this vendor bill us twice?” The feature needed to be accurate, fast, and handle noisy OCR.

**Task:**  
My job was to design a comprehensive evaluation framework that would validate both the document extraction accuracy and the question answering performance under real‑world conditions. I had to cover diverse invoice formats, languages, and image quality while keeping latency below 2 seconds per query.

**Action:**  
I built a multi‑stage pipeline: first, I collected a benchmark dataset of 5,000 invoices annotated with field labels (date, amount, vendor) using Prodigy. For OCR, I compared Tesseract, Google Vision, and an open‑source model; I chose a hybrid that ran Tesseract locally for speed and passed low‑confidence text to Vision for correction. Next, I trained a Transformer‑based QA model fine‑tuned on the extracted fields. To evaluate, I defined metrics: F1 for extraction, exact match (EM) for QA, and overall latency. I set up an A/B test harness that injected synthetic noise (blur, skew) to simulate real uploads and used CI/CD pipelines with pytest for regression testing.

**Result:**  
After three sprints, the system achieved 94 % F1 on extraction and 87 % EM on QA, cutting average latency from 3.8 s to 1.6 s. User satisfaction scores rose by 18 %. I learned that a layered OCR approach plus continuous metric monitoring is key for robust document understanding at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
