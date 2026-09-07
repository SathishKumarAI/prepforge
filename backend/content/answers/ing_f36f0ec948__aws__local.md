---
qid: ing_f36f0ec948__aws__local
question: 'Can the task run independently? — Tools vs. Subagents: Building Effective
  AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 452
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:50-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a cross‑functional team at AWS, we were asked to prototype an “AI Agent” that could autonomously answer support tickets and trigger downstream workflows. The requirement was tight: the agent had to run independently on **Amazon SageMaker Runtime** without manual intervention, yet we couldn’t afford the overhead of building dozens of micro‑services.

**Action (A)**  
I applied *Customer Obsession* and *Ownership*. I first mapped out the core capabilities—intent classification, entity extraction, and action dispatch. Instead of spinning up separate Lambda “subagents”, I used **Amazon SageMaker Pipelines** to chain a single inference endpoint with **Step Functions** for orchestration. The Step Function state machine handled branching logic (e.g., escalation vs. auto‑reply) and logged every decision in **CloudWatch Logs**. For data persistence, I leveraged **DynamoDB** as the lightweight “tool” store, avoiding an over‑engineered relational DB.

I also practiced *Dive Deep* by instrumenting metrics: request latency, error rate, and SLA compliance. The design achieved **99.9% availability** with a single endpoint, while Step Functions added only ~15 ms overhead—well below our 500 ms target.

**Result (R)**  
The prototype processed **12,000 tickets/day**, reducing human effort by **68%** and cutting average resolution time from 3.2 h to 0.8 h. Cost savings were $18k annually versus a projected $42k for a multi‑service architecture.  

**Learnings**  
I learned that “tools” (SageMaker, Step Functions) can replace *subagents* when you design with the right AWS services and keep the state machine simple. This approach satisfies the bar‑raiser’s focus on ownership, depth of analysis, measurable impact, and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
