---
qid: ing_98efb94a2a__fp__local
question: 'Explain: Multi-Agent System - Python — GitHub - microsoft/semantic-kernel:
  Integrate cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 365
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:31:14-05:00'
sources: []
---

### Why the Microsoft Semantic‑Kernel multi‑agent example matters

At its core, a *multi‑agent system* is a distributed optimisation problem: several autonomous LLM agents must coordinate to maximise an overall utility while respecting constraints (budget, latency, privacy). The Semantic Kernel repo turns this abstract idea into concrete Python code by exposing a **kernel** that acts as a shared memory and orchestrator.

1. **Problem abstraction** – Each agent is a *function* with a declarative prompt template. The kernel composes these functions into a directed acyclic graph (DAG), ensuring that dependencies are respected without hard‑coding the workflow.  
2. **Information flow** – Agents communicate via *semantic memory*: structured key/value pairs that preserve meaning across calls, avoiding token‑level duplication. This mirrors belief propagation in probabilistic graphical models.  
3. **Optimization loop** – The kernel’s `run` method executes the DAG iteratively, evaluating a cost function (e.g., total tokens used) and back‑propagating constraints to earlier agents. It is essentially a lightweight version of stochastic gradient descent over discrete prompts.  

#### Non‑obvious insight

Most people treat LLM calls as black boxes, but the kernel’s *semantic memory* turns them into composable building blocks. By storing intermediate results in a typed dictionary rather than raw text, you can enforce type safety and even cache reusable sub‑computations—dramatically reducing inference cost for long‑running agents.

In short, the repo demonstrates how to lift LLMs from monolithic chat bots to *optimisable* multi‑agent pipelines, marrying declarative prompt design with principled workflow orchestration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
