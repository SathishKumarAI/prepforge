---
qid: ing_360f275db8__eli5__local
question: 'Explain: Pub-Sub — Grokking System Design Interview: Patterns & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 232
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:01:22-05:00'
sources: []
---

Imagine a town’s bulletin board that posts news every day. Anyone who wants to hear the news can “subscribe” by keeping an eye on the board, while anyone who has something to share simply “publishes” it there without knowing exactly who will read it. In computer systems this is called **Publish‑Subscribe (Pub‑Sub)**.

*Publisher*: a component that creates messages (e.g., new data or alerts).  
*Subscriber*: a component that receives only the messages it cares about, using rules like “only temperature updates.”  
*Broker/Topic*: an invisible middleman that stores the message and forwards it to all interested subscribers.  

In machine‑learning pipelines, a training job might publish a “model ready” event; a deployment service subscribes to that topic to automatically roll out the new model. This decouples producers from consumers, making the system flexible and scalable—just like the bulletin board lets anyone add or read news without needing direct contact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
