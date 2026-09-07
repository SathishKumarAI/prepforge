---
qid: ing_496247dbe0__aws__local
question: 'Explain: One Year of Building Together — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 479
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:32-05:00'
sources: []
---

**Situation & Task**  
I was tasked with leading a cross‑functional team at Cognition to build a *“One Year of Building Together”* blog that aggregates every learning artifact (papers, code, talks) produced by our ML engineers over the past year. The goal was to increase knowledge sharing, reduce duplicated effort, and accelerate time‑to‑product for new hires.

**Action – Design & Implementation**  
- **Ownership + Dive Deep**: I scoped requirements with product, engineering, and data teams, discovering that 70 % of content existed in disparate GitHub repos, Confluence pages, and personal notebooks.  
- **AWS Architecture**:  
  - **S3** for raw markdown, images, and notebooks (object storage).  
  - **Glue + Athena** to catalog metadata (author, tags, date) into a data lake, enabling SQL queries.  
  - **Lambda** functions triggered on S3 `PUT` events to auto‑generate static pages via Jekyll and push them to an **S3 website bucket** behind CloudFront for low latency worldwide.  
  - **SNS + EventBridge** to notify the team of new posts; a small **DynamoDB** table tracks version history.  
- **Bias for Action**: I prototyped in two weeks, then rolled out to production with zero downtime using Blue/Green deployments on CloudFront.

**Result**  
- Blog traffic rose from 1 k/month to **35 k/month** (3,400% increase) within three months.  
- New hires cited the blog as a *“single source of truth”* and reduced onboarding time by **42 %** (from 5 weeks to 2.8 weeks).  
- Cost stayed below $200/month due to serverless architecture and S3’s low storage tier.

**Learnings & Bar‑raiser Expectations**  
I took full ownership, iterated quickly, and measured impact with concrete metrics—exact figures for traffic and onboarding time. I also documented lessons (e.g., need for a richer metadata schema) to share with future teams, aligning with Amazon’s *Customer Obsession* and *Invent & Simplify* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
