---
qid: ing_64cb55e6db__aws__local
question: 'Explain: Your eval suite is green, ship velocity is good, and users are
  complaining that quality got worse. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 425
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:49-05:00'
sources: []
---

**Situation & Task**  
During a recent quarterly release of our recommendation engine, the automated eval suite passed (99 % coverage) and sprint velocity hit 12 story points per cycle. Yet, after deployment users reported higher error rates and lower click‑through. I had to reconcile green tests with degraded real‑world quality.

**Action**  
1. **Ownership & Dive Deep:** Immediately opened a *Service‑Level Incident* in PagerDuty and created an incident board.  
2. **Data‑driven root‑cause:**  
   - Pulled the last 24 h of CloudWatch logs (latency, error counts).  
   - Compared model inference latency in staging vs production; found a 30 % increase due to a newly added feature flag that enabled verbose logging.  
   - Examined S3 request metrics: a new version of the model served by Lambda had an older weight matrix, causing incorrect recommendations (accuracy dropped from 87 % to 72 %).  
3. **Bias for Action:** Rolled back the flagged feature and pinned the correct model artifact in SageMaker’s production endpoint.  
4. **Deliver Results:** Re‑ran A/B tests; click‑through returned to baseline within 2 h, user complaints fell by 85 % (from 120/hr to 18/hr).  

**Result**  
- Restored SLA (99.9 % availability) and saved ~$3k/month in Lambda invocations.  
- Implemented a *Model Version Guard* that auto‑promotes only artifacts passing both unit tests **and** an accuracy KPI (>80 %).  

**Bar‑raiser takeaway**  
Showed deep ownership, quantified impact (error rate +85 % reduction), and learned to couple automated tests with live‑metric checks before promotion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
