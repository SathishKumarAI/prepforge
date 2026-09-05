---
qid: ing_d7c3d3a2ee__star__local
question: 'Explain: Amazon Simple Notification Service endpoints and quotas'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 473
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:29-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we had to replace our legacy email‑only alerting system with something scalable that could push real‑time fraud alerts to both mobile devices and web dashboards. The product manager set a 48‑hour deadline for the first prototype.

**Task**  
I needed to design an end‑to‑end notification pipeline using Amazon SNS, ensuring we stayed within AWS’s endpoint limits while keeping latency under 200 ms and handling up to 10 000 messages per second.

**Action**  
First, I mapped out all consumer endpoints: 3,000 iOS apps, 4,500 Android devices, 2,000 web browsers (via WebSocket), and a few external services via HTTPS. Using the AWS SDK for Python, I created separate SNS topics—`FraudAlertMobile`, `FraudAlertWeb`, and `FraudAlertExternal`. For each topic I set up dedicated application endpoints (`arn:aws:sns:us-east-1:123456789012:endpoint/APNS/MyApp/...`) and used the `SetEndpointAttributes` API to enable raw message delivery for web sockets.  
I then consulted the SNS quota documentation: 10 000 topics per account, 20 000 endpoints per topic, and 30 000 messages/second per account. I kept each topic under the 20 000‑endpoint cap by grouping similar devices (e.g., all iOS users in one endpoint). To stay within the message‑rate quota, I implemented a token bucket algorithm that throttled outbound messages to 9 500 msg/s, leaving headroom for spikes. Finally, I used CloudWatch metrics and SNS’s `ReceiveMessage` API to monitor delivery success rates, tweaking the retry policy to 3 attempts with exponential backoff.

**Result**  
The prototype launched on schedule, handling 12 000 fraud alerts per hour with a 99.8% successful delivery rate and average latency of 140 ms. We stayed well below the SNS quotas—using only 5 topics and 14 500 endpoints in total—and learned to design for scalability by aligning business requirements with AWS’s service limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
