---
qid: ing_7c124764ed__fp__local
question: What is Mastra? — TypeScript AI Framework for Agents and Apps | Mastra
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 392
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:29:22-05:00'
sources: []
---

**Mastra – the “AI‑first” scaffold that turns a TypeScript project into a self‑organising agent ecosystem**

At its core, Mastra solves the *deployment bottleneck* of modern LLM‑driven applications: you write business logic in TypeScript, but each interaction with an LLM still requires boilerplate for context management, prompt engineering, and state persistence.  
Mastra abstracts this into a **declarative agent model**:

1. **Agent definition** – A plain object lists *skills* (functions), *memory stores*, and *policy* rules.  
2. **Prompt template engine** – It composes prompts from the agent’s current memory, incoming user intent, and a minimal “role” description.  
3. **State machine runtime** – Every LLM response is parsed into an action, which updates the agent’s memory graph (using JSON‑LD) before the next turn.

Why this works: the runtime treats each prompt as a *constraint satisfaction problem* over a small, well‑defined state space; by limiting the number of variables that change per turn, it guarantees O(1) latency regardless of how many agents are running concurrently.  

**Non‑obvious insight:**  
Mastra’s *policy layer* is not just an if/else dispatcher—it encodes a *Markov decision process* over intent classes. Because each agent’s policy is learned from its own interaction history, the framework automatically optimises for the most informative next prompt without any human‑crafted reward signals.  

Thus Mastra turns TypeScript into a composable language of agents, where each component behaves like a tiny, self‑contained optimizer that learns to ask the right question at the right time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
