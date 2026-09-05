---
qid: ing_189e230b2e__star__local
question: 'Explain: Glean OAuth Authorization Server — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 374
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:12-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were integrating with Glean’s Machine‑Learning Platform (MCP) to provide real‑time fraud detection for our payment gateway. The MVP required secure token exchange between our services and the MCP’s OAuth Authorization Server, but our existing auth flow was hard‑coded against a legacy IdP, causing latency spikes during peak traffic.

**Task**  
I had to redesign the authentication layer so that all microservices could obtain short‑lived access tokens from Glean’s OAuth server, enforce fine‑grained scopes for each service, and guarantee zero downtime during the migration.

**Action**  
First, I mapped out the required scopes (e.g., `mcp.read`, `mcp.write`) and built a lightweight token‑cache service using Redis to store bearer tokens with TTLs. I implemented PKCE‑based authorization code flow in Go, leveraging the `golang.org/x/oauth2` package, and added automatic token refresh via background goroutines. To avoid race conditions, I used a distributed lock (Redlock) before refreshing expired tokens. Finally, I set up Prometheus metrics to monitor token request latency and error rates, and integrated alerts for any spikes above 200 ms.

**Result**  
The new flow cut authentication latency by **35%**, dropping from an average of 280 ms to 180 ms per request. Error rates fell below 0.1%, and we achieved zero downtime during the rollout. I learned how to balance security (PKCE, short TTLs) with performance (caching, async refresh) in a high‑throughput environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
