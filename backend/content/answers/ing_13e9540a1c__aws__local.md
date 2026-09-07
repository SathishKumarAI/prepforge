---
qid: ing_13e9540a1c__aws__local
question: 'Explain: What an AI Gateway Is — Ai Gateways And Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 480
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:09:57-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
In a recent e‑commerce platform I was tasked to cut latency for our recommendation engine by 30 %. The only bottleneck was the monolithic inference service that routed requests to dozens of models.

**Task**  
Design an *AI Gateway* that abstracts model routing, reduces latency, and gives ops visibility into usage per model.

**Action (Dive Deep & Bias for Action)**  
1. **Gateway Layer** – A lightweight API on Amazon API Gateway + Lambda Authorizer that receives the request, extracts user context, and forwards it to an *Inference Router* service built in Go.  
2. **Model Registry** – DynamoDB holds model metadata (ARN, version, health status). The router queries this table once per request and caches results in ElastiCache Redis for 5 s.  
3. **Routing Logic** – Uses a simple weighted round‑robin algorithm that pulls weights from CloudWatch metrics (request count, error rate) stored in DynamoDB.  
4. **Deployment** – Each model runs in an ECS Fargate task behind an Application Load Balancer with target groups per model. The gateway invokes the appropriate ALB via its DNS name.

**Result (Deliver Results)**  
- Latency dropped from 350 ms to **190 ms** (45 % improvement).  
- Model uptime rose from 94 % to **99.7 %** because health checks now terminate unhealthy tasks immediately.  
- Operational cost decreased by 18 % due to fewer idle inference containers.

**Learnings**  
- *Ownership*: I wrote the full end‑to‑end pipeline, including rollback scripts for model rollouts.  
- *Dive Deep*: Profiling showed that caching the registry lookup reduced CPU usage by 22 %.  
- *Failure Insight*: Early prototype used SQS for routing; it introduced a 120 ms queue delay—removed in favor of direct ALB calls after observing the bottleneck.

**Key AWS Services Used**: API Gateway, Lambda, DynamoDB, ElastiCache Redis, ECS Fargate, Application Load Balancer, CloudWatch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
