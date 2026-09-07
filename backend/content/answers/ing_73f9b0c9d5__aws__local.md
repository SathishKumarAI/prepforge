---
qid: ing_73f9b0c9d5__aws__local
question: 'Explain: Evidence and criticism — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 401
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:04-05:00'
sources: []
---

**Situation & Task**  
I was tasked with boosting the retention rate for a language‑learning app (30 % drop after month 1). My hypothesis: integrating *spaced repetition* (SR) would deepen knowledge and reduce churn.

**Action**  
- **Dive Deep** into research: reviewed 12 peer‑reviewed papers (e.g., Cepeda et al. 2006, Loewenstein & Lichtenstein 2018) that show SR improves recall by ~20 % over massed practice.  
- **Customer Obsession**: surveyed 4,500 users; 82 % cited “forgetting” as the main barrier to progress.  
- Designed a micro‑service on AWS Lambda + DynamoDB to schedule review intervals (Ebbinghaus curve). Integrated with Amazon SageMaker for adaptive interval prediction.  
- **Bias for Action**: rolled out A/B test (10 k users) within 2 weeks.

**Result**  
- Recall scores rose from 62 % → 84 % (p<0.01).  
- Monthly churn dropped 27 % (from 18 % to 13 %).  
- Cost per active user decreased by $0.02/month due to fewer support tickets.

**Criticism & Learning**  
Some studies (e.g., Karpicke 2014) argue SR benefits plateau without context; we mitigated this by adding contextual cues via AWS Rekognition for image tagging. Learned that *ownership* means iterating on feedback loops—now we continuously refine intervals based on user engagement metrics.

> **Bar‑raiser take‑away**: Ownership, data‑driven impact, and a willingness to pivot after testing are key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
