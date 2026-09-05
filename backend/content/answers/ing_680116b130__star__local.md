---
qid: ing_680116b130__star__local
question: 'Explain: Publisher-Subscriber — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 392
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:35-05:00'
sources: []
---

**Situation:**  
At my last job we were launching a real‑time recommendation engine for an e‑commerce platform that needed to ingest clickstream data from millions of users while feeding model predictions back into the storefront within seconds.

**Task:**  
I had to design a messaging layer that could handle high throughput, low latency, and provide reliable delivery across our Kubernetes cluster and on‑prem edge nodes.

**Action:**  
I chose a hybrid Pub/Sub system using Google Cloud Pub/Sub for global fan‑out and AWS SNS for local topic subscriptions. We implemented the top six patterns:  
1) **Direct publish/subscribe** – user clicks go straight to the model queue.  
2) **Topic-based routing** – separate topics for “product view,” “add to cart,” etc., so each microservice only subscribes to what it needs.  
3) **Filter subscriptions** – using message attributes to let downstream services ignore irrelevant events.  
4) **Dead‑letter queues** – failed predictions are routed to a DLQ for later replay.  
5) **Message ordering** – we enabled ordering keys on critical user sessions so recommendations stay consistent.  
6) **Competing consumers** – multiple inference workers pull from the same queue, scaling horizontally with Kubernetes HPA.

I also added Cloud Functions that automatically archived messages to BigQuery for audit and retraining data.

**Result:**  
Throughput hit 200k events/s with <15 ms latency; the recommendation accuracy improved by 12% as we could now serve fresh predictions. The system also reduced infrastructure costs by 18% thanks to efficient topic filtering. I learned that a well‑structured Pub/Sub architecture is the backbone of any ML pipeline that demands both speed and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
