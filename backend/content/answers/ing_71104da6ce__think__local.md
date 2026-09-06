---
qid: ing_71104da6ce__think__local
question: 'Explain: Implement service discovery — 9 Best Practices for Building Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 499
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:30:03-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “service discovery” in this context?* Assume a typical micro‑service stack (e.g., Docker/Kubernetes + Consul/Etcd).  
- *Audience level:* Mid‑senior devs who already know REST/gRPC and basic CI/CD.  
- *Goal of the answer:* Provide actionable best practices, not just a list.

**2️⃣ Adopt a mental model**  
Use the **“Design → Deploy → Operate” triad**:  
1. **Design** – how services find each other (registry vs. DNS).  
2. **Deploy** – automation and observability of discovery components.  
3. **Operate** – resilience, security, scaling, and monitoring.

**3️⃣ Step‑by‑step reasoning**  
- Start with *why* we need discovery: dynamic IPs, zero‑config scaling.  
- For each best practice, ask: “What problem does it solve?” → “How to implement?” → “What trade‑offs?”  
  - e.g., **Use a dedicated service registry (Consul/Etcd)** vs. built‑in Kubernetes DNS.  
  - **Register only healthy instances** – use health checks and TTLs.  
  - **Avoid hard‑coded URLs** – inject via environment or config server.  
- Group related practices: *Resilience* (retry/backoff), *Security* (mutual TLS, ACLs), *Observability* (metrics/trace tags).

**4️⃣ Common traps to avoid**  
- Mixing discovery with configuration management; keep them orthogonal.  
- Over‑engineering: adding a registry when Kubernetes DNS suffices.  
- Ignoring versioning – services should discover specific API versions.  
- Forgetting to clean up stale entries → “ghost” services.

**5️⃣ Sanity‑check & verbalize**  
- Re‑read the list: each point must be *actionable* and *justified*.  
- Explain one practice in plain terms (e.g., “Use health checks so that only live instances are returned”).  
- End with a quick recap: “Design → Deploy → Operate” ensures you hit design, automation, and ops. This structure makes the answer memorable for future reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
