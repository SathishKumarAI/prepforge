---
qid: ing_454d8ba657__eli5__local
question: 'Explain: Redirection Service — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 282
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:20-05:00'
sources: []
---

**Think of a URL shortener as a tiny post‑office that turns long letters into short postcards and then forwards anyone who opens the postcard to the original address.**

1. **Customer asks for a postcard** – they send us the full “long letter” (the real URL).  
2. **Post‑office creates a unique code** – we pick a short string like `x9B7`. That’s our *short URL*.  
3. **Store mapping** – we keep a database that says “`x9B7` → https://verylongwebsite.com/…”.  
4. **Someone opens the postcard** – they click the short link. The server looks up the code, finds the long address, and *redirects* (automatically sends them) to it.

Key parts:  
- **Redirection Service** = the machine that reads the code, finds the real URL, and sends the user there.  
- **Database** = a simple lookup table.  

This design is fast, cheap, and scales because we only store a tiny key for each long address, just like a post‑office keeps one card per postcard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
