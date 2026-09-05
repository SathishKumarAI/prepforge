---
qid: ing_bb538c61d2__eli5__local
question: 'Explain: Skill Resolution Order — Openclaw Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 247
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:34:13-05:00'
sources: []
---

**Skill Resolution Order (OpenClaw Deep Dive)**  

Think of an AI character as a chef in a busy kitchen. Every time the player gives a command, the chef must decide which recipe to cook first. The *skill resolution order* is the chef’s recipe list: it tells the AI which “skills” (actions) to try, one by one, until something works.  

First, the AI checks the most important skill—usually the one that keeps it alive or stops a threat. If that fails (no enemies nearby, no ammo), it moves on to the next in line: maybe a ranged attack, then a movement trick, and finally a simple idle dance if nothing else fits. The order is hard‑coded; the AI never skips ahead or reorders mid‑battle unless the game changes the list.  

So, skill resolution order is simply “the predetermined priority list the AI follows to decide what to do next.” It keeps combat predictable yet flexible, just like a chef following a tried‑and‑true recipe hierarchy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
