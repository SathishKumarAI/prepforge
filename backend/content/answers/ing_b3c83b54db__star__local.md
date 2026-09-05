---
qid: ing_b3c83b54db__star__local
question: 'Explain: Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 319
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:30-05:00'
sources: []
---

**Situation:**  
While leading the deployment of a recommendation engine for a mid‑size e‑commerce platform, we noticed that our nightly batch inference job was exceeding its SLA—processing 2 M user profiles took 90 minutes on our single GPU server.

**Task:**  
I had to cut inference time by at least 50% without blowing the budget or compromising model accuracy.

**Action:**  
First, I evaluated vertical scaling: adding a second GPU and more RAM. The cost per hour doubled, but the job still ran slow due to disk‑to‑GPU transfer bottlenecks. Next, I shifted to horizontal scaling—spinning up an autoscaling Kubernetes cluster with 4 x NVIDIA A100 pods. I refactored the inference pipeline into a stateless microservice, added a Redis cache for precomputed embeddings, and used Ray to distribute data shards across pods. I also introduced mixed‑precision (FP16) to reduce memory footprint.

**Result:**  
Inference time dropped from 90 minutes to 30 minutes—an 66% reduction—while keeping costs within the original budget because we only ran the extra pods during peak hours. The exercise taught me that horizontal scaling, combined with data partitioning and precision tuning, is often more cost‑effective than simply beefing up a single machine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
