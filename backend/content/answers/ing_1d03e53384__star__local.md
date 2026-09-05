---
qid: ing_1d03e53384__star__local
question: 'Explain: probably a little unnecessary here um a — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 376
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:36-05:00'
sources: []
---

**Situation:** While leading the infrastructure team for an urban e‑commerce fulfillment center, we discovered that our on‑site parking lot was operating at only 45 % capacity during peak hours, causing employee congestion and delayed deliveries.

**Task:** I was tasked with designing a scalable parking garage system that could dynamically allocate spaces, integrate real‑time occupancy data, and support a mobile app for employees to reserve spots ahead of time—all within a $2 M budget and a 6‑month delivery window.

**Action:** I scoped the project using AWS CloudFormation to provision an Auto Scaling group of EC2 instances running a Flask API that consumed sensor data from RFID tags and weight sensors via MQTT. The API exposed REST endpoints for spot status, reservation, and payment processing (integrated with Stripe). I introduced a Redis cache to keep occupancy counts within 50 ms latency, and used DynamoDB for persistent state. For the mobile front‑end, we built a React Native app that connected to the API over HTTPS, displaying real‑time availability on a heat map. To ensure reliability, I set up CloudWatch alarms and an S3 bucket for backup logs.

**Result:** The new system increased parking utilization from 45 % to 78 % during peak periods, reduced employee commute time by 12 min on average, and cut overtime costs by $35k annually. I learned how to balance cost, latency, and scalability in a real‑world infrastructure project while keeping the user experience smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
