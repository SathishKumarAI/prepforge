---
qid: ing_0191b1b027__faang__local
question: Which Pattern Should You Choose? — Design Load Balancer | System Design
  Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 505
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:43-05:00'
sources: []
---

**Clarify**  
We’re asked: *“Which pattern should you choose for a load‑balancing system?”* I’ll assume we need a horizontally scalable, fault‑tolerant balancer that distributes HTTP requests across stateless service instances and supports health checks, sticky sessions, and graceful draining. I’d confirm the traffic volume (10k‑100k req/s), latency SLAs (<20 ms add‑on), and whether we’re in a single region or multi‑region.

**Approach**  
1. Pick a *client‑side* vs *server‑side* pattern.  
2. Evaluate *round‑robin*, *least‑connections*, *consistent hashing*, and *weighted least‑conn*.  
3. Decide on the underlying transport (TCP/HTTP) and whether to use DNS, proxy, or service mesh.

**Depth**  
- **Client‑side (e.g., Envoy + Consul)**: each client holds a full service registry; uses *consistent hashing* for session affinity and *least‑conn* for load spread. Complexity: O(1) lookup per request, but requires cache sync.  
- **Server‑side (API gateway like NGINX/HAProxy)**: single entry point that forwards to backend pool via *weighted round‑robin* or *least‑conn*. Simpler deployment, but a single point of failure unless replicated.

Trade‑offs: client‑side reduces latency by avoiding an extra hop but increases client memory; server‑side centralizes metrics and security policies. For high availability, we’d deploy multiple gateway instances behind a DNS round‑robin or use a global LB (e.g., Cloud Load Balancer) with health checks.

**Edge Cases**  
- Sudden node failure → graceful draining & retry logic.  
- Sticky session loss when nodes reboot.  
- Imbalanced traffic bursts → dynamic weight adjustment.

**Optimize & Communicate**  
Start with a *server‑side* gateway for simplicity, then evolve to *client‑side* consistent hashing once the service mesh is mature. I’d present this evolution in a diagram, quantify expected latency savings (~5 ms) and fault tolerance (3‑fold redundancy). This shows clear reasoning, trade‑offs, and a path forward—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
