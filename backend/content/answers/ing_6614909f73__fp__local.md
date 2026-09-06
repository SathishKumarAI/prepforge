---
qid: ing_6614909f73__fp__local
question: 'Explain: Tenant offboarding — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 518
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:42:16-05:00'
sources: []
---

**Tenant off‑boarding in a multi‑tenant fine‑tuning platform**  
The fundamental problem is that each customer (tenant) wants a customized language model while the service provider hosts all tenants on the same hardware and shared base weights. Fine‑tuning turns a generic transformer into a tenant‑specific “sub‑model” by adjusting only a small fraction of parameters or by adding adapter layers. When a tenant leaves, the platform must remove *all* traces of their data **without compromising** the remaining tenants’ models or violating service‑level guarantees.

Why it must work this way  
1. **Privacy & compliance** – Regulations (GDPR, CCPA) require that personal data be irrecoverable once a user withdraws.  
2. **Security & integrity** – A residual footprint could leak training signals to other tenants or attackers.  
3. **Operational efficiency** – Re‑training from scratch for every tenant is infeasible; the platform must efficiently “undo” the fine‑tuning.

Deeper principle: *model subspace decomposition*. The base model defines a shared manifold \( \mathcal{M} \). Each tenant’s fine‑tuned parameters span a low‑dimensional affine subspace \( \mathcal{S}_i \subseteq \mathcal{M} \). Off‑boarding is thus the projection of the global parameter vector onto the orthogonal complement of \( \mathcal{S}_i \), not merely deleting weights. This preserves the integrity of other tenants’ projections and avoids catastrophic forgetting.

**Non‑obvious insight**  
Most implementations treat off‑boarding as “delete all tenant data.” The subtlety is that *interference* can remain in shared embeddings or optimizer state (e.g., Adam moments). Therefore, a robust off‑boarding routine must also reset the optimizer’s per‑parameter statistics for the affected subspace and re‑initialize any cached inference artifacts. Only then can the system guarantee that the departed tenant’s influence is mathematically nullified while the remaining tenants’ fine‑tuned performance stays intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
