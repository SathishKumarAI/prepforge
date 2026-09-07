---
qid: ing_badda665bd__aws__local
question: 'Explain: public endpoints um that we''ve sort of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 571
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:15-05:00'
sources: []
---

**Scenario:**  
“Design a public‑endpoints architecture that uses machine learning to predict parking demand and optimize spot allocation in a large urban garage.”

---

### Situation & Task  
I was asked to build an API layer that exposes two endpoints:  

1. **/predict‑demand** – returns a 24‑hour forecast of spot occupancy.  
2. **/allocate‑spots** – accepts a vehicle’s arrival time and returns the optimal spot ID.

The system had to serve millions of requests per day, keep latency < 100 ms, and be cost‑effective for a city municipality.

---

### Approach (Dive Deep & Ownership)  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Data ingestion | **Kinesis Firehose** → **S3** | Real‑time sensor streams; durable storage. |
| Feature store | **Amazon SageMaker Feature Store** | Centralized, versioned features (hourly occupancy, weather, events). |
| Model training & inference | **SageMaker Endpoint (AutoML)** | Auto‑tuned XGBoost for demand; lightweight Lambda for allocation logic. |
| API gateway | **API Gateway + Lambda@Edge** | Global edge caching reduces latency. |
| Monitoring | **CloudWatch + SageMaker Experiments** | Track RMSE, request counts, cost per inference. |

*Scalability:* Autoscaling endpoints handle 10k RPS; spot instances for training cut GPU costs by 35%.  
*Availability:* Multi‑AZ deployment, health checks in API Gateway; failover to a cold cache of last predictions.  
*Cost:* Predictive model runs once per hour (≈$0.05/hr); inference cost <$0.00002 per call.

---

### Result (Deliver Results)  

- **Accuracy:** RMSE dropped from 12% to 4% after iterative feature engineering.  
- **Latency:** 90th percentile < 70 ms for both endpoints.  
- **Cost savings:** City reported $120k annual reduction in manual spot allocation and a 15% increase in revenue due to dynamic pricing.

---

### What the Bar‑Raiser Looks For  

1. **Ownership** – I owned data pipeline, model lifecycle, and cost optimization.  
2. **Dive Deep** – Detailed trade‑offs between SageMaker vs Lambda; edge caching logic.  
3. **Quantified Impact** – Concrete RMSE, latency, and cost metrics.  
4. **Learning from Failure** – Initial prototype had stale features; fixed by adding a feature refresh job and monitoring alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
