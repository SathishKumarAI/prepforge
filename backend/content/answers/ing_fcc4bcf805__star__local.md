---
qid: ing_fcc4bcf805__star__local
question: 'Explain: A quick how-to on capacity planning for an application deployed
  in AWS: Laxmi Nagarajan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 418
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:04-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a real‑time recommendation engine that served millions of users per day. During the holiday season our traffic spiked 4×, and the model’s inference latency jumped from 120 ms to over 500 ms, causing a 15% drop in conversion rates.

**Task:**  
I needed to design a scalable capacity plan on AWS so we could handle peak loads without overspending while keeping response times below 200 ms.

**Action:**  
First, I profiled the inference pipeline with CloudWatch and X-Ray to identify bottlenecks: GPU utilization hit 70% on the first 4 EC2 g5.xlarge instances. I introduced an Auto Scaling group that spun up additional g5.xlarge workers based on a custom CloudWatch metric (CPU + GPU usage > 65%) with a cooldown of 60 s. To reduce cold‑start costs, I pre‑warm the containers using ECS Fargate Spot and kept a baseline of two instances running during off‑peak hours. For storage I switched from S3 to Amazon EFS for the model artifacts, cutting load times by 30%. Finally, I set up a simple SageMaker endpoint in multi‑model mode to serve updates without redeploying containers.

**Result:**  
The system handled a 5× traffic surge during Christmas with average latency of 170 ms and no service interruptions. Costs were down 20% compared to the previous static fleet, and the model’s AUC improved by 0.02 due to more timely predictions. I learned that proactive metric‑driven scaling plus hybrid GPU/CPU provisioning is key for ML workloads in AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
