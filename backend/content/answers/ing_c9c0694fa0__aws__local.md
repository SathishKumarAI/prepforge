---
qid: ing_c9c0694fa0__aws__local
question: 'Explain: Where agent evals are going: Agent-as-a-Judge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 574
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:57:32-05:00'
sources: []
---

**Situation (S)** – In my last role I led a cross‑functional team building an autonomous trading agent for a fintech startup. The core challenge was to move from *agent‑based reward shaping* to a **Agent‑as‑a‑Judge (AAJ)** paradigm, where the system itself evaluates and corrects its own decisions in real time.

**Task (T)** – My goal: reduce post‑trade compliance failures by 70 % while keeping latency under 50 ms. I had to design an end‑to‑end pipeline that could ingest live market data, run the agent’s policy, evaluate it against business rules, and log every judgment for audit.

**Action (A)** –  
1. **AWS Services**:  
   - *Kinesis Data Streams* → 10 M events/s ingestion.  
   - *Lambda* + *Step Functions* → serverless orchestration of the evaluation microservice.  
   - *DynamoDB* with global tables for low‑latency state persistence.  
   - *SageMaker* for continuous model drift monitoring.  
2. **Architecture**: A stateless Lambda function receives the agent’s action, calls a *Judge Service* (a container in ECS Fargate) that runs deterministic business‑rule logic and returns a verdict. Results are written to DynamoDB; if “reject”, a compensating transaction is triggered automatically.  
3. **Scalability & Cost**: Using provisioned concurrency on Lambda + auto‑scaling for the Judge Service keeps cost below $0.02 per 1,000 evaluations, while latency stays <30 ms.

**Result (R)** – Within three months of deployment:  
- Compliance failures dropped from 12 % to 3 % (a **75 % reduction**).  
- Latency averaged 22 ms, meeting the SLA.  
- Operational cost was 40 % lower than our previous batch‑processing system.

---

### Leadership Principles Highlighted
- **Customer Obsession / Ownership** – I owned the entire end‑to‑end flow and relentlessly measured impact on compliance risk.  
- **Dive Deep & Deliver Results** – I dissected every latency spike, tuned DynamoDB read/write capacities, and iterated until we hit the SLA.

### Bar‑raiser Takeaways
- Demonstrated *ownership* by driving a cross‑team effort from concept to production.  
- Showed *depth* through detailed AWS design choices (Kinesis vs. Lambda vs. ECS).  
- Quantified impact with real metrics, and learned from early latency spikes to refine the architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
