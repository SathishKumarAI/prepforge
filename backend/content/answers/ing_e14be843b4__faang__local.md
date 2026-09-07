---
qid: ing_e14be843b4__faang__local
question: 'Explain: F4: Wrong-tenant cross-bleed — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 676
total_tokens: 915
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:23:17-05:00'
sources: []
---

**Clarify**  
You’re asking about *Wrong‑Tenant Cross‑Bleed* in the context of a **Computer‑Use Agent (CUA) running in production**. I’ll assume:  

- A CUA is an automated agent that logs into a tenant’s cloud environment to perform routine tasks (patching, backup, etc.).  
- “Cross‑bleed” means data or operations from one tenant inadvertently affect another.  
- The question focuses on the failure mode where the CUA ends up operating on the wrong tenant in production.

**Approach**  
1. Define what constitutes a cross‑bleed failure.  
2. Identify how CUAs are scoped to tenants (tags, RBAC).  
3. Enumerate safeguards that prevent or detect the mistake.  
4. Explain the impact and remediation steps when it occurs.

**Depth**  

| Stage | What happens in a Wrong‑Tenant Cross‑Bleed |
|-------|------------------------------------------|
| **Trigger** | CUA picks up a tenant ID from a stale cache, mis‑parses an environment variable, or receives a malformed request. |
| **Propagation** | The agent authenticates with the wrong Azure AD tenant, obtains tokens for that tenant, and performs actions (e.g., deleting VMs, applying policies). |
| **Detection** | Automated monitoring flags anomalous activity: resource changes outside of the CUA’s normal scope, audit logs showing unexpected principal IDs. |
| **Remediation** | Rollback scripts run against the affected tenant; forensic audit of logs; patch the CUA code to enforce idempotent checks and double‑confirmation of tenant context. |

*Complexity*: The guardrails (RBAC + tenant‑specific tags) add negligible runtime cost (<1 ms per API call). A mis‑scoped token is a single‑request error but can cascade to O(N) resource changes.

**Edge Cases**  

- *Stale configuration cache*: CUA runs on an older image still pointing to tenant A.  
- *Race condition*: Two tenants share the same subscription ID in a multi‑tenant SaaS; agent mis‑identifies which one it belongs to.  
- *Human error*: DevOps accidentally pushes a config change that swaps tenant IDs.

Tests: unit tests for tenant extraction, integration tests with mocked Azure AD responses, chaos tests injecting wrong tokens.

**Optimize & Communicate**  

1. **Immutable Configuration** – embed the tenant ID in the deployment image; reject any runtime overrides.  
2. **Strict RBAC** – grant the CUA only permissions within its own tenant; use least‑privilege service principals.  
3. **Audit‑Only Mode** – before any destructive operation, run a dry‑run to log intended changes.  
4. **Continuous Monitoring** – alert on cross‑tenant API calls or anomalous audit logs.

When explaining this to interviewers: start with the problem statement, walk through the failure flow, highlight safeguards and their costs, then finish by stressing that preventing cross‑bleed is a matter of *defensive configuration* plus *real‑time observability*. This demonstrates structured thinking, depth in security operations, and an awareness of production trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
