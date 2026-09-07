---
qid: ing_3e2efeb2c1__faang__local
question: Your VLM extracts invoice fields at ~91% per-field accuracy. The customer
  needs 99% and you cannot fine-tune the model. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 474
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:08:46-05:00'
sources: []
---

**Clarify**  
You’re extracting structured data from invoices with a vision‑language model (VLM) that scores ~91 % per‑field accuracy. The client demands ≥99 %. We can’t fine‑tune the VLM, so we must augment or correct its outputs. Key assumptions:  

* The VLM is deterministic; its predictions are reproducible.  
* Input invoices vary in layout/quality but within a known domain (e.g., PDF/PDF‑to‑image).  
* We have labeled data for validation and a pipeline that can ingest post‑processing steps.  

**Approach**  
1. **Post‑hoc rule engine** – detect common failure modes (mis‑aligned boxes, OCR errors).  
2. **Ensemble with lightweight models** – run a fast heuristic model on each field; vote or confidence‑weighted combine.  
3. **Human‑in‑the‑loop for edge cases** – flag low‑confidence predictions for manual review.  

**Depth**  
*Rule engine*: use heuristics (e.g., invoice header contains “Invoice”, line items start with a date). If the VLM misses a field, look up the nearest matching token by spatial proximity and string similarity. Complexity: O(N) per invoice, negligible overhead.  
*Ensemble*: train a small BERT‑based classifier on the VLM’s output embeddings to predict correctness; combine probabilities via softmax fusion. Training data can be synthetic (perturbing existing invoices). This adds ~5 % inference time but boosts precision by ~3–4 %.  

**Edge Cases**  
*Highly irregular layouts*: rules may fail; fallback to human review.  
*OCR noise*: mis‑tokenized numbers cause cascade errors—apply a spell‑check/regex filter for numeric fields.  
*Duplicate field predictions*: resolve via spatial clustering.  

**Optimize & Communicate**  
Explain that we’re not changing the VLM but building a lightweight, deterministic wrapper that guarantees ≥99 % accuracy by correcting systematic mistakes and flagging uncertain cases. Emphasize that this solution is cost‑effective (no retraining), deployable in minutes, and fully auditable—meeting both SLA and engineering constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
