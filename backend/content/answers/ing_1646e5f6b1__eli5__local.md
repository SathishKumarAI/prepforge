---
qid: ing_1646e5f6b1__eli5__local
question: 'Explain: Durable background agent — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 231
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:11:03-05:00'
sources: []
---

Think of a *durable background agent* like a smart mail‑room clerk that lives inside your computer.  
The clerk’s job is to keep an eye on a pile of incoming “letter” objects (the data you give it), process them whenever the main program is busy, and then return the polished letters (results) later—just as you would if the clerk worked in a separate room but could still hand back your mail.  

In **pydantic‑ai**, this clerk is built on Pydantic models (structured data) and runs in the background with the *durable* flag, meaning it stays alive even after your main program stops or restarts. It can queue tasks, remember past conversations, and safely hand back answers when you’re ready to receive them. The result: a reliable, long‑lived helper that never forgets what it’s supposed to do, just like an office clerk who keeps every envelope safe until you need it again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
