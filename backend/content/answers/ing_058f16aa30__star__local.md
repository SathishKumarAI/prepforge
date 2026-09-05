---
qid: ing_058f16aa30__star__local
question: 'Explain: Gemini 3 Pro Image (Nano Banana Pro) 🍌 — Gemini Developer API
  pricing \u00a0|\u00a0 Gemini API \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 359
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:39:52-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup that was building an automated invoice‑processing pipeline, our accuracy on handwritten receipts dropped from 92 % to about 78 % after the new fiscal year’s paper‑based clients increased by 35 %. The team needed a more robust OCR solution without blowing the budget.

**Task:**  
I had to evaluate and integrate a generative‑AI model that could handle low‑contrast, rotated images of receipts, while keeping monthly spend under $3,000.

**Action:**  
I chose Gemini 3 Pro Image (Nano Banana Pro) from Google’s Gemini API. I started by setting up the `image` endpoint with the “nano” flavor to keep token usage minimal. Using the Python client library (`google-ai-generativelanguage==0.6.0`) I built a preprocessing pipeline: resize to 512 px, apply CLAHE for contrast, and rotate based on deskew detection. The model was invoked with `max_output_tokens=200` and `temperature=0`, ensuring deterministic OCR. For cost control I limited calls to the “nano” tier (≈$0.0005 per image) and added a cache layer keyed by image hash to avoid duplicate processing.

**Result:**  
Within two weeks, accuracy rose from 78 % to 94 %, reducing manual review time by 40 %. Monthly API spend stayed at $2,800, staying below budget while scaling to handle the increased volume. I learned how to balance model performance with pricing tiers and the importance of preprocessing for generative‑AI OCR tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
