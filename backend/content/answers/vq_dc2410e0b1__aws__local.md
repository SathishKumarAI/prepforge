---
qid: vq_dc2410e0b1__aws__local
question: How can the standard deviation of the Series be calculated?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 412
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:18:15-05:00'
sources: []
---

**Situation & Task (Ownership / Deliver Results)**  
In my last role I led a data‑science sprint to surface churn predictors for the company’s subscription service. The raw telemetry lived in an S3 bucket and was queried nightly via Athena. One KPI required the *standard deviation* of user session lengths per day – a metric that would feed into a real‑time alerting pipeline on CloudWatch.

**Action (Dive Deep / Bias for Action)**  
I wrote a serverless UDF in Python, packaged it as a Lambda layer, and registered it with Athena. The UDF iterated over the 10 M session rows per day, computed `sqrt(sum((x-mean)²)/N)` on‑the‑fly to avoid materializing an intermediate table. I also added a Glue job that pre‑aggregates daily means in DynamoDB, so the Lambda only had to fetch the mean rather than recompute it.

**Result (Customer Obsession / Quantified Impact)**  
The pipeline now delivers the standard deviation in < 30 s per day versus 12 min previously. The alerting system reduced false positives by **42 %**, saving the support team ~80 hrs/month. Cost dropped from $0.12/day to $0.03/day thanks to the on‑demand Lambda execution and DynamoDB’s provisioned capacity.

**Bar‑raiser check**  
- Took full ownership of the end‑to‑end solution.  
- Dived deep into Athena limits, Lambda memory sizing, and DynamoDB throughput.  
- Quantified impact with concrete metrics (time, cost, false positives).  
- Learned to cache means; initially recomputed them, leading to a 15 % performance hit that we fixed in the next sprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
