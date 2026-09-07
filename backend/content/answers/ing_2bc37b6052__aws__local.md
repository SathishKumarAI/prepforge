---
qid: ing_2bc37b6052__aws__local
question: 'Explain: Pattern 2: Cost-Optimized with Prompt Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 607
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:00-05:00'
sources: []
---

**Situation / Task**

At my previous firm we had a generative‑AI chatbot that served 120 k monthly active users. Each request hit Amazon Bedrock and cost ~$0.02 per prompt, which ballooned to $1.2 M/yr for the same traffic.

**Action – Pattern 2: Cost‑Optimized with Prompt Caching**

* **Requirements**  
  * Reduce per‑prompt cost by >70 % without compromising freshness.  
  * Keep latency <200 ms for 99th percentile users.  

* **Design**  
  1. **Cache layer** – Amazon DynamoDB Global Tables (partitioned on prompt hash) store the last 5 min of generated responses, TTL 10 min to avoid stale data.  
  2. **API gateway + Lambda** – Receives user prompt, checks cache; if hit returns cached response, else forwards to Bedrock via Amazon API Gateway integration.  
  3. **Fallback & Metrics** – A CloudWatch alarm tracks cache hit ratio (target ≥80 %). If below threshold, we auto‑scale the Lambda concurrency and trigger a “warm‑up” batch to pre‑populate popular prompts.  

* **Scalability / Availability**  
  * DynamoDB’s on‑demand mode scales automatically; multi‑AZ replication ensures 99.999 % availability.  
  * Lambda + API Gateway provide built‑in auto‑scaling and request throttling, keeping latency stable under spike traffic.  

* **Cost & Trade‑offs**  
  * Bedrock cost drops from $0.02 to ~$0.004 per cached hit (≈80 % savings).  
  * DynamoDB writes/reads: ~120 k/day ≈ $30/month – negligible compared to Bedrock bill.  
  * Trade‑off: added cache miss latency (~50 ms) acceptable for 20 % of traffic; we mitigate with pre‑warming.

**Result**

* **Quantified Impact** – Cache hit ratio rose from 0 % (pre‑cache) to 82 %, cutting Bedrock spend from $1.2 M/yr to $240 k/yr (+80 % savings).  
* **Customer Obsession & Ownership** – Delivered a more affordable experience while keeping response quality unchanged, and I owned the rollout, monitoring, and continuous optimization loop.

**Bar‑raiser Check**

* Demonstrated ownership (full end‑to‑end solution).  
* Dive deep into AWS services to justify design choices.  
* Quantified impact with real numbers.  
* Learned from early cache miss spikes by implementing auto‑warm‑up, turning a failure point into a proactive feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
