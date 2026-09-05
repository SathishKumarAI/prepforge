---
qid: ing_189e230b2e__fp__local
question: 'Explain: Glean OAuth Authorization Server — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 478
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:17-05:00'
sources: []
---

### Why an OAuth‑style **Glean MCP Authorization Server** is indispensable

When a user logs into Glean’s Machine‑Learning‑Powered Content (MCP) platform, the application must access several downstream services—search indices, analytics engines, and external data providers—without storing or transmitting the user’s credentials.  
The fundamental problem is *delegated authentication*: **“Let service A act on behalf of a user while still allowing fine‑grained revocation.”** OAuth resolves this by separating concerns into:

1. **Resource Owner (the user)** – holds the secret.
2. **Client (MCP UI or API)** – requests access.
3. **Authorization Server (Glean MCP server)** – authenticates, issues short‑lived *access tokens* and long‑term *refresh tokens*.
4. **Resource Servers** – validate tokens before serving data.

The Glean server must issue tokens that are:

- **Self‑contained** (JWT) so each resource server can verify without round‑trips, preserving latency budgets typical in ML inference pipelines.
- **Scope‑restricted** to enforce the *principle of least privilege*: a token for “search:read” cannot be reused for “analytics:update”.
- **Time‑bounded** to limit exposure; a compromised token is useful only briefly.

The deeper principle is *information flow control via cryptographic tokens*. Each token encodes the minimal information needed (user ID, scopes, expiry) and is signed by a key known only to Glean. Resource servers thus perform an O(1) hash check rather than querying a central auth database—a necessity when scaling to millions of concurrent inference requests.

**Non‑obvious insight:**  
Because Glean’s MCP often runs in isolated, GPU‑heavy pods with no outbound network access, the authorization server must support **offline token refresh**. Clients cache a short‑lived access token and a refresh token that can be exchanged locally (via an internal IPC endpoint) without reaching out to the public internet—ensuring compliance with stringent data‑center security policies while still leveraging OAuth’s proven delegation model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
