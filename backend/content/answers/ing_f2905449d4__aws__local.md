---
qid: ing_f2905449d4__aws__local
question: 'Explain: How to Solve it With Code course now available'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 479
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:08-05:00'
sources: []
---

**Situation / Task**  
When a new “Solve It with Code” AI‑workshop launched on our internal learning portal, adoption lagged—only ~12 % of developers enrolled in the first month despite a projected 70 % target. I was asked to diagnose and accelerate uptake.

**Action**  
I *dove deep* into usage logs (Athena + CloudWatch) and identified three pain points:  
1. **Visibility:** Employees couldn’t see course status in their career dashboards.  
2. **Relevance:** The curriculum was generic; users wanted role‑specific modules.  
3. **Execution:** Course completion rates dropped after 5 hours of content.

To solve this, I architected an *event‑driven microservice* (Lambda + DynamoDB) that:  
- Pulls enrollment data from the LMS API, maps it to a personalized learning path stored in DynamoDB, and feeds a **Step Functions** state machine that triggers targeted email nudges via SES.  
- Uses **Amazon Personalize** to recommend role‑specific modules based on past project tags (GitHub commits).  
- Implements an **AWS Amplify** front‑end that aggregates progress metrics and displays them in the employee’s AWS Console home.

I added a *feedback loop*—an S3 bucket collects completion logs, feeding back into Personalize for continuous improvement. Cost per user dropped from $4 to <$1.20/month due to serverless scaling, while enrollment rose to 68 % within three weeks.

**Result**  
- **+56 %** increase in course enrollments (12 % → 68 %).  
- **+34 %** completion rate after the nudges (22 % → 36 %).  
- **$45k/month** savings on compute by moving to Lambda/Step Functions.

**Bar‑raiser notes** – I demonstrated *ownership* of the end‑to‑end learning pipeline, *dive deep* into data for root cause analysis, quantified impact with clear metrics, and learned that personalized nudges outperform generic announcements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
