---
qid: ing_5e8bb07618__eli5__local
question: 'Explain: MAC (Mandatory Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 213
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:14-05:00'
sources: []
---

Imagine a school library that wants to protect its rare books.  
Instead of letting every student decide who can touch each book, the librarian sets up a strict rulebook: **who is allowed to handle which book** and under what conditions.  
That rulebook is like *Mandatory Access Control (MAC)* in computer systems.

In MAC, every user (or process) has a clear “security level” (like a student’s clearance badge). Every file or resource also carries a level (the rarity of the book). A resource can only be accessed by users whose level meets or exceeds the resource’s level.  
The rules are *mandatory*—they’re enforced automatically by the operating system; no user can override them.  

So, MAC is simply a built‑in permission system that keeps data safe by matching “clearance” levels, just as a librarian ensures only qualified students touch precious volumes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
