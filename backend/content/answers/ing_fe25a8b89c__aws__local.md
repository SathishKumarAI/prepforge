---
qid: ing_fe25a8b89c__aws__local
question: 'Explain: Summary — Tools vs. Subagents: Building Effective AI Agents Without
  Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 393
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:50-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a conversational AI for our e‑commerce platform that could handle product queries, recommend bundles, and process returns—all while staying within the $0.02/interaction cost budget.

**Action (Design)**  
Instead of a monolithic “super‑agent,” I split responsibilities into *Tools* (stateless microservices) and *Subagents* (stateful orchestrators).  
- **Tools**: Lambda functions powered by SageMaker endpoints for NLU, RDS‑proxy backed by Aurora Serverless for context storage, and DynamoDB for session caching.  
- **Subagents**: Step Functions that sequence Tools, maintain conversation state, and invoke fallback logic.  

I used **Amazon API Gateway + Cognito** for authentication, **CloudWatch Logs** for real‑time monitoring, and **AWS X-Ray** to trace latency. I added a *policy layer* in the subagent to drop or redirect calls when Tool latency > 200 ms, preventing cascading failures.

**Result**  
Deployment reduced average response time from 1.2 s to 0.45 s (55% improvement) and cut per‑interaction cost by 37%. Uptime hit 99.95%, and we saw a 12% lift in conversion rates during the pilot.

**Reflection**  
I learned that *Ownership* means iterating on the simplest architecture first; *Dive Deep* was crucial when debugging Tool latency spikes—X‑Ray traces revealed a SageMaker endpoint throttling issue, prompting us to add an autoscaling policy. This approach keeps the system flexible, cost‑effective, and easy to evolve—a true bar‑raiser for AI product teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
