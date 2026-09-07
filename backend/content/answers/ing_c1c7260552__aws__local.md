---
qid: ing_c1c7260552__aws__local
question: 'Explain: My family’s unlikely homeschooling journey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 349
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:14-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
When my parents decided to homeschool my siblings after the pandemic shut down schools, I owned the project: design a curriculum that matched each child’s learning style while keeping costs under $300/month.

**Action (Dive Deep, Bias for Action)**  
I mapped every lesson to an AWS‑powered micro‑learning platform.  
- **AWS S3** stored videos and PDFs;  
- **Amazon Polly** generated narration in multiple accents;  
- **AWS Lambda + DynamoDB** powered a quiz engine that tracked progress and auto‑graded.  
I wrote a simple Terraform script, launched the stack in <30 min, and set up CloudWatch alerts for 99.9% uptime.

**Result (Deliver Results)**  
After three months:  
- All six students scored an average of **+15%** on standardized tests versus pre‑schooling peers.  
- We saved **$1,200** compared to traditional tutoring, a 30 % cost reduction.  
- The platform’s auto‑scale handled peak loads (500 concurrent users) with <2 s latency.

**Learnings & Bar‑raiser Signals**  
I learned that granular data (quiz scores, time spent) is vital for continuous improvement—hence the Lambda‑DynamoDB loop. The bar‑raiser would note my end‑to‑end ownership, deep dive into AWS services, and clear, quantified impact on learning outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
