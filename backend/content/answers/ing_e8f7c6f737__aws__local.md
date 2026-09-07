---
qid: ing_e8f7c6f737__aws__local
question: 'Explain: Vendor Alerts with Ping Bot — Spring Cloud: Routing with Zuul
  and Gateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 420
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:57-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous role I was tasked to build a real‑time alerting pipeline for our ML model monitoring platform. Users needed instant notification when a model drifted or failed, so we had to guarantee < 2 s latency and 99.9% availability.

**Action (Ownership + Dive Deep)**  
I designed a Spring Cloud stack:  

1. **Zuul 2** – API gateway for legacy services; it routes `/alerts` to our new micro‑service while preserving backward compatibility.  
2. **Spring Cloud Gateway** – handles the new `ping-bot` endpoint, applying rate‑limit (10 req/s) and circuit breaker (Hystrix) to avoid cascading failures.  
3. **Kafka** – streams alert events from ML jobs; the gateway publishes to a topic that the Ping Bot consumes.  
4. **AWS SNS + Lambda** – Lambda pulls messages, formats them, and pushes to Slack/MS Teams via webhooks.  

I used **Docker‑Compose** locally for testing, then deployed on ECS Fargate with auto‑scaling based on CloudWatch metrics (CPU > 70%). Cost was kept under $200/month by using spot instances for the gateway tier.

**Result (Deliver Results)**  
- Latency dropped from 4.8 s to **1.3 s** (average).  
- Uptime improved to **99.97%** over a 6‑month period.  
- Customer support tickets related to alert delays fell by **45%**.

**Learnings**  
The key was *deep diving* into each component’s metrics; we discovered that Zuul’s default thread pool caused bottlenecks, so we switched to a reactive stack with Spring Cloud Gateway. This trade‑off improved scalability but required re‑architecting the health check logic—an adjustment I documented for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
