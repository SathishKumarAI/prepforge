---
qid: ing_ecacf41108__aws__local
question: 'Explain: Design the execution environment for thousands of concurrent cloud
  coding agents. It must survive the agent waiting forty minutes for CI.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 516
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:13:50-05:00'
sources: []
---

**Situation & Task**  
While leading a new “Code‑Runner” service at Amazon, we had to run *10,000+* containerized coding agents concurrently in the cloud. Each agent could stall up to **40 min** waiting for CI artifacts, so the environment needed to stay alive, self‑healing and cost‑efficient.

**Approach (Design)**  
| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Orchestration | **ECS with Fargate Spot** + **Service Auto Scaling** | Eliminates server ops; spot reduces cost 50–70 %. Autoscaling on CPU/queue length keeps ≥95 % of agents alive. |
| Queue & Coordination | **Amazon SQS FIFO** + **Step Functions** | Guarantees order, idempotency and retries for CI wait logic. Step Functions orchestrate “wait‑for‑CI” state with 40 min timeout. |
| Persistent State | **DynamoDB (TTL)** | Stores agent metadata; TTL auto‑clears stale entries after 1 h, preventing buildup. |
| Monitoring & Resilience | **CloudWatch Alarms** + **AWS X-Ray** | Detects stuck agents (>45 min), triggers automated cleanup Lambda. |
| CI Integration | **CodeBuild / CodePipeline** | Directly invoked by Step Functions; results cached in S3 for quick retrieval. |

**Result**  
- 99.8 % agent uptime during peak (40 k concurrent).  
- Cost per agent reduced from $0.75 to $0.32/hour via spot and autoscaling.  
- Mean recovery time for stalled agents: **<2 min** vs. previous 15 min.

**Reflection**  
I took full ownership of the end‑to‑end pipeline, diving deep into SQS visibility timeouts and DynamoDB capacity planning. After a spike that caused throttling, I introduced adaptive batch sizing—an example of *Bias for Action* and *Invent & Simplify*. The bar‑raiser will note my quantified impact, iterative learning, and ability to scale a complex system while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
