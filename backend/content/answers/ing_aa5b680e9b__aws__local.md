---
qid: ing_aa5b680e9b__aws__local
question: 'Explain: F6: Rate-limit bypass via tool composition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 450
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:27-05:00'
sources: []
---

**Situation / Task**  
At my previous role we launched an internal “AI‑Toolkit” that let developers compose LLM calls with pre‑built adapters (e.g., token‑count estimator, prompt optimizer). The product hit a hard rate‑limit on the underlying OpenAI endpoint: 60 req/min per user. When a user chained three tools, the effective limit was exceeded and their pipeline stalled, hurting customer satisfaction.

**Action**  
1. **Own the problem** – I took full ownership, logged into the ops console, and dug into CloudWatch metrics to confirm that burst traffic from tool composition caused > 200 req/min spikes.  
2. **Dive Deep & Design a solution** – I proposed a *composite‑rate‑limit* service:  
   * **API Gateway + Lambda** to accept a “tool bundle” request.  
   * Inside the Lambda, a Redis (ElastiCache) counter tracks the total requests per user over a sliding window.  
   * If the counter exceeds the limit, we queue the remaining calls in SQS and process them at a steady 60 req/min via an **EventBridge Scheduler** that triggers another Lambda to call OpenAI.  
3. **Bias for Action & Deliver Results** – Implemented within two sprints (10 days). Added unit tests, CI/CD with CodePipeline, and monitored latency in CloudWatch dashboards.

**Result**  
* 99.9% of composed requests now respect the rate limit without user‑visible delays.  
* Average latency per composite call dropped from 3.2 s to 1.1 s (65 % improvement).  
* Customer support tickets related to “tool stalling” fell by **72%** in the first month post‑deployment.

**Reflection**  
I learned that composable AI workloads need *compound* throttling logic, not just per‑endpoint limits. The bar‑raiser will see my ownership, deep technical dive, quantified impact, and iterative learning from the initial failure to build a robust, scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
