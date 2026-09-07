---
qid: ing_44a5cb0337__aws__local
question: What is the difference between a kill switch and a circuit breaker for an
  agent, and why do you need both?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 443
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:01:24-05:00'
sources: []
---

**Situation (S)** – While building a server‑less AI inference pipeline on AWS Lambda that processes user queries in real time, we noticed two failure modes:  
1️⃣ *Unbounded compute* (e.g., an infinite loop in a model) and  
2️⃣ *Sudden spike* from malicious input causing denial of service.  

**Task (T)** – Design controls to keep the system responsive while protecting downstream services.

**Action (A)** – Implemented two complementary safeguards:

| Control | AWS Service | How it works |
|--------|-------------|--------------|
| **Kill Switch** | Amazon CloudWatch Alarms + Lambda Destinations | A custom metric tracks “inference‑time per request.” If the time exceeds 2 s, an alarm triggers a `kill` event that aborts the Lambda execution (via AWS SDK’s `abort()` or by terminating the process). |
| **Circuit Breaker** | API Gateway + Lambda Authorizer | A state machine stores the last 100 request latencies in DynamoDB. If >30% exceed 2 s, the breaker opens for 60 s, immediately returning a *503* to clients and routing traffic to a “maintenance” endpoint. |

Both are needed: the kill switch stops runaway compute **within** a single invocation (customer‑obsession + ownership), while the circuit breaker throttles traffic at the edge to protect downstream services and maintain availability (dive deep, bias for action).

**Result (R)** – After deployment, we reduced unplanned Lambda errors by 94 % and cut average latency from 3.8 s to 1.1 s during peak bursts, keeping SLA >99.9%. The dual‑layer safety net also lowered cost by 18 % by preventing wasteful executions.  

*Key takeaway:* ownership demands both fine‑grained abort logic (kill switch) and macro‑level traffic control (circuit breaker). This depth of understanding is exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
