---
qid: ing_934451acd3__star__local
question: Design an LLM agent that files and updates work orders in a customer's ERP
  - real writes to a production system. How do you make that safe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 392
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:27:17-05:00'
sources: []
---

**Situation:**  
In my last role at a manufacturing firm, the legacy ERP had no API for creating or updating work orders. The new project required an AI agent to automate this process based on field technician reports, but any write error could disrupt production schedules and cost the company thousands per day.

**Task:**  
I was tasked with designing a safe LLM‑driven agent that could reliably submit work orders while preventing accidental double writes or data corruption. The solution had to run in a real‑time environment without human intervention for routine updates, yet allow manual override for edge cases.

**Action:**  
1. I built a sandboxed microservice that intercepts the LLM’s output and validates it against an idempotency key derived from the work order content (hash of description + timestamps).  
2. The service checks the ERP’s current state via a read‑only API, comparing the proposed changes to existing records; any discrepancy triggers a rollback and logs the attempt.  
3. I implemented optimistic concurrency control: each write includes the latest revision number; if it mismatches, the agent retries with an updated prompt that includes the conflict notice.  
4. All operations are wrapped in a two‑phase commit across the LLM inference server and ERP connector, ensuring atomicity.  
5. Finally, I added a “shadow mode” where the agent logs intended writes without executing them, feeding results to a human reviewer for the first week.

**Result:**  
The system processed 1,200 work orders daily with zero false positives in production. Runtime latency stayed under 250 ms per request. Post‑deployment audits showed a 97% reduction in manual corrections, saving roughly $35k annually. I learned that coupling LLM output with deterministic idempotency checks and transactional controls is essential for safe AI‑driven writes to critical business systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
