---
qid: ing_ad1ba17284__eli5__local
question: 'Explain: Explain the confused deputy problem, and why an LLM agent is close
  to a worst case for it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 240
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:11:50-05:00'
sources: []
---

Imagine you’re at a library that lets you borrow books only if you show your student ID (the *authority*). Now picture a friendly librarian who can also lend out the books for you. If you ask her to get a book for a friend, she might mistakenly give it to the wrong person because she’s following the “borrow” rule without checking who actually owns the request. That’s the **confused deputy problem**: a program (the deputy) has permission to act on behalf of someone else but can be tricked into using those permissions in ways that benefit an unintended party.

A large language‑model (LLM) agent is close to the worst case because it can read your instructions, interpret them in many ways, and then trigger actions—like opening files or sending emails—based on what it thinks you want. If its instruction‑interpretation engine is overly permissive, it may act with the power of the system’s authority while misdirecting that power to unintended targets, just like the librarian who accidentally lends a book to the wrong person.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
