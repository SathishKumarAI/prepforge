---
qid: ing_e658746ad0__aws__local
question: 'Explain: These changes don''t need to appear in — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 414
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:03-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to add a “personalized review‑ranking” feature to our location‑based recommendation platform (think Yelp/Google Places). The goal was to surface the most relevant reviews for each user without requiring a full re‑index of all 10 M+ reviews.

**Action**  
I first *dive deep* into the data pipeline: we had nightly batch jobs in **AWS Glue** that produced daily review embeddings (via a transformer model) stored in an **Amazon DynamoDB** table keyed by `location_id|review_id`. To avoid re‑computing every time, I introduced a lightweight **serverless inference layer** using **AWS Lambda + SageMaker Edge**.  
The Lambda function receives a user’s context (`user_id`, recent search terms), queries a small subset of embeddings from DynamoDB (filtered by `location_id` and a pre‑computed popularity score), then runs the model locally to compute cosine similarity scores in <200 ms. The top 5 reviews are returned via **API Gateway**.

*Bias for Action*: I shipped the prototype in two sprints, iterating on latency with CloudWatch metrics.  
*Ownership*: I set up an automated regression test suite that flags any >10% increase in response time or >1% drop in click‑through rate (CTR).

**Result**  
Within one month of launch, CTR for reviewed content rose from 3.2 % to **5.7 %** (+78 %), and latency stayed under 250 ms with a cost saving of ~30 % compared to the legacy batch re‑index approach.

**Learnings**  
I learned that *small, incremental ML inference layers* can dramatically improve UX without costly infrastructure changes—an approach I’ll bring to any AWS‑based location service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
