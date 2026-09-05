---
qid: ing_a406b5dc5f__star__local
question: 'Explain: Enhanced Security — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 371
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:28-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had built the Glean Machine‑Learning Platform (MCP) to ingest customer transaction data. By mid‑year the platform was handling over 10 million events per day and our security audit flagged several gaps: unencrypted in‑flight traffic, lack of fine‑grained IAM policies, and a single point of failure for authentication.

**Task** – I was tasked with hardening the MCP’s security posture so that it met SOC 2 Type II compliance, reduced the attack surface by 40 %, and maintained zero downtime during the rollout.

**Action** – First, I introduced mutual TLS (mTLS) across all microservices using Envoy as a sidecar, which encrypted traffic end‑to‑end. Next, I re‑architected our identity layer: we moved from a legacy username/password system to an OAuth 2.0 / OpenID Connect flow backed by Okta, and implemented role‑based access control (RBAC) with fine‑grained scopes in Kubernetes RBAC for each service. To eliminate the single point of failure, I deployed the authentication gateway as a highly available cluster behind a load balancer and added rate‑limiting with Envoy’s Lua filter to mitigate brute‑force attempts.

**Result** – After the migration, we achieved SOC 2 compliance within two months, reduced security incidents by 60 % during the first quarter post‑deployment, and cut average authentication latency from 120 ms to 35 ms. The exercise taught me that proactive, layered security combined with automated policy enforcement can scale without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
