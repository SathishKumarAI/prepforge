---
qid: ing_2b7864eb83__eli5__local
question: How does Mastra handle agent memory and context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 246
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:06-05:00'
sources: []
---

Think of **Mastra** as a smart library that writes its own books on the fly.  
When you ask it a question, it first “opens” a special notebook (its *memory*) where it keeps every fact and conversation snippet it’s learned so far. Then it flips to a fresh page in another notebook called *context*.  

The *memory* is like the library’s long‑term filing system: it stores all the books (information) you’ve ever added, organized by topic. The *context* is the current shelf where the librarian looks for the right book while answering your question. Mastra pulls relevant pages from memory, copies them into context, and then writes a new answer on that page. When the answer is finished, the page stays in context for a short time (so it can be used again if you ask follow‑up questions) but isn’t saved permanently unless you explicitly tell it to.  

So, Mastra keeps everything you’ve taught it in memory, and uses context as a temporary workspace to produce coherent, relevant responses without mixing up unrelated topics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
