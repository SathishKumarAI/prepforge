---
qid: ing_57d3f8af3f__aws__local
question: 'Explain: When to A/B Test — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 441
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:22-05:00'
sources: []
---

**When to A/B‑Test a New AI Feature – My Approach**

**Situation**  
I was tasked with launching a recommendation engine for our e‑commerce platform. The algorithm promised higher conversion but risked degrading user experience if inaccurate.

**Task**  
Decide *when* to run an A/B test and design it so we could measure impact without harming revenue.

**Action**  
1. **Ownership & Bias for Action** – I set a concrete hypothesis: “The new model will increase average order value (AOV) by ≥ 5%.”  
2. **Dive Deep** – I identified key metrics (AOV, click‑through rate, churn) and built a data pipeline in **Amazon Kinesis + Glue → Redshift** to aggregate real‑time logs.  
3. **Scalability & Availability** – The test traffic was split via **AWS CloudFront Lambda@Edge**, ensuring 99.9 % uptime and minimal latency.  
4. **Cost Control** – I used **AWS SageMaker Endpoint** for inference, auto‑scaling to keep spend < $1k/day.  
5. **Fail Fast** – Implemented a kill switch in the Lambda that rolled back traffic if AOV dipped > 2% within 24 h.

**Result**  
After 10 days, the new model delivered a 6.3% lift in AOV and a 4.7% increase in CTR while keeping churn unchanged—exceeding our target by 1.3%. The test cost <$12k, saving ~$35k in projected revenue loss.

---

**Bar‑raiser cues I hear:**  
- Clear ownership of hypothesis & metrics.  
- Deep dive into data architecture and trade‑offs (scaling vs. cost).  
- Quantified impact with real numbers.  
- Learning loop: we documented why the kill switch triggered when it did, informing future experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
