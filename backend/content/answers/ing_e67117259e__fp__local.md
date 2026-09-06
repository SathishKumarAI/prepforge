---
qid: ing_e67117259e__fp__local
question: 'Explain: Service discovery for MCPs — modelcontextprotocol/modelcontextprotocol
  \u00b7 Discussions \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 531
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:08:53-05:00'
sources: []
---

**Why we need a *model‑context protocol* in multi‑tenant ML services**

In a shared platform each user’s job runs inside an isolated “Model Context” (MCP).  
The core problem is: **how can the runtime locate, bind and version all external
services (databases, feature stores, inference endpoints) that belong to that context?**  
If the discovery mechanism is brittle, one tenant’s service can be accidentally
invoked by another, or a new deployment may break existing jobs.

---

### 1. The underlying principle – *context‑sensitive addressability*

At its heart, service discovery for MCPs is an instance of **contextual dependency injection**:

* **Context** = set of tenant‑specific configuration (env vars, secrets, feature flags).  
* **Dependency** = external resource required by a model job.  

The protocol must guarantee that every dependency lookup is *bound to the current context*, otherwise we violate isolation.

---

### 2. How it works

1. **Registration** – Every MCP registers its services with a central registry (e.g., Consul or etcd) under a namespace derived from its tenant ID and version hash.
2. **Resolution** – When a job starts, the runtime queries the registry using that namespace; only endpoints tagged with the same tenant/version are returned.
3. **Version pinning** – The protocol stores a *semantic‑version* of each service. If a job requests `v1.2`, it will never receive an accidental upgrade to `v1.3` unless explicitly allowed.
4. **Health checks** – Registrations include liveness probes; stale entries are purged automatically.

---

### 3. Non‑obvious insight

Most people focus on *security* (separate namespaces) or *performance* (caching).  
The subtle, often overlooked requirement is **temporal consistency**:  
a model job must see the same set of services for its entire execution even if a tenant deploys a new version mid‑run.  
This is enforced by snapshotting the registry at start‑up and binding all subsequent lookups to that snapshot, preventing *service drift* that would otherwise corrupt training or inference results.

---

In short, the model‑context protocol turns the abstract notion of “tenant isolation” into a concrete, verifiable contract: every service lookup is scoped, versioned, and time‑stable, ensuring reproducible ML workloads in a shared infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
