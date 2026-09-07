---
qid: ing_e67117259e__aws__local
question: 'Explain: Service discovery for MCPs — modelcontextprotocol/modelcontextprotocol
  \u00b7 Discussions \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 417
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:12-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that built a real‑time recommendation engine for an e‑commerce platform. Our models were deployed as micro‑services (MCPs) behind API Gateway. The problem: each MCP needed to discover the correct *model context* (version, feature store URL, inference endpoint) without hard‑coding or manual updates.

**Action – Design**  
1. **Service Registry** – We used **AWS AppConfig + DynamoDB** as a lightweight registry. Each MCP writes its metadata (ModelContextProtocol vX, S3 model path, SageMaker endpoint ARN) to DynamoDB with TTL for stale entries.  
2. **Discovery API** – A Lambda function behind API Gateway queries DynamoDB, returns the latest context in O(1).  
3. **Caching** – MCPs cache the response locally (Redis via ElastiCache) and refresh every 5 min or on a *context‑changed* SNS notification.  
4. **Observability** – CloudWatch metrics (`ModelContextHits`, `StaleEntries`) trigger alerts; we auto‑scale Lambda based on traffic.

**Result**  
- Reduced model rollout latency from 30 s to <2 s.  
- Cut manual ops hours by 70% (≈200 hrs/quarter).  
- Achieved 99.9% availability of the discovery service with a cost of ~$0.12/day vs $3/day if we had used Route 53 health checks.

**Learning & Bar‑raiser notes**  
I owned the end‑to‑end pipeline, dived deep into DynamoDB read/write patterns, and iterated on TTL logic after an initial failure where stale entries caused cache misses. This aligns with *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
