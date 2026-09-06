---
qid: ing_98efb94a2a__think__local
question: 'Explain: Multi-Agent System - Python — GitHub - microsoft/semantic-kernel:
  Integrate cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 454
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:12:45-05:00'
sources: []
---

**1. Clarify the request & set assumptions**  
- The user wants an explanation of *“Multi‑Agent System – Python – GitHub – microsoft/semantic-kernel”*.  
- Assume they’re interested in how the Semantic Kernel repository enables multi‑agent LLM workflows in Python, not a full code walk‑through.  
- Clarify that “multi‑agent” refers to independent logical components (agents) orchestrated by the kernel.

**2. Adopt a mental model / framework**  
Use the *“Problem → Tool → Flow”* structure:  
1. **Problem** – what the repo solves (rapid LLM integration, agent orchestration).  
2. **Tool** – Semantic Kernel’s core abstractions (skills, prompts, kernels).  
3. **Flow** – how a Python developer creates and runs agents.

**3. Step‑by‑step reasoning**  
- Identify key concepts: *Kernel*, *Skill*, *PromptTemplate*, *ChatCompletion*.  
- Explain the multi‑agent pattern: each agent is a skill or chain of skills; the kernel routes prompts to the appropriate agent.  
- Show minimal Python snippets: initializing a `Kernel`, adding a skill, invoking an agent.  
- Mention GitHub aspects: open‑source license, examples folder, CI pipelines, community contributions.

**4. Common traps to avoid**  
- Confusing *agent* with *prompt*. Clarify that agents are logical units, not just text templates.  
- Overlooking the need for a language‑model provider (OpenAI, Azure).  
- Assuming the repo contains a full LLM; it merely orchestrates calls.

**5. Sanity‑check & verbalize**  
- Verify that the explanation covers: what Semantic Kernel is, why multi‑agent matters, how to use it in Python, and its GitHub context.  
- Communicate concisely: start with “Semantic Kernel lets you…” then outline steps, end with a quick example and where to find more info on GitHub.

This structured approach keeps the answer focused, accurate, and easy for the reader to internalize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
