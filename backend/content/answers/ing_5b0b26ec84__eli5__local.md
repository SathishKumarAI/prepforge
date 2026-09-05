---
qid: ing_5b0b26ec84__eli5__local
question: 'Explain: High-Level Design — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 267
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:37-05:00'
sources: []
---

Imagine you’re running a tiny library that turns long, fancy book titles into simple, memorable codes—just like how a postal service gives every house a unique ZIP code so mail can find it quickly.

**High‑level pieces**

1. **API Gateway (the front desk)** – receives the long URL and asks for a short one.  
2. **URL Mapper (the catalog)** – generates a short key, stores “key → original URL” in a fast lookup table (think of a digital index).  
3. **Redirect Service (the mail sorter)** – when someone clicks the short link, it looks up the key and sends the visitor to the stored long address.  

**Key terms**

- *Stateless*: each request is independent; no memory of past visits.  
- *Scalable*: add more servers so many people can use the service at once.  
- *Cache*: a quick‑access shelf that keeps recently used keys in mind.

With this simple “library” design, you give anyone a tiny code that points to any long web address, just as ZIP codes guide mail to its destination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
