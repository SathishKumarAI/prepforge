---
qid: ing_0f03510df6__aws__local
question: 'Explain: Deploy — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 445
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:26-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with turning a research prototype for an “agentic AI” system—an autonomous agent that could learn user intent and execute tasks across multiple SaaS products—into a production‑grade, cost‑efficient service for 50 k daily active users.  

**Action**  
*Ownership & Customer Obsession*: I scoped the problem by interviewing power users, mapping their workflows, and defining success metrics (task completion rate > 90%, latency < 1 s).  
*Technical Design*:  
- **Model Serving** – Amazon SageMaker endpoint behind an Application Load Balancer with Auto Scaling to keep 99.9 % availability.  
- **State Management** – DynamoDB for session context, TTL on items to auto‑expire idle sessions.  
- **Orchestration** – Step Functions chaining Lambda functions (Python) that call the model, apply business rules, and trigger downstream APIs (e.g., Salesforce).  
- **Observability** – CloudWatch metrics + X-Ray tracing; we set a 95 % success threshold and auto‑trigger an SNS alert for SLA breaches.  
*Bias for Action*: I shipped a minimal viable product in 3 weeks by reusing existing SageMaker models, then iterated using A/B tests to tune the policy network.

**Result**  
- Task completion rose from **73 %** (baseline) to **94 %** within two months.  
- Latency dropped from 2.8 s to **0.9 s**, meeting our SLA.  
- Operational cost decreased by **27 %** through right‑sizeing the SageMaker endpoint and using Spot Instances for training.  

**Learnings (Bar‑raiser focus)**  
I realized early that without a proper state store, the agent would “forget” context between calls; adding DynamoDB solved this. The experiment taught me to validate assumptions with real user data before committing to expensive compute resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
