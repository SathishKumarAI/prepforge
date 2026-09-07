---
qid: ing_2805848850__faang__local
question: 'Explain: Code — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 487
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:16:39-05:00'
sources: []
---

## Clarify  
We’re asked to explain **Agentic AI use‑cases** as presented by *Neo Kim* (a thought leader on autonomous agents).  
Assumptions:  
- “Agentic” means an AI that can set goals, plan, act, and learn autonomously.  
- Use‑cases span business, personal productivity, and societal impact.

## Approach  
1. Summarize Neo’s taxonomy of agent types.  
2. List concrete industry scenarios for each type.  
3. Highlight the core capabilities driving those scenarios.  

## Depth (Core Answer)  
Neo Kim identifies three archetypes:

| Agent Type | Core Traits | Typical Use‑Case |
|------------|-------------|------------------|
| **Reactive Agents** | Perceive → Act, no long‑term planning | *Smart home thermostats* that adjust temperature based on occupancy patterns. |
| **Deliberative Agents** | Goal setting + multi‑step planning | *Automated financial advisors* that build portfolios, rebalancing over time while respecting risk constraints. |
| **Learning Agents** | Continual adaptation via RL/online learning | *Dynamic ad bidding systems* that optimize spend in real time based on conversion feedback. |

Across all types, the AI must:  
- Perceive context (sensor data, user inputs).  
- Reason about consequences (forward‑modeling).  
- Act through APIs or physical interfaces.  
- Receive feedback to refine its policy.

## Edge Cases  
- **Non‑stationary environments** can break reactive agents; need adaptive thresholds.  
- **Sparse reward signals** challenge learning agents—design intrinsic motivation.  
- **Ethical constraints**: a deliberative agent might choose a suboptimal but compliant path, requiring hard‑coded rules or human oversight.

## Optimize & Communicate  
- Emphasize modularity: perception → planning → execution layers.  
- Use hierarchical RL to scale learning agents.  
- Stress explainability: each decision should be auditable for compliance (e.g., GDPR).  

In a FAANG interview, I’d finish by noting that Neo Kim’s framework guides us from simple rule‑based bots to sophisticated autonomous systems—each step demanding tighter safety nets and richer data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
