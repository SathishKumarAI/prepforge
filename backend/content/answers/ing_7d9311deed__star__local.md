---
qid: ing_7d9311deed__star__local
question: 'Explain: Example: GitHub Webhook to Your App — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 305
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:44:53-05:00'
sources: []
---

**Situation:**  
When I joined a SaaS startup, we needed real‑time sync of repository events (pushes, PR merges) into our internal analytics dashboard. The existing polling approach was lagging and caused duplicate data when the CI pipeline ran.

**Task:**  
Design and implement a robust GitHub webhook integration that would reliably capture events, validate authenticity, process payloads at scale, and store them in our PostgreSQL event log without blocking user traffic.

**Action:**  
I built an HTTPS endpoint on our Node.js server using Express, added a secret token to the header for HMAC verification (using `crypto`), and throttled incoming requests with Redis‑based rate limiting. For each payload I used worker queues (`BullMQ`) so the API could immediately acknowledge GitHub with a 200 OK while background jobs parsed the JSON, de‑duplicated via event IDs, and persisted to PostgreSQL with a composite unique constraint. I also added Sentry alerts for failed verifications and automated retry logic for transient DB errors.

**Result:**  
Within two weeks we achieved <5 ms latency from push to dashboard update, eliminated duplicate events (down 98%), and reduced server load by offloading heavy parsing to workers. The integration now supports 10k+ events per hour with 99.9% uptime, and I documented the entire flow for future onboarding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
