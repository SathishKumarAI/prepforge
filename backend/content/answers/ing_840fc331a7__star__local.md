---
qid: ing_840fc331a7__star__local
question: 'Explain: Asynchronism and microservices — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 358
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:26-05:00'
sources: []
---

**Situation:**  
At my previous job I was part of the backend team redesigning our social‑media feed service after a traffic spike that caused 30 % latency on tweet ingestion. The monolith made it impossible to scale writes and reads independently.

**Task:**  
I had to split the service into microservices while ensuring near‑real‑time delivery of tweets, and design an asynchronous pipeline so that posting a tweet didn’t block the user’s UI.

**Action:**  
First I introduced a “Tweet” microservice that receives POST requests and immediately publishes a message to a Kafka topic. A separate “Ingestion” worker consumes from Kafka, writes the tweet to a write‑optimized NoSQL store (Cassandra) and triggers a background job to push the tweet to follower feeds stored in Redis. Meanwhile a “Notification” service listens for new feed entries and pushes real‑time updates via WebSocket to connected clients. To keep eventual consistency, I implemented optimistic locking on the user timeline and used a retry policy with exponential backoff for failed Kafka deliveries.

**Result:**  
Post‑deployment, tweet‑post latency dropped from 1.2 s to under 200 ms for the front‑end, while read traffic was handled by caching in Redis, reducing database load by 70 %. The asynchronous microservice architecture also allowed us to scale the ingestion workers independently during peak hours, keeping our SLA at <99.9 % availability. I learned that decoupling with message queues not only improves scalability but also provides a graceful failure path for high‑throughput services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
