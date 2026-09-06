---
qid: ing_647e2bad9d__fp__local
question: 'Explain: Internal agents — TypeScript AI Framework for Agents and Apps
  | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 396
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:38:33-05:00'
sources: []
---

**Internal Agents – the engine of a TypeScript‑based AI ecosystem**

At its core, an *internal agent* is a **self‑contained inference loop**: it receives input, selects an action, updates its state, and produces output—all without external orchestration.  
Why must this loop be internal? Because any AI application that must react in real time (chatbot, recommendation engine, automated control) cannot afford the latency of round‑trips to a central scheduler; the agent itself becomes the *optimizer* for its own sub‑problem.

The framework models each agent as a **state machine with two orthogonal layers**:

1. **Perception layer** – parses raw data into a structured context (e.g., NLP embeddings, sensor readings).  
2. **Decision layer** – applies a lightweight policy (often a fine‑tuned transformer or rule set) to produce an action.

These layers are typed with TypeScript interfaces, giving compile‑time guarantees that the perception output matches the decision input—an embodiment of *information flow integrity*. The agent’s internal state is immutable, so each transition is a pure function; this makes reasoning about side effects trivial and enables deterministic replay for debugging.

**Non‑obvious insight:**  
Because the decision layer is isolated from external I/O, you can **compose agents as first‑class functions**. By passing an agent’s `execute` method to another agent, you build *meta‑agents* that learn how to orchestrate sub‑agents—effectively turning a collection of simple optimizers into a hierarchical policy without ever exposing the global scheduler.

In short, internal agents turn the “AI as black box” paradigm into a modular, type‑safe, composable system where each agent is both *solver* and *verifier*, guaranteeing correctness by construction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
