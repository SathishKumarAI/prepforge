---
qid: ing_648e80c977__faang__local
question: 'Q: When would you self-host vs use API providers?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 436
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:08-05:00'
sources: []
---

**Clarify**  
The question asks for a decision framework on when to run an AI model locally (“self‑host”) versus calling a cloud provider’s API.  
Assumptions:  
* Business has the capacity to maintain infrastructure (hardware, ops).  
* Data sensitivity and latency requirements are known.  

**Approach**  
1. List key criteria: cost, compliance, latency, scalability, feature depth, vendor lock‑in.  
2. Map each criterion to “self‑host” or “API”.  
3. Provide a quick decision matrix.  

**Depth**  
| Criterion | Self‑Host | API |
|-----------|----------|-----|
| **Data privacy** | ✔ (no egress) | ❌ (data sent off‑premises) |
| **Latency** | ✔ (edge or on‑prem) | ⚠ (depends on network & provider SLA) |
| **Cost** | Upfront CAPEX + OPEX for GPU, cooling | Pay‑as‑you‑go; cheaper at low volume |
| **Scalability** | Limited by local resources | Elastic; auto‑scales with load |
| **Model updates** | Manual patching | Automatic from provider |
| **Feature set** | Restricted to open‑source models | Full suite (LLM, vision, speech) |

Decision rule:  
*If privacy + low latency are top priorities and you can afford GPUs → self‑host.*  
*Otherwise, use API for rapid iteration and feature richness.*

**Edge cases**  
* Regulatory changes may force on‑prem.  
* Unexpected traffic spikes could exceed local GPU capacity.  
* Vendor outages affect APIs; have a fallback model locally.

**Optimize & communicate**  
Explain trade‑offs succinctly to stakeholders: “We’ll self‑host for compliance, but keep an API contract for burst workloads.” Keep the narrative focused on business impact and technical feasibility, as FAANG interviewers value clear reasoning over exhaustive detail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
