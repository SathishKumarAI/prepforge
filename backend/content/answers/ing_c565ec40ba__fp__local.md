---
qid: ing_c565ec40ba__fp__local
question: 'Explain: Basic Agent - Python — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 457
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:24-05:00'
sources: []
---

**What the “Basic Agent” does**

At its core a *basic agent* is an orchestrator that turns natural‑language prompts into concrete actions.  
Given a user’s intent it

1. **Parses** the prompt with a large language model (LLM).  
2. **Matches** the parsed meaning to one of a small set of *skills* (e.g., `search`, `summarize`, `translate`).  
3. **Invokes** the chosen skill, passing only the arguments that the LLM extracted.  
4. **Returns** the skill’s output back to the user or feeds it into another step.

This pattern is essentially a *closed‑loop control system* in which the LLM acts as both sensor (reading the prompt) and actuator (deciding which skill to call). The agent’s job is to keep that loop tight, ensuring deterministic, auditable behavior while still harnessing the generative power of an LLM.

**Why Microsoft’s Semantic Kernel repo ships a Basic Agent**

- **Modularity**: Skills are small Python functions decorated with `@semantic_function`. The kernel loads them at runtime, so you can swap or extend capabilities without touching the agent logic.  
- **Scalability**: Each skill runs locally (or in any cloud function) and can be parallelized; the kernel’s executor handles queuing and retries.  
- **Safety & Explainability**: Because the agent explicitly records which skill was called and with what arguments, you can audit decisions or roll back changes—something pure generative chat cannot guarantee.

**Non‑obvious insight**

Most people treat an LLM as a black box that spits out text. In this architecture the LLM is *only* a decision engine; all heavy lifting (I/O, domain logic) is delegated to deterministic Python code. This separation lets you enforce rate limits, logging, and unit tests on the skills while still enjoying the flexibility of natural‑language prompting. It’s a practical realization of the “LLM as an interpreter” principle: let the model decide *what* to do, not *how*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
