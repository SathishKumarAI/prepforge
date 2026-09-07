---
qid: ing_d5b63b6683__faang__local
question: 'Explain: Accessing Enterprise Context — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 528
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:56:27-05:00'
sources: []
---

**Clarify**  
We need to explain what “accessing the enterprise context on a Glean MCP (Machine‑Learning & Cognition Platform) server” means and why it matters. Assume the audience knows Glean is an internal ML infrastructure that hosts models, data pipelines, and orchestration services. We’ll confirm that we’re talking about *contextual metadata* (user, tenant, environment) that scopes requests to a particular business domain.

**Approach**  
1. Define “enterprise context” in Glean terms.  
2. Show how the MCP extracts this context from request headers or auth tokens.  
3. Explain how the server uses it for data‑partitioning, model selection, and audit logging.  
4. Mention security implications (least privilege, isolation).  

**Depth**  
The MCP is a stateless API gateway that receives HTTP requests with an `X-Glean-Tenant-ID` header or JWT claim. Middleware parses the token, validates against LDAP/AD, then injects a *Context* object into each request pipeline: `{tenantId, userId, roleSet, environment}`.  
All downstream services (feature store, model registry, scheduler) read this context to:
- Route queries to tenant‑specific shards in Cassandra/HDFS.  
- Apply per‑tenant feature transforms and model versions stored in the Model Registry.  
- Tag logs and metrics with `tenantId` for multi‑tenant billing.  

Security is enforced by a policy engine (OPA) that checks the user’s roleSet against ACLs before any data access or model inference. If context validation fails, the MCP returns 403.

**Edge Cases**  
*Missing header*: fallback to default “public” tenant → potential data leakage.  
*Stale token*: expired JWT leads to denied access; must refresh via OAuth flow.  
*Role escalation*: privilege‑escalation attack if roleSet not validated against AD.

**Optimize & Communicate**  
- Cache context in a Redis store keyed by session ID to reduce LDAP lookups.  
- Use vectorized feature pipelines so tenant routing is a simple key lookup, keeping latency <5 ms.  
- Log every context extraction step; provide a “context audit” endpoint for compliance.  

By framing the answer this way—clarify assumptions, outline steps, dive into technical detail, anticipate failures, and suggest optimizations—we hit the FAANG interview criteria of structured reasoning, depth, and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
