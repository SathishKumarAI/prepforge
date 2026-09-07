---
qid: vq_216194c6f4__aws__local
question: How do you usually get around your city?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 371
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:42:24-05:00'
sources: []
---

**Situation / Task**  
When I moved to Seattle for a new role, the city’s traffic congestion and limited parking made daily commutes stressful. My goal was to reduce commute time by 30 % while cutting personal carbon emissions.

**Action**  
I *owned* the problem by first mapping all routes using Google Maps API and collecting real‑time data from city sensors (traffic, bike lanes). I built a lightweight Python script that queried the API every 15 min, scored each route on distance, traffic density, and public transit options, and then suggested the optimal path.  
To make it scalable for a growing team, I containerized the service with Docker, deployed it to **AWS Fargate** behind an **Application Load Balancer**, and stored cached results in **Amazon DynamoDB** (TTL = 30 min). The system automatically scaled with traffic spikes (10 % more queries during peak hours) without any manual intervention.

**Result**  
Within two weeks, my commute time dropped from 55 minutes to 38 minutes—a 31 % reduction—while the script’s route choices cut personal CO₂ emissions by ~0.5 kg per day. The service cost <$10/month on Fargate and DynamoDB, keeping overhead negligible.

**Reflection (Bar‑raiser focus)**  
I demonstrated *Ownership* by tackling a personal pain point that also benefited colleagues, *Dive Deep* into data sources, and *Bias for Action* with rapid prototyping. Post‑deployment, I monitored latency and adjusted cache TTLs after noticing a 15 % drop in response time, learning to balance freshness vs cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
