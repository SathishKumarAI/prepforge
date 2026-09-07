---
qid: ing_ea846b92b0__faang__local
question: You're building a multi-tenant agent platform. Tenants bring their own MCP
  servers and their own data. What isolates them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 492
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:45:05-05:00'
sources: []
---

**Clarify**  
You’re designing a shared‑platform that runs multiple agents (MCPs) for different tenants. Each tenant supplies its own **Machine‑Learning‑Compute (MCP)** server and data set. The goal: prevent one tenant from seeing or affecting another’s state, compute, or data. Key assumptions to confirm:  

- Tenants can run arbitrary code on their MCPs.  
- Network traffic between tenants is untrusted.  
- The platform itself must scale horizontally.

**Approach**  
1. **Namespace isolation** – use OS‑level containers (e.g., Docker/CRI-O) or VMs per tenant.  
2. **Data segregation** – encrypt all tenant data at rest with tenant‑specific keys; store in separate buckets or databases.  
3. **Network segmentation** – isolate each tenant’s MCP behind a dedicated ingress gateway and apply strict egress rules.  
4. **Runtime policy enforcement** – run a lightweight sidecar that enforces RBAC, limits CPU/memory per container, and monitors for privilege escalation.

**Depth**  
- Containers give fast boot time (~seconds) and fine‑grained resource limits (cgroups).  
- VMs offer stronger isolation but higher overhead; use them only if the tenant’s code requires kernel‑level access.  
- Encryption keys stored in a dedicated KMS per tenant ensures key rotation is independent.  
- Use service mesh (e.g., Istio) to enforce mutual TLS between MCPs and the platform, preventing sniffing or injection.

**Edge Cases**  
- A malicious tenant tries to allocate all cluster resources → use resource quotas + admission controllers.  
- Tenant data leaks through shared logs → log aggregation must mask or separate logs per tenant.  
- Cross‑tenant network reachability via misconfigured MCP → enforce egress policies and deny by default.

**Optimize & Communicate**  
Start with container isolation (fast, low overhead) and add VM isolation only for high‑risk tenants. Communicate the design to stakeholders by mapping each isolation layer to a threat model: “We block tenant A from reading tenant B’s data because we encrypt at rest with unique keys.” Highlight that this architecture scales linearly with tenants while keeping per‑tenant performance predictable (O(1) resource contention).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
