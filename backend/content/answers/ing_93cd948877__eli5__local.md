---
qid: ing_93cd948877__eli5__local
question: 'Explain: Scale Estimation — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 224
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:59-05:00'
sources: []
---

Think of a notification service like a post‑office that must deliver millions of letters (messages) every hour, but the traffic can spike whenever a new trend starts—just as rush hour drives more cars onto a highway.  
**Scale estimation** is figuring out how many “delivery trucks” you’ll need before the system gets stuck.  
First, ask: *How many users will read a notification per minute?* Multiply that by the average size of each message to get data volume (bytes).  
Next, add **peak‑time multipliers**—for example, double the traffic when a new feature launches—to capture surges.  
Finally, include a safety cushion (20 % extra capacity) so the system can still respond quickly even if something unexpected happens.  

So, you’re essentially sizing the post‑office: number of trucks, lanes, and staff required to keep every letter arriving on time, no matter how many people start sending them at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
