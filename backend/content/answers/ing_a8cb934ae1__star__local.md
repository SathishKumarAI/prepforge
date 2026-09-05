---
qid: ing_a8cb934ae1__star__local
question: 'Explain: Index lifecycle actions — Index lifecycle management (ILM) in
  Elasticsearch | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 401
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:40-05:00'
sources: []
---

**Situation**  
In my last role I was responsible for the log‑analytics pipeline at a fintech startup. Our daily ingestion rate hit 1 GB per minute and the indices kept growing past 500 GB in just two weeks, driving up storage costs and slowing down search queries.

**Task**  
I needed to automate index rollover and lifecycle management so that hot data stayed on fast SSDs, warm data moved to cheaper HDDs after a week, and stale data was purged after three months—all without manual intervention or downtime.

**Action**  
Using Kibana’s “Index Lifecycle Policies” I defined a policy with four phases: **hot**, **warm**, **cold**, and **delete**. In the hot phase I set a 1‑day rollover threshold; warm moved indices to a new node pool after seven days; cold archived them on lower‑tier storage for up to 90 days; finally, delete removed them. I attached the policy to our index template via the REST API (`PUT _ilm/policy/logs_policy`) and verified compliance with `_ilm/explain`. I also scripted a small Python monitor that logged ILM status and alerted if any index stalled.

**Result**  
After deployment, storage usage dropped from 500 GB to 280 GB in three months—saving ~30% on cloud costs. Search latency for recent logs improved by 40%, while older queries still served from cold tier with acceptable performance. I learned how ILM’s phase‑based approach balances cost and speed, and the importance of monitoring policy health in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
