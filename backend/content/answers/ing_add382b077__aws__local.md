---
qid: ing_add382b077__aws__local
question: 'Explain: Harness — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 536
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:36-05:00'
sources: []
---

**Situation**  
While leading a cross‑functional team at my previous company, we were tasked with launching an internal “AI‑powered agent” platform for rapid prototyping of conversational bots. The existing stack was monolithic and couldn’t scale to the 10 k concurrent users we projected after product adoption.

**Task**  
I chose to evaluate **Harness**, a TypeScript AI framework that abstracts model orchestration, prompting, and state management into reusable components. My goal: deliver a production‑ready platform in 12 weeks while keeping cloud spend < $30K/month.

**Action**  
1. **Requirements & Design** – Defined API contracts for agent lifecycle (init → run → shutdown) and data pipelines for fine‑tuning.  
2. **AWS Services** – Deployed the framework on **Amazon ECS Fargate** (serverless containers) with **EFS** for shared state, **SageMaker endpoints** for LLM inference, and **Step Functions** to orchestrate multi‑turn dialogs.  
3. **Scalability & Availability** – Configured ECS service auto‑scaling on CPU/Memory metrics; used SageMaker’s model parallelism to support 5 k concurrent requests with < 200 ms latency.  
4. **Cost Optimization** – Leveraged Spot Instances for training jobs and reserved capacity for inference, reducing spend by 38% vs. baseline.  

**Result**  
Within the deadline we launched a beta that handled 8 k concurrent users in production; SLA‑95% response time < 250 ms. The platform cut development cycle from 4 weeks to 2 weeks per bot and reduced cloud cost by $12K/month, exceeding our target.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Built a user‑friendly API that lowered the barrier for non‑engineering stakeholders to create agents.  
- **Ownership** – Took end‑to‑end responsibility: from architecture decisions to production monitoring.  

### Bar‑raiser Takeaways  
- Demonstrated *ownership* by owning all technical and business outcomes.  
- Showed *dive deep* with concrete AWS service choices, cost/latency trade‑offs, and metrics.  
- Quantified impact (user concurrency, latency, cost savings).  
- Reflected on a failure: initial monolithic prototype crashed under load; pivoting to Fargate + Step Functions was the key learning that shaped the final solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
