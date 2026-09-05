---
qid: ing_7f918a76d7__eli5__local
question: What is memory poisoning in an agent, and why is it worse than a one-shot
  prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 186
total_tokens: 353
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:01-05:00'
sources: []
---

Imagine a smart assistant that learns from every conversation it has. **Memory poisoning** is like someone secretly whispering wrong facts into the assistant’s diary and then letting it keep those notes for future chats. The assistant believes the false information, writes it down, and later uses it as if it were true, spreading the error to many users.

A **one‑shot prompt injection** is a single trick: you ask the assistant a question in a clever way that makes it give a wrong answer right then. It’s like a one‑time prank; only that particular conversation gets affected.

Memory poisoning hurts more because the fake data becomes part of the agent’s long‑term knowledge, so every future interaction can carry the lie, just as a misfiled note in a diary keeps misleading you forever.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
