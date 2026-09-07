---
qid: ing_71b99bd213__faang__local
question: 'Explain: Multi-Agent Patterns — Langgraph Orchestration'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 461
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:02-05:00'
sources: []
---

**Multi‑Agent Patterns – LangGraph Orchestration**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Problem:* We need a scalable way to coordinate several LLM agents (e.g., planner, executor, verifier) so they can collaborate on complex tasks. *Assumptions:* Agents run as separate processes or services; we have a message broker or shared state store; latency and fault‑tolerance matter. |
| **Approach** | 1️⃣ Define an **Orchestrator** that holds the global task graph. <br>2️⃣ Each agent subscribes to specific node types (e.g., “Plan”, “Execute”). <br>3️⃣ Use a **state machine** or workflow engine (like LangGraph) to push inputs, collect outputs, and trigger subsequent nodes. <br>4️⃣ Persist the graph state in a fast store (Redis/Firestore) for retries. |
| **Depth** | *Orchestrator* exposes `dispatch(task_id, payload)`; agents call back via `receive(payload)`. The orchestrator maintains an adjacency list of node dependencies and a queue of ready nodes. Complexity: O(V+E) per tick to evaluate readiness; memory linear in graph size. Trade‑offs: eager vs lazy scheduling – eager reduces latency but increases load; lazy saves resources but may delay downstream work. |
| **Edge Cases** | • Agent crash → orchestrator retries or marks node failed.<br>• Circular dependencies → detect during graph build and reject.<br>• Divergent outputs → use a consensus or voting mechanism to resolve conflicts. |
| **Optimize & Communicate** | • Cache intermediate results to avoid recomputation.<br>• Batch multiple nodes per tick for throughput.<br>• Log every transition for auditability. I’d narrate this by walking through an example (e.g., “Plan→Execute→Verify”) and highlighting how the orchestrator ensures determinism while allowing agents to operate independently. This showcases structured thinking, depth in system design, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
