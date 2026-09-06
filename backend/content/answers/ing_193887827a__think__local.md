---
qid: ing_193887827a__think__local
question: 'Explain: Redirection messages — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 408
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:24:07-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
- The user wants an explanation of *“Redirection messages”* as defined by HTTP status codes, referencing MDN documentation.  
- Assume they know basic HTTP but need a concise overview of 3xx codes and why/when they’re used.  

**2. Adopt a mental model**  
- Treat each status‑code group (1xx–5xx) as a layer; focus on the *Redirection* layer (3xx).  
- Map each code to: purpose, typical headers involved, and common use cases.  

**3. Step‑by‑step reasoning**  
  1. Start with the definition of a redirection: server instructs client to fetch a resource elsewhere.  
  2. List the primary codes (300–307, 308) and describe their semantics: multiple choices, moved permanently/temporarily, see other, redirect with method preservation.  
  3. Explain accompanying headers (`Location`, `Refresh`, `Cache-Control`).  
  4. Provide practical examples (e.g., website URL changes, API endpoint migration).  
  5. Mention edge cases (status 305 is deprecated; 306 unused) to avoid confusion.  

**4. Common traps & wrong turns**  
- Mixing up *Moved Permanently* vs *Found*: the former should change bookmarks, the latter does not.  
- Forgetting that 307/308 preserve HTTP method; many developers assume GET conversion.  
- Overlooking that browsers may cache redirects unless `Cache-Control: no-store` is set.  

**5. Sanity‑check & communicate**  
- Verify each code’s official RFC (7231) matches the MDN description.  
- Use a table or diagram for quick reference, then elaborate with concise paragraphs.  
- Conclude by summarizing the practical impact on developers and clients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
