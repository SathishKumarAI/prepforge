---
qid: ing_8c638a73fc__fp__local
question: 'Explain: When to Use Just `langchain-core` vs Full LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 465
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:35-05:00'
sources: []
---

**When to pick only `langchain-core` versus the full LangChain stack**

1. **Fundamental Problem: “I need a reusable language‑model wrapper.”**  
   The core library is a minimal, dependency‑free API that turns any LLM into a *tool* (i.e., a callable object) and stitches tools together via a lightweight *chain*. It solves the problem of *inference orchestration* without imposing I/O or storage concerns.  

2. **When you only need inference logic**  
   If your application is a single‑shot prompt generator, a batch processor, or a microservice that will host its own database and vector store, `langchain-core` suffices. It guarantees the fastest startup, smallest footprint, and the most straightforward unit tests because it has no optional back‑ends.

3. **When you need higher‑level abstractions**  
   The full LangChain bundle adds *Agents*, *Memory*, *Vector Stores*, *Persisted Chains*, and connectors to external APIs (e.g., Pinecone, Weaviate). These solve the problem of *stateful reasoning over time* and *retrieval‑augmented generation*. Use it when you need a ready‑made framework that handles prompting strategies, tool‑selection logic, or conversational context without writing plumbing code.

4. **Non‑obvious insight**  
   The core’s API is deliberately *tool‑agnostic*: every LLM call becomes a `Tool`. This design means you can swap the underlying model (OpenAI, Anthropic, local) or add custom tools (SQL queries, web scrapers) without touching chain logic. In contrast, the full stack often embeds specific storage adapters; changing them forces migration of serialized chains.

**Bottom line:**  
- **Use `langchain-core`** for lightweight inference pipelines where you control persistence and state.  
- **Use the full LangChain** when you need built‑in memory management, agentic reasoning, or off‑the‑shelf vector‑store integrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
