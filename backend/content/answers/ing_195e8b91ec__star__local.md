---
qid: ing_195e8b91ec__star__local
question: Your production assistant has started quoting wrong prices to customers.
  Is it an attack or a bug, and how do you find out?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 314
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:10-05:00'
sources: []
---

**Situation**  
During our quarterly pricing rollout for the AI‑powered analytics platform, I noticed that several support tickets were complaining customers received quotes that were up to 25 % higher than the published rates. The incidents were concentrated in one region and appeared after a recent update of our price‑calculation microservice.

**Task**  
I had to determine whether this was an intentional attack (e.g., rogue data entry) or an unintended bug caused by the new deployment, and then fix it before the next sales sprint.

**Action**  
First, I pulled audit logs from the pricing service (using CloudTrail + ElasticSearch) and compared them against the production database snapshots. The logs showed that a recent change in the discount‑engine configuration had overridden the default tier thresholds for certain SKU families. I then reproduced the issue locally with the same input data set, confirming the calculation path was mis‑routing to an older caching layer. After patching the conditional logic and adding a unit test for boundary cases, I rolled out the fix via blue/green deployment and monitored key metrics (quote accuracy % and support ticket volume) in Grafana.

**Result**  
The quote error rate dropped from 12 % to below 0.1 % within two hours of deployment, saving us roughly $35K in potential revenue loss for that quarter. I also added a real‑time alert on price calculation anomalies, which has prevented similar incidents since.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
