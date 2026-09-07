---
qid: ing_6606257432__aws__local
question: 'Explain: Frameworks — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 477
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:15:48-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous company, we were tasked to launch an *intelligent agent* that could autonomously interact with external SaaS tools (CRM, billing, analytics) for real‑time decision making. The goal was to reduce manual ticket triage by 60 % within six months.

**Action**  
I built a modular framework based on **AWS Step Functions + Amazon Lex** as the orchestration layer, and **Amazon SageMaker** for the core LLM that drives the agent’s intent classification.  
*Tool‑use logic* was encapsulated in reusable Lambda “skill” modules (e.g., `UpdateOpportunity`, `GenerateInvoice`), each exposed via API Gateway and authenticated with IAM roles—ensuring least privilege. The framework supports **dynamic skill injection**: new tools can be added without redeploying the core model, satisfying *Invent & Simplify*.

Key design decisions:
- **Scalability**: Step Functions automatically scale to 10 k concurrent executions; Lambda concurrency limits are adjusted per workload.  
- **Availability**: All services run in a multi‑AZ VPC with RDS Aurora Serverless for persistent state, giving 99.999 % uptime.  
- **Cost**: Leveraging on‑demand SageMaker endpoints with spot training and using Lambda’s pay‑per‑execution model kept quarterly spend under $12k versus an estimated $25k for a monolithic solution.

**Result**  
Within four months the agent handled 70 % of support tickets, cutting resolution time from 4.2 h to 1.3 h (a 69 % reduction). The framework’s modularity allowed us to add two new tools in just one sprint, proving *Ownership* and *Bias for Action*.  

**Reflection**  
The first failure was over‑optimizing the LLM size; we incurred higher latency. We pivoted to a distilled model, reducing inference time by 35 % while maintaining accuracy—demonstrating *Dive Deep* and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
