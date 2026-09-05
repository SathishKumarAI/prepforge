---
qid: ing_d4bfe2f7cd__eli5__local
question: 'Explain: Assumptions: — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 287
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:11:54-05:00'
sources: []
---

Think of a URL shortener like a **tiny post office in a busy city**.

1. **Address book (database)** – The “post office” keeps a list: each long address (original URL) is paired with a unique, short code (the shortened link).  
2. **Postcard label (hash or counter)** – When someone asks for a new short link, the post office generates a short code by taking the next number in its ledger and turning it into an alphanumeric string (like “abc123”). This is fast and guarantees uniqueness.  
3. **Mailroom (API server)** – People send long URLs to the mailroom; it writes the pair to the address book and returns the label. When someone clicks a short link, the mailroom looks up that label in the address book and forwards them to the original long address.  
4. **Security & spam guard** – The post office checks if a request is too frequent or suspicious before issuing a new code, just like a real post office verifies identity.

This simple model shows how a URL shortener stores mappings, generates unique codes, handles traffic, and protects against abuse—all the key ideas you’d discuss in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
