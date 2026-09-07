---
qid: ing_7be63d06b8__aws__local
question: 'Explain: Non-functional — Ai Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 422
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:36-05:00'
sources: []
---

**Situation & Task**  
I led the launch of a *Non‑Functional AI Code Assistant* for our internal dev‑ops team—an LLM that auto‑generates boilerplate code and checks security compliance in real time. The goal was to reduce manual review time by 70 % while keeping SLA below 2 s per request.

**Action (Design & Tech)**  
- **Model**: OpenAI GPT‑4 fine‑tuned on our repo + OWASP rules.  
- **Infrastructure**: Deployed behind API Gateway → Lambda (Python) for stateless inference, backed by **Amazon SageMaker Edge Manager** to keep the model locally in each region.  
- **Scalability**: Autoscaling via Lambda concurrency limits; cache popular snippets in ElastiCache Redis (10 ms latency).  
- **Availability**: Multi‑AZ deployment, health checks on CloudWatch, failover to a secondary SageMaker endpoint.  
- **Cost**: Spot instances for batch fine‑tuning; serverless inference cuts idle cost to <$0.02/100 req.  
- **Security**: VPC endpoints + IAM roles; encryption at rest with KMS.

**Result (Data‑Driven)**  
- 72 % reduction in code review time (from 8 min to 2.1 min).  
- SLA hit 98 % of the time, meeting our 2 s target.  
- Cost per request dropped from $0.15 to $0.04, saving ~$200k annually.

**Reflection & Learning**  
I owned the end‑to‑end pipeline, diving deep into latency bottlenecks and iterating on caching strategies. The bar‑raiser will note my ownership of metrics, the depth of architectural trade‑offs, and how I turned a risky LLM deployment into a cost‑effective, high‑availability service—exactly what Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
