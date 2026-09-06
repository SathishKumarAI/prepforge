---
qid: ing_8c638a73fc__think__local
question: 'Explain: When to Use Just `langchain-core` vs Full LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 461
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:20:33-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- *What is being asked?* We’re comparing “just `langchain‑core`” versus the full LangChain stack.  
- *Assume:* The user knows the high‑level goal (build a chatbot, data pipeline, etc.) but wants guidance on when to pull in only the core library vs the entire ecosystem.

**2️⃣ Adopt a decision‑tree mental model**  
- **Core needs?** Only basic chain composition & language‑model calls.  
- **Extended needs?** Agents, memory, retrieval, UI tools, integrations (SQL, S3, etc.).  
- Build a binary tree: *Do you need advanced features?* → Yes → full stack; No → core.

**3️⃣ Step‑by‑step reasoning**  
a. Identify the minimal set of primitives required (e.g., `LLMChain`, `PromptTemplate`).  
b. Check if those are in `langchain-core`.  
c. If your pipeline involves **agents, memory stores, retrieval**, or external connectors, map each to the corresponding LangChain sub‑package (`langchain-openai`, `langchain-google-genai`, `langchain-community`, etc.).  
d. Evaluate dependency bloat: adding the full stack pulls many optional packages that may be unused and increase attack surface.

**4️⃣ Common traps to avoid**  
- *Assuming “core” is all you need*: It lacks built‑in memory, agent orchestration, and most connectors.  
- *Over‑engineering*: Pulling in the whole repo for a single LLM call adds unnecessary size & complexity.  
- *Version mismatches*: Full stack may have inter‑package constraints; core stays lightweight.

**5️⃣ Sanity check & verbalize**  
- Summarize: “Use `langchain-core` when you only need basic chain plumbing and want minimal deps. Bring in the full LangChain (community, agents, tools) when your application requires advanced memory, retrieval, or external integrations.”  
- If unsure, prototype with core first; add packages incrementally as features surface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
