---
qid: ing_ac990de154__eli5__local
question: 'Explain: Infrastructure Choices — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 313
total_tokens: 472
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:11:10-05:00'
sources: []
---

Imagine building a smart city where each street, traffic light, and bus stop must cooperate for smooth flow—this is like choosing the right “infrastructure” for machine‑learning (ML) systems. Think of the OSI model as a set of layers that organize how data travels from sensors to decisions:  
**Layer 1 (Physical)** = the roads (cables, Wi‑Fi).  
**Layer 2 (Data Link)** = traffic lights controlling local flow.  
**Layer 3 (Network)** = main highways guiding cars between districts.  
**Layer 4 (Transport)** = delivery trucks that carry goods reliably.  
**Layer 5–7 (Session, Presentation, Application)** = the city’s services: ticketing, maps, and finally the mayor’s office where decisions happen.

When designing an ML system, you pick the right “roads” (hardware like GPUs or TPUs), “traffic lights” (data pipelines that clean and batch data), “highways” (network fabrics for distributed training), and “delivery trucks” (distributed training frameworks). Each layer must match the city’s needs: speed, reliability, scalability. By aligning these layers—just as a city aligns roads, signals, and services—you ensure ML models learn efficiently and deploy smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
