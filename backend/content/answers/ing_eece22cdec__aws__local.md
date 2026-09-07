---
qid: ing_eece22cdec__aws__local
question: 'Explain: Conversation States — Asynchronous Request-Response - Enterprise
  Integration Patterns 2'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 494
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:49-05:00'
sources: []
---

**Situation & Task**  
I was hired as a Solutions Architect for a fintech platform that needed real‑time fraud alerts to be sent to merchants and customers. The legacy system used synchronous REST calls, causing 30 % of transactions to time out during peak hours (latency >4 s). I had to redesign the flow using *Conversation States – Asynchronous Request‑Response* so that every request could be processed reliably while keeping response times under 200 ms for the user.

**Approach & Design**  
1. **Decouple with SQS FIFO queues** – each incoming transaction is published as a message with a correlation ID (conversation state).  
2. **AWS Step Functions** orchestrate the workflow:  
   * `ValidateTransaction` → `DetectFraud` → `NotifyMerchant`.  
   Each step updates the conversation state in DynamoDB (partition key = correlation ID) so any consumer can resume or retry.  
3. **Lambda functions** perform lightweight processing; they write back to SQS with a “reply” message containing the final status.  
4. **API Gateway + Lambda@Edge** expose an *async request* endpoint that immediately returns a 202 and the correlation ID.  
5. **Client polling** (or WebSocket via API GW) checks the conversation state; once `status=COMPLETED`, the client receives the result.

**Result**  
- Transaction latency dropped from 4 s to <200 ms for the front‑end call, while fraud analysis still completed in ~1.5 s.  
- Queue depth stayed below 10 messages during 99th‑percentile traffic, proving scalability.  
- Cost reduced by 35 % due to serverless compute and no dedicated EC2 instances.

**Learning & Bar‑raiser Takeaway**  
I owned the entire redesign, dove deep into AWS pricing models, and quantified impact with real SLA metrics. The pattern taught me that a *conversation state* stored in DynamoDB is the glue for reliable async flows—critical when scaling to millions of requests without sacrificing correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
