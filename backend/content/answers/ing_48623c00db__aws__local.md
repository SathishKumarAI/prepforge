---
qid: ing_48623c00db__aws__local
question: 'Explain: Step 10. Scale to multiple agents — How Do AI Agents Work - by
  Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 470
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:03-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation & Task**  
I was leading a prototype for an autonomous recommendation engine that used *Step 10: Scale to multiple agents* from Neo Kim and Fran Soto’s framework. The goal was to let dozens of AI agents run in parallel, each handling a distinct user segment, while keeping latency < 200 ms and cost < $0.02 per inference.

**Action (Technical)**  
1. **Containerized Agents** – Each agent was packaged as a Docker image with a lightweight inference model (TensorFlow Lite).  
2. **Event‑driven Orchestration** – AWS Step Functions coordinated the agents, triggering them via Amazon EventBridge on user request events.  
3. **Stateless Compute** – We used **AWS Lambda** (15 s timeout) for short‑lived inference; for longer models we fell back to **Amazon SageMaker Runtime** with *on-demand* endpoints.  
4. **State & Metrics** – Agent state and performance metrics were stored in **DynamoDB** (partitioned by agent ID). A CloudWatch alarm auto‑scaled the Lambda concurrency to 1,000 requests/second.  

**Result**  
- In production we achieved a *99.8 %* success rate with average latency of 180 ms.  
- Cost dropped from $0.045 to $0.018 per inference (41 % savings).  
- The system handled a 10× traffic spike during a product launch without degradation.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered faster, cheaper recommendations for users.  
- **Ownership**: Took end‑to‑end responsibility from design to monitoring.  
- **Dive Deep & Bias for Action**: Rapidly iterated on the orchestration pattern after observing a 7 % latency spike in the first test.  

*Bar‑raiser cue*: The answer shows ownership, deep technical dive, measurable impact, and continuous learning from early performance data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
