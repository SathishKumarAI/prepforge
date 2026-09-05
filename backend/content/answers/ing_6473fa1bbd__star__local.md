---
qid: ing_6473fa1bbd__star__local
question: 'Explain: Agent-card signed identity, not shared session cookies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 323
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:29-05:00'
sources: []
---

**Situation:**  
At my last startup we were launching a chatbot that let users run code snippets in the cloud. The product needed to stay highly available, but our previous authentication relied on shared session cookies, which meant every request could be hijacked if a cookie leaked.

**Task:**  
I was tasked with redesigning the identity flow so each AI agent had a cryptographically signed token that persisted only for its own lifetime, eliminating cross‑session contamination while keeping latency under 200 ms.

**Action:**  
I introduced an “agent card” system: when a user created an agent, we generated a short‑lived JWT signed by our private key and stored the public key on the agent’s metadata. Each request from the agent carried this token; backend services verified it against the public key without needing to query a central session store. I also added rate limiting per card and rotated keys every 24 hours, using Redis for quick lookup. To keep performance high, I cached verification results in an LRU cache on each worker.

**Result:**  
The new approach cut authentication latency from 180 ms to 95 ms and reduced our incident reports of session hijacking by 98%. We also saved $12k/month in database costs because we no longer maintained a global session table. I learned that pairing cryptographic tokens with per‑agent metadata can dramatically improve both security and scalability in AI‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
