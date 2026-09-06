---
qid: ing_a7edce6257__think__local
question: 'Explain: DoorDash System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 440
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:08:40-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
- Ask whether the user wants a *high‑level* overview (e.g., key components) or a *detailed* design with trade‑offs.  
- Confirm if they need to focus on specific sub‑systems (matching, routing, ETA, payments).  

**2️⃣ Adopt a layered mental model**  
- Start with **functional layers**: user interface → service orchestration → data storage → infrastructure.  
- Map each layer onto core ML concerns: *feature engineering*, *model serving*, *feedback loops*.  

**3️⃣ Step‑by‑step reasoning**  
1. Identify **core business flows** (order placement, driver dispatch, delivery).  
2. For each flow, list **data inputs**, **outputs**, and **real‑time constraints**.  
3. Pinpoint where **prediction** or *optimization* is needed: ETA models, surge pricing, routing.  
4. Sketch the **ML pipeline** (collect → preprocess → train → serve → monitor).  
5. Highlight **scalability** tactics: caching, sharding, micro‑services.  

**4️⃣ Avoid common traps**  
- Don’t conflate *system design* with *algorithmic ML*. Keep them distinct but intertwined.  
- Beware of over‑engineering: start simple (e.g., rule‑based ETA) and evolve to ML only when data & performance justify it.  
- Skip vague buzzwords (“AI”) without concrete use cases.  

**5️⃣ Sanity‑check & communicate**  
- Run a quick *scenario test*: pick a user order, trace through each component, ensure latencies stay within SLAs.  
- Use analogies (e.g., “matching is like a dating app”) to make complex ideas digestible.  
- End with **trade‑off bullets**: latency vs accuracy, data freshness vs compute cost, centralized vs federated models.  

This structured thought process can be reused for any system‑design interview involving ML components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
