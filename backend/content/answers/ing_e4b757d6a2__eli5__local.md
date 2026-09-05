---
qid: ing_e4b757d6a2__eli5__local
question: 'Explain: Per-tenant scoping with audience binding (RFC 8707)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 199
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:37:02-05:00'
sources: []
---

Think of an apartment building where each tenant has a private balcony that only they can see from inside their unit. **Per‑tenant scoping** is like giving every tenant its own balcony—each user’s data and settings are isolated so one person can’t peek at another’s.

Now imagine the building also offers “viewing parties” for neighbors: a tenant can invite friends to watch a movie together, but only from their balcony. **Audience binding** (RFC 8707) is that invitation process. The tenant sends a special link (the “audience”) that says, “Only people who are part of this party may use the content.” It’s a secure way to share a resource while still keeping it tied to the original tenant.

So, per‑tenant scoping keeps data private, and audience binding lets a tenant safely hand out access only to chosen others.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
