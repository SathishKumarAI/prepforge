---
qid: ing_84e9970466__eli5__local
question: 'Explain: Disaster recovery (DR) defined — What is Disaster Recovery? |
  Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 203
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:29-05:00'
sources: []
---

Think of a big library that stores every book you’ve ever written—your machine‑learning models, training data, and the code that runs them.  
**Disaster Recovery (DR)** is like having a backup copy of that entire library in another building far away from the first one. If a fire, flood, or power outage destroys the main library, the backup lets you reopen the library almost instantly with no loss of books or time.

In Google Cloud, DR means setting up your ML services (data storage, compute instances, model endpoints) so they’re automatically replicated to another geographic region. When the primary site fails, traffic is rerouted to the backup, keeping your models alive and serving predictions with minimal interruption.  
So, DR is simply a reliable “copy‑and‑switch” plan that keeps your ML work running even when something catastrophic happens to the original environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
