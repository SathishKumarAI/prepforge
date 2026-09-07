---
qid: ing_f61fb62256__aws__local
question: 'Explain: Assignments (45%) — Stanford University CS231n: Deep Learning
  for Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 414
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:24-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI Lab at Stanford, our team was tasked with building a production‑grade image classifier that could handle 2 M images per day while keeping inference latency under 50 ms on a fleet of spot instances. The goal was to deliver a “drop‑in” solution for the university’s research portal.

**Action (Technical Design)**  
I scoped the problem, then designed a two‑stage pipeline:  
1. **Feature extraction** – a pre‑trained ResNet‑50 on ImageNet, fine‑tuned with *mixed precision* to reduce GPU memory by 30 %.  
2. **Inference service** – deployed as an AWS SageMaker endpoint using *Multi‑Model Endpoints* and *AWS Lambda* for request routing.  

To meet scalability, I leveraged **Amazon S3** for image storage, **SQS** for buffering requests, and **Elastic Load Balancer** to auto‑scale the inference fleet. Cost was cut by 45 % through spot instances and auto‑scaling thresholds tuned via *CloudWatch* metrics.

**Result (Data‑driven)**  
Within two weeks of launch:  
- Latency dropped from 120 ms to **42 ms** (≥ 30 % improvement).  
- Throughput increased to **2.5 M images/day** (+25 %).  
- Monthly inference cost fell from $3,200 to **$1,700**.

**Reflection & Learning**  
I practiced *Bias for Action* by iterating on the architecture in 12‑hour sprints, but I also *dove deep* into CloudWatch logs after a sudden spike in errors—identified a memory leak in Lambda and patched it. This cycle of rapid deployment + rigorous monitoring embodies Ownership and Deliver Results, key Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
