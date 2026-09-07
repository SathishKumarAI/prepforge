---
qid: ing_ea1d78e34a__aws__local
question: 'Explain: Q: An agent called a broken tool 400 times in five minutes. Diagnose
  and design the fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 406
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:39-05:00'
sources: []
---

**Situation & Task**  
At my last role I built an autonomous recommendation engine that ran on ECS Fargate. One day a downstream “broken‑tool” microservice was hit 400 times in five minutes – a burst that crashed the entire pipeline and cost us ~\$1,200 of compute for that week. The goal was to diagnose the root cause and design a resilient fix.

**Action**  
*Dive Deep*: I enabled CloudWatch Logs Insights across all containers and set up an X‑Ray trace for every request. By correlating timestamps I discovered that 350 of those calls were malformed JSON payloads from a legacy client, causing the service to spin up new tasks repeatedly (each 10 GB memory).  
*Bias for Action*: I rolled out a **Lambda function** as a gatekeeper – it validates payloads before routing them to ECS. If validation fails, the request is sent to an SQS “dead‑letter” queue for manual review instead of triggering a new task.  
*Ownership & Invent & Simplify*: I replaced the monolithic service with a **Serverless API (API Gateway + Lambda)** that performs lightweight validation and forwards only valid requests to the ECS cluster. I also added **Auto Scaling** based on CPU utilisation and introduced a **Circuit Breaker pattern** via AWS AppConfig, so after 5 consecutive failures the gateway pauses traffic for 30 s.

**Result**  
- Latency of the “broken‑tool” endpoint dropped from 4 s to <200 ms.  
- Cost savings: \$1,200 per week → <$50/month.  
- Zero service disruptions in the following quarter.  

**What a bar‑raiser hears** – clear ownership (I took full responsibility), deep technical dive with metrics, quantified impact, and a learning loop that turned a failure into an automated safety net.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
