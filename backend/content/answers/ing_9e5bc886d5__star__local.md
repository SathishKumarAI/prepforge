---
qid: ing_9e5bc886d5__star__local
question: 'Explain: and the system like i guess what — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 429
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:54-05:00'
sources: []
---

**Situation:**  
When I joined the smart‑city team at TechNova, we were tasked with reducing driver wait times in a downtown parking garage that served over 3,000 cars daily. The existing system simply opened gates on request and filled spots randomly, leading to an average of 12 minutes spent searching for parking.

**Task:**  
I needed to build a real‑time occupancy prediction model so the garage could proactively allocate spaces and guide drivers via a mobile app, cutting search time by at least 30 % within six months.

**Action:**  
1. Collected historical sensor data (vehicle counts, entry/exit timestamps) from 15 parking sensors and integrated live feeds using AWS Kinesis Data Streams.  
2. Built a feature set with rolling averages, day‑of‑week flags, weather API inputs, and a “time since last peak” metric.  
3. Trained a LightGBM model on an EC2 spot instance, tuning hyperparameters with Optuna to balance latency (<200 ms inference) and accuracy (RMSE = 0.12).  
4. Deployed the model as a containerized microservice on ECS Fargate behind an Application Load Balancer, exposing a REST endpoint for the mobile app.  
5. Implemented A/B testing via CloudWatch metrics to compare predicted vs actual occupancy and iterated the feature set.

**Result:**  
Within three months of deployment, driver search time dropped from 12 min to 7 min—a 42 % reduction—while overall garage utilization rose from 68 % to 81 %. The project also cut energy consumption by 18 % thanks to smarter lighting control. I learned that coupling edge‑sensor data with cloud‑native ML pipelines can deliver measurable operational gains in real‑time urban infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
