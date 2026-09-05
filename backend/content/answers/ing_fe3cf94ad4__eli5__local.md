---
qid: ing_fe3cf94ad4__eli5__local
question: 'Explain: Chat Servers — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 281
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:17:45-05:00'
sources: []
---

Imagine a giant post‑office that never closes and can hand out thousands of letters every second.  
In this office each **user** is like a mailbox. When you send a message, the system first writes it into a tiny “message box” (a database). That’s the *store* part—just like keeping a letter in an envelope before delivering it.

Next comes the *delivery* step: the post‑office keeps a list of who has that letter and checks if each mailbox is open. If a person is online, the system pushes the letter straight to their device (a real‑time push). If they’re offline, the message stays in the box until the next time they log on—then it’s pulled out and delivered.

The key idea is **store‑once, deliver‑as‑needed**: write every message once so it never gets lost, then use a simple “push or pull” rule to get it to the right mailbox whenever that person is ready. This keeps the system fast, reliable, and easy to scale—just like a well‑run post‑office for millions of people.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
