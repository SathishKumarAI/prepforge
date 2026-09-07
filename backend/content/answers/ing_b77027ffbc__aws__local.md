---
qid: ing_b77027ffbc__aws__local
question: What's the difference between a workflow and an agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 595
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:36-05:00'
sources: []
---

**Answer (Amazon style)**  

During my time as a Solutions Architect at Amazon, I was asked to explain *workflow* vs. *agent* while redesigning our internal automation platform.

| **Leadership Principle** | **Why it matters here** |
|---------------------------|--------------------------|
| Customer Obsession | The customers are other teams that rely on reliable, low‑latency automations. |
| Ownership & Dive Deep | I owned the design and dug into the failure modes of existing pipelines. |

### Situation
Our legacy “workflow engine” (a single monolith) processed 12 M job events/day but crashed 3% of the time during peak hours, causing SLA violations for >200 teams.

### Task
Redesign so that each *agent* handles a specific domain, decoupling from the central workflow orchestration.

### Action
1. **Requirements**  
   - *Workflow*: Orchestrates multiple agents, maintains global state, guarantees at‑least‑once execution.  
   - *Agent*: Stateless microservice exposed via an API, processes one event type, publishes results to a queue.

2. **Design & AWS Services**  
   - **Step Functions** (state machine) → orchestrator, durable and highly available.  
   - **Lambda + Fargate** for lightweight agents; each agent runs in its own container for isolation.  
   - **Amazon SQS** as the event bus between workflow and agents.  
   - **DynamoDB** for idempotency keys (prevent duplicate processing).  

3. **Scalability & Cost**  
   - Autoscaling Lambda keeps cost near $0.20 per 1 M events; Fargate pods scale to 100+ concurrent instances during traffic spikes.  
   - Step Functions add ~$0.025 per execution, but we reduced total executions by 15% thanks to better parallelism.

4. **Trade‑offs**  
   - Added latency (~50 ms) for SQS message round‑trip; acceptable because we gained >99.9% uptime.  

### Result
- *Availability* increased from 97% to **>99.95%**, eliminating the 3% crash rate.  
- *Latency* dropped by 30 %, from 1.2 s to 0.84 s average per job.  
- *Cost* savings of $18k/month due to reduced monolith compute and better resource isolation.

### Takeaway (Bar‑raiser focus)
I demonstrated **ownership** by leading the end‑to‑end redesign, used **dive deep** analysis of failure logs, quantified impact with concrete metrics, and learned from a failed monolithic attempt—pivoting to a decoupled workflow/agent model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
