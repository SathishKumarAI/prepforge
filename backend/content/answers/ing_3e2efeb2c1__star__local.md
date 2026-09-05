---
qid: ing_3e2efeb2c1__star__local
question: Your VLM extracts invoice fields at ~91% per-field accuracy. The customer
  needs 99% and you cannot fine-tune the model. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 388
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:50-05:00'
sources: []
---

**Situation:** In a recent deployment for a mid‑size logistics firm, our vision‑language model was extracting key invoice fields—invoice number, date, total amount—from scanned PDFs with about **91% per‑field accuracy**. The client’s audit team required **99% accuracy** before they could automate downstream accounting processes.

**Task:** I needed to bridge that 8‑point gap without fine‑tuning the core model, which was locked due to licensing constraints. My goal was to reduce false positives/negatives through a post‑processing pipeline and smart fallback strategies while keeping latency under 200 ms per document.

**Action:**  
1. Built a rule‑based validator that cross‑checked extracted values against known business rules (e.g., invoice numbers must match the “INV‑YYYY‑NNNN” pattern, totals must be numeric within ±5% of line items).  
2. Integrated an OCR confidence score threshold; if the model’s confidence fell below 0.85, we routed the field to a lightweight secondary OCR engine (Tesseract) for re‑extraction.  
3. Added a small contextual language model (distilled BERT) to flag anomalies in date formats and currency symbols.  
4. Implemented an asynchronous “human‑in‑the‑loop” queue for any field that still failed validation, with an auto‑tagging system to feed back into future training cycles.

**Result:** The combined pipeline raised per‑field accuracy from **91% to 98.7%**, and after a brief manual review cycle we achieved the client’s **99% target** on production data. I learned that layered validation and confidence gating can compensate for model limitations, and that investing in lightweight fallback engines pays off when fine‑tuning isn’t an option.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
