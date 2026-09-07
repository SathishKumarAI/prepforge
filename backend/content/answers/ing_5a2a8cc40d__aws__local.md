---
qid: ing_5a2a8cc40d__aws__local
question: 'Explain: Using nested loops, I''ve written some code'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 360
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:37-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a real‑time recommendation engine for a media platform that had to score every user–content pair within 200 ms. The naive solution I wrote used nested loops over users and items, which blew the latency budget.

**Action**  
1. **Own** the problem: I rewrote the algorithm as a vectorized matrix multiplication using *NumPy* on an EC2 spot fleet (p3.8xlarge).  
2. **Dive Deep** into performance: profiled with `cProfile` and found 70 % time spent in Python loops. Replaced them with GPU‑accelerated BLAS calls via CuPy, cutting the loop cost to <1 %.  
3. Deployed the model as a **Lambda@Edge** function behind CloudFront, caching top‑k scores per user in DynamoDB (TTL 24 h).  
4. Added an **SQS** trigger that pushes new content IDs; a Step Function orchestrates a batch job on EMR to refresh the matrix nightly.

**Result**  
- Latency dropped from 1.2 s to 180 ms, meeting SLA.  
- Cost decreased by 35 % (spot + Lambda) while scaling to 10× traffic without throttling.  
- User engagement increased 12 % due to fresher recommendations.

**Reflection**  
I learned that micro‑optimizing Python loops can be a false sense of progress; moving heavy work to GPU and leveraging serverless caching delivers real, measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
