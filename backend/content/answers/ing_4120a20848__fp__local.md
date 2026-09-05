---
qid: ing_4120a20848__fp__local
question: 'Explain: Microsoft Agent Framework, CrewAI, and the Agent SDK Landscape'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 516
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:23:08-05:00'
sources: []
---

**Microsoft Agent Framework (MAF)**  
At its core MAF solves *interactive context‑sensing*: an application must decide when and how to involve a virtual persona without hard‑coding dialogue flows. MAF abstracts the “agent” as a stateful finite‑state machine that receives events from the host, emits utterances, and exposes a lightweight API for speech, animation, and emotion. The underlying principle is **sequential decision making under uncertainty**—the agent chooses an action (e.g., prompt, reassure) based on its belief about user intent, which is updated by observing sensor data (speech recognition, gaze). By separating the *policy* from the *UI*, MAF lets designers prototype conversational flows rapidly while still allowing fine‑grained control over timing and multimodal cues.

**CrewAI**  
CrewAI tackles a higher‑level planning problem: orchestrating a *team of LLM agents* to complete complex tasks. Each agent is a black box that can generate text, but the system must decide who does what, when they hand off information, and how to resolve conflicts. The framework formalises this as a **distributed optimisation** over a directed acyclic graph (DAG) of sub‑tasks. Agents communicate via *task messages* that encode constraints (e.g., “require high‑confidence answer”). CrewAI’s scheduler learns a policy that minimises total cost (time, hallucination risk) while respecting these constraints—effectively a constrained Markov decision process.

**Agent SDK Landscape**  
The SDK ecosystem reflects the same trade‑off between *generic* and *domain‑specific* abstractions. On one end are low‑level libraries (e.g., OpenAI’s `ChatCompletion`) that expose raw prompt engineering; on the other, high‑level orchestration tools (e.g., LangChain, ReAct) that embed reasoning patterns into agents. The unifying principle is **modularity of cognitive primitives**: perception, memory, planning, and action. A non‑obvious insight is that *memory* is often the bottleneck—most SDKs treat it as a flat key/value store, yet effective long‑term task completion requires structured, relational memory that can be queried like a graph database. Recognising this shifts the design focus from “how to generate text” to “how to organise knowledge so agents can retrieve and update it efficiently.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
