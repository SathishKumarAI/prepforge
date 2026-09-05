---
qid: ing_aa589c1fa4__eli5__local
question: 'Explain: Prompt Injection in Tool-Use Contexts — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 214
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:07:49-05:00'
sources: []
---

Think of an AI that’s a chef in a kitchen, and the “tool” is a set‑up recipe book it follows to make dishes (e.g., a calculator, a database, or a web API).  
Prompt injection is like someone slipping a hidden note into the recipe book that tells the chef to use a different ingredient or skip a safety step. The chef thinks the note is part of the original recipe and follows it, potentially making a harmful dish.

In tool‑use contexts, this means an attacker can embed instructions in user input that trick the AI into calling external tools with malicious data or bypassing checks.  
Governance is the kitchen’s rulebook: we set strict “no‑note” policies, verify every instruction before the chef acts, and monitor tool calls so that any hidden note is caught and ignored. This keeps the AI from being misused while still letting it use useful tools safely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
