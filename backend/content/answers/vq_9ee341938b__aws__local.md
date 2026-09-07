---
qid: vq_9ee341938b__aws__local
question: performance. What may we trade for lower costs?
topic: DevOps
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:06:21-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
In my last role at a fintech startup, we ran a CI/CD pipeline on **AWS CodeBuild** and **CodePipeline** that processed ~4 M commits per month. The build queue latency hit 12 min during peak hours, eroding developer satisfaction.

**Action (Dive Deep & Bias for Action)**  
I first profiled the builds with *CloudWatch Logs Insights* and identified that a single heavy‑weight Docker image (~2 GB) was inflating **compute time**. I introduced a multi‑stage build:

1. **Cache layers** in an ECR repository to avoid rebuilding dependencies.  
2. Switch from **Linux/Ubuntu** to the lightweight *Amazon Linux 2* runtime, cutting image size by 70%.  
3. Enable **build caching** in CodeBuild and parallelize test stages with **AWS Fargate Spot**.

To keep cost low I replaced a reserved EC2 build pool (USD $0.10/hr) with on‑demand Spot instances (≈ $0.02/hr), accepting the 30 % risk of interruptions but adding a retry layer in CodePipeline.

**Result (Deliver Results)**  
- Build queue latency dropped from **12 min to 2 min** (80 % reduction).  
- Monthly build cost fell from **USD $3,200 to USD $1,100**, a **65 % savings**.  
- Developer velocity increased by **+15 % commits/day**.

**Learning & Trade‑offs**  
I learned that *performance* can be traded for *cost* when you replace heavyweight runtimes with lightweight ones and leverage Spot capacity, but you must add fault tolerance (retry logic) to maintain reliability. This balance kept the pipeline both fast and budget‑friendly—exactly what our customers expected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
