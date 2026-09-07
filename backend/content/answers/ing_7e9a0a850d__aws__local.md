---
qid: ing_7e9a0a850d__aws__local
question: 'Explain: Planning patterns — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 410
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:35-05:00'
sources: []
---

**Planning Patterns – Agents & Tool Use**

*Leadership Principles:* **Customer Obsession** + **Ownership**  
*Context (S):* My team was tasked with building a real‑time recommendation engine for an e‑commerce platform that needed to ingest millions of user interactions per day while keeping latency < 50 ms.  
*Task (T):* Design a system where autonomous “agents” discover and invoke the most suitable ML tools (e.g., SageMaker, Personalize) without manual intervention.

**Action (A):**  
1. **Agent Registry:** Deployed an EventBridge‑driven state machine that listens to *DataReady* events. Each agent is defined in a DynamoDB table with metadata (model ARN, resource limits).  
2. **Tool Invocation Layer:** Implemented a lightweight Lambda orchestrator that retrieves the agent’s configuration, validates input schema, and calls the corresponding AWS SDK (SageMaker batch transform or Personalize real‑time inference) using IAM roles scoped to the minimal permissions needed.  
3. **Observability & Self‑Healing:** Integrated CloudWatch metrics + X-Ray traces; if a tool fails, the orchestrator automatically retries with an alternate agent based on historical success rates stored in Timestream.

**Result (R):**  
- Reduced model deployment time from 2 days to < 4 hours.  
- Achieved 99.8% success rate for inference requests and cut overall latency by 35 %.  
- Cut operational cost by 22% by eliminating idle SageMaker endpoints.

*Bar‑raiser notes:* I own the end‑to‑end flow, dive deep into failure modes, quantify impact with clear metrics, and iterated after a failed batch transform that revealed mis‑aligned IAM scopes—learning that fine‑grained permissions are as critical as compute resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
