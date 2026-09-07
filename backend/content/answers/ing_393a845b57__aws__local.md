---
qid: ing_393a845b57__aws__local
question: You're building a production agent that calls tools (function calling).
  What makes the loop reliable enough to ship?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 518
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:13-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team building an LLM‑driven agent that calls external APIs via function calling for a high‑volume customer support bot (≈ 2 M invocations/day). The goal was to ship the loop with < 1 % failure and 99.9 % latency SLA.

**Action**  
* **Ownership & Bias for Action:** I defined end‑to‑end observability – every tool call, retry count, and error type is logged in CloudWatch Logs and forwarded to Kinesis Data Streams.  
* **Dive Deep & Invent & Simplify:** Built a state machine in Step Functions that orchestrates the LLM prompt → function call → validation → fallback. Each step is idempotent; we use DynamoDB (partition key = request‑id) for de‑duplication and to persist retry metadata.  
* **AWS Services:**  
  * **Amazon Bedrock** for the LLM, with a custom prompt template.  
  * **Step Functions** for orchestration and automatic retries with exponential back‑off.  
  * **DynamoDB** (On‑Demand) for state persistence – cost ≈ $0.25/day.  
  * **Lambda** (Python 3.12) for lightweight validation logic.  
* **Scalability & Availability:** Step Functions scales to thousands of concurrent executions; DynamoDB’s on‑demand mode handles burst traffic without provisioning. Global endpoints and multi‑region read replicas keep latency < 200 ms.  
* **Cost Control:** We set a 5‑second timeout per Lambda, saving ~30 % in compute spend compared to longer runs.

**Result**  
After A/B testing with production traffic:  
* Success rate ↑ 99.7 % (previously 94 %).  
* Latency median 180 ms vs target 200 ms.  
* Operational cost < $150/month for the entire stack, a 45 % reduction from the legacy monolith.

**Learnings** – Early visibility of retry patterns revealed that 12 % of failures were due to transient API throttling; adding a circuit breaker in Step Functions reduced downstream impact by 60 %. This iterative loop of monitoring → hypothesis → rapid deployment embodies Amazon’s “Customer Obsession” and “Ownership.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
