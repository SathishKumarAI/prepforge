---
qid: ing_1300b06ae8__aws__local
question: 'Explain: Multi-tenant fairness and noisy neighbours'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 418
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:34-05:00'
sources: []
---

**Situation & Task**  
While leading a server‑less recommendation engine for a SaaS marketplace, I noticed that heavy traffic from one tenant was degrading latency for all others—classic *noisy neighbour* problem. The customers demanded 99.9 % SLA and fair resource allocation across tenants.

**Action**  
1. **Dive Deep into Metrics** – Collected per‑tenant CloudWatch logs (CPU, Lambda duration, RDS CPU credit usage). Identified tenant‑A generating 70 % of the Lambda invocations during peak hours.  
2. **Design a Fairness Layer** – Implemented an *API Gateway* request throttling policy that limits each tenant to 5 req/s per region, backed by DynamoDB “tenant quota” table for dynamic adjustment.  
3. **AWS Services & Trade‑offs**  
   - *Lambda*: Concurrency reserved per account (reserved concurrency) → guarantees baseline capacity.  
   - *Elastic Load Balancer + ECS Fargate*: Offload compute‑heavy inference tasks, scaling by CPU credits; cost ~30 % higher but eliminates noisy neighbour spikes.  
   - *SQS* for asynchronous processing: decouples request rate from downstream ML model inference, smoothing bursty traffic.  
4. **Result** – Post‑deployment, average latency dropped from 350 ms to 95 ms (≈ 73 % improvement), and tenant‑A’s impact on others reduced by 92 %. Customer churn fell from 5.3 % to 1.2 % within two months.

**Reflection & Ownership**  
I owned the full incident lifecycle, coordinated cross‑functional teams, and iterated on throttling thresholds using A/B tests. Learned that *Customer Obsession* drives us to quantify impact and that *Ownership* means owning both success and failure—after a false‑positive throttle we rolled back within 15 min, restoring SLA while retaining fairness.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
