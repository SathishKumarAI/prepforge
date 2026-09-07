---
qid: ing_46edb19c4e__aws__local
question: 'Explain: Multi-Step Injection Defeats Single-Payload Defenses'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 369
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:13-05:00'
sources: []
---

**Situation & Task**  
At a cloud‑native startup we shipped an AI inference API that was protected by a single‑payload injection guard (WAF + regex). After a brief security audit a malicious actor bypassed the filter using a multi‑step payload that split the attack across several HTTP requests. I owned the incident response and had to redesign our defense so the solution could scale to millions of requests per second.

**Action**  
1. **Dive Deep into traffic patterns** – captured 12 TB of logs, identified the multi‑step sequence (e.g., `GET /?a=...`, `POST /payload`, `GET /final`).  
2. **AWS Service Stack** – deployed an API Gateway + Lambda authorizer that maintained a short‑lived session token across steps; used DynamoDB to store state with TTL 30 s, and CloudWatch Logs Insights for real‑time anomaly detection.  
3. **Bias for Action** – rolled out the new guard in canary mode (5% traffic) within 4 h.  
4. **Deliver Results** – after full rollout we saw a 99.9 % reduction in successful injection attempts and increased throughput from 1M to 2.8M RPS with < $0.02 per 10K requests.

**Result**  
The new multi‑step detection kept our API secure while maintaining low latency and cost, proving that ownership + deep analysis can turn a single‑point failure into a scalable defense.  

*Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
