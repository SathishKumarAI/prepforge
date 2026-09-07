---
qid: ing_61be309620__aws__local
question: 'Explain: Best practices for using sort keys to organize data in DynamoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 339
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:06:26-05:00'
sources: []
---

**Situation & Task (S)**  
While revamping a recommendation engine for our e‑commerce platform, I discovered that query latency spiked to 200 ms during peak traffic because our DynamoDB table was storing user interactions in an unstructured key space.

**Action (A)**  
I applied **Customer Obsession** and **Dive Deep**:  
1. Defined the access pattern—most reads were “fetch last 10 interactions for a user.”  
2. Chose a composite primary key with `PK = UserID` and a **sort key** `SK = Timestamp#InteractionID`.  
3. Introduced a global secondary index (GSI) on `SK` to support reverse‑chronological scans.  
4. Leveraged **AWS Lambda + DynamoDB Streams** for real‑time analytics, and **Amazon CloudWatch** alarms for latency thresholds.

The design reduced read capacity units by 70 % and cut average latency from 200 ms to 35 ms during a 3× traffic spike.  

**Result (R)**  
- 85 % drop in RCU consumption → $0.50/month savings.  
- Customer satisfaction scores rose by 12 points due to faster product discovery.

**Bar‑raiser takeaway**: I owned the problem, dove into query patterns, quantified impact, and iterated until we hit measurable performance goals—exactly what Amazon expects from a high‑performing engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
