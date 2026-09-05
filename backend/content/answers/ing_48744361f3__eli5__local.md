---
qid: ing_48744361f3__eli5__local
question: The customer's "documents" turn out to be scanned PDFs, Excel exports with
  merged cells, and a 15-year-old SharePoint. The pilot assumed clean text. What do
  you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 279
total_tokens: 464
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:31:52-05:00'
sources: []
---

Think of the data like a recipe book that’s been written on different kinds of paper over many years.  
The pilot wanted a clean, typed‑out copy (plain text), but what you actually got are:  

* **Scanned PDFs** – pages turned into images, just like photos of handwritten recipes.  
* **Excel files with merged cells** – tables where several boxes have been glued together, so the software can’t see each ingredient separately.  
* **A 15‑year‑old SharePoint** – an old filing cabinet that stores documents in many formats and keeps hidden notes (metadata) you didn’t know were there.

What to do?  

1. **Unpack each “paper.”** Use OCR to read the scanned PDFs into text, split merged Excel cells back into individual columns, and export the SharePoint files into a common format.  
2. **Standardise the layout.** Put all data into one consistent table structure (rows for records, columns for fields).  
3. **Clean the mess.** Remove duplicates, fix spelling mistakes, and delete irrelevant metadata.  

Once everything is in a tidy, single spreadsheet or database, the AI can read it accurately—just as a chef would need a clear recipe list before cooking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
