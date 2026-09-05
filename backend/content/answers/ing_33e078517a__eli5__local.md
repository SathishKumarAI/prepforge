---
qid: ing_33e078517a__eli5__local
question: 'Explain: Index Lifecycle Management (ILM)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 231
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:58:12-05:00'
sources: []
---

Think of an index as a **library shelf** that holds books (your data).  
When the shelf first opens, you want to keep every new book on it so you can read them right away—this is the *hot* phase. After a while the books become less useful; instead of throwing them away, you move the shelf to a quieter room where people still check out older titles—the *warm* phase.  
Eventually the books are rarely borrowed; you store them in a **cold storage** (cloud or tape) that costs little but is slower to access—this is the *cold* phase.  
Finally, when a book is no longer needed at all, you discard it—this is the *delete* phase.  

Index Lifecycle Management automates these moves: it decides when an index should shift from hot to warm to cold and finally be deleted, just like a librarian deciding where each shelf belongs based on how often its books are read.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
