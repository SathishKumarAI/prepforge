---
qid: ing_1869cac96a__aws__local
question: 'Explain: Evolution and Scale of Uber''s Delivery Search Platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 471
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:44-05:00'
sources: []
---

**Situation & Task**  
When I joined Uber’s Logistics team, the delivery‑search engine was a monolithic Java service that handled 12 M search requests per day but struggled with latency spikes during peak hours (average <200 ms). The leadership team asked me to evolve it into a scalable, fault‑tolerant platform while cutting costs by 30 %.  

**Action – Design & Implementation**  
1. **Decouple the pipeline**: split “query parsing”, “candidate ranking” and “result formatting” into independent Lambda functions (Serverless).  
2. **Event‑driven architecture**: use Amazon SQS for queuing search requests, triggering a Step Functions state machine that orchestrates the functions.  
3. **Model serving**: host TensorFlow models in SageMaker endpoints behind an Application Load Balancer; autoscale based on CloudWatch metrics (CPU >70 % → +1 instance).  
4. **Caching layer**: Redis‑compatible ElastiCache for hot search terms, reducing model calls by 45 %.  
5. **Observability**: CloudWatch Logs + X-Ray tracing to surface latency bottlenecks; automated rollback on SLA breach.  

**Result**  
- Latency dropped from 200 ms to 70 ms (30 % faster) during peak traffic.  
- Cost decreased by 32 % due to serverless compute and reduced EC2 usage.  
- Uptime improved to 99.99 %, eliminating the previous “search freeze” incidents that cost ~\$1M in lost revenue per month.  

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end solution, diving deep into performance metrics and iterating on model inference latency. The trade‑off of moving to serverless was higher cold‑start risk, which I mitigated with provisioned concurrency. Post‑deployment A/B tests validated gains, and lessons learned were shared in a cross‑team workshop to avoid similar “single‑point‑of‑failure” pitfalls in future services.  

> **Leadership Principles**: *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
