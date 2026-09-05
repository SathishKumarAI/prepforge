---
qid: ing_2ef8bb0844__fp__local
question: 'Explain: Google Agent Development Kit (ADK) — Autogen Crewai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 382
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:44:35-05:00'
sources: []
---

**Google Agent Development Kit (ADK)** is a framework that turns any LLM into a *multi‑step autonomous agent*.  
The core problem it solves is **coordination over time**: an LLM can answer a single prompt, but to tackle real‑world tasks it must plan, reason, and iterate while interacting with external tools. ADK formalises this as a **loop of “Plan → Act → Observe → Replan”**, where each stage is a *policy* that can be overridden or learned.  

Why the loop?  
1. **Information bottleneck**: The agent’s internal state (memory, goals) must be distilled into a concise plan; otherwise the LLM would have to re‑derive context from scratch at every step.  
2. **Optimization over horizon**: By treating the plan as a sequence of actions with associated rewards, ADK reduces long‑term planning to a series of short‑horizon sub‑problems that are tractable for current LLMs.  
3. **Modular geometry**: The plan, act, observe modules form a *pipeline* whose interfaces (JSON schema) enforce type safety and enable plug‑and‑play with external APIs or custom tools.

The non‑obvious insight is that **the act phase can be treated as a *black‑box differentiable function***. By exposing the LLM’s output to a differentiable policy network, ADK allows end‑to‑end fine‑tuning of the entire loop, bridging symbolic planning and neural execution in a single gradient signal. This unifies symbolic reasoning with deep learning without sacrificing interpretability or modularity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
