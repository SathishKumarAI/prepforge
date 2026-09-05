---
qid: ing_902ebe66d6__eli5__local
question: 'Explain: Action whitelist over action blocklist — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 220
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:25:20-05:00'
sources: []
---

Think of your computer as a busy kitchen and every program you run is a chef that needs to use ingredients (system resources).  
An **action whitelist** is like giving the chefs a menu that lists only the safe dishes they’re allowed to cook—everything else is automatically denied. It’s a “what‑is‑allowed” list, so any new dish must be added explicitly before it can be made.  

An **action blocklist**, on the other hand, works the opposite way: the chefs start with a full menu and you only tell them which dishes are forbidden (e.g., “no raw onions”). Anything not on that ban list is still allowed, even if it was never considered safe before.

In computer‑use agents, whitelisting is safer because it forces developers to think about every action they grant permission for. Blocklists can let unexpected or malicious actions slip through, just like a chef might still serve a dangerous ingredient unless it’s explicitly banned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
