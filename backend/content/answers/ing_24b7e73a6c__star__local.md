---
qid: ing_24b7e73a6c__star__local
question: 'Explain: I no longer got remote Network calls — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 326
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:34-05:00'
sources: []
---

**Situation:**  
In my last role I was responsible for a micro‑service that fetched user analytics from an external API every hour. The service ran on AWS Lambda and used EventBridge to trigger the job. After a recent update to the networking stack, our Lambda started returning “No response” errors – no remote calls were ever made.

**Task:**  
I had to diagnose why the outbound HTTP requests stopped and restore reliable communication without breaking the event‑driven flow or adding latency.

**Action:**  
First I examined the VPC configuration: the Lambda was now in a private subnet with no NAT gateway, so all egress traffic was blocked. I re‑enabled a NAT gateway, updated the subnet route tables, and added an explicit security group rule allowing outbound HTTPS to the API’s IP range. Next, I instrumented the function with CloudWatch Logs and X-Ray traces to confirm that the request path was reached. Finally, I refactored the retry logic using the Polly library to handle transient failures gracefully and logged each attempt for visibility.

**Result:**  
Outbound calls resumed within 30 minutes of deployment, restoring a 99.9% success rate on the hourly job. The service now logs detailed traces, reducing mean time to recovery from hours to under five minutes. I learned that in event‑driven architectures, network isolation can silently break services; proactive monitoring and explicit VPC routing are essential for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
