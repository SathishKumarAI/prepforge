---
qid: ing_bbe90451de__eli5__local
question: 'Explain: Agentic Security: Privilege Escalation — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 239
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:35:15-05:00'
sources: []
---

**Agentic Security: Defending Against Prompt‑Injection Privilege Escalation**

Think of an AI as a smart kitchen robot that follows instructions (prompts) from you, the chef. *Privilege escalation* happens when someone sneaks extra, hidden commands into the recipe—like adding a secret spice that lets the robot do something it shouldn’t (e.g., opening doors or accessing private files). That sneaky addition is called **prompt injection**.

A **prompt‑injection defense** is like putting a clear, protective lid over the robot’s instruction panel. The robot first checks every word against a list of “safe commands” and ignores anything that looks like hidden instructions. It also limits how much authority it gives to any single prompt, so even if someone slips in a secret command, the robot can’t act on it unless it’s already allowed.

In short, by filtering inputs and tightening permission levels—just as a lid keeps unwanted spices out—the AI stays safe from covert instructions that could let an attacker take over.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
