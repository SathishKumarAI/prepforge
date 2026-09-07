---
qid: ing_90f0f4c55f__aws__local
question: 'Explain: System Design — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 542
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:55-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a *Sales‑Rank-by‑Category* service for an e‑commerce platform that serves 2 M active users daily and processes ~10k orders per minute. The goal was to deliver real‑time, category‑specific rank lists for product discovery while keeping latency <200 ms and cost under $5K/month.

**Approach & Design**  
1. **Data ingestion** – Use Kinesis Data Streams to capture order events in real time; Lambda functions transform the stream into *category→sales* aggregates and push them to DynamoDB (partition key: category, sort key: timestamp).  
2. **Aggregation & ML scoring** – A scheduled Glue job runs nightly, pulling the last 30 days of data from S3, training a LightGBM model (scored on sales velocity + recency) and writing feature vectors back to DynamoDB.  
3. **Serving layer** – API Gateway → Lambda@Edge (Node.js) reads the top‑10 items per category from DynamoDB Global Secondary Index; results are cached in CloudFront for 5 min, guaranteeing <200 ms latency.  
4. **Observability** – CloudWatch metrics track “rank‑refresh‑latency” and “out‑of‑sync‑count”; alerts trigger a SageMaker debugging pipeline if rank drift >2%.

**Result (STAR)**  
- **Impact**: Daily active users saw a 12 % lift in click‑through on category pages; revenue per session grew 7 %.  
- **Scalability**: The system handled peak 15k orders/min with zero throttling; DynamoDB autoscaling kept provisioned capacity at 0.5 × the peak load, saving ~$1.2K/month.  
- **Reliability**: 99.98 % uptime over 6 months; failover to a secondary region incurred <10 ms latency increase.

**Learning & Ownership**  
I identified that naïve pre‑aggregation caused stale ranks during flash sales. By adding a *real‑time delta* stream and adjusting Lambda timeouts, we eliminated the 5 min lag. The bar‑raiser will note my ownership of end‑to‑end flow, deep dive into latency bottlenecks, quantified revenue lift, and iterative learning from failure—aligned with **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
