---
qid: ing_716bff3676__star__local
question: How would you reliably extract tables and charts from documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 385
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:12-05:00'
sources: []
---

**Situation:**  
In a contract‑review automation project at my last firm, we received thousands of scanned PDFs and Office docs daily. The legal team needed to pull out all embedded tables and bar charts for compliance checks, but our initial OCR pipeline was returning fragmented data that made downstream analytics impossible.

**Task:**  
I had to design a robust extraction system that could reliably detect and reconstruct both tabular and chart information with minimal manual intervention, achieving at least 90 % accuracy on a mixed‑format dataset within two weeks.

**Action:**  
First, I integrated Tesseract OCR with a custom pre‑processing step: adaptive thresholding and deskewing to improve text clarity. For tables, I used the open‑source **Camelot** library, switching to its “stream” mode for PDFs with complex borders, then applied a heuristic post‑processor that merged split cells based on column alignment and font consistency.  
For charts, I combined **OpenCV** contour detection with a lightweight CNN (trained on 1,200 chart samples) to classify chart types (bar, line, pie). Once identified, I extracted the axis labels via OCR and used a simple linear regression model to map pixel positions back to data values. Finally, all outputs were serialized into a JSON schema that fed directly into our analytics engine.

**Result:**  
The new pipeline reduced extraction errors from 35 % to under 5 %, lifted overall accuracy to 93 %, and cut manual review time by 70 %. I learned that hybrid approaches—combining rule‑based heuristics with lightweight ML—often outperform pure deep learning in document‑intelligence tasks, especially when the dataset is small but diverse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
