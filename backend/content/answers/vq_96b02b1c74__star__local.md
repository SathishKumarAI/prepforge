---
qid: vq_96b02b1c74__star__local
question: WHAT ARE THE DIFFERENT STRING FUNCTIONS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 302
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:30-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with cleaning up a legacy database that stored product names in a mixed‑case, hyphenated format (e.g., “pro-duct-001”). The marketing team needed a clean, all‑lowercase list for a new analytics dashboard.  

**Task:**  
I had to standardize the field across 150 k rows, preserve the original values for audit, and ensure the process ran in under two hours on our production server.

**Action:**  
Using SQL Server I leveraged several string functions:  
- `LOWER()` to convert to lowercase;  
- `REPLACE(col, '-', '')` to strip hyphens;  
- `LTRIM()/RTRIM()` to trim any stray spaces;  
- `SUBSTRING()` combined with `CHARINDEX()` to isolate the numeric suffix for a new “sku” column.  
I wrapped these in a single UPDATE statement inside a transaction and added an index on the cleaned column to speed subsequent queries.  

**Result:**  
The update completed in 1 h 45 min, processing all rows without errors. The new table now supports fast full‑text searches, reducing dashboard load time by 35%. I learned how combining basic string functions can solve complex data hygiene problems efficiently and safely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
