---
qid: ing_f529bde9c4__aws__local
question: A bank wants the whole stack - model, RAG, agents - deployed air-gapped
  on their own GPUs. What actually changes versus your SaaS?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 393
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:12-05:00'
sources: []
---

**Situation & Task**  
A large bank asked us to ship a full AI stack—LLM, Retrieval‑Augmented Generation (RAG), and autonomous agents—into an air‑gapped data center on their own GPUs instead of our managed SaaS offering.

**Action**  
* **Ownership + Customer Obsession** – I mapped every customer touchpoint: data ingress, model training, inference latency, audit logging, and GPU provisioning.  
* **Dive Deep & Invent & Simplify** – Designed a modular containerized stack (Docker + Kubernetes on-prem) that mirrors our SaaS but replaces managed services with open‑source equivalents (FAISS for vector search, Hugging Face Transformers for LLMs).  
* **Bias for Action** – Delivered a prototype in 6 weeks: 10 GB of internal documents indexed, inference latency <120 ms per request.  
* **Deliver Results** – Reduced total cost of ownership by 30% versus the SaaS model (no AWS data transfer or compute charges) while meeting PCI‑DSS and GDPR controls.

**Result**  
The bank achieved on‑prem compliance, 99.9 % uptime, and a 40 % faster deployment cycle compared to their legacy in‑house solution. The key trade‑off: we forego automatic scaling and managed security patches; the customer must maintain GPU hardware and patching pipelines, which they accepted for full data sovereignty.

**Bar‑raiser notes** – Looked for deep technical detail, quantified impact (latency, cost), ownership of end‑to‑end delivery, and lessons learned from iterating on security hardening.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
