---
qid: ing_35e91d6a1a__aws__local
question: 'Explain: Summary — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 640
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:36-05:00'
sources: []
---

**Scenario (S):**  
While leading the ML inference pipeline for our recommendation engine, my team needed to boost throughput without increasing latency. I had to decide whether to use *concurrency* (handling multiple requests in a single process) or *parallelism* (splitting work across multiple processes/threads).  

**Task (T):**  
Deliver a 30 % increase in inference rate for the next product launch while keeping cost per request < $0.0001.

**Action (A):**  
I first **dive deep** into metrics: our Lambda‑based endpoint processed ~3,500 requests/sec with an average 120 ms latency; CPU usage hovered at 65 %. I built a small benchmark harness and profiled both approaches:

| Approach | Throughput (req/s) | Avg Latency (ms) | Cost ($/M req) |
|----------|-------------------|------------------|----------------|
| Concurrency (async‑io, single process) | 5,200 | 115 | 0.00008 |
| Parallelism (multi‑worker Docker on ECS Fargate) | 4,800 | 118 | 0.00010 |

Concurrency leveraged async I/O in Python with **AWS Lambda** + **Amazon API Gateway**, avoiding context switching overhead. Parallelism used **ECS Fargate** tasks with multiple workers but incurred higher idle CPU costs.

I chose concurrency, updated the Lambda function to use `asyncio` and a thread‑pool for GPU calls via **AWS SageMaker Runtime**. I also introduced **API Gateway caching** (TTL 60 s) to reduce repeated inference on identical inputs.

**Result (R):**  
Post‑deployment, throughput rose from 3,500 to 5,200 req/s (+48 %) and latency fell by 10 %. Cost per request dropped to $0.00008, achieving a 35 % cost saving against the target.  

---

### Leadership Principles Anchored
- **Customer Obsession:** Delivered faster recommendations, improving user satisfaction (CTR up 12 %).  
- **Ownership & Dive Deep:** Took full responsibility for performance tuning and performed granular profiling to inform decisions.  

### AWS Services Used
| Service | Purpose |
|---------|---------|
| Amazon API Gateway | Request routing & caching |
| AWS Lambda | Serverless inference with async I/O |
| SageMaker Runtime | Managed model hosting |
| CloudWatch Metrics | Monitoring throughput & latency |

**Bar‑raiser Takeaway:**  
- Showed *ownership* by driving the initiative from metrics to deployment.  
- Demonstrated *dive deep* through detailed profiling and cost analysis.  
- Quantified impact with real numbers (throughput, latency, cost).  
- Learned from failure: parallelism seemed promising but didn’t scale cost‑effectively; I pivoted based on data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
