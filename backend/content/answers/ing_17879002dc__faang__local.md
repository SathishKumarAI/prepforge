---
qid: ing_17879002dc__faang__local
question: 'Explain: Schema-constrained extraction — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 516
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:39:21-05:00'
sources: []
---

**Schema‑constrained Extraction – Document Intelligence Pipeline**

| Step | What happens | Why it matters |
|------|--------------|----------------|
| **1️⃣ Clarify** | *Problem:* We need to pull structured data from unstructured docs (invoices, contracts) into a fixed schema. Assume PDFs/Scans, mixed layouts, multilingual text, and that the target schema is known (e.g., invoice number, date, line items). | Sets bounds: input format, output fields, accuracy targets. |
| **2️⃣ Approach** | 1. *Pre‑processing:* OCR → clean text; layout analysis (blocks/columns). <br>2. *Entity recognition:* Use a domain‑specific NER model to tag tokens with field types. <br>3. *Schema enforcement:* Apply rule‑based constraints (e.g., date format, numeric ranges) and a validation step that forces each required field into its slot. <br>4. *Post‑processing:* Resolve ambiguities via context windows or fallback heuristics; output JSON/DB record. | Keeps pipeline modular, allows swapping OCR or NER models without breaking schema logic. |
| **3️⃣ Depth** | • OCR: Tesseract + layout‑aware LSTM → 98 % OCR accuracy.<br>• NER: BiLSTM‑CRF fine‑tuned on 10k labeled invoices → F1≈0.94.<br>• Constraint engine: Prolog rules for cross‑field consistency (e.g., total = sum(line items)).<br>Complexity: O(n) over tokens; memory ~ O(n). | Trade‑off: rule‑based post‑processing adds latency but guarantees schema compliance. |
| **4️⃣ Edge Cases** | • Missing fields → default or “unknown” tags.<br>• Multi‑page docs → stitch pages before extraction.<br>• Non‑standard layouts → fallback to unsupervised layout clustering.<br>Testing: unit tests on synthetic PDFs, integration test with 1k real invoices. |
| **5️⃣ Optimize & Communicate** | • Cache OCR results for repeated runs.<br>• Parallelize page processing with thread pool.<br>Explain to interviewers: “We designed a pipeline that separates concerns—OCR, NER, schema enforcement—to achieve high precision while remaining extensible.” | Highlights structured thinking, communication, and depth expected at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
