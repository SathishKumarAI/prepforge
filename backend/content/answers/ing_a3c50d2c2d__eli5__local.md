---
qid: ing_a3c50d2c2d__eli5__local
question: 'Explain: Q94: You''re building a computer-use agent (Claude Cowork, OpenAI
  Operator-class) that can fill forms, click buttons, and read screen content. Design
  the sandbox, network policy, and human-confirmation pattern.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 226
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:51-05:00'
sources: []
---

Imagine a tiny robot helper inside a locked workshop.  
**Sandbox (the workshop)** – The robot can only move inside its own cubby where it has tools to fill forms and press buttons, but it cannot reach outside walls or touch other machines. This keeps the rest of the computer safe.  

**Network policy (the door lock)** – When the robot needs to fetch a form from the internet, the door opens just enough for that one trip, then closes again. It can only call a pre‑approved list of websites and never send data back to strangers.  

**Human‑confirmation pattern (the safety guard)** – Before the robot does anything important—like submitting a payment or saving personal info—it shows you a preview on screen and asks “Do you want me to do this?” Only when you tap *Yes* does it actually click the button. If you say *No*, it stops.  

Together, these rules let the robot help efficiently while keeping your computer and data secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
