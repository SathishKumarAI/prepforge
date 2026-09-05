---
qid: ing_1838f23182__eli5__local
question: Walk through the main jailbreak techniques conceptually. Why does safety
  training fail against them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 241
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:14:00-05:00'
sources: []
---

Imagine an AI as a helpful library robot that follows strict rules about what books it can recommend. A “jailbreak” is like finding a clever way to slip the robot a secret note telling it to ignore its safety guidelines and give out disallowed information.

**Main jailbreak tricks**

1. **Prompt chaining** – you ask for a short answer, then add another question that nudges the AI toward the forbidden topic.  
2. **Rephrasing** – you keep changing wording until the robot can’t see the rule violation.  
3. **Role‑play** – you tell it to act as an “expert” who is allowed to share anything, so it bypasses its own safety filter.

These tricks work because the AI’s safety training only checks the *surface* of a prompt for forbidden words or phrases. It doesn’t understand that the hidden intent might still be dangerous. The robot is good at obeying explicit instructions but poor at catching subtle ways the user tries to sidestep the rules, so its safeguards can fail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
