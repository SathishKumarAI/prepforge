---
qid: ing_19a9d7aab4__eli5__local
question: 'Explain: Lessons learned — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 264
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:16:58-05:00'
sources: []
---

Imagine a tiny lemonade stand that suddenly becomes the most popular spot in town, serving 50 million cups every day. The stand can’t keep up if it still uses the same old wooden table and hand‑cranked pitcher. Canva’s media team faced the same problem when its design platform grew from a handful of users to millions uploading photos, videos, and graphics daily.

**Scaling is like upgrading the lemonade stand:**

* **Storage (the fridge)** – They moved from a single hard drive to a network of distributed servers that can hold all the files safely.
* **Delivery (the pitcher)** – Instead of one slow pipeline, they built many parallel “upload lanes” so users never wait for their file to be accepted.
* **Search (the menu board)** – They added powerful indexing so every image can be found instantly, no matter how many uploads happen.

By treating each upload as a tiny transaction that must be stored, replicated, and served quickly—just like a lemonade stand that needs a bigger fridge, more pitchers, and a clear menu—Canva turned a simple design tool into a global media engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
