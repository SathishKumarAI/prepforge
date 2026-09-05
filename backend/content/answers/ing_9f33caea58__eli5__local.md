---
qid: ing_9f33caea58__eli5__local
question: 'Explain: Short Code Length — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 246
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:49:52-05:00'
sources: []
---

Think of a URL shortener like a tiny library that gives each book (long web address) a super‑short call number so people can find it quickly. The “code” is that call number—just a handful of letters and numbers instead of the whole title.

**How it works:**  
1. **Take the long URL** – this is the book’s full title.  
2. **Turn it into a unique code** – like assigning a new call number, we generate a short string (e.g., “abc123”).  
3. **Store the pair** – in a database we keep one record: *code → original URL*.  
4. **Redirect when used** – when someone visits `short.ly/abc123`, the server looks up that code and sends them to the full address.

Because each code is very short, typing or sharing it is easy, yet the lookup table keeps every book reachable. The trick is ensuring each code is unique (no two books share a number) and keeping the database fast for quick retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
