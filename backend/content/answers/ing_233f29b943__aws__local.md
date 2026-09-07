---
qid: ing_233f29b943__aws__local
question: 'Explain: Anduril LeetCode Practice (Mapped to Reported Topics)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 375
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:15-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: While mentoring a junior data‑science team, I noticed we were spending weeks on the same set of LeetCode questions that didn’t map cleanly to our project needs.  
*Task*: Build a framework that aligns LeetCode problems with the core ML topics (e.g., feature engineering, model evaluation, hyper‑parameter tuning) so practice time translates directly into product value.  
*Action*: I created **Anduril**, a lightweight web app that parses each LeetCode problem’s tags and automatically maps them to our internal taxonomy. The backend runs on **AWS Lambda** (Python 3.9), uses **Amazon DynamoDB** for quick look‑ups, and triggers **Step Functions** to generate personalized study plans. I also integrated **Amazon S3** to store annotated solutions and **CloudWatch** metrics so we could see which topics were most practiced per sprint.  
*Result*: Over three sprints the team’s “skill coverage” score (measured by a custom rubric) jumped from 48 % to 92 %. Training time dropped 35 %, and we saw a 12 % increase in model iteration speed on production releases—directly tied to better problem‑solving depth.  

**What the bar‑raiser hears**: clear ownership (I designed, built, and iterated the tool), deep technical dive into AWS services for scalability & cost (Lambda cold starts <100 ms, DynamoDB throughput 1 k reads/s), quantified impact, and a learning loop that fed back into continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
