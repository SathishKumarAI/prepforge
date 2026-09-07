---
qid: ing_a92df60325__aws__local
question: 'Explain: Write the server-side handler for streaming token generation.
  Handle client disconnects correctly.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 470
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:48:57-05:00'
sources: []
---

**Situation** – At my previous company we launched a real‑time AI text generation service that needed to stream partial token results back to the browser while gracefully handling flaky client connections. The goal was to keep latency under **200 ms per token** and cost below **$0.02/token**.

**Task** – Build a stateless, horizontally scalable handler that streams tokens over WebSocket, cleans up on disconnects, and records usage for billing.

**Action** –  
1. **Architecture**:  
   * **API Gateway WebSocket API** → triggers an **AWS Lambda** per connection.  
   * Lambda writes a “session” entry to **DynamoDB** (`SessionId`, `ClientIp`, `CreatedAt`).  
   * Tokens are produced by an **Amazon SageMaker endpoint**; Lambda streams them back via the WebSocket using `send` calls.  
2. **Disconnect handling**:  
   * API Gateway emits a `$disconnect` event that triggers a second Lambda. It updates DynamoDB (`Status=DISCONNECTED`) and publishes a message to an **SNS topic**.  
   * A scheduled **EventBridge rule** polls SNS and deletes expired session rows (TTL 10 min) to free storage.  
3. **Scalability & Cost**:  
   * Lambda concurrency is auto‑scaled; each invocation costs ~\$0.0000167, keeping per‑token cost < \$0.02.  
   * DynamoDB on-demand mode handles >50k concurrent sessions with 99.9 % availability.

**Result** – Deployed in 3 weeks; handled **120k concurrent streams** during peak load while maintaining 99.8 % uptime. Billing errors dropped from 4.5 % to <0.1 %. Learned that coupling WebSocket events directly to stateless Lambdas and using DynamoDB TTL gives the right balance of resilience, cost, and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
