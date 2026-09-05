---
qid: ing_eb3ad30f6a__star__local
question: 'Explain: But if you look at it and — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 404
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:48-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a new “Live Traffic Prediction” feature for our navigation app. The existing traffic feed was 5‑minute stale and the user churn during rush hours spiked by 12 %.  

**Task:**  
I had to build a real‑time ML pipeline that could ingest live GPS traces, predict congestion within 30 seconds, and push updates to the front‑end with <200 ms latency while keeping inference cost below $0.05 per request.

**Action:**  
1. **Data ingestion:** Set up an Apache Kafka cluster (3 brokers) to stream raw GPS packets (~10 kpps). I used Debezium to capture schema changes in our PostgreSQL source tables.  
2. **Feature engineering:** Implemented a rolling window feature extractor in Spark Structured Streaming, computing speed variance, density per 500 m segment, and historical delay patterns. The engine ran on an autoscaling EMR cluster; we kept the batch interval at 5 s to stay ahead of real‑time traffic.  
3. **Model training:** Trained a LightGBM model offline with early stopping, achieving 0.73 R² on hold‑out data. I wrapped it in a TensorFlow Serving endpoint for low‑latency inference.  
4. **Serving & caching:** Deployed the model behind an NGINX reverse proxy with edge caching (Redis) keyed by segment ID + timestamp window to reduce duplicate predictions during peak spikes.  

**Result:**  
The new system cut prediction latency from 5 min to 30 s, reduced user churn by 8 % in the first month, and lowered inference cost to $0.02 per request. I learned that marrying streaming ETL with lightweight serving layers can deliver sub‑second ML predictions at scale without breaking the budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
