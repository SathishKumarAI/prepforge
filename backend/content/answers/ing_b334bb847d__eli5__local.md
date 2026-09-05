---
qid: ing_b334bb847d__eli5__local
question: 'Explain: Cut costs — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 220
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:20:57-05:00'
sources: []
---

Imagine a factory that only starts its machines when a worker raises a hand—no idle time, no wasted energy.  
**Event‑driven architecture (EDA)** works the same way: instead of constantly running all parts of a machine‑learning system, each component activates **only when an event occurs** (e.g., new data arrives, a prediction is needed, or a model reaches a certain accuracy).  

*Event* – a noticeable change in the system that triggers action.  
*Trigger* – the signal that tells a component to start.  
*Microservice* – a small, independent piece of software that performs one job (like training, scoring, or logging).

Because resources turn on only when needed, you avoid running expensive GPUs or storage all the time. That saves electricity, reduces cloud usage fees, and keeps your ML pipeline lean—just like a factory that turns off machines when no hand is raised.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
