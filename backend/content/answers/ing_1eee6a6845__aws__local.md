---
qid: ing_1eee6a6845__aws__local
question: How do you design fallbacks across multiple LLM providers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 526
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:19-05:00'
sources: []
---

**Situation / Task**  
While building a cross‑platform chatbot for a global retailer, I was tasked with ensuring **zero downtime** when one of three LLM providers (OpenAI, Anthropic, Cohere) failed or hit quota limits. The SLA required 99.9 % uptime and latency < 300 ms.

**Action**  
I architected an *LLM‑agnostic fallback pipeline* using:

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| Ingress | API Gateway + Lambda@Edge | Edge routing for sub‑100 ms request triage. |
| Orchestration | Step Functions (Parallel & Choice) | Declarative retries, weighted routing, and circuit‑breaker logic. |
| Messaging | SQS FIFO | Guarantees order when provider queues are slow. |
| State | DynamoDB TTL | Tracks per‑session token usage and health counters. |
| Monitoring | CloudWatch + EventBridge | Auto‑scale alarms on latency or error rates; auto‑invoke remediation. |

The Step Function first sends the prompt to the *primary* LLM (OpenAI). If a 5xx or quota error occurs, it immediately routes to the *secondary* provider (Anthropic), and finally to *tertiary* (Cohere) as a last resort. Health checks update DynamoDB counters; after three consecutive failures, that provider is temporarily black‑listed for 10 min.

**Result**  
Post‑deployment, we achieved **99.98 % uptime** over 6 months and reduced average response latency from 350 ms to **280 ms** (20 % improvement). Cost increased only by 4 % due to the additional provider calls, well within budget.

**Reflection**  
I owned every layer of this fallback system—design, implementation, ops—and performed a *dive deep* into each provider’s SLA. When an early failure hit during testing, I iterated on the circuit‑breaker logic, learning that a simple retry loop was insufficient for quota limits. This experience sharpened my bias for action and reinforced the principle of **Ownership**—always ensuring the system meets customer expectations, no matter which LLM is active.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
