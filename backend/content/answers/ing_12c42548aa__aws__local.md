---
qid: ing_12c42548aa__aws__local
question: 'Explain: Related Reading — Faq'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 528
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:52-05:00'
sources: []
---

**Situation (S)**  
While leading the ML Ops team for our recommendation engine, I noticed that product managers were repeatedly asking “What does this model do?” and “How is it updated?” The lack of a clear FAQ caused confusion during sprint reviews and slowed feature releases by ~30 %.

**Task (T)**  
Create an automated, self‑service FAQ system that pulls the latest model documentation, usage examples, and performance metrics into a single, searchable portal—so stakeholders could get answers in seconds without consulting engineers.

**Action (A)**  

| Step | AWS Service(s) | Reasoning |
|------|----------------|-----------|
| 1. Capture docs & logs | **Amazon S3** + **AWS Glue** | Durable storage; ETL to normalize data. |
| 2. Index content | **Amazon OpenSearch Service** | Full‑text search with relevance scoring, auto‑scaling for query spikes. |
| 3. Generate summaries | **Amazon Bedrock** (LLM) + **Lambda** | On‑demand inference; cost‑effective vs. running a full endpoint. |
| 4. Expose API | **API Gateway** + **AWS IAM** | Secure, throttled access for internal apps. |
| 5. Monitor usage | **Amazon CloudWatch** + **Athena** | Track hit rate, latency, and error rates; feed back into CI/CD. |

Implemented a **CI/CD pipeline (CodePipeline → CodeBuild)** that pulls updated model docs from GitHub, runs the Glue job, re‑indexes OpenSearch, and triggers a Lambda to refresh LLM summaries—all within 10 minutes of commit.

**Result (R)**  
- Average FAQ lookup time dropped from 4 min to **12 sec**.  
- Sprint velocity increased by **25 %** as engineers spent less time answering ad‑hoc questions.  
- API hit rate grew to **5,000+ calls/day**, proving scalability; cost remained <$200/month due to spot‑instance usage and Lambda’s pay‑per‑invoke model.

**Reflection**  
I took full ownership of the solution, dove deep into OpenSearch tuning, and iterated on LLM prompts after initial false positives. The bar‑raiser will note my bias for action, customer obsession (fast answers), and quantified impact—exactly what drives Amazon’s success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
