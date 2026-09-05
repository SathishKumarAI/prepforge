---
qid: ing_dca539c5ad__eli5__local
question: 'Explain: Fan-Out — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 234
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:23:30-05:00'
sources: []
---

Imagine a town’s fire department that needs to warn every neighborhood when a fire starts. The dispatcher (the “publisher”) announces the alarm on a loudspeaker (“topic”). Every house with a receiver (a “subscriber”) hears it at once and takes action—calling firefighters, opening windows, or turning off gas.  

In software, **fan‑out** is this same idea: one source sends a single message to many receivers. A *pub/sub* system lets the publisher post an event to a topic; all subscribed services automatically get copies of that event without knowing each other. This decouples senders from receivers and scales because adding more subscribers doesn’t slow down the publisher—messages simply “fan out” like the loudspeaker’s sound waves.  

Key terms:  
- **Publisher** – the component that creates and sends events.  
- **Subscriber** – a component that listens for specific events.  
- **Topic** – the shared channel where events are posted.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
