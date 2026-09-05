---
qid: ing_6614909f73__star__local
question: 'Explain: Tenant offboarding — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 389
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:52:03-05:00'
sources: []
---

**Situation:**  
At my previous company we built a multi‑tenant fine‑tuning platform that let each client ship custom GPT models in under an hour. One of our largest tenants, a fintech firm, decided to migrate away after a regulatory audit. Their data had to be purged from the shared infrastructure while still keeping all other customers’ models untouched.

**Task:**  
I was tasked with designing and executing a tenant‑specific offboarding process that: 1) securely deletes every piece of their training data and model checkpoints; 2) removes any lingering API keys or billing records; 3) verifies compliance with GDPR’s “right to be forgotten”; and 4) does so without impacting the uptime of other tenants.

**Action:**  
I introduced a tenant‑scope tagging system in our metadata store, adding a `tenant_id` field to every dataset blob, checkpoint, and cache entry. I wrote an asynchronous cleanup service that queries the object store for all objects with that tag, streams them through an audit log, then deletes them via a batched API call—using S3’s versioning to guarantee no accidental rollback. For the models themselves, I leveraged our existing inference container orchestration (Kubernetes) to spin up a temporary pod that runs a lightweight `rm -rf /models/<tenant_id>` script, ensuring all in‑memory caches are flushed. Finally, I updated our billing microservice to mark the tenant as “inactive” and auto‑cancel their subscription.

**Result:**  
The offboarding completed in 45 minutes with zero downtime for other tenants. All audit logs passed compliance review, and we avoided any residual data leaks. The exercise taught me how critical proper metadata tagging is for multi‑tenant isolation, and it led to a company‑wide policy that now enforces tenant scoping at the earliest point of ingestion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
