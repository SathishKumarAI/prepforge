---
qid: ing_5a43da0601__aws__local
question: 'Explain: storming up the board but it''s just — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 421
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:47-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that had to build an AI‑driven “chess adventure” – a web app where users could play against a reinforcement‑learning model while the system learned from every game. The goal was to achieve sub‑second move latency, 99.9 % uptime, and scale to 100k concurrent users.

**Action (Design & Implementation)**  
* **Data pipeline**: Daily replay logs streamed from EC2 workers to Amazon Kinesis Data Streams → processed by Lambda into a DynamoDB “game‑state” table.  
* **Model training**: Every night an EMR Spark job pulls the latest data, trains a Deep Q‑Network on 1 M games, and uploads the checkpoint to S3.  
* **Inference**: The trained model is served via Amazon SageMaker endpoint (multi‑model). Lambda functions in API Gateway forward user moves, receive best move in <200 ms.  
* **Scalability & Cost**: Auto‑scaling Lambda + Spot instances for training cuts compute cost 40 %. Using Aurora Serverless for session persistence keeps RDS costs < $300/month while handling 10k TPS.

**Result**  
Within three months, we hit 99.92 % uptime and reduced move latency from 650 ms to 180 ms. User engagement rose 35 % (daily active users) and churn fell 22 %.  

**Reflection**  
I owned the end‑to‑end pipeline, dug deep into Lambda throttling logs to identify bottlenecks, and iterated on the model architecture based on real‑world feedback—demonstrating *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
