---
qid: ing_da805ba588__star__local
question: 'Explain: we have a i don''t know web — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 360
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:10-05:00'
sources: []
---

**Situation**  
I was asked during an Amazon system‑design interview to design a parking garage that could optimize space usage and reduce wait times for customers arriving at a busy downtown mall.

**Task**  
My goal was to create a scalable, real‑time solution that would: (1) predict arrival patterns, (2) allocate spots efficiently, and (3) provide drivers with an app notification of their reserved spot, all while handling thousands of concurrent users and ensuring data consistency across multiple entry gates.

**Action**  
I proposed a microservice architecture using Kafka for event streaming from sensors at each gate, coupled with a Redis cache for hot spot data. For the predictive component I trained a gradient‑boosted tree model on historical arrival timestamps, weather, and local events, deploying it as an inference service behind a REST API. The backend used DynamoDB to store reservations and Spot‑Allocation tables, with Lambda functions triggering updates when cars entered or exited. I also added a fallback rule engine that re‑allocated spots in real time if the model’s confidence dropped below 80%.

**Result**  
The prototype reduced average customer wait times by 35 % (from 4 min to 2.6 min) and increased garage occupancy from 78 % to 88 %. I learned how to blend machine‑learning inference with event‑driven architecture, and the importance of graceful degradation when model confidence is low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
