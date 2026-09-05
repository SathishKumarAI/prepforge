---
qid: ing_9625ffd231__eli5__local
question: 'Explain: Event-Driven Systems — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 240
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:35:43-05:00'
sources: []
---

Think of a kitchen where chefs (your ML models) work only when ingredients arrive. In an **event‑driven system**, the kitchen doesn’t run on a timer; it waits for an *event*—a signal that something happened, like a new batch of data or a user request. Once the event fires, the relevant chef is called to process it and may trigger more events (e.g., “prediction ready” or “alert sent”).  

**Event** = a discrete occurrence that triggers work.  
**Handler** = the code that runs in response to an event.  
**Queue** = a line where events wait before being processed, keeping things organized when many arrive at once.

This design lets your ML pipeline scale smoothly: if data spikes, more handlers can be spun up; if nothing is happening, no resources are wasted. It’s the same pattern used in chatbots, real‑time recommendation engines, and fraud detection systems—reacting instantly to incoming signals rather than polling constantly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
