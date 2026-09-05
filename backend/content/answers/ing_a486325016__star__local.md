---
qid: ing_a486325016__star__local
question: 'Explain: Tech stack — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 335
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:27-05:00'
sources: []
---

**Situation** – At a mid‑size fintech, we were migrating our legacy RBAC system to a microservice architecture. The existing hardcoded role matrix caused frequent outages during feature rollouts and made compliance reporting impossible.  

**Task** – Build an extensible authorization layer that supports fine‑grained policies (row‑level, attribute‑based) across 12 services, while keeping latency under 5 ms and enabling audit logs for SOX.  

**Action** – I chose Cerbos as the policy engine because of its open‑source Go SDK and JSON‑policy language. First, I mapped all existing roles into Cerbos “resources” and “actions,” then wrote a migration script to convert legacy ACLs into Cerbos policies stored in GitOps pipelines. We added a lightweight gateway service that intercepts API calls, extracts JWT claims, and queries Cerbos via its gRPC endpoint. To meet latency targets, I cached policy decisions per user session using Redis with a 10‑minute TTL, falling back to Cerbos on cache miss. Continuous integration tests verified policy correctness against a test harness.  

**Result** – Deployment reduced authorization errors by 78 % and cut compliance audit time from two weeks to 3 days. The system now supports dynamic role changes without code deployments, and we logged every decision for audit purposes. I learned that choosing the right policy engine and integrating it with CI/CD pipelines is as critical as writing the policies themselves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
