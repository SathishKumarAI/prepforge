---
qid: ing_29939dc89a__eli5__local
question: 'Explain: How Booking.com scales AI observability with Arize'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 227
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:41:39-05:00'
sources: []
---

Imagine a huge library where every book is a different travel website feature—search, booking, reviews. The librarians (AI models) must always know how many readers are opening each book and whether they’re happy with the content. **Observability** is like installing smart lights that glow brighter when more people read a page and dim if something feels wrong.

Booking.com uses **Arize** as its “smart lighting system.” It watches every AI model in real time, recording two key things:  
* **Performance metrics** – how fast the model returns results (like how quickly a book’s pages turn).  
* **Health signals** – whether the answers are accurate and useful (like checking if readers find the story engaging).

When a light suddenly flickers, Arize alerts engineers to investigate—maybe the data fed into that AI is noisy or the algorithm has drifted. By scaling this system across thousands of models, Booking.com keeps all its “books” readable and reliable for travelers worldwide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
