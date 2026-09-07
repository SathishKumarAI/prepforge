---
qid: ing_a59ffc0657__aws__local
question: Design an agent that operates a web browser to complete multi-step tasks.
  How do you make it reliable enough to ship?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 394
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:29-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional squad tasked with shipping an AI‑driven browser agent that could autonomously finish complex web workflows (e.g., booking flights, filling tax forms). The goal was to hit **99.9 % task success** while keeping latency under 2 s per step.

**Action**  
*Customer Obsession & Ownership*: I mapped every user interaction, built a *task graph* of UI elements and expected states.  
*Dive Deep*: Implemented a two‑tier execution engine—an **LLM policy model** (Amazon Bedrock) for high‑level intent, and a deterministic **rule‑based executor** (AWS Lambda + Selenium Grid on ECS Fargate) that validates DOM changes before proceeding.  
*Bias for Action & Invent & Simplify*: Added an **automatic retry loop** with exponential backoff and a *checkpointing* system storing the last known stable state in DynamoDB, so failures can resume without re‑starting from scratch.  
*Deliver Results*: Integrated AWS X-Ray to trace every action, enabling real‑time dashboards (CloudWatch) that surface failure rates per step.

**Result**  
After iterative testing, the agent achieved **99.92 % success** on 10,000 real‑world scenarios, with average latency 1.7 s and cost $0.04/agent‑run (Lambda + Bedrock). The rollback mechanism cut manual remediation by **70 %**, freeing engineers for feature work.

**Bar‑raiser takeaways**  
- Demonstrated ownership of the end‑to‑end flow.  
- Deep dive into failure modes with measurable KPIs.  
- Quantified impact and continuous learning loop (fail fast, analyze X-Ray traces).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
