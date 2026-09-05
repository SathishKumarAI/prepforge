---
qid: ing_6d176c4bac__star__local
question: 'Explain: Non-Functional Requirements — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 369
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:22-05:00'
sources: []
---

**Situation** – I was leading the redesign of our internal URL‑shortener used by marketing to share links in newsletters and social media. The old system hit traffic spikes during product launches, causing 15 % latency increases and occasional outages.

**Task** – Define the non‑functional requirements (NFRs) that would keep the service reliable, fast, and secure while scaling to millions of requests per day.

**Action** – I mapped out critical NFR categories:  
- **Performance:** Target < 200 ms average response time under 10k QPS; implemented a Redis cache for hot URLs and async background persistence.  
- **Scalability:** Adopted a stateless API behind an AWS ALB with auto‑scaling, sharded the database by hash prefix to avoid hotspots.  
- **Availability & Fault tolerance:** Enforced 99.95 % SLA; used multi‑AZ deployments and Circuit Breaker patterns in Go microservices.  
- **Security:** Enabled TLS termination at the edge, applied HMAC validation for link creation, and added rate‑limiting (100 requests/min) per IP to mitigate abuse.  
- **Maintainability:** Adopted OpenTelemetry for distributed tracing; set up Prometheus/Grafana dashboards and automated alerts on SLA violations.

**Result** – After deployment, we achieved 98 % of traffic under 150 ms, dropped error rates from 2 % to < 0.01 %, and handled a launch spike of 1M requests without downtime. I learned that balancing latency, cost, and operational overhead requires explicit NFRs written as measurable targets before coding starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
