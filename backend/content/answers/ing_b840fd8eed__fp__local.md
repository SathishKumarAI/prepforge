---
qid: ing_b840fd8eed__fp__local
question: 'Explain: Overview — GitHub - sierra-research/tau2-bench: \u03c4-Bench:
  A Benchmark for Tool-Agent-User Interaction in Real-World Domains \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 387
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:57-05:00'
sources: []
---

**τ‑Bench (tau‑2) – a principled benchmark for tool‑agent–user interaction**

In many real‑world tasks an intelligent agent must *select*, *invoke*, and *interpret* external tools (APIs, databases, simulators). The fundamental problem is **sequential decision‑making under partial observability**: the agent observes only the user’s natural‑language request and the noisy output of a tool, yet it must decide which tool to call next, how many times, and how to combine results into a final answer. τ‑Bench formalises this as an *interaction loop* that mimics human workflow:

1. **Input** – a domain‑specific user query (e.g., “book me a flight”).  
2. **Tool selection** – the agent picks from a library of APIs (flight search, payment, calendar).  
3. **Execution & feedback** – each call returns a structured response; errors and partial data are possible.  
4. **Re‑planning** – the agent may revise its plan based on new evidence.  

The benchmark supplies 50+ domains, a curated toolset per domain, and annotated “gold” interaction traces that encode optimal sequences of calls. By training agents to minimise *task completion time* while respecting constraints (rate limits, cost), τ‑Bench forces them to learn **policy compression**: compressing long reasoning chains into a few high‑impact actions—an instance of the *information bottleneck* principle in RL.

A subtle insight is that *tool reliability* becomes an intrinsic part of the reward function. Agents that over‑trust noisy tools degrade performance, so τ‑Bench implicitly encourages learning *confidence estimation*, a feature often overlooked in simpler “single‑shot” benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
