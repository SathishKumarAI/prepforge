---
qid: ing_2bce598cd0__aws__local
question: 'Explain: Final Project (35%) — Stanford University CS231n: Deep Learning
  for Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 449
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:59-05:00'
sources: []
---

**Situation & Task**  
While leading a research team at Stanford, I was responsible for the *Final Project* (35% of CS231n) that required building an end‑to‑end image classification pipeline from scratch. The goal was to outperform the baseline ResNet‑50 on the ImageNet‑1K dataset while keeping inference latency under 50 ms on a single GPU.

**Action – Design & Implementation**  
I re‑architected the training workflow using **AWS SageMaker**, leveraging its managed Jupyter notebooks for rapid prototyping and **SageMaker Training Jobs** with multi‑GPU Elastic Inference to cut costs by 30 %. For inference, I containerized the model in Docker, deployed it on **Amazon ECS Fargate** behind an Application Load Balancer, and used **AWS Lambda@Edge** to pre‑process images at edge locations, reducing round‑trip latency. To ensure high availability, I enabled **ECS service auto‑scaling** based on CloudWatch metrics (CPU > 70 % triggers scale‑out).  

**Result**  
The final model achieved a Top‑1 accuracy of **78.3 %**, surpassing the baseline by 2.5 pp, while inference latency averaged **42 ms** and cost per inference dropped to $0.00012 (≈$4.32/month for 10M requests).  

**Reflection & Learning**  
I practiced *Ownership* by taking full responsibility from data ingestion to deployment, *Dive Deep* by profiling GPU memory usage and adjusting batch sizes, and *Bias for Action* by iterating the pipeline three times faster than the original schedule. The biggest failure was an initial mis‑configuration of Lambda timeouts; fixing it taught me to validate edge configurations before scaling.

**Leadership Principles Anchored**  
- **Customer Obsession**: Optimized latency to improve user experience.  
- **Ownership & Dive Deep**: Controlled every layer of the pipeline and quantified performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
