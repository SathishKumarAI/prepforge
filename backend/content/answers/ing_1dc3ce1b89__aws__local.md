---
qid: ing_1dc3ce1b89__aws__local
question: LLM APIs are slow, expensive, and flaky. How does your retry strategy differ
  from retrying a normal REST dependency?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 509
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:33:53-05:00'
sources: []
---

**Situation** – In my last role I built a real‑time recommendation engine that called GPT‑4 for content generation. Each call cost ~$0.03/1k tokens and the latency was ~2 s, yet the downstream UI required <500 ms responses.

**Task** – Design a retry strategy that keeps costs in check, guarantees 99.9% availability, and respects the API’s rate limits.

**Action**  
| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| **1. Rate‑limit & throttle** | *API Gateway + Lambda* | Enforce a per‑user quota (e.g., 5 req/min) to avoid hitting the LLM’s burst limit. |
| **2. Circuit breaker** | *AWS Step Functions* state machine with `Catch` and `Retry` policies | Breaks out after 3 consecutive failures, preventing cascading latency. |
| **3. Exponential back‑off + jitter** | Lambda retry logic (no built‑in) | Reduces contention; keeps average retries <2 per request. |
| **4. Fallback cache** | *DynamoDB TTL* | Store the last successful prompt–response pair; if API is down, return cached text in <50 ms. |
| **5. Cost guardrail** | CloudWatch Alarms + SNS | Trigger an alert when total token spend > $10/day and automatically switch to a cheaper model (e.g., GPT‑3.5). |

**Result** – The new pipeline cut the average retry cost from 18 % of total spend to <4 %, reduced latency variance by 35 %, and maintained 99.95% uptime during an API outage that previously caused 12 % SLA violations.

**Learnings** – Ownership means continuously monitoring token usage, diving deep into CloudWatch metrics, and iterating on the back‑off curve. A bar‑raiser expects a data‑driven trade‑off analysis (cost vs. latency) and proof of resilience under failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
