---
qid: ing_23faa9f7e4__fp__local
question: 'Explain: Full Working Example — LLM Orchestration Frameworks Compared:
  LangChain vs. LlamaIndex vs. Raw API Calls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 473
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:22:03-05:00'
sources: []
---

### Why we need orchestration

Large‑language models (LLMs) are powerful but *stateless* and *generic*.  
When building a real application we must repeatedly:

1. **Retrieve context** (docs, tables, APIs).  
2. **Structure the prompt** (few‑shot, chain of thought).  
3. **Post‑process the answer** (extract entities, verify facts).  

Doing this by hand with raw API calls is *inefficient* and *error‑prone*.  
An orchestration framework turns the LLM into a *stateless function* that we can compose like any other service.

### LangChain vs. LlamaIndex

| Framework | Core abstraction | Typical use |
|-----------|------------------|-------------|
| **LangChain** | `LLM` → `PromptTemplate` → `Chain` → `Tool` | Prompt‑centric pipelines; easy to swap models or add reasoning steps. |
| **LlamaIndex** | `VectorStore` / `Retriever` → `IndexNode` → `QueryEngine` | Retrieval‑augmented generation; built for large document collections and fast similarity search. |

Both expose the same *chain* concept, but LangChain focuses on *prompt engineering*, while LlamaIndex bundles *vector search* as first‑class citizens.

### Raw API calls

Using a raw call (e.g., OpenAI’s `chat.completions`) gives maximum flexibility but forces you to:

- Manually format prompts each time.  
- Re‑implement token counting, retries, and context window checks.  
- Handle retrieval logic yourself if you need external data.

### Non‑obvious insight

**The bottleneck is not the LLM itself; it’s the *compositional* overhead of managing state across calls.**  
Frameworks lower this overhead by treating each step as a composable unit with its own contract (input type, output type, side effects). This turns an opaque “black box” into a *functional pipeline*, enabling static analysis, caching, and parallelism—capabilities that raw API usage cannot provide without significant engineering effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
