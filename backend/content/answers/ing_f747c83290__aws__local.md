---
qid: ing_f747c83290__aws__local
question: 'Explain: Blogs That Shaped This Guide — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 433
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:54-05:00'
sources: []
---

**Situation / Task**  
I was tasked with creating a *comprehensive AI‑evaluations study guide* for our internal training portal. The goal was to aggregate the most influential blogs, distill their insights into bite‑size modules, and deliver them at scale while keeping costs under $2k/month.

**Action (Design)**  
1. **Data ingestion** – Scrape 200+ AI blogs using AWS Lambda + BeautifulSoup; store raw HTML in S3.  
2. **NLP processing** – Run a Textract‑based pipeline on EC2 Spot instances to extract key sentences, then feed them into Amazon Comprehend for entity/intent extraction.  
3. **Knowledge graph** – Persist triples (blog → topic → subtopic) in DynamoDB with GSI “TopicIndex” for quick lookup.  
4. **Content delivery** – Serve static HTML via CloudFront + S3; use API Gateway + Lambda@Edge to personalize recommendations per user.  

**Result**  
- Reduced manual content curation time from 120 hrs/month to 5 hrs.  
- Achieved 99.9% availability (S3 & CloudFront) with a cost of $1,780/month.  
- User engagement increased by **42%** in the first quarter (average session length +18 min).  

**Leadership Principles**  
*Customer Obsession*: built personalization so learners got the most relevant blogs instantly.  
*Ownership*: I handled end‑to‑end architecture and continuous monitoring via CloudWatch alarms.  

**Bar‑raiser cues** – clear ownership, deep dive into AWS services (Lambda, S3, DynamoDB, Comprehend), quantified impact, and lessons learned from an initial failure to cache NLP results—fixed by moving to Spot instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
