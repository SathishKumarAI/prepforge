---
qid: ing_63549f5f6e__aws__local
question: 'Q13: How do you implement tool use / function calling?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 443
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:09:45-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

**Situation (S)** – I was tasked to add a “tool‑use” feature to our internal AI platform so that users could invoke external APIs (e.g., weather, stock prices) directly from the model’s responses. The goal: reduce manual copy‑paste errors and cut user support tickets by 30 %.

**Task (T)** – Design a robust, scalable function‑calling framework that integrates with GPT‑4 and our micro‑service ecosystem.

**Action (A)**  
1. **Requirements & Scope** – Defined a contract (`/invoke_tool`) accepting tool name, parameters, auth token, and a timeout.  
2. **Architecture** – Implemented an API gateway + Lambda authorizer for auth; Lambda functions per tool wrapped in container images (ECR).  
3. **AWS Services** –  
   * **Amazon API Gateway** (REST & WebSocket) for throttling & monitoring.  
   * **AWS Lambda** with **Provisioned Concurrency** to guarantee <200 ms cold‑start latency.  
   * **AWS Step Functions** orchestrate multi‑step tool calls, enabling retries and circuit‑breaker patterns.  
   * **Amazon CloudWatch** logs + X-Ray for end‑to‑end tracing.  
4. **Scalability & Availability** – Lambda scales to 10k RPS; API Gateway uses regional endpoints with failover across AZs.  
5. **Cost** – Estimated $0.20/1M invocations, <3 % of overall AI spend.

**Result (R)** – Deployment reduced support tickets by **32 %**, improved user satisfaction score from 4.2 to 4.7, and cut average tool‑lookup latency from 650 ms to 180 ms. Learned that a simple, serverless pattern with built‑in observability outperforms monolithic tooling for rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
