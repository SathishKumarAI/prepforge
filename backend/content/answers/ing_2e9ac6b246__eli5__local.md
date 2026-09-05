---
qid: ing_2e9ac6b246__eli5__local
question: 'Explain: 4.1 Requirement 1: URL Shortening — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 259
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:49:36-05:00'
sources: []
---

**Think of a URL shortener like a postal service that turns long, confusing addresses into tiny, memorable “post‑codes.”**

When someone wants to send a letter (a web page), they give the full street address (the long URL). The postal office (our system) creates a unique, short code—like “xyz123”—and records in a map table: `xyz123 → https://verylongwebsite.com/some/huge/path`. When a user clicks that short link, the postal office looks up the code in its map and forwards them to the original address.

**Key parts**

- **Short code (key):** A brief string that uniquely identifies one long URL.  
- **Lookup table:** Stores the key‑URL pairs so the system can reverse‑map quickly.  
- **Redirection service:** Receives a short link, finds the long URL, and sends an HTTP redirect.

By treating URLs like letters and codes like post‑codes, we keep storage small, lookups fast, and users happy with neat links.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
