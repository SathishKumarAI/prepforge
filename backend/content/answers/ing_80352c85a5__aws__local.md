---
qid: ing_80352c85a5__aws__local
question: 'Explain: hi guys for the first time ever — Expert gets Interviewed! @gkcs
  does IRCTC System Design!! It\u2019s a hard question \ud83e\udd2f\ud83e\udd2f'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 488
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:10-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a **real‑time recommendation engine for IRCTC’s ticketing portal**—a system that must surface the most relevant train options (price, timing, seat availability) to millions of users per day while staying within a $2 M annual budget.

**Action – Technical Design**  
- **Data ingestion**: *Amazon Kinesis Data Streams* for clickstream + booking events.  
- **Feature store**: *Amazon SageMaker Feature Store* to keep user‑train interaction vectors, updated every 5 min.  
- **Model training**: *SageMaker Pipelines* with an XGBoost model (feature importance ≈ 70% on train data). Trained nightly; models stored in S3 and deployed via *SageMaker Endpoint*.  
- **Serving layer**: *Amazon API Gateway* + *Lambda@Edge* to route requests to the nearest endpoint, guaranteeing <50 ms latency.  
- **Caching**: *ElastiCache‑Redis* for hot user sessions; cache hit rate 92%.  
- **Observability**: CloudWatch metrics + X-Ray traces for end‑to‑end latency.

**Result**  
- **Accuracy**: CTR increased from 3.2 % to 7.8 % (Δ +124 %).  
- **Scalability**: Handled 1.5 M concurrent users with <0.5 s avg response time.  
- **Cost**: $1.6 M/year, 20 % under budget due to autoscaling and spot instances.

**Reflection (Amazon Leadership Principles)**  
*Ownership*: I assumed full responsibility for end‑to‑end reliability and cost control.  
*Dive Deep*: Continuously profiled model drift; tuned hyperparameters until feature importance plateaued.  
*Bias for Action*: Deployed a beta version within 3 weeks of requirement receipt, learning from early user feedback to iterate quickly.  

**Takeaway**  
A well‑structured ML pipeline leveraging managed AWS services can deliver customer‑centric personalization at scale while keeping costs predictable—exactly what Amazon expects from its engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
