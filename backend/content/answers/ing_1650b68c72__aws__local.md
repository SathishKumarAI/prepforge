---
qid: ing_1650b68c72__aws__local
question: 'Explain: Design a multi-provider LLM gateway: routing, fallbacks, and the
  pitfalls teams hit.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 483
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:16:00-05:00'
sources: []
---

**Situation & Goal (Customer Obsession, Ownership)**  
I led a cross‑functional squad that built an *LLM Gateway* for a global SaaS platform. The goal was to route user queries to the best available provider (OpenAI, Anthropic, Cohere) while guaranteeing <200 ms latency and 99.9 % uptime.

**Task & Constraints**  
- Route by intent, cost, and regional compliance.  
- Automatic fallbacks if a provider is throttled or down.  
- Log performance for continuous improvement.

**Action (Dive Deep + Bias for Action)**  
1. **Routing Engine** – Stateless Lambda function behind API Gateway, selecting the provider via a *routing table* stored in DynamoDB with per‑region weights and real‑time health checks.  
2. **Fallback Layer** – If a call times out or returns >429, the Lambda retries on the next ranked provider; if all fail, it serves a cached “offline” response from S3.  
3. **Observability** – CloudWatch metrics (latency, error rate) trigger an SNS alert that auto‑scales an ECS Fargate task to run a *Health Watcher* which updates DynamoDB weights by 5 % per 1 % performance drop.  
4. **Cost Control** – A step function aggregates token usage; when spending exceeds the threshold, the system temporarily downgrades to a cheaper model.

**Result (Deliver Results)**  
- Latency dropped from 350 ms to 180 ms (+48 %).  
- Uptime rose to 99.95 % vs. previous 98.7 %.  
- Monthly cost reduced by 22 % through dynamic weighting.  

**Pitfalls & Learnings**  
Teams often over‑tune routing weights, causing oscillations; we mitigated this with hysteresis in the step function. We also learned that a single Lambda per request was costly at peak load—moving to Fargate improved cost predictability.

---

*Bar‑raiser cues*: ownership of end‑to‑end flow, deep dive into latency trade‑offs, quantified impact on performance and cost, iterative learning from fallback failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
