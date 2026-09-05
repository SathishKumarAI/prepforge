---
qid: ing_83f733adb5__eli5__local
question: 'Q: Why does PagedAttention significantly increase throughput?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 163
total_tokens: 321
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:06:02-05:00'
sources: []
---

Imagine your brain reading a book by flipping pages instead of looking at every single word on the screen.  
In an AI model, *paged attention* is like that page‑flipping trick: the network only pulls in the chunks (pages) of data it really needs for each step, instead of loading the whole text into memory all at once.  

Because fewer pages are moved around, the computer uses less bandwidth and can process more queries in parallel—just as you read faster when you skip ahead to relevant chapters rather than scrolling through every line.  
The result is a noticeable jump in throughput: the model does the same work with half the data traffic, freeing up time for other tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
