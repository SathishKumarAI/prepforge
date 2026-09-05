---
qid: ing_2d0956ed10__star__local
question: 'Explain: a garage you''re going to be end — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 428
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:59-05:00'
sources: []
---

**Situation**  
When I joined Amazon’s Urban Mobility team, we were tasked with launching a fully automated parking garage in the downtown Seattle hub. The existing manual system was choking on peak traffic—average pick‑up time was 4 minutes per car and we lost about $12k/day in idle space.

**Task**  
I needed to design a scalable, real‑time parking solution that could predict slot availability, optimize vehicle routing inside the garage, and integrate with Amazon’s delivery fleet API—all while keeping latency under 200 ms for any request.

**Action**  
First, I set up an edge‑to‑cloud pipeline: LiDAR & camera sensors on each bay streamed to AWS IoT Core, where a lightweight inference model (TinyML YOLOv5) flagged occupied vs. free slots. The backend used Kinesis Data Streams to feed a real‑time Spark Structured Streaming job that fed a reinforcement‑learning policy (Deep Q‑Network) trained offline on historical traffic data. This policy calculated the shortest route for each incoming vehicle, adjusting in milliseconds as new cars arrived. I wrapped everything in a serverless architecture—Lambda functions, API Gateway, and DynamoDB for state persistence—to keep costs low.

**Result**  
Within three months of deployment, average pick‑up time dropped from 4 min to 1.2 min—a 70% reduction—boosting throughput by 150 cars per hour and saving roughly $18k/day in lost revenue. I learned that coupling edge inference with cloud‑based RL can deliver both low latency and high scalability for real‑world mobility problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
