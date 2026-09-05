---
qid: vq_fb746a6890__star__local
question: Kind of COMMENT statements placed within SQL statements ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 392
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:56-05:00'
sources: []
---

**Situation**  
I was tasked with refactoring a legacy sales reporting stored procedure that had been maintained for years in a production database at a retail chain. The code was littered with ad‑hoc comments—half‑written notes, commented-out lines, and SQL‐style `/* … */` blocks that spanned entire sections without clear purpose. This made debugging the nightly batch job difficult; every time we added a new column, developers had to sift through comment noise.

**Task**  
Clean up the procedure’s documentation so that each logical block was self‑explanatory, remove dead code, and ensure any future changes could be understood by a junior engineer in less than five minutes.

**Action**  
I first identified all `/* … */` multi‑line comments and converted them into concise single‑line `--` statements at the start of each section. For long explanatory notes I kept block comments but limited them to 3–4 lines and added a brief heading (`/* #CALC_TOTALS */`). I also used `PRINT` statements with clear tags for debugging, and added inline comments next to complex joins (`-- join on customer_id to filter active customers`). Finally, I updated the header comment block with versioning info and a short change log.

**Result**  
The refactored procedure ran 12 % faster due to removal of commented‑out code, and new developers reported a 40 % reduction in onboarding time. The clean comment style also helped catch a hidden NULL‑handling bug that had been causing incorrect totals during peak sales periods.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
