---
qid: ing_a340d60242__star__local
question: 'Explain: Polling — Polling vs Webhooks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 284
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:15-05:00'
sources: []
---

**Situation**  
In a fraud‑detection platform we were ingesting transaction logs from multiple payment gateways. The legacy API only supported pull requests, so our data pipeline had to constantly poll each gateway every minute to keep the feature set fresh.

**Task**  
Reduce latency between transaction creation and model inference while cutting infrastructure costs by eliminating unnecessary polling traffic.

**Action**  
I introduced a webhook system for two of the larger gateways that support callbacks. For those without native webhooks, I built an intermediate lightweight listener using AWS API Gateway + Lambda that queued events in SQS. The pipeline then consumed from SQS with an exponential back‑off strategy. We kept polling only for the remaining three gateways where webhooks were impossible. I also added a retry policy and dead‑letter queue to handle transient failures.

**Result**  
Model inference latency dropped from 60 s to under 5 s on average, and monthly API call costs fell by 35 %. The system became more resilient: we logged only successful callbacks, reducing noise in monitoring. I learned that a hybrid approach—using webhooks where possible and graceful polling otherwise—offers the best trade‑off between cost, latency, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
