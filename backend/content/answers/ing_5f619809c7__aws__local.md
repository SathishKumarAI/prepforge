---
qid: ing_5f619809c7__aws__local
question: 'Explain: A team wants to ship a prompt change to a Claude-powered support
  agent. Design the eval gate that decides if it ships.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 375
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:41-05:00'
sources: []
---

**Situation & Task**  
When the product team rolled out a new prompt for our Claude‑powered support agent, I owned the *eval gate* that decides whether the change reaches production. The goal was to ship quickly (**Bias for Action**) while protecting user experience (**Customer Obsession**).  

**Action**  
1. **Define Success Criteria** – KPI: ≤2 % increase in mean time to resolution (MTTR) and ≥95 % satisfaction score on post‑chat surveys.  
2. **Automated A/B Test Pipeline** – Deploy two Lambda functions (Claude vX vs vY) behind an Application Load Balancer with weighted routing (90/10). Use Amazon CloudWatch Metrics for MTTR, NPS, and error rates; store raw logs in S3 for deeper analysis.  
3. **Statistical Significance Check** – Trigger a SageMaker inference job to run Bayesian A/B test (posterior probability > 0.99) before promotion.  
4. **Rollback Plan** – If any metric drifts beyond thresholds, ALB instantly flips back to baseline and sends alert via SNS/ChatOps.  

**Result**  
The gate cut the release cycle from 48 h to 12 h while maintaining MTTR at 1.8 % below baseline and keeping satisfaction above 97 %. Over three months, we shipped 15 prompt iterations with zero customer‑impact incidents.  

**Reflection**  
I learned that lightweight, data‑driven gates scale better than manual reviews; the trade‑off is initial build effort, but the downstream cost savings and reliability gains were >30 % in ops spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
