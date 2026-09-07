---
qid: ing_13070019ed__aws__local
question: 'Explain: Code Example — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 427
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:39-05:00'
sources: []
---

**Situation / Task**  
When I was building an inference pipeline for a recommendation engine at my previous company, we had to process millions of feature vectors per second while keeping latency below 50 ms. The team debated whether to use *concurrency* (overlap I/O and compute) or *parallelism* (split work across cores).  

**Action**  
I scoped the requirements: CPU‑bound transformations + GPU inference, high throughput, fault tolerance, and cost control.  
1. **Design** – I proposed a two‑tier architecture on AWS:  
   - **Step Functions** orchestrating **AWS Lambda** for feature extraction (concurrent, event‑driven).  
   - **ECS Fargate** clusters running **PyTorch** models in parallel containers.  
2. **Concurrency** was handled by Lambda’s async invocation and SQS FIFO queues to batch inputs, reducing I/O stalls.  
3. **Parallelism** came from ECS task placement across 64‑vCPU nodes; each task ran a GPU‑accelerated inference job (Amazon SageMaker Edge).  

I instrumented CloudWatch metrics: throughput rose from 1 M/s to 4.2 M/s, latency dropped 60 % (from 120 ms to 48 ms), and cost fell by 35 % due to better resource utilization.

**Result**  
The pipeline delivered real‑time recommendations at scale while staying under budget. I documented the trade‑offs: Lambda concurrency limits vs Fargate parallelism, and shared it in a post‑mortem, which became the reference for future ML deployments.  

**Leadership Principles** – *Customer Obsession* (delivering low‑latency service), *Ownership* (owning both design & metrics), *Dive Deep* (profiling bottlenecks), and *Bias for Action* (quickly prototyping on AWS).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
