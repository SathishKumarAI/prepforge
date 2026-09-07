---
qid: ing_50e7d38c23__aws__local
question: 'Explain: NVIDIA System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 458
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:27:50-05:00'
sources: []
---

**Situation / Task**  
In a recent FAANG‑style interview I was asked to design an end‑to‑end ML pipeline that ingests real‑time video streams, runs inference on NVIDIA GPUs, and serves predictions back to a mobile app with < 200 ms latency.

**Action**  
I broke the problem into three layers: ingestion, compute, and serving.  
1. **Ingestion** – use Amazon Kinesis Video Streams to buffer frames; this gives us auto‑scaling shards and low‑latency delivery.  
2. **Compute** – spin up an Auto Scaling group of `g4dn.xlarge` EC2 instances behind a Network Load Balancer. Each instance runs Docker containers orchestrated by ECS Fargate, leveraging NVIDIA’s CUDA‑enabled AMI for GPU passthrough. The inference model is frozen in an Amazon SageMaker endpoint (real‑time mode) to guarantee 30 fps throughput per instance.  
3. **Serving** – predictions are published back to Kinesis Video Streams and cached in Amazon ElastiCache Redis for a 5 ms read window, then pushed via WebSocket to the mobile client.

I estimated that with 10 instances we can handle 1,000 concurrent streams (≈30 fps each) while keeping cost < $0.20 per stream/day. I also added an S3 archive tier for failed frames and scheduled nightly retraining jobs on SageMaker Pipelines.

**Result**  
Prototype hit the latency target (190 ms average) and handled 1,200 concurrent streams in a load test, scaling linearly to 10k with a cost of $18K/month.  

**Leadership Principles** – **Customer Obsession** (meeting real‑time needs), **Ownership** (designing for failure recovery), **Dive Deep** (choosing GPU types & autoscaling logic).  
Bar‑raisers focus on my ownership of the end‑to‑end flow, quantitative impact (latency, cost, throughput), and how I mitigated a past outage by adding a retry layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
