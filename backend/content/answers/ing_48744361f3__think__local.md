---
qid: ing_48744361f3__think__local
question: The customer's "documents" turn out to be scanned PDFs, Excel exports with
  merged cells, and a 15-year-old SharePoint. The pilot assumed clean text. What do
  you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 437
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:14:44-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- Confirm what “documents” actually are (scanned PDFs → OCR needed, Excel with merged cells → data flattening required, SharePoint → access/format issues).  
- Verify the pilot’s assumption: it expected raw, machine‑readable text.  
- Ask: What is the ultimate goal? Is it to extract structured data, feed into a model, or just to read?

**2️⃣ Adopt a “data‑quality first” framework**  
- *Data source → format* → *pre‑processing pipeline* → *validation*.  
- Treat each file type as a separate input stream that must be normalized before fusion.

**3️⃣ Step‑by‑step reasoning**  
1. **Scan PDFs**: run OCR (Tesseract, Azure OCR) and post‑process confidence scores; flag low‑confidence areas for manual review.  
2. **Excel with merged cells**: unmerge, pivot to long format, propagate header values into rows.  
3. **SharePoint**: authenticate, download metadata + content, handle version history if needed.  
4. Build a unified schema (e.g., JSON or Parquet) that all streams feed into.  
5. Validate by sampling and comparing against known ground truth.

**4️⃣ Common pitfalls to avoid**  
- Assuming OCR output is perfect; neglecting manual spot‑checks.  
- Ignoring merged cells leading to lost data.  
- Overlooking SharePoint permissions or stale links.  
- Failing to version the preprocessing steps so you can reproduce results.

**5️⃣ Sanity‑check & communicate**  
- Create a small demo notebook that ingests one file of each type, shows raw → processed output.  
- Present metrics: OCR accuracy %, rows recovered from Excel, number of SharePoint items retrieved.  
- Summarize the cost/benefit trade‑off: additional preprocessing time vs downstream model performance.

By walking through these steps you can turn messy legacy data into a clean, usable input for any AI pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
