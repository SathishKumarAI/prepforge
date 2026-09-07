---
qid: ing_a92ef7c7c1__faang__local
question: 'Explain: F8: Receipt-image content extraction failures'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 443
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:17:44-05:00'
sources: []
---

**Clarify**  
The problem is that the F8 (Facebook’s developer conference) demo for extracting text from receipt images fails under real‑world conditions. I’d confirm: *What failure modes are observed?* (OCR errors on low‑contrast photos, rotated receipts, multi‑column layouts). *Which data is available?* (training set of labeled receipts, ground‑truth OCR). *What constraints exist?* (real‑time processing on mobile, privacy compliance).

**Approach**  
1. **Pre‑processing pipeline**: adaptive binarization, deskewing, noise reduction.  
2. **Layout analysis**: use a lightweight CNN to segment header, body, footer and detect columns.  
3. **OCR engine selection**: fine‑tune Tesseract or train a custom CRNN on the receipt dataset.  
4. **Post‑processing heuristics**: regex for dates/prices, spell‑check against product vocabularies, confidence thresholding.

**Depth**  
- Pre‑proc uses O(WH) operations; deskew via Hough transform (O(N log N)).  
- Layout CNN: 10‑layer MobileNetV2 → ~1 M params, <5 ms inference on Snapdragon.  
- OCR CRNN: sequence‑to‑sequence with CTC loss, achieves 94% character accuracy on test set.  
Trade‑offs: heavier models improve accuracy but increase latency; we balance by quantizing weights and pruning.

**Edge Cases**  
- Extremely blurred or overexposed images → fallback to user‑verified manual entry.  
- Receipts in non‑Latin scripts → switch OCR language model.  
- Multi‑currency totals → detect currency symbols before parsing amounts.

**Optimize & Communicate**  
We’ll iterate with A/B testing: measure precision/recall on live traffic, adjust confidence thresholds. I’d explain to interviewers how each component directly addresses a failure mode and how we monitor performance post‑deployment, showcasing end‑to‑end impact on user satisfaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
