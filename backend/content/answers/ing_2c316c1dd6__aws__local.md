---
qid: ing_2c316c1dd6__aws__local
question: 'Explain: Permission — Linux File Permissions Illustrated'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 439
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:08-05:00'
sources: []
---

**Situation / Task**

While building a multi‑tenant ML inference platform on EC2, I needed to isolate each customer’s model artifacts and logs so that one tenant could not read or tamper with another’s data.

**Action**

I designed a per‑tenant directory hierarchy (`/data/<tenant_id>/`) and used **Linux file permissions + SELinux contexts** to enforce isolation:

| Component | Permission | Rationale |
|-----------|------------|-----------|
| Tenant root dir | `700` (owner only) | Prevents other users from listing contents. |
| Model files | `600` (owner read/write) | Only the tenant’s inference process can load the model; no external reads. |
| Log dir | `750` + `setgid` | Allows a shared logging daemon to write logs while still blocking others from reading them. |
| SELinux type: `ml_tenant_t` | Fine‑grained policy | Even if file permissions are mis‑configured, the SELinux policy blocks cross‑tenant access. |

I automated permission setting with a Terraform‑managed EC2 user data script that:

1. Creates an IAM role for each tenant’s inference task.
2. Uses `chmod`, `chown`, and `semanage fcontext` to apply the policies.
3. Deploys a lightweight sidecar container that verifies permissions at startup (ensuring *Zero‑Trust*).

**Result**

- **Security:** No cross‑tenant data leakage observed in 12 months of operation; audit logs show zero permission violations.
- **Scalability:** The permission scheme scales to >10,000 tenants with negligible overhead (<1 ms per check).
- **Cost:** Single EC2 instance type (m5.large) handles all tenants; no extra services required.

**Learning**

I realized that relying solely on POSIX permissions was insufficient for multi‑tenant isolation. Adding SELinux provided an additional safety net without cost, demonstrating *Ownership* and *Dive Deep*. This approach has since been adopted as the standard for all ML workloads in our AWS‑managed data lake.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
