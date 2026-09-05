---
qid: ing_8c4245d5c3__star__local
question: 'Explain: Application-to-Person (A2P) — AWS-Services/4_MessageBrokers/AmazonSNS.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 370
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:25-05:00'
sources: []
---

**Situation**  
At my last company we launched a real‑time alert system for the customer support team. The existing email pipeline was too slow, and our mobile users were missing urgent updates because push notifications weren’t reliably delivered.

**Task**  
I had to design a scalable, fault‑tolerant A2P messaging solution that could push SMS, email, and mobile app alerts to thousands of customers within seconds, while keeping costs under the quarterly budget.

**Action**  
I chose Amazon SNS as our message broker. First, I created a “SupportAlerts” topic and subscribed an SQS queue for internal logging, an HTTP endpoint for the web dashboard, and two SMS endpoints (one per carrier) to handle carrier throttling. To ensure delivery even under high load, I configured multiple SNS regions and enabled dead‑letter queues for failed deliveries. I also set up a CloudWatch alarm that triggered an Lambda function to switch to a secondary topic if the primary’s success rate fell below 98%. Finally, I used IAM policies to restrict publish access only to our alert service.

**Result**  
The new A2P system cut notification latency from ~30 s to under 5 s and increased overall delivery success from 92% to 99.8%. We saved roughly $1,200 per month by avoiding over‑provisioned EC2 instances, and the team reported a 35% reduction in support ticket backlog due to faster user responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
