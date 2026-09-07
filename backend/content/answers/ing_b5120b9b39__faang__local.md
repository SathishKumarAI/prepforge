---
qid: ing_b5120b9b39__faang__local
question: 'Explain: Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 515
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:44:34-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Event‑Driven Architecture* (EDA) for a ML‑focused audience—so focus on how events drive data flow, model training, inference, and monitoring. Assume the interviewee wants an overview that covers concepts, typical patterns, and practical implications for ML pipelines.

**Approach**  
1. Define “event” & core EDA components (producers, brokers, consumers).  
2. Contrast with batch/streaming models.  
3. Highlight key patterns: publish/subscribe, command/event sourcing, event‑driven microservices.  
4. Show how ML fits: feature extraction, model training triggers, inference services, and feedback loops.  
5. Touch on tooling (Kafka, Pulsar, Kinesis) & operational concerns.

**Depth**  
EDA treats every state change as an event—an immutable record emitted by a producer. A message broker stores events in partitions, guaranteeing order per key. Consumers subscribe to topics, processing events asynchronously. Patterns include:  

- **Publish/Subscribe** – decoupled services consume only relevant events.  
- **Command‑Event Sourcing** – commands trigger events; state is rebuilt from the event log (useful for reproducible ML pipelines).  
- **Saga/Orchestration** – long‑running workflows (e.g., data ingestion → feature store update → model retraining).  

For ML: a sensor publishes “new data point” → feature extraction service consumes, writes to feature store; training job subscribes to “feature ready” events and retrains. Inference services consume “prediction request” events, return results via another topic, enabling real‑time scoring. Feedback (e.g., label corrections) feeds back into the loop, supporting online learning.

**Edge Cases**  
- **Event loss or duplication**: use idempotent consumers and exactly‑once semantics.  
- **Backpressure**: throttle producers or scale consumer groups.  
- **Schema evolution**: schema registry to avoid breaking downstream ML models.  

**Optimize & Communicate**  
To improve, add replayability for debugging and audit trails, integrate monitoring (latency, error rates), and consider hybrid batch‑streaming for heavy training jobs. In the interview, I’d narrate how EDA enables scalable, real‑time ML workflows, reduces tight coupling, and supports continuous model improvement—key traits valued by FAANG teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
