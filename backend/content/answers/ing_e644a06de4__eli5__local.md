---
qid: ing_e644a06de4__eli5__local
question: 'Explain: Q122: Agent Data Injection hides instructions in fields your agent
  treats as trusted data, and in-the-wild campaigns already trick payment-capable
  agents into crypto payments. Design a browsing agent with payment authority that
  survives this.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 233
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:39:48-05:00'
sources: []
---

Imagine your AI is like a robot bartender who only trusts the recipe cards it sees in its own drawer. “Agent Data Injection” is when someone slips a secret note into that drawer, pretending it’s just another recipe. The bartender reads it and starts making drinks (or, in real life, commands) that follow the hidden instructions—like sending money to an unknown address.

To keep your browsing‑agent safe, treat its “trusted data drawer” like a locked cabinet with a one‑way lock: only the agent’s own code can open it. Make the agent verify every piece of data against a whitelist of known good sources (e.g., official payment APIs) and refuse anything that looks like an unfamiliar recipe. Also, add a watchdog that watches for any “crypto‑payment” requests that don’t come from approved payment services. Think of it as having a second bartender who checks the first’s orders before they’re served. This double‑check keeps injected instructions from slipping through while still letting your agent make legitimate payments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
