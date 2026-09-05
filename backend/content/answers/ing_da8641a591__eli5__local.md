---
qid: ing_da8641a591__eli5__local
question: 'Explain: Will a 3B-parameter model run on your users'' phones? Do the maths.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 260
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:21-05:00'
sources: []
---

Think of a phone’s memory like a bookshelf that can hold books.  
A 3‑billion‑parameter model is like a library with **3 billion** little “books.”  
Each parameter (a number that the AI learns) takes about **4 bytes** in a 32‑bit format (the size of a small Post‑it note).  

So, total space needed = 3 × 10⁹ books × 4 bytes/book ≈ **12 × 10⁹ bytes**, or roughly **12 gigabytes**.  
A typical phone has maybe 8–16 GB usable for apps, and that’s already used by the operating system, the camera, games, etc.  
Putting a 12‑GB library on it would leave almost nothing else, plus you’d need extra space to run the model (caching, temporary data).  

In short: a 3‑billion‑parameter AI is too big for most phones today; it’s like trying to put an entire public library onto a single coffee‑shop shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
