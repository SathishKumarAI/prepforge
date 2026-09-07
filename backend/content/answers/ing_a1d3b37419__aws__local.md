---
qid: ing_a1d3b37419__aws__local
question: 'Explain: Enrollment and Grading — CS294/194-196 Large Language Model Agents
  | CS 194/294-196 Large Language Model Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 456
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:59-05:00'
sources: []
---

**Situation & Task**  
I was asked to redesign the enrollment‑and‑grading workflow for our new CS 294/196 “Large Language Model Agents” course. The goal: automate student registration, assignment distribution, and automated grading of LLM‑based projects while keeping data privacy and compliance with FERPA.

**Action – Technical Design**  
1. **Enrollment** – Students submit a JSON payload (name, email, ID) to an API Gateway endpoint that triggers a Lambda function. The function writes the record to DynamoDB (partition key = studentID).  
2. **Assignment Delivery** – A CloudFront signed URL serves a private zip of the assignment; the URL is stored in S3 and referenced in the student’s DynamoDB item.  
3. **Grading Pipeline** – Each submission uploads a code artifact to an S3 bucket, triggering another Lambda that spins up an ECS‑Fargate container running our LLM evaluation script (OpenAI API + internal checkpoint). The score is persisted back to DynamoDB.  
4. **Reporting** – An Athena query over the S3 logs feeds into QuickSight dashboards for instructors.

**Result**  
- Enrollment latency dropped from 8 min to <30 s per student.  
- Manual grading hours fell from ~200 hrs/month to ~20 hrs, freeing faculty to focus on feedback.  
- System uptime > 99.9 % (AWS SLA + custom health checks).  

**Leadership Principles**  
*Customer Obsession*: Students get instant enrollment confirmation and immediate feedback.  
*Ownership*: I led cross‑team effort, wrote the spec, and maintained the pipeline for two semesters.  

**Bar‑raiser Takeaway**  
I validated trade‑offs: Fargate’s cost vs. Lambda’s cold start; chose S3 + Athena for query flexibility. Learned that automating grading requires rigorous test suites to avoid false positives—so I added a unit‑test harness that runs before each LLM evaluation, reducing misgraded submissions by 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
