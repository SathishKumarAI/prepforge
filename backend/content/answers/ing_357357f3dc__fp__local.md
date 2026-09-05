---
qid: ing_357357f3dc__fp__local
question: 'Explain: Ephemeral microVM per task, not a shared sandbox'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 346
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:58:13-05:00'
sources: []
---

**Ephemeral micro‑VM per task (vs. a shared sandbox)**  

At the heart of any AI deployment is *resource isolation*: we must guarantee that one inference job cannot read or tamper with another’s data or code. A naïve “shared sandbox” satisfies this by running all jobs inside a single lightweight container, but it forces every request to share the same CPU cache, memory space, and hyper‑visor state.  

From an optimization standpoint, each AI model typically has a *critical path* dominated by GPU kernels that are highly data‑local and cache‑intensive. When many jobs share a sandbox, their memory traffic collides on the same NUMA node; contention turns a theoretically \(O(n)\) latency into a pathological \(\Omega(n^2)\).  

By provisioning an **ephemeral micro‑VM** per task—just enough hypervisor overhead to enforce isolation—we decouple each job’s memory from its peers. The VM’s tiny footprint (a few MB of RAM, a single CPU core) lets the scheduler bind it to the optimal NUMA node and avoid cache thrashing. Because the VM is destroyed immediately after inference, there is no residual state that could leak data or degrade performance.  

**Non‑obvious insight:** the hypervisor’s *vCPU pinning* capability becomes an implicit load balancer; each micro‑VM can be placed on a distinct core, turning the isolation layer into a fine‑grained concurrency controller without extra software. This dual role of the VM solves both security and performance simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
