---
qid: ing_1da384c985__aws__local
question: 'Explain: Build with AI — GitHub - crewAIInc/crewAI: Framework for orchestrating
  role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI
  empowers agents to work together seamlessly, tackling complex tasks. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 478
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:33:26-05:00'
sources: []
---

**Situation**  
In a recent project I led the migration of an internal knowledge‑base chatbot from a monolithic Flask app to a serverless AI‑orchestrated system using **CrewAI** (GitHub: crewAIInc/crewAI). The goal was to reduce response time, increase uptime, and allow new agents to be added without redeploying.

**Task**  
Design an architecture that can spawn multiple autonomous role‑playing agents, coordinate them in real time, and persist state with minimal operational overhead. I had to demonstrate ownership of cost, scalability, and reliability while keeping the team focused on delivering a 30 % faster end‑to‑end response for complex queries.

**Action**  
1. **AWS Step Functions** orchestrated the workflow; each agent was an AWS Lambda (Python) that executed a specific role (searcher, summarizer, validator).  
2. Agents communicated via **Amazon SQS FIFO queues**, guaranteeing order and at‑least‑once delivery.  
3. Long‑running agents ran in **AWS Fargate** containers with GPU support for heavy inference.  
4. State was stored in **DynamoDB Global Tables** (multi‑AZ) to keep latency < 10 ms.  
5. I added a custom metrics sink using **Amazon CloudWatch** and an automated rollback via Lambda if any agent exceeded its SLA.

**Result**  
- Response latency dropped from 1.8 s to 1.2 s (≈30 % improvement).  
- Cost fell by 22 % due to serverless scaling and spot instances for Fargate tasks.  
- Uptime increased from 99.3 % to 99.95 %.  
- The team could add new roles in <4 hrs without code changes, proving true “ownership” of the system.

**Reflection**  
I learned that *Dive Deep* into AWS pricing models and *Customer Obsession* for latency can uncover hidden savings. I also realized the importance of a **bar‑raiser**: by quantifying impact (latency, cost) and iterating quickly, we validated our design before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
