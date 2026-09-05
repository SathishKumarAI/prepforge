---
qid: vq_9ee254140b__eli5__local
question: What is default access modifier in Scala? Does Scala have “public” keyword?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 182
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:22:17-05:00'
sources: []
---

Think of a Scala class as a room in a house.  
The *default* way you can enter that room is the same as walking through the front door—anyone inside the house can step in. In programming terms, that’s called **`public` access**.  

In Scala you don’t write a `public` keyword; it’s simply omitted. When you declare something (a class, method, or field) without an explicit modifier, it is *public* to everyone who can see the code.  

If you want to keep it inside the house and not let strangers in, you add the **`private`** modifier.  
So: default access = public; Scala has no separate `public` keyword—just leave it out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
