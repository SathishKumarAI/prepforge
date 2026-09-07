---
qid: vq_daf283c8b0__aws__local
question: Do the predicted value, and the mean value varies in any way?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 370
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:17:58-05:00'
sources: []
---

**Situation / Task**  
While leading a serverless recommendation engine for a video‑on‑demand platform, I was asked whether the *predicted* value from our XGBoost model and the *mean* (baseline) value should differ across user segments.

**Action**  
I owned the investigation:  
1. **Dive Deep** – logged every inference into DynamoDB, aggregated by cohort (age, region).  
2. **Data‑driven Analysis** – calculated mean absolute error per segment; used AWS Glue to run Spark jobs that produced a heatmap of prediction bias.  
3. **Design Decision** – deployed two Lambda functions: one for the model and one for a *fallback* that returns the global mean when confidence < 0.7.  
4. **AWS Services** – SageMaker for training, API Gateway + Lambda for inference, CloudWatch for monitoring drift, and Athena to query logs cost‑effectively.

**Result**  
Segment‑specific predictions improved click‑through rate by **12 %** (from 3.1 % to 3.5 %) while keeping overall latency < 50 ms. The fallback reduced mean absolute error by **18 %**, and the system’s cost dropped 8 % due to fewer unnecessary Lambda invocations.

**Learning**  
I learned that predicted values *do* vary across cohorts; a one‑size‑fits‑all mean masks valuable signal. Future models will incorporate segment‑aware calibration, and I’ll continue to monitor drift with CloudWatch alarms—an example of **Ownership**, **Dive Deep**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
