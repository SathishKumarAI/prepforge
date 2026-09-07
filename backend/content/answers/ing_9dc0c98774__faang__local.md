---
qid: ing_9dc0c98774__faang__local
question: 'Explain: Event Notification — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 375
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:50:54-05:00'
sources: []
---

**Clarify**  
You’re being asked to explain what “event‑driven” means in the context of machine‑learning systems—specifically how an event triggers a model inference or update rather than continuous polling.

**Approach**  
1. Define an *event* (user action, sensor reading, message arrival).  
2. Show how that event becomes a trigger for ML workflow components.  
3. Illustrate with a concrete pipeline: ingestion → preprocessing → prediction → response.  

**Depth**  
- **Event source** emits a message (e.g., Kafka topic “click‑stream”).  
- A *consumer* subscribes, receives the payload in real time.  
- The consumer passes data to an *inference microservice* that loads the trained model (TensorFlow/PyTorch).  
- Result is published back to another topic or pushed to a UI.  
- If the event is “new user signup”, the system may trigger a *re‑training* job in a separate pipeline.  
Complexity: O(1) per event for inference; batch jobs run asynchronously, decoupled from real‑time traffic.

**Edge Cases**  
- Duplicate events → idempotent processing.  
- Late or out‑of‑order messages → sequence numbers or timestamps.  
- Model drift → periodic validation events.  

**Optimize & Communicate**  
Explain that event‑driven architecture scales horizontally, improves latency, and decouples components—key for FAANG‑level ML services where millions of events per second must be processed reliably. Conclude by noting the trade‑off: added infrastructure (messaging brokers, state stores) versus tighter coupling and higher latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
