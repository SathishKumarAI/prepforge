---
qid: ing_1ddd6c35c1__eli5__local
question: 'Explain: Memory injection and backdoor attacks — MemoryGraft: Persistent
  Compromise of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 232
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:23:45-05:00'
sources: []
---

Imagine a library where every book is a tiny brain that learns from the stories it reads. **Memory injection** is like secretly adding a hidden page to one of those books so that whenever someone flips through, the new page shows up in their mind and changes what they remember. **Backdoor attacks** are similar, but instead of just adding a page, the attacker hides a secret key inside the book’s pages. When the book meets certain conditions—say, reading a particular phrase—it unlocks a hidden door that lets the attacker control it.

In AI terms, “memory” is the stored experience that a language model (LLM) uses to answer questions. A **MemoryGraft** attack poisons this memory by inserting malicious experiences. Later, when the model retrieves those memories during normal use, it behaves in ways the attacker wants—like giving specific answers or taking actions—without anyone noticing the change. This keeps the compromise hidden and persistent, just like a secret page that’s always there for the right reader.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
