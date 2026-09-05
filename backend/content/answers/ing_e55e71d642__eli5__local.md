---
qid: ing_e55e71d642__eli5__local
question: 'Explain: DAC (Discretionary Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 227
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:38:06-05:00'
sources: []
---

Imagine you’re the host of a fancy dinner party.  
Each guest has a name tag that lists exactly which rooms they can enter—maybe just the kitchen or also the pantry and wine cellar. That list is decided by you, the host, not by the building’s lock‑system. In computing this is **Discretionary Access Control (DAC)**: the owner of a file or resource chooses who may read, write, or execute it.

- **Resource** = the file, folder, or program.  
- **Permission** = what actions a user can perform on that resource (read, write, delete).  
- **Owner** = the person who created or owns the resource and has the authority to set permissions.

DAC is like giving each guest a personalized keycard: you decide who gets it and where they may go. It’s flexible but relies on users acting responsibly; if someone misuses their card, there’s little external enforcement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
