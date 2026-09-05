---
qid: ing_ce12ccfbb2__eli5__local
question: 'Explain: Capability-Based Access Control — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 221
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:01:51-05:00'
sources: []
---

Think of an office building where every employee gets a *key card* that works only for the rooms they’re allowed to enter.  
**Capability‑Based Access Control (CBAC)** is like those key cards, but for software: each user or program receives a special “token” (a capability) that says exactly which files or services it may use and what actions it can perform—no more, no less.

Because the token itself contains the permission information, there’s no separate “list of who can do what.” The system simply checks the token when an operation is requested. This makes it hard for someone to sneak into a room they shouldn’t: if they don’t have the right key card, the door stays shut.  

Governance comes from carefully issuing and revoking these tokens—just as an office manager controls who gets which card. The system logs every token use, so auditors can see who accessed what, ensuring safety and accountability without a complex permissions hierarchy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
