---
qid: ing_52bcae77a3__star__local
question: 'Explain: Adding Jitter — Exponential Backoff And Jitter | AWS Architecture
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 297
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:36-05:00'
sources: []
---

**Situation:**  
In a serverless recommendation engine on AWS, we had a burst of traffic during a product launch. The Lambda functions started throttling because the DynamoDB table’s read capacity was exceeded, causing our API to time‑out and customers to see “service unavailable” errors.

**Task:**  
I needed to design a retry strategy that would keep the system responsive while respecting AWS limits—essentially turning an unstable service call into a graceful degradation path.

**Action:**  
I implemented exponential backoff with jitter in the Lambda retry logic. First, I wrapped every DynamoDB read in a wrapper function that attempted the operation up to five times. Between attempts, it waited `baseDelay * 2^attempt` milliseconds and added a random offset (`±50%`) to break the “thundering herd” effect. I used Python’s `time.sleep()` for pauses and injected AWS SDK retries via boto3’s `Config`. To monitor impact, I logged each retry attempt and delay to CloudWatch metrics.

**Result:**  
After deployment, API error rates dropped from 12% to under 1% during peak traffic. The average response time improved from 2.4 s to 1.1 s. This exercise taught me that simple back‑off logic, when combined with jitter, can dramatically improve reliability without needing costly infrastructure changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
