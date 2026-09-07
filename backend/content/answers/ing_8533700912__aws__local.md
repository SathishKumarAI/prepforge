---
qid: ing_8533700912__aws__local
question: 'Explain: FYI — GitHub - ombharatiya/A-to-Z-Resources-for-Students: A to
  Z Resources for students as well as working proffessionals \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 422
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:26:00-05:00'
sources: []
---

**Situation & Task**  
When I joined a new product team at AWS, we needed to surface relevant learning resources for our internal “A‑to‑Z Resources for Students” portal. A public repo (GitHub – ombharatiya/A-to-Z-Resources-for-Students) already existed but was unstructured and stale. My goal: transform it into an automated, searchable knowledge base that scales to millions of students while keeping costs low.

**Action**  
*Ownership & Dive Deep*: I mapped the repo’s 3 k+ Markdown files, extracted metadata (topic, difficulty, language), and built a crawler in Python using **AWS Lambda** for serverless execution. The data landed in an **Amazon DynamoDB** table with GSI on tags.  
I deployed a lightweight **API Gateway + Lambda** stack that queries DynamoDB and returns JSON to our front‑end. For search, I enabled **Amazon OpenSearch Service** (formerly Elasticsearch) to index titles and snippets—achieving sub‑second latency for 1 M+ items.  
*Bias for Action*: The entire pipeline was CI/CD‑driven via **GitHub Actions**, ensuring every PR triggers a re‑index in less than 2 min.

**Result**  
- Search response time < 250 ms (95th percentile).  
- Traffic rose from 10 k to 120 k monthly active users within 3 months.  
- Cost per query dropped by 70% compared to a monolithic EC2 solution.  

**Learning & Bar‑Raiser Insight**  
I documented failure points—initial DynamoDB throughput overshoot and OpenSearch node churn—and introduced auto‑scaling policies, proving the ability to learn from early missteps. This aligns with **Customer Obsession** (fast, reliable access) and **Ownership** (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
