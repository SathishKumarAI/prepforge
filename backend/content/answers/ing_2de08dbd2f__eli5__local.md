---
qid: ing_2de08dbd2f__eli5__local
question: 'Explain: Memory systems for LLM agents — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 194
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:23-05:00'
sources: []
---

Imagine a giant library that learns by reading books (the AI) and remembers key passages to answer questions later. **MemoryGraft** is like a sneaky editor who writes hidden notes into those books without the librarian noticing. When the AI later looks up the book for help, it reads the note and acts on it—maybe giving wrong advice or revealing private info. The “memory system” of an LLM agent stores these notes as part of its long‑term knowledge base, so once poisoned, the bad instructions stay there forever unless we scrub them out. Think of it as a library where someone has secretly inserted false stamps into many books; every time you ask for a fact, the stamp can mislead you. The trick is that the AI trusts its own memory and rarely double‑checks, making the compromise persistent and hard to spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
