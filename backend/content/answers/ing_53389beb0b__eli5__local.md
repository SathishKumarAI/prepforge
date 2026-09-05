---
qid: ing_53389beb0b__eli5__local
question: 'Explain: Core APIs — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 252
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:48:49-05:00'
sources: []
---

Imagine a post office that turns long, confusing addresses into tiny, easy‑to‑remember codes—like “abc123” instead of “123 Main Street, Springfield, IL, 62704.”  
In this system the **core APIs** are the post office’s front desk:

* **Create Short URL (POST /shorten)** – you hand over a long link; the server gives back a short code.  
* **Redirect (GET /{code})** – someone types the short code into their browser; the server looks up the original address and sends them there.  
* **Delete/Update (DELETE/PUT /{code})** – if you want to retire or change a link, you call these.  

Behind the scenes, the service stores each pair in a fast key‑value store (like a tiny lookup table) so that a single database read can fetch the full URL for any code. This simple set of APIs lets you build, test, and explain a URL shortener quickly—exactly what interviewers expect when they ask about system design fundamentals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
