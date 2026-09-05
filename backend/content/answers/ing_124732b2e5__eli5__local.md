---
qid: ing_124732b2e5__eli5__local
question: You're doing a security review of a coding agent that executes model-generated
  code. What's your threat model and controls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 261
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:38-05:00'
sources: []
---

Imagine the coding agent is like a robot chef that follows recipes written in a secret language (the AI model’s output).  
**Threat model:**  
1. **Wrong recipe** – The robot might cook something harmful (malware) because it misinterprets the recipe.  
2. **Chef’s secrets leak** – Sensitive data (passwords, personal info) could slip into the dishes if the chef uses them in a recipe.  
3. **Untrusted ingredients** – If the model pulls code from an unverified source, the robot may ingest dangerous components.

**Controls:**  
- **Ingredient vetting** – Run every piece of code through a safety filter that checks for known bad patterns before it reaches the robot.  
- **Sandbox kitchen** – Execute code in an isolated environment (a virtual “sandbox”) so any accidental fire can’t spread to real data or systems.  
- **Audit trail** – Keep a log of what recipes were used and what the chef cooked, so you can trace any mishap back to its source.

These steps keep the robot tasty but safe, just like a well‑guarded kitchen keeps diners happy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
