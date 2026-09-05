---
qid: ing_3e2efeb2c1__think__local
question: Your VLM extracts invoice fields at ~91% per-field accuracy. The customer
  needs 99% and you cannot fine-tune the model. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 402
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:51:55-05:00'
sources: []
---

**1️⃣ Clarify constraints & goals**  
   - *What exactly is “99%”?* Is it overall accuracy or per‑field?  
   - *Why can’t we fine‑tune?* (Deployment limits, regulatory lock‑in, cost).  
   - *Which fields matter most?* Prioritize high‑impact ones.

**2️⃣ Adopt a layered error‑reduction framework**  
   1. **Pre‑processing**: clean OCR input (denoise, deskew, normalize).  
   2. **Rule‑based augmentation**: add heuristics for typical errors (e.g., date formats, invoice number patterns).  
   3. **Post‑processing validation**: cross‑check extracted values against business rules (checksum, totals consistency).

**3️⃣ Step‑by‑step reasoning**  
   - Run the VLM on a representative sample → quantify error distribution per field.  
   - Identify “hot spots” (fields with lowest accuracy).  
   - For each hot spot, design targeted rule or statistical correction.  
   - Iterate: apply corrections, re‑evaluate until 99% target reached.

**4️⃣ Avoid common pitfalls**  
   - *Over‑engineering*: adding too many rules can introduce new errors.  
   - *Blindly trusting post‑processing*: it may mask underlying extraction issues.  
   - *Ignoring variance*: performance on the sample might not generalize to all invoices.

**5️⃣ Sanity‑check & communicate**  
   - Validate improvements on a held‑out set and in production monitoring.  
   - Present results as a “rule‑+model” stack: show before/after per‑field metrics, explain each rule’s rationale, and outline fallback for remaining errors (e.g., human review queue).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
