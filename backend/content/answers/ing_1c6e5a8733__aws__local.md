---
qid: ing_1c6e5a8733__aws__local
question: 'Explain: Catch risky agent actions before they execute'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 481
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:23-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a fraud‑prevention team for an online marketplace that allowed third‑party sellers to run “agents” (scripts) to place bids on behalf of customers. We noticed a 12 % spike in chargebacks after we enabled these agents, and our compliance audit flagged that the platform lacked real‑time risk filtering.

**Action**  
I built a *RiskGuard* pipeline that intercepts every agent action before execution:

1. **Event capture** – CloudWatch Events + Kinesis Data Streams receive each agent request.
2. **Feature enrichment** – Lambda joins user, device, and historical bidding data; the function is stateless so it scales to 100 k events/sec.
3. **Risk scoring** – A SageMaker batch transform endpoint (scaling via Spot Instances) evaluates a lightweight XGBoost model that outputs a risk score in <10 ms per request.
4. **Decision layer** – API Gateway + Lambda Authorizer checks the score; actions with >0.8 are blocked, others proceed to Step Functions that launch the agent.

We added an SNS alert for any block, feeding a real‑time dashboard in QuickSight.

**Result**  
Within 30 days we reduced chargebacks by **35 %** (from $1.2M to $780k) and cut fraud‑related support tickets by **48 %**. The architecture cost <$3K/month, thanks to serverless components and spot inference. I documented the rollback procedure; a failed model prediction caused a temporary 5 % increase in false positives, but we refined thresholds in an A/B test, learning that continuous monitoring is critical.

**Leadership Principles**  
- **Ownership & Bias for Action** – I owned the end‑to‑end pipeline and moved from manual triage to automated blocking.  
- **Dive Deep** – By profiling Lambda cold starts and model latency, we tuned the system to meet SLAs.  

Bar‑raisers look for quantified impact, deep technical decisions, and evidence of learning from missteps—exactly what this story delivers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
