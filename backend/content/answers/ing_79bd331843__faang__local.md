---
qid: ing_79bd331843__faang__local
question: Design an internal LLM gateway for ~40 product teams. What does "platform
  as product" mean concretely here?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 440
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:26:38-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *gateway* that lets ~40 product teams consume an internal LLM while treating it as a “platform as product.”  
Assumptions: the gateway is a service layer (API + auth), teams have diverse use‑cases, you need governance, observability, and cost control.  

**Approach**  
1. **API Surface** – expose fine‑grained endpoints (`/chat`, `/embed`, `/fine‑tune`) with versioning.  
2. **Identity & Access** – integrate with corporate IAM; assign roles (“developer”, “viewer”) per team.  
3. **Quota & Billing** – per‑team token limits, auto‑billing to cost centers.  
4. **Observability** – request tracing, usage dashboards, anomaly alerts.  
5. **Governance** – policy engine for data sensitivity, content filtering, and model governance.  

**Depth**  
- *Architecture*: stateless API gateway (e.g., Envoy) → auth layer → rate‑limit & quota service → LLM orchestrator (containerized models).  
- *Data Flow*: request → auth → policy check → routing to correct model instance → response streaming.  
- *Complexity*: O(1) per request for auth; throttling uses token bucket – amortized O(1).  
- *Trade‑offs*: Centralizing governance simplifies compliance but can become a bottleneck—use horizontal scaling and caching of policies.  

**Edge Cases**  
- Teams exceed quota → graceful degradation or queued requests.  
- Model drift → automated retraining pipelines.  
- Security breach → immediate revocation via IAM.  

**Optimize & Communicate**  
Iterate on the gateway by measuring latency, cost per token, and user satisfaction; expose SLAs in a public dashboard. Explain to stakeholders how “platform as product” means they get a self‑serve, governed, measurable LLM service—just like any internal SaaS—without managing model infra themselves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
