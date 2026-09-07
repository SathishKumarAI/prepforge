---
qid: ing_49ccfcaaab__aws__local
question: 'Explain: So originally for video we we started — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 541
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:18-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of our **YouTube‑style recommendation engine** to support a 10× increase in daily uploads while keeping latency under 200 ms for 90 % of requests. The goal was to deliver higher watch time without compromising cost.

**Action – Technical Design**  
1. **Data ingestion**: Used **Amazon Kinesis Data Streams** to buffer raw video metadata and user interactions, guaranteeing at‑least‑once delivery.  
2. **Feature store**: Persisted features in **DynamoDB Accelerator (DAX)** for sub‑10 ms read latency; a secondary copy lived in S3 Glacier for audit.  
3. **Model training**: Trained a deep neural network with **Amazon SageMaker** on spot instances, reducing GPU cost by 45 %. The model ingested the feature store and output ranked embeddings.  
4. **Serving layer**: Deployed inference as a **Lambda@Edge** function behind CloudFront to keep cold‑start latency below 80 ms globally. A fallback cache in **ElastiCache for Redis** handled spikes during new video releases.  
5. **Observability**: Integrated **Amazon CloudWatch Metrics & X-Ray** to capture per‑request latency and model confidence, feeding back into an automated retraining pipeline.

**Result**  
- **Latency** dropped from 350 ms to <200 ms for 90 % of traffic.  
- **Cost** fell by 30 % due to spot usage and caching.  
- **Watch time** increased by **12 %** within three months, a direct lift in ad revenue.

**Leadership Principles Reflected**  
- **Customer Obsession** – focused on end‑user experience (latency & relevance).  
- **Ownership** – drove the entire pipeline from ingestion to serving, owning SLAs and cost metrics.  

**Bar‑raiser takeaways**  
- Demonstrated *dive deep* by quantifying every component’s trade‑offs.  
- Showed *bias for action* with rapid prototyping (Lambda@Edge) and continuous improvement via observability.  
- Learned from a failed initial model that overfitting caused poor personalization; addressed it by expanding the feature set and adding regularization, illustrating iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
