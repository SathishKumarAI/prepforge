---
qid: ing_395082e30a__think__local
question: 'Explain: Multi-agent patterns in LlamaIndex — Multi-agent patterns in LlamaIndex
  | Developer Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 497
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:57:18-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What* are we explaining? The “Multi‑Agent” section of LlamaIndex’s docs (the official repo on GitHub).  
   - *Assume* the reader knows basic LlamaIndex concepts (index, query engine) but not the multi‑agent pattern.  
   - *Goal*: give a concise overview that can be reused for other libraries.

**2. Adopt a mental model**  
   - Think of the index as a *knowledge base*.  
   - A *multi‑agent* system is just several “worker” components that each have a role (retriever, summarizer, planner).  
   - The pattern is a *pipeline*: input → agent 1 → … → agent n → output.

**3. Step‑by‑step reasoning**  
   1. Start with the **problem statement**: single agents can be brittle; complex tasks need collaboration.  
   2. Identify the **core components** in LlamaIndex: `QueryEngine`, `Retriever`, `Planner`, `LLMChain`.  
   3. Show how to *compose* these into an agent stack using the provided helpers (`MultiAgent`, `AgentConfig`).  
   4. Explain the **workflow** with a concrete example (e.g., answering a user query by first searching, then summarizing).  
   5. Highlight the **configuration knobs**: parallel vs sequential execution, routing logic, fallback agents.

**4. Common pitfalls to avoid**  
   - Mixing up *retrieval* and *generation*: remember the index only stores data; LLMs do the reasoning.  
   - Forgetting to register each agent with `QueryEngine` – it won’t run otherwise.  
   - Over‑optimizing: more agents don’t always mean better results; keep the pipeline lean.

**5. Sanity‑check & communicate**  
   - Verify that the example code compiles on a fresh install (`pip install llamaindex`).  
   - Run a quick test query to ensure output flows through all agents.  
   - When explaining, start with “Why” (the motivation), then “What” (components), then “How” (code snippet). This mirrors the docs’ structure and helps listeners map the pattern onto other frameworks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
