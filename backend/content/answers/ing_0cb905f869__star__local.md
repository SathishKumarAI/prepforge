---
qid: ing_0cb905f869__star__local
question: 'Explain: to the it makes a list of — UBER System design | OLA system design
  | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 386
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:59-05:00'
sources: []
---

**Situation:**  
In my last role as a senior data engineer, our product team wanted to launch an in‑app ride recommendation feature that could predict the best driver‑passenger match within 2 seconds of request—essential for scaling to 1M daily trips. The existing system was a monolithic batch pipeline that couldn’t handle real‑time inference.

**Task:**  
I had to design a low‑latency, highly available architecture similar to what Uber or Ola use for their matching engines, while ensuring we could train and update models continuously without downtime.

**Action:**  
I broke the solution into three layers:  
1. **Data ingestion** – Kafka streams pulled live GPS, ETA, and driver rating data into a distributed cache (Redis) with TTLs of 5 seconds.  
2. **Feature store** – A lightweight Spark job pre‑computed static features (driver popularity, zone heat maps) and stored them in Delta Lake for fast read.  
3. **Inference microservice** – A TensorFlow Serving cluster behind an NGINX load balancer ran a light gradient‑boosted tree model, returning the top 5 matches per request. I added Canary deployments via Kubernetes to roll out new models without service interruption.  

I also set up Prometheus alerts for latency and error rates, ensuring SLA of <200 ms.

**Result:**  
The new system reduced matching time from ~2 seconds to 120 ms, boosting ride acceptance by 18% during peak hours. I learned the importance of separating real‑time ingestion, feature storage, and inference, and how container orchestration can make ML models as robust as any production microservice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
