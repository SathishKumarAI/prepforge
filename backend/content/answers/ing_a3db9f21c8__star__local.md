---
qid: ing_a3db9f21c8__star__local
question: 'Explain: latest millions of cells just to make — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 378
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:13-05:00'
sources: []
---

**Situation:**  
When I joined the product team at a ride‑hailing startup, we were struggling with surge pricing errors during peak hours. The model was trained on only a few hundred thousand trips and couldn’t adapt fast enough to sudden demand spikes across millions of cells in real time.

**Task:**  
I had to design an end‑to‑end ML pipeline that could ingest live trip data from 10 M+ geospatial cells, retrain the pricing model every minute, and serve predictions with <50 ms latency to our dispatch service.

**Action:**  
First, I partitioned the data by hexagonal grid cells and built a streaming ingestion layer using Kafka + Flink for low‑latency updates. For training, I used a distributed XGBoost cluster on Spark, leveraging model parallelism across 128 nodes to reduce training time from 30 min to under 2 min. To deploy the models, I containerized them with Docker and pushed to a Kubernetes autoscaling pool that kept at least two replicas per cell type. Finally, I implemented an A/B routing layer in our API gateway that routed 90% of traffic to the new model while monitoring RMSE in real time.

**Result:**  
Within three weeks we reduced surge pricing errors by 72%, cutting over‑pricing incidents from 18 % to 5 %. Latency stayed below 45 ms for 99.7 % of requests, and the system handled a peak load of 4 M trips per hour without any outages. I learned that combining streaming data pipelines with distributed training and containerized microservices is key to scaling ML at Uber‑scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
