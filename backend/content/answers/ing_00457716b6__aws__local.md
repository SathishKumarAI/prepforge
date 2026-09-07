---
qid: ing_00457716b6__aws__local
question: 'Q: Why are naive retries and checkpoints insufficient for a production
  agent with side effects?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 378
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:25:12-05:00'
sources: []
---

**Answer (Amazon Way)**  

When I built a fraud‑detection agent that writes to an external payment gateway, naive retries and checkpoints caused *re‑execution of side effects*—duplicate charge attempts, inconsistent ledger state, and SLA violations.  

- **Situation:** The agent processed ~1 M transactions/day; each run could trigger up to 3 external calls.  
- **Task:** Ensure idempotent behavior while keeping latency < 200 ms per request.  
- **Action:** I introduced a *transaction‑id* header and stored it in an **Amazon DynamoDB** table with a TTL of 24 h. Before any side effect, the agent queried DynamoDB; if the ID existed, it skipped the call. Retries were handled by **AWS Step Functions** with exponential backoff, not by simple loops. I also added **SNS** notifications for failures so ops could act quickly.  
- **Result:** Duplicate charges dropped from 0.3 % to <0.001 %; SLA compliance rose from 92 % to 99.9 %. Cost of retries fell by 15 % thanks to fewer external calls, and latency stayed within target due to DynamoDB’s single‑partition reads.

**Leadership Principles:** *Ownership* (I owned the end‑to‑end reliability), *Dive Deep* (analyzed retry patterns), *Bias for Action* (implemented idempotency before a customer hit us).  

Bar‑raisers look for: ownership of side‑effect safety, deep understanding of state management, quantitative impact on fraud rates and cost, and learning from the initial failure to build resilient systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
