---
qid: ing_1aa774f96c__eli5__local
question: 'Explain: Q127: The MCP stateless core replaced sessions with server-minted
  state handles, and an audit found 91.8% of internet-facing MCP servers run without
  OAuth. Design a secure multi-tenant MCP server on the stateless spec.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 310
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:18:32-05:00'
sources: []
---

Imagine a library that no longer keeps a personal book‑checkout card for each visitor. Instead, every time someone enters it gives them a temporary, one‑time “library pass” (the server‑minted state handle). The books themselves stay in the shelves, and the librarian never remembers who borrowed which book—only that the pass is valid.

In this library (the MCP server), we want to keep many tenants (different users or companies) safe without remembering each person’s details. We do it by:

1. **Pass‑Only Access** – Every request must present a fresh, signed pass; no hidden session cookie is stored on the server.
2. **Tenant ID in Pass** – The pass contains a tiny “tenant tag” so the system knows which tenant owns the data, but only the tag, not personal info.
3. **OAuth‑Like Shield** – We add an optional OAuth gate: before giving a pass, the user proves they’re who they say via a trusted identity provider (Google, Azure, etc.). If that step is missing, we refuse to issue passes.

Thus, each tenant’s data stays isolated, the server never keeps long‑term secrets, and even if someone snoops on traffic, they can’t link a pass back to a specific user without the OAuth proof. This design mirrors the stateless MCP spec while tightening security for all tenants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
