---
qid: ing_8c638a73fc__faang__local
question: 'Explain: When to Use Just `langchain-core` vs Full LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 428
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:45-05:00'
sources: []
---

**Clarify**  
You’re deciding between pulling in the minimal **`langchain-core`** package or the full **LangChain** stack (which includes I/O, integrations, and UI). The key assumptions:  

1. *Runtime environment* – Is it a headless server or a notebook?  
2. *Feature set* – Do you need connectors to external APIs, memory managers, or the `AgentExecutor`?  
3. *Deployment constraints* – Size, dependency bloat, and CI/CD pipeline limits.

**Approach**  
1. Enumerate required components (LLM wrappers, prompt templates, tools).  
2. Map each component to its package: core for primitives, extras for integrations.  
3. Build a minimal bundle that satisfies the feature list; only add extras if needed.

**Depth**  
- **`langchain-core`** provides `BaseLanguageModel`, `PromptTemplate`, `Chain`, and serialization – ~200 MB on PyPI. Ideal when you want full control, custom tokenizers, or run in environments with strict size limits (e.g., Lambda layers).  
- The *full* LangChain pulls in `langchain` + all optional extras (`langchain-openai`, `langgraph`, UI), totaling ~1 GB. It includes the high‑level `AgentExecutor`, memory backends, and built‑in tools.

**Edge Cases**  
- If you need a prebuilt agent or tool (e.g., `PythonREPLTool`), you must import its module – otherwise you’ll hit runtime errors.  
- Missing optional dependencies can cause silent failures; guard imports with try/except.

**Optimize & Communicate**  
Start with `langchain-core`; add extras incrementally, documenting each addition’s impact on bundle size and startup time. In interviews, explain that this “core‑first” strategy balances flexibility, performance, and maintainability—exactly what FAANG teams look for in a production‑grade AI stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
