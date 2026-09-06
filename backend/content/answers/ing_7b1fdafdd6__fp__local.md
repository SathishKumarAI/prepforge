---
qid: ing_7b1fdafdd6__fp__local
question: 'Explain: Agents, Tool Use & MCP - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 525
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:26:33-05:00'
sources: []
---

**Agents, Tool Use & Multi‑Causal Planning (MCP) – Why the Interview Focuses on Them**

*Fundamental problem.*  
A conversational AI must decide *what to say and how to act* so that it satisfies a user’s intent while respecting constraints (policy, ethics, resources). This is an **action selection** problem in a high‑dimensional, partially observable environment. The agent’s policy maps the current belief state \(b_t\) (user utterance + history) to an action \(a_t\) that may be a text response or a *tool invocation* (API call, database query).

*Why tool use is mandatory.*  
Pure language models lack **execution capability**. By treating external systems as *black‑box functions*, the agent can transform symbolic information into concrete actions without retraining the core LM. This modularity also localises errors: if a tool fails, the policy can fallback or retry.

*MCP – Multi‑Causal Planning.*  
Instead of greedily choosing a single next step, MCP constructs a **causal graph** \(G=(V,E)\) where nodes are intermediate sub‑goals (e.g., “fetch weather data”) and edges encode dependencies. The planner solves
\[
\max_{p(G)} \sum_{v\in V} r(v) - \lambda\,c(G),
\]
balancing reward for completing user goals against cumulative cost of tool calls. This formulation unifies **information‑gain** (querying a tool reduces uncertainty) and **resource optimization** (minimising latency or token usage).

*Non‑obvious insight.*  
Many interviewers overlook that *tool choice itself is a policy decision*. Selecting the most informative yet cheapest API can change the entire causal tree. A robust agent must learn a *meta‑policy* over tools, not just over textual responses.

**Typical interview questions:**

1. **Design an agent architecture** that integrates a language model with arbitrary APIs.  
2. **Explain how you would train a policy** to decide when and which tool to call, given sparse reward signals.  
3. **Formulate MCP mathematically** and discuss its computational trade‑offs.  
4. **Describe fallback strategies** if a tool fails or returns contradictory data.

Answering these requires showing the underlying optimization problem, how information theory guides belief updates, and why modularity (tool use) is essential for scalable AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
