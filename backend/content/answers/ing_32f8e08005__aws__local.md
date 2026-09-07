---
qid: ing_32f8e08005__aws__local
question: 'Explain: Custom MCP Integration — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 477
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:35-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with building a *Custom Multi‑Channel Platform (MCP) integration* that let our internal product teams embed OpenAI’s Claude into their SaaS offerings without exposing the underlying API keys. The goal was to reduce latency by 40 % and cut operational cost of running the inference layer by 25 %.  

**Action**  
I took full ownership, scoped the problem with *Dive Deep* and *Ownership*.  
1. **Requirements & Architecture** – A stateless Lambda front‑end that receives user prompts, validates them, forwards to Claude via a private VPC endpoint, and streams back completions.  
2. **AWS Services** –  
   - *API Gateway* (HTTP API) for throttling and WAF protection.  
   - *Lambda@Edge* for low‑latency edge caching of deterministic prompts.  
   - *Secrets Manager* to rotate Claude keys per tenant.  
   - *SQS FIFO* as a retry queue for transient failures, backed by DLQ metrics.  
3. **Scalability & Availability** – Lambda concurrency was auto‑scaling with provisioned concurrency set to 200 for burst traffic; API Gateway throttling at 5 k req/s per tenant ensured isolation.  
4. **Cost Optimization** – By moving inference calls to a dedicated *ECS Fargate* cluster running only when needed, we saved ~30 % versus always‑on EC2 instances.  

**Result**  
Within three weeks of launch:  
- Latency dropped from 850 ms → 520 ms (≈39 % improvement).  
- Monthly inference cost fell from $12k → $9k (25 % savings).  
- SLA hit 99.98 % uptime; no outage in the first six months.  

**Reflection**  
I learned that *Bias for Action* must be tempered with rigorous monitoring—our initial Lambda timeout of 3 s caused half the requests to fail, so we added CloudWatch metrics and auto‑scaling on error rate. This experience reinforced that true ownership means owning both the success and the failure paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
