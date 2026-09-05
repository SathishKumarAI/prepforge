---
qid: ing_38e8aa5d32__eli5__local
question: 'Explain: Protecting a resource with a lock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 192
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:06:22-05:00'
sources: []
---

Imagine you’re sharing a single, shiny kitchen knife in a busy apartment building. Everyone needs it, but only one person should hold it at a time so no one gets cut or the knife breaks. A **distributed lock** is like a digital “hand‑out” system that tells everyone who can use the knife right now.

The lock works by letting each resident (a computer program) send a short message to a central “kitchen manager.” If the manager sees no one else holding the knife, it gives the requestor permission and marks the knife as “in use.” While the knife is locked, all other residents must wait. When the holder finishes, they tell the manager to release the lock, making the knife available again.

This ensures safe, orderly access across many devices—just like a real‑world lock protects shared resources in software systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
