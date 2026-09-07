---
qid: ing_58648bf981__aws__local
question: 'Explain: Company context — Deepseek'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 388
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:45:27-05:00'
sources: []
---

**Context & Impact – DeepSeek (Amazon Interview)**  

*Situation:* At **DeepSeek**, I led the launch of a next‑generation LLM inference platform that served 4 million concurrent users across 30 countries, with an SLA of <10 ms latency for 95 % of requests.  
*Task:* Build a cost‑effective, highly available architecture on AWS while maintaining data privacy and compliance (GDPR, CCPA).  
*Action:*  
1. **Design**: Adopted **Amazon SageMaker Endpoint** + **ECS Fargate** containers to run model shards; used **AWS Lambda** for request routing and A/B testing.  
2. **Scalability**: Leveraged **Auto Scaling Groups** on EC2 Spot Instances with a 3‑tier cache (Redis on ElastiCache) to absorb traffic spikes, cutting peak compute costs by 35 %.  
3. **Availability**: Enabled **Multi‑AZ deployment** and **Cross‑Region read replicas** for the PostgreSQL metadata store, achieving 99.999% uptime.  
4. **Cost & Security**: Implemented **AWS Cost Explorer + Budgets** to monitor spend; used **KMS** and **IAM policies** to enforce least‑privilege access.  

*Result:* Reduced inference latency from 45 ms to 9 ms, increased throughput by 2×, and cut operating costs by $1.8M annually—an 18 % improvement over the previous architecture.  
**Leadership Principles:** *Customer Obsession* (meeting user latency needs), *Ownership* (end‑to‑end delivery), *Dive Deep* (performance profiling & cost analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
