---
qid: ing_285cd0d699__eli5__local
question: 'Explain: Our serving cost is dominated by KV cache, not weights. Get it
  down by an order of magnitude and tell me what you give up.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 200
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:39:40-05:00'
sources: []
---

Think of a library that answers questions.  
The *weights* are like the books on shelves – they contain all the knowledge, and there are thousands of them. The *KV cache* is like a fast‑moving cart that holds the most recent pages people have asked for; it lets the librarian pull out answers in milliseconds.

If we shrink the cart (reduce KV cache size) by ten times, the library runs faster because it spends less time moving those pages around. But what does it lose? It can keep fewer “recent” pages ready. When a new question comes that used to be on the cart, the librarian now has to fetch it from the shelves again, which takes extra time and CPU.

So you speed up serving by cutting cache size, but you trade off quick re‑access for less frequently asked or newly formed queries, making some responses slower or more expensive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
