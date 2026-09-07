---
qid: ing_e837f312d8__aws__local
question: 'Explain: Title: Display Advertising with Real-Time Bidding (RTB) and Behavioural
  Targeting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 434
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:25-05:00'
sources: []
---

**Context & Challenge**  
I led a cross‑functional team that built an RTB platform for a media partner to deliver personalized display ads at scale. The goal was to increase click‑through rate (CTR) by 30 % while keeping latency under 150 ms.

**Solution (S)**  
- **Data ingestion:** Kinesis Data Streams captured user events; Lambda processed them into feature vectors and stored in DynamoDB for low‑latency lookup.  
- **Model inference:** A SageMaker endpoint hosted a gradient‑boosted tree that scored each impression in real time.  
- **Bid logic:** An EC2 spot fleet ran the bidding algorithm, sending winning bids to the DSP via Pub/Sub (Amazon SNS).  
- **Feedback loop:** Clicks were streamed back into Kinesis for nightly retraining on SageMaker Pipelines.

**Result (R)**  
Within three months, CTR rose from 0.8 % to 1.04 % (+30 %), revenue per mille grew by $2.5, and the end‑to‑end latency stayed at ~120 ms. Cost was kept under $3 k/month due to spot instances and DynamoDB on-demand scaling.

**Leadership Principles**  
- **Customer Obsession & Ownership:** I drove the entire stack from data capture to revenue reporting, continuously iterating based on real user feedback.  
- **Dive Deep & Deliver Results:** By instrumenting every microservice with CloudWatch metrics, we identified a 5 % latency spike caused by cold starts and moved to Lambda provisioned concurrency.

**Bar‑raiser takeaways**  
- Clear ownership of the problem and solution path.  
- Quantified impact (CTR lift, revenue per mille).  
- Deep technical detail (AWS services, scalability, cost trade‑offs).  
- Lesson learned: early provisioning of compute resources can shave critical milliseconds from latency budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
