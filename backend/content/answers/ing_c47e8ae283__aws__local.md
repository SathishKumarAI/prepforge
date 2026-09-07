---
qid: ing_c47e8ae283__aws__local
question: 'Explain: HTTP-based MCP for new servers; sandboxed STDIO for legacy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:21-05:00'
sources: []
---

**Situation (S)** – At my last role I led the migration of a legacy HPC cluster to a modern, server‑less architecture while keeping a strict security sandbox for existing workloads.

**Task (T)** – We had to expose an HTTP‑based Managed Control Plane (MCP) that new containers could hit for configuration and job dispatch, yet keep legacy batch jobs isolated in a sandboxed STDIO environment so they couldn’t escape the host.

**Action (A)**  
1. **Design** – Built the MCP on Amazon API Gateway + Lambda (Python 3.10). Each request spawns an ECS‑Fargate task that runs the job in a *dedicated IAM role* and uses the `exec` API to pipe STDIN/STDOUT into S3 for audit logs.  
2. **Sandbox** – Legacy jobs run inside AWS Fargate Spot with `readOnlyRootFilesystem=true`, mounted `/tmp` from an EFS volume, and wrapped by a custom SELinux policy that only allows STDIO through the container’s exposed socket.  
3. **Observability** – Integrated CloudWatch Logs Insights to aggregate job metrics; added a DynamoDB table for job state transitions with TTL cleanup.

**Result (R)** – Reduced deployment time from 4 hrs to **15 min** (90 % faster). Throughput of sandboxed jobs increased by **2.5×**, and cost per job dropped 30 % thanks to Spot usage and S3 logging instead of EBS snapshots.  

---

### Leadership Principles

- **Customer Obsession** – Delivered a reliable, low‑latency control plane that customers could call from anywhere.  
- **Ownership & Dive Deep** – Took full responsibility for the security boundary, digging into SELinux internals to harden STDIO isolation.

**Bar‑raiser takeaways:** I demonstrated ownership by refactoring legacy code, dove deep into Linux container internals for sandboxing, quantified performance gains, and iterated on failure logs to eliminate a 5 % error rate in job starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
