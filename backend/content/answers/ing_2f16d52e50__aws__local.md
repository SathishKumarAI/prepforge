---
qid: ing_2f16d52e50__aws__local
question: 'Explain: Pull-Based Heartbeat — How to Detect Node Failures in Distributed
  Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 427
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:11:44-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a highly‑available microservice platform for real‑time analytics at a fintech firm. The challenge: reliably detect node failures without over‑polling the cluster, while keeping cost and latency low.

**Action (Technical Design)**  
*Use a pull‑based heartbeat model*: each worker exposes an `/health` endpoint; a dedicated **Heartbeat Service** runs on an Amazon ECS Fargate task.  

1. **Pull logic** – every 5 s the service queries workers via HTTPS, storing responses in DynamoDB with TTL (120 s).  
2. **Failure detection** – if no heartbeat is recorded for two consecutive pulls, we flag the node as dead and trigger an Auto Scaling group policy to spin up a replacement.  
3. **Scalability & Availability** – the Heartbeat Service itself scales on CPU usage; we use AWS CloudWatch Alarms to auto‑scale it. The service runs in two AZs for HA.  
4. **Cost trade‑offs** – pull frequency is tuned (5 s vs 30 s) based on observed false positives; DynamoDB’s provisioned capacity keeps costs predictable.

**Result**  
After deployment, mean time to detect failure dropped from ~3 min to <12 s, and service‑level agreement (SLA) uptime rose from 99.7 % to 99.97 %. Cost savings of ~15 % were realized by eliminating the legacy push‑based SNS alerts that generated unnecessary traffic.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end reliability, dove deep into latency and false‑positive metrics, quantified impact on SLA, and iterated after a mis‑detection incident by adding a “grace period” flag. This demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**—the core AWS leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
