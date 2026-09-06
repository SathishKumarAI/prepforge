---
qid: ing_785c817ef0__fp__local
question: 'Explain: Prefer Names for Service Contracts — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 391
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:20:43-05:00'
sources: []
---

### Why “service contract” names trump raw IPs

At the core of any distributed system is a **matching problem**: *Which process should talk to which other process?*  
If you encode that match as an IP address, you are solving the wrong level of abstraction. An IP is a *location* that can change without consequence; the contract is the *role* or *capability* the participant promises to deliver.

1. **Decoupling from infrastructure** – The contract expresses intent (e.g., “OrderService”) rather than a concrete host. When an instance migrates, scales, or fails, the name remains stable, preserving the coupling at the semantic level.
2. **Optimization as a constraint‑satisfaction problem** – Routing and load‑balancing decisions become *constraints* on service names (e.g., geographic locality, latency SLA). Optimizers can treat “OrderService” as a variable with attributes, solving for minimal cost while honoring constraints. IP‑based routing would require manual reconfiguration every time the topology shifts.
3. **Information‑theoretic clarity** – A name encodes *information* about the service’s interface and version; an IP conveys none. Clients can validate compatibility by querying a registry that maps names to interface descriptors, reducing misbinding errors.

#### Non‑obvious insight
The *benefit* of naming is not merely survivability of change; it **creates a formal contract space** where services can be discovered, composed, and verified mathematically (e.g., via dependency graphs). This transforms the system into an instance of a constraint satisfaction problem with provable properties (deadlock‑free composition, bounded latency), which is impossible to reason about when using raw IPs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
