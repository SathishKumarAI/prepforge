---
qid: ing_2bb5a591eb__aws__local
question: 'Explain: Pattern 2 – Orchestrator agent (sub-agents as tools)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 419
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:42-05:00'
sources: []
---

**Pattern 2 – Orchestrator Agent (Sub‑agents as Tools)**  

*Leadership Principles:* **Customer Obsession** + **Ownership**.  

**Situation:** A fintech startup needed a single voice interface that could execute diverse tasks: querying user balances, initiating transfers, and generating tax reports—all in one conversation.  

**Task:** Build an AI system that dynamically delegates each intent to the most suitable sub‑agent (tool) while keeping latency < 200 ms and ensuring auditability.  

**Action:**  
1. **Orchestrator Design:** Implemented a *Skill‑Router* Lambda that receives NLU output, maps intents to sub‑agents via a DynamoDB skill table, and invokes the chosen agent through AWS Step Functions (state machine).  
2. **Sub‑Agents as Tools:** Each tool is an isolated Fargate container exposing a REST endpoint; containers run stateless FastAPI services backed by Amazon RDS for transactional data and S3 for logs.  
3. **Observability & Cost Control:** CloudWatch metrics feed into an Athena dashboard that auto‑scales the orchestrator on demand (via Application Auto Scaling).  
4. **Security & Compliance:** IAM roles grant least privilege; all traffic is encrypted with TLS 1.3 and VPC endpoints.  

**Result:** Reduced average turn‑around time from 350 ms to 120 ms, increased user satisfaction scores by 18%, and cut operational cost by 22% compared to a monolithic bot. Learned that fine‑tuning the intent‑skill map in DynamoDB after each release prevented “orchestrator drift.”  

*Bar‑raiser notes:* Look for clear ownership of end‑to‑end flow, depth in trade‑off analysis (Lambda vs Fargate), quantified impact on latency and cost, and evidence of learning from iterative deployment failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
