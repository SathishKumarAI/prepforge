---
qid: ing_2bd793e58a__aws__local
question: 'Explain: Web Servers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 472
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:07-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of a real‑time recommendation engine from an on‑prem Java stack to **AWS Lambda + Amazon API Gateway**. The system had to serve ~200 k requests/second while keeping latency under 120 ms for every user.

**Action**  
I first dissected *concurrency* vs *parallelism*: concurrency is the ability of a single process to handle multiple I/O‑bound tasks by interleaving execution, whereas parallelism splits CPU‑bound work across cores or machines.  
1. **Concurrency** – I enabled Lambda’s built‑in async invocation and used **Amazon SQS FIFO** queues to buffer incoming HTTP requests. This allowed the same Lambda function to serve many connections without blocking on database lookups.  
2. **Parallelism** – For the heavy matrix multiplication in the model, I offloaded to **AWS Batch** with Spot Instances, scaling out across 32 vCPUs per job. Each batch job processed a shard of the request payload (≈ 10 k rows) and wrote results back to **Amazon DynamoDB**.

I also introduced **AWS Step Functions** to orchestrate the flow: API Gateway → SQS → Lambda (pre‑processing) → Batch (model inference) → Lambda (post‑processing). This split kept the overall request path linear but parallelized the compute‑intensive step.  

**Result**  
- Latency dropped from 250 ms to **78 ms** on average, meeting SLA.  
- Throughput increased by **4×** without any code changes.  
- Cost per inference fell from $0.00018 to $0.00012 (≈ 30 % savings).  

**Reflection**  
I learned that over‑parallelizing a Lambda function can backfire if the underlying service (e.g., DynamoDB) becomes a bottleneck; therefore I always profile each stage before scaling. This experience reinforced my belief in *Dive Deep* and *Ownership*, ensuring every layer of the stack is tuned for both concurrency and parallelism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
