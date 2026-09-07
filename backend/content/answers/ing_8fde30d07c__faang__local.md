---
qid: ing_8fde30d07c__faang__local
question: 'Explain: A customer reports that another tenant''s data appeared in their
  agent''s response. Walk me through the next 72 hours.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 707
total_tokens: 955
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:18:59-05:00'
sources: []
---

**Clarify**

> *Problem:* A customer claims that a different tenant’s data was returned by our AI‑powered agent, implying a data‑leak or multi‑tenant isolation failure.  
> *Assumptions to verify:*  
> 1. Which tenant ID did the user see in the response?  
> 2. Is the user using an official SDK / API key?  
> 3. Was the request made within our controlled environment (no reverse proxy)?  
> 4. Are there any recent deployments or schema changes that could affect isolation?

**Approach**

1. **Incident triage & containment** – isolate affected tenant data, revoke compromised keys.  
2. **Root‑cause investigation** – audit logs, code paths, and model inference pipeline.  
3. **Remediation** – patch the bug, re‑train or redeploy models if needed.  
4. **Verification & communication** – run regression tests, inform stakeholders.  

**Depth**

| Day | Action | Technical Detail |
|-----|--------|------------------|
| 0 | *Containment* | Revoke tenant’s API key; suspend the user’s account temporarily to stop further leakage. Enable request throttling on the affected namespace. |
| 1 | *Logging audit* | Pull request logs, query metadata tables for tenant IDs used in inference requests. Verify that the model served only the correct embeddings and prompt context. |
| 2 | *Code review* | Inspect the multi‑tenant isolation layer: check if the `tenant_id` is passed correctly to the LLM wrapper, confirm no shared cache or global variable holds prior responses. Look for race conditions in async request handling. |
| 3 | *Model & data audit* | Validate that training datasets were partitioned per tenant. Run a differential test: feed identical prompts under two tenant contexts and assert no cross‑tenant leakage. |
| 4 | *Patch & redeploy* | Fix any identified bug (e.g., reset shared cache, enforce strict tenant context). Build CI pipeline to run the differential test automatically on each commit. |
| 5 | *Regression testing* | Execute end‑to‑end tests with synthetic tenants; monitor for isolation violations. Use chaos engineering to simulate high concurrency. |
| 6 | *Stakeholder communication* | Draft incident report, post status in our internal dashboard, and notify the affected customer with apology, timeline, and next steps. |

**Edge cases**

- Cached responses reused across tenant contexts due to improper keying.  
- Inference pipeline using shared GPU memory that inadvertently shares tensors.  
- Race conditions where two concurrent requests mix context before isolation enforcement.  
- Misconfigured IAM roles allowing a tenant to read another’s secrets.

**Optimize & communicate**

*Improvements*: Add a runtime guard that tags every request with its `tenant_id` and validates the tag against the model’s internal state before inference. Automate alerts if a mismatch occurs. Use immutable deployment artifacts so rollback is trivial.  

*Narrative*: “We first halted any further leakage by revoking access, then dug into logs to confirm the isolation breach. The root cause was a shared cache entry that didn’t include the tenant key. After patching and redeploying, we ran automated differential tests across synthetic tenants to ensure no recurrence. We’ve also added runtime checks and alerts for future incidents.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
