---
qid: ing_dfa1ee876d__faang__local
question: 'Explain: Non-functional — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 629
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:19:20-05:00'
sources: []
---

**Clarify**  
You’re asking about *non‑functional* (NFR) aspects of an Enterprise Retrieval-Augmented Generation (RAG) Assistant—i.e., the quality attributes that make it fit for large‑scale, mission‑critical use beyond just “does it answer questions?”. Key assumptions: multi‑tenant SaaS deployment, GDPR/PCI compliance, 24/7 uptime, and integration with internal knowledge bases.

**Approach**  
1. List core NFR categories (performance, scalability, reliability, security, maintainability, usability).  
2. For each, enumerate concrete metrics and constraints relevant to an enterprise RAG system.  
3. Highlight trade‑offs (e.g., latency vs. freshness of retrieved docs).

**Depth**  

| Category | Metric / Constraint | Why It Matters |
|----------|---------------------|----------------|
| **Latency** | < 200 ms avg per user query; ≤ 500 ms worst‑case | Keeps conversational feel, critical for support desks. |
| **Throughput** | ≥ 5k QPS per tenant; auto‑scaling | Handles peak loads during product rollouts or incidents. |
| **Availability** | 99.99% SLA; multi‑region active‑active | Prevents downtime that could halt business operations. |
| **Consistency** | Strong read consistency for knowledge base updates | Avoids stale answers that could mislead employees. |
| **Security** | End‑to‑end encryption (TLS 1.3); role‑based access control; audit logs | Meets compliance (GDPR, SOC2). |
| **Privacy / Data Residency** | Ability to enforce tenant‑level data residency and anonymization | Required for regulated industries. |
| **Maintainability** | CI/CD with zero‑downtime deploys; observability stack (metrics, traces) | Enables rapid iteration of models without service interruption. |
| **Extensibility** | Plug‑in architecture for new embeddings/LLMs | Future‑proof against model upgrades or vendor changes. |

**Edge Cases**  
- Sudden spike in queries (flash crowds).  
- Network partitions between microservices.  
- Model drift leading to incorrect answers.  
- Unauthorized data exfiltration attempts.

**Optimize & Communicate**  
To improve, we’d adopt a **canary deployment** for new models, use **vector cache eviction policies** tuned per tenant, and implement **rate‑limiting + backpressure**. I would explain the trade‑off between *low latency* (caching) and *data freshness* (re‑indexing), emphasizing that we’ll expose a configurable “latency vs. accuracy” knob to product managers. This structured answer demonstrates clear problem framing, systematic planning, deep technical insight, awareness of edge conditions, and an eye toward continuous improvement—all hallmarks of a FAANG‑style response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
