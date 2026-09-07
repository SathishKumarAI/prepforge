---
qid: ing_4197524a49__aws__local
question: 'Explain: Retries — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 572
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:54:09-05:00'
sources: []
---

**Situation (S)**  
I led the migration of our on‑prem ML inference pipeline to a fully serverless architecture on AWS. The new system had to serve ~200 k predictions per day with <2 s latency while guaranteeing at least 99.9 % availability.

**Task (T)**  
Design an API gateway that automatically retries failed inference calls, handles transient network glitches, and throttles traffic to protect downstream Lambda functions without hurting user experience.

**Action (A)**  

| Requirement | AWS Service | Why |
|-------------|-------------|-----|
| Public REST endpoint | **Amazon API Gateway** | Native throttling, request/response mapping, built‑in retry logic. |
| Retry policy & circuit breaker | **API Gateway + Lambda Authorizer** | Custom header “X-Retry” to control back‑off; authorizer checks health of downstream services. |
| Asynchronous fallback (when retries fail) | **Amazon SQS FIFO** | Guarantees order, decouples client from backend latency. |
| Monitoring & alarms | **CloudWatch + X-Ray** | Trace retry counts and failure reasons. |

- Configured *max 3 retries* with exponential back‑off (base = 200 ms).  
- Enabled *request throttling*: 10 req/s per API key, 100 req/s account‑wide.  
- Implemented *fallback queue* to store requests that hit the retry limit; a separate Lambda polls SQS and retries after a 5‑minute delay.

**Result (R)**  

| Metric | Before | After |
|--------|--------|-------|
| Average latency | 1.8 s | **0.9 s** (↓50%) |
| Success rate | 97.2% | **99.7%** (+2.5pp) |
| Cost | $12k/month | $8.4k/month (‑30%) |

The retry strategy reduced error bursts during transient outages and kept the system responsive, meeting our SLA while staying within budget.

---

### Leadership Principles

- **Customer Obsession** – Ensured minimal latency for end users even when downstream services hiccup.
- **Dive Deep & Ownership** – Tuned retries and throttling thresholds based on real traffic patterns; iterated after each failure to improve resilience.  

Bar‑raisers will note my ownership of the entire flow, deep technical dive into retry mechanics, quantified impact, and lessons learned from initial over‑retrying that caused downstream overloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
