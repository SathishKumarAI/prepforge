---
qid: ing_7d7ad4eb5f__faang__local
question: 'Q: When would you choose Pydantic AI over LangGraph for a Python service?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 527
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:00-05:00'
sources: []
---

**Clarify**  
You’re building a Python micro‑service that will consume or produce data, and you need to decide whether to model your domain objects with **Pydantic AI** (an extension of Pydantic for LLMs) or to orchestrate multiple LLM calls with **LangGraph**. Key assumptions:  

- Do you need strict schema validation + serialization?  
- Are you calling a single LLM endpoint per request, or chaining several prompts/agents?  
- Is the service primarily data‑centric (e.g., transforming user input into structured JSON) or workflow‑centric (e.g., multi‑step reasoning)?

**Approach**  

1. **Data‑heavy, low‑latency API** → lean validation + LLM inference.  
2. **Workflow‑heavy, stateful interactions** → graph of agents, prompts, and memory.

**Depth**  

- *Pydantic AI*: Wraps Pydantic models with `@pydantic_ai.model` to auto‑generate prompt templates, parse LLM output back into typed objects, and perform runtime validation. Complexity is O(n) in schema size; adds minimal overhead (~1–2 ms). Ideal for REST endpoints that accept JSON, produce structured responses, or need strict contract enforcement.  
- *LangGraph*: Uses a directed graph of `Node`s (LLM calls, tools, logic), supports branching, retries, and external memory (e.g., VectorStore). Complexity grows with graph size; each node incurs LLM round‑trip cost. Best when you need multi‑step reasoning, fallback strategies, or integration with APIs.

**Edge Cases**  

- *Pydantic AI* fails if the LLM output is unstructured or deviates from schema → you’ll get validation errors.  
- *LangGraph* can become brittle if node dependencies aren’t properly memoized; cycles may cause infinite loops.

**Optimize & Communicate**  

- Use **Pydantic AI** when your service’s contract is stable and performance critical—e.g., a data ingestion endpoint that must return a validated `UserProfile`.  
- Switch to **LangGraph** when you need dynamic, context‑aware conversations or multi‑step workflows—e.g., a support chatbot that first parses intent, then queries an API, finally summarizes the answer.  

Explain this trade‑off clearly: validation + speed vs. flexibility + statefulness. This shows structured reasoning and depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
