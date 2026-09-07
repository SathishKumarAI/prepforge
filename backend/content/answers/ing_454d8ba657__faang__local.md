---
qid: ing_454d8ba657__faang__local
question: 'Explain: Redirection Service — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 509
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:25:13-05:00'
sources: []
---

**Redirection Service – URL Shortener**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | The goal: a public service that maps a long URL → short token and redirects users. Assume millions of requests per day, global availability, high write/read ratio, eventual consistency is fine for the mapping table. Ask about SLA, analytics needs, and security (spam, phishing). |
| **Approach** | 1) *API layer* – REST/HTTP endpoint to create a short URL. <br>2) *Storage* – key‑value store (e.g., DynamoDB / Cassandra) with token as primary key, value = original URL + metadata. <br>3) *Redirection* – CDN edge cache for popular tokens; fallback to origin lookup. <br>4) *Token generation* – base‑62 incremental counter or hash → ensures uniqueness and shortness. <br>5) *Analytics* – separate event stream (Kafka) feeding a data warehouse. |
| **Depth** | - **Throughput**: 10k writes/sec, 100k reads/sec.<br>- **Latency**: <50 ms for redirect via edge cache; <200 ms for creation. <br>- **Consistency**: eventual consistency acceptable; use read‑repair on redirects. <br>- **Fault tolerance**: replicate key‑value store across zones; use load balancer with health checks.<br>- **Security**: rate‑limit per IP, CAPTCHA after N failures, blacklist known malicious domains. |
| **Edge Cases** | • Token collision – handle by retrying or using UUID fallback.<br>• Deleted URLs – return 410 GONE. <br>• Extremely long original URL – truncate or store in separate blob storage. <br>• DoS on creation endpoint – enforce per‑user quotas. |
| **Optimize & Communicate** | To reduce latency, pre‑populate hot tokens in a Redis cache at the edge. For cost, use serverless functions for low‑traffic regions and autoscale DB capacity. I’d present this as a layered diagram: API → CDN → KV store → Analytics pipeline, highlighting trade‑offs between consistency, cost, and speed. This shows clear reasoning, scalability focus, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
