---
qid: ing_fceda354a7__faang__local
question: 'Explain: Shared Resources Dependency — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 489
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:27:55-05:00'
sources: []
---

**Shared‑Resources Dependency – a Cloud‑Native Anti‑Pattern**

---

### **Clarify**
We’re asked to explain why tightly coupling services around shared storage or compute resources (e.g., a single RDS instance, a monolithic file system, or a global cache) is an anti‑pattern in cloud‑native architectures.  
Assumptions: the context is stateless microservices on managed platforms (K8s, ECS), aiming for scalability and resilience.

### **Approach**
1. Identify what “shared resources” means.  
2. Explain how they break core cloud‑native principles (independence, elasticity).  
3. Illustrate typical failure scenarios.  
4. Suggest mitigation patterns.

### **Depth**
- **Coupling & Bottlenecks**: A single DB or cache becomes a single point of contention; all services must wait for it, limiting horizontal scaling.  
- **Deployment & Versioning Chaos**: Updating the shared layer forces coordinated rollouts and rollback across services.  
- **Failure Amplification**: If the resource fails (network glitch, outage), every dependent service goes down—violating high‑availability goals.  
- **Observability & Testing**: Hard to isolate failures; chaos experiments become costly because you risk affecting many services simultaneously.  

Mitigations:
- **Service‑level data stores** or *CQRS* with per‑service replicas.
- Use **sidecar patterns** (e.g., Envoy) for shared concerns like auth, logging, but keep state local.
- Adopt **distributed tracing** and **canary releases** to isolate changes.

### **Edge Cases**
- Small monoliths that truly need a single data model: the pattern may be acceptable if scalability is not a concern.  
- High‑throughput real‑time systems (e.g., telemetry) where a shared cache could still be useful but must be partitioned or sharded.

### **Optimize & Communicate**
Explain trade‑offs succinctly, then recommend a “progressive de‑coupling” strategy: start with the most critical shared resource, replicate it locally, and gradually shift to event‑driven sync. Conclude by highlighting that avoiding this anti‑pattern unlocks true cloud elasticity, resilience, and faster feature velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
