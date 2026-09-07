---
qid: ing_59a070e081__aws__local
question: 'Explain: Pattern 1 – AgentWorkflow (i.e. linear “swarm” pattern)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 482
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:48:31-05:00'
sources: []
---

**Pattern 1 – AgentWorkflow (Linear “Swarm”)**

*Leadership Principles:* **Customer Obsession & Ownership**  
*Behavioral (STAR):*  

- **Situation:** A client needed to process millions of customer orders in real time, each requiring validation, enrichment, and routing.  
- **Task:** Design a fault‑tolerant workflow that scales elastically while keeping latency < 200 ms per order.  
- **Action:** I architected an *AgentWorkflow* using AWS Step Functions with parallel “agent” states (one per microservice). Each agent runs in its own Lambda or ECS task, pulling work from a central SQS queue. The orchestrator (Step Function) tracks progress, retries failures, and aggregates results before publishing to SNS for downstream consumers.  
- **Result:** Throughput rose from 2 k/s to 25 k/s, latency dropped by 70%, and cost fell 35% thanks to serverless scaling and stateful retry logic.  

*Technical/System:*  

1. **Requirements** – linear progression with independent steps, idempotent agents, minimal inter‑agent coupling.  
2. **Design** – Step Functions → SQS → Lambda/ECS agents → DynamoDB for idempotency & audit.  
3. **AWS Services** – Step Functions (workflow), SQS (message bus), Lambda/ECS (agents), DynamoDB (state), CloudWatch/ X-Ray (monitoring).  
4. **Scalability** – Auto‑scaling of Lambdas/ECS; SQS fan‑out ensures no bottleneck.  
5. **Availability** – Multi‑AZ SQS, Step Functions’ built‑in retry; agents are stateless so any instance can pick up work.  
6. **Cost** – Pay per invocation/second; no idle servers; reserved capacity optional for predictable loads.  

*Bar‑raiser focus:* ownership of end‑to‑end latency, deep dive into failure modes (e.g., out‑of‑order messages), quantified impact on business KPIs, and lessons learned from initial monolithic trials that caused 30% higher cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
