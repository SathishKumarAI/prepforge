---
qid: ing_8425ee32d4__aws__local
question: What are agents? — Building Effective AI Agents \\ Anthropic
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 514
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **What are agents in the context of “Building Effective AI Agents”?**

---

### Behavioral (STAR) – *Customer Obsession & Ownership*

**Situation:** At my previous company, we launched a virtual‑assistant product that struggled with contextual drift—customers complained it lost track of multi‑turn conversations.  
**Task:** I was tasked to redesign the assistant so it behaved like a *true agent* that maintains state and goals across sessions.  
**Action:** I led a cross‑functional squad, built a lightweight “goal‑oriented memory” layer (state store + policy planner) using DynamoDB for persistence and Step Functions for orchestration. We added an intent‑driven dialogue manager that automatically escalated to human when confidence < 0.4.  
**Result:** Customer satisfaction scores rose 27% (CSAT from 3.8 → 5.0), churn dropped 15%, and we cut average support tickets by 22K per month, saving $1.2M in ops costs.

---

### Technical Design

- **Agents = Goal‑oriented entities** that maintain *internal state*, *beliefs*, and *action plans* across interactions.
- Architecture:  
  - **State store:** DynamoDB (low latency, auto‑scaling).  
  - **Policy engine:** Amazon SageMaker Endpoint for RL‑derived policies.  
  - **Orchestration:** Step Functions to sequence API calls & fallback logic.  
- **Scalability:** Autoscaling Lambda + SageMaker endpoints; cold starts mitigated by provisioned concurrency.  
- **Availability:** Multi‑AZ DynamoDB, regional endpoint failover.  
- **Cost trade‑off:** Using managed services reduces dev ops overhead but incurs higher per‑request cost versus a custom in‑house stack.

---

**Bar‑raiser notes:**  
- *Ownership:* Took full responsibility for the end‑to‑end customer journey.  
- *Dive Deep:* Quantified CSAT, churn, and ticket metrics; dissected root causes of drift.  
- *Learned from Failure:* Early prototypes mis‑identified user intent; iterative A/B testing guided policy refinement.

> **Key takeaway:** An effective AI agent is a stateful, goal‑driven system that balances automation with human escalation, delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
