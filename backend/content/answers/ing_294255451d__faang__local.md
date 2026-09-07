---
qid: ing_294255451d__faang__local
question: 'Explain: Routing Strategies — Ai Gateways And Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 466
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:19:30-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise explanation of *routing strategies* used when deploying AI models—specifically how **AI gateways** and **model routing** work together to decide which model instance serves a request. I’ll assume we’re dealing with production‑grade, multi‑tenant services where latency, throughput, and correctness are critical.

**Approach**  
1. Describe the gateway as the front‑door entry point that normalizes traffic (auth, rate‑limit).  
2. Explain routing decisions: deterministic (hash/round‑robin), dynamic (latency or load), or rule‑based (user segment, request content).  
3. Highlight how the gateway queries a registry (e.g., service mesh) to discover healthy model replicas and their metadata (version, capabilities).

**Depth**  
- **Gateway Layer**: Implements *traffic shaping*—TLS termination, feature flags, and A/B test tags.  
- **Routing Engine**: Uses a *policy engine* that evaluates predicates against request headers or payloads; can invoke an external decision service (e.g., Envoy’s *RouteConfiguration*) or an internal rule table.  
- **Model Registry & Health Checks**: Each model replica publishes health, latency, and accuracy metrics to a control plane (Kubernetes CRD, Consul). The router selects the “best” instance per policy.  
- **Fallback & Retry**: If no healthy replica exists, fallback to older versions or a default “fallback model.”  

**Edge Cases**  
- *Cold starts*: Route to warm replicas first; queue requests until ready.  
- *Version drift*: Ensure backward‑compatible APIs; route based on content‑type.  
- *High load spikes*: Throttle or redirect to less loaded clusters.

**Optimize & Communicate**  
Explain trade‑offs: deterministic routing gives predictability but can overload hot instances; dynamic routing reduces latency but increases control plane traffic. Mention monitoring (latency dashboards) and continuous profiling to tune policies. End with a short example of an Envoy route rule that switches between two model versions based on user segment, demonstrating the end‑to‑end flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
