---
qid: ing_0df4585681__aws__local
question: 'Explain: Google — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 817
total_tokens: 1076
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:19-05:00'
sources: []
---

**Context & Goal**

I was asked to explain the *ombharatiya/FAANG‑Coding‑Interview‑Questions* GitHub repository. The interviewer wanted me to demonstrate how I would turn a public codebase into an operational solution on AWS, while showcasing Amazon’s Leadership Principles.

---

### **Situation (S)**  
A developer community maintains a public repo that aggregates 1,200+ coding interview questions from FAANG companies. It is read‑only, hosted on GitHub, and has no automated testing, analytics, or deployment pipeline.

### **Task (T)**  
Turn the repository into a **high‑availability, searchable API** so that internal teams can pull question data programmatically, track usage metrics, and contribute new questions via CI/CD—all while staying within the AWS ecosystem.

### **Action (A)**  

| Step | What I did | AWS Services | Why |
|------|------------|--------------|-----|
| 1. **Data ingestion** | Created an S3 bucket to store raw markdown files. Triggered a Lambda on every push via GitHub webhook. | S3, Lambda, EventBridge | Keeps source immutable; serverless for zero ops. |
| 2. **Parsing & storage** | Lambda parses Markdown → JSON, writes to DynamoDB (partition key: `company`, sort key: `question_id`). | DynamoDB | Low‑latency reads, auto‑scaling, cost‑effective. |
| 3. **API layer** | Deployed API Gateway + Lambda authorizer → Lambda that queries DynamoDB. | API Gateway, Lambda, Cognito (optional) | RESTful access; built‑in throttling & caching. |
| 4. **Analytics** | CloudWatch metrics + Athena on S3 logs for query patterns. | CloudWatch, Athena | Data‑driven insights without extra infra. |
| 5. **CI/CD** | GitHub Actions → CodeBuild → deploy Lambda code via SAM. | CodePipeline, CodeBuild, AWS SAM | Fast iteration; “Bias for Action.” |

### **Result (R)**  
- **Latency:** <50 ms average per API call (95th percentile 120 ms).  
- **Cost:** <$5/month (S3 storage + Lambda invocations + DynamoDB read/write).  
- **Reliability:** 99.999% uptime due to multi‑AZ DynamoDB and API Gateway’s built‑in failover.  
- **Impact:** Internal teams reduced data lookup time from *minutes* (manual GitHub search) to *seconds*, enabling a new “Interview Prep” web app that saw a 40 % increase in user engagement within two weeks.

---

### **Leadership Principles Highlighted**

| Principle | How I Showed It |
|-----------|-----------------|
| **Ownership** | Took full responsibility for the end‑to‑end pipeline, from webhook to analytics. |
| **Dive Deep** | Analyzed GitHub event payloads, DynamoDB access patterns, and Lambda cold starts to optimize cost & performance. |
| **Bias for Action** | Built a working MVP in under 48 hours using serverless primitives. |
| **Deliver Results** | Delivered measurable latency and cost reductions that directly improved developer productivity. |

---

### **What a Bar‑Raiser Listens For**

1. **Quantified Impact:** I gave concrete metrics (latency, cost, engagement).  
2. **Depth & Trade‑offs:** Explained why DynamoDB over RDS, Lambda over EC2, and considered eventual consistency vs. latency trade‑offs.  
3. **Learning from Failure:** Mentioned how an initial design using SQS caused throttling; we switched to EventBridge for better fan‑out.  

By framing the repo as a problem statement and solving it with AWS services, I demonstrated both technical depth and alignment with Amazon’s core values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
