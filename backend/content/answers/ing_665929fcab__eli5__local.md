---
qid: ing_665929fcab__eli5__local
question: 'Explain: Security Considerations — RFC 8707: Resource Indicators for OAuth
  2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 236
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:23-05:00'
sources: []
---

Imagine you’re a librarian who lets people borrow books (access to resources) but only if they first show a valid library card (OAuth token).  
RFC 8707 adds a new rule: the borrower must also say **which shelf** (resource indicator) the book is on before borrowing.  

Why? Because a single token could be used at many libraries, and some shelves contain very sensitive books. If a thief steals a token, they can’t just open any shelf; they need to know the exact shelf number that the original card was meant for.  
The “resource indicator” is that shelf number—a small piece of text you add to your request. The rule says: *the server must check that the requested shelf matches the one stored with the token, otherwise deny access.*  

So, like a librarian verifying both card and shelf, RFC 8707 protects against token misuse by tying each token to a specific resource location.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
