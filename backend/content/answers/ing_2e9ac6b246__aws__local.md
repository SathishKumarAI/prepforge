---
qid: ing_2e9ac6b246__aws__local
question: 'Explain: 4.1 Requirement 1: URL Shortening — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 638
total_tokens: 884
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:10:29-05:00'
sources: []
---

**Scenario (S)**  
At my previous role I was tasked to launch a public URL‑shortening service that would support 10 M clicks/day with < 200 ms latency and zero downtime.

**Task (T)**  
Design an end‑to‑end system: user signup, short‑URL generation, redirect handling, analytics, and abuse prevention while keeping cost ≤ $2k/month.

**Action (A)**  

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| **API** | API Gateway + Lambda | Serverless for instant scaling; cold‑start mitigated with provisioned concurrency. |
| **Persistence** | DynamoDB (PK = `hash`, SK = `meta`) | Single‑write, low‑latency; auto‑scales to 100 k RCU/WCU. |
| **Hash generation** | Lambda + SHA‑256 → base62(64‑bit) | Guarantees uniqueness; collision rate < 10⁻¹². |
| **Redirection** | CloudFront edge cache + Lambda@Edge | 99.999% hit‑rate, sub‑50 ms redirects globally. |
| **Analytics** | Kinesis Data Streams → Lambda → Redshift | Batch aggregates for daily reports; cost ≈ $0.25/GB ingested. |
| **Abuse detection** | DynamoDB TTL + CloudWatch alarms | Auto‑delete expired keys, trigger alerts on spikes. |

*Scalability*: DynamoDB auto‑scales; API Gateway handles > 10⁵ RPS per region.  
*Availability*: Multi‑AZ deployment, CloudFront edge nodes, Lambda concurrency limits.  
*Cost*: Rough estimate – $1.2k/month (API + Lambda) + $0.3k (DynamoDB) + $0.5k (CloudFront), < $2k.

**Result (R)**  
Launched in 6 weeks; served 12 M clicks/day with 99.998% success, latency 180 µs average. Cost stayed at $1.8k/month. Customer churn dropped by 18% after adding analytics dashboards.

---

### Leadership Principles  

- **Ownership** – I drove the entire stack from design to ops, taking responsibility for SLAs and cost targets.  
- **Dive Deep** – Chose base62 hashing after profiling collision probabilities; tuned DynamoDB provisioned capacity based on real traffic patterns.  

Bar‑raisers look for: clear ownership, data‑driven impact (12 M clicks/day, $1.8k/month), deep technical trade‑offs (Lambda vs EC2, CloudFront caching), and lessons learned (initially over‑provisioned Lambda concurrency; later adjusted based on warm‑start metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
