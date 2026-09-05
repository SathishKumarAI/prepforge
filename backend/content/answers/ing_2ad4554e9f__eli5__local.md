---
qid: ing_2ad4554e9f__eli5__local
question: 'Explain: Action Approval State Machine — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 241
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:43:26-05:00'
sources: []
---

Imagine a **computer‑use robot** as a polite waiter in a fancy restaurant.  
The waiter can only serve food (run a program) after the chef says it’s ready, the manager approves the order, and the kitchen is clear. The *action approval state machine* is the waiter’s recipe for deciding when to move from “waiting” to “serving.”

1. **Requested** – the robot asks permission (“Can I run this script?”).  
2. **Pending Review** – a human or another system checks the request (is it safe? does it fit policy?).  
3. **Approved** – all checks passed; the robot may proceed.  
4. **Rejected** – something was wrong, so the robot must not act.  
5. **Completed** – the action finished and results are logged.

The waiter never serves until every step is satisfied, just as a production computer‑use agent only executes code after its state machine confirms approval. This keeps systems safe, predictable, and audit‑friendly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
