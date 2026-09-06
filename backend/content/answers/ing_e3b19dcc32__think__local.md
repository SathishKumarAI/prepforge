---
qid: ing_e3b19dcc32__think__local
question: 'Explain: Functions, Tools and Agents with LangChain - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 414
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:01:49-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume the reader knows basic NLP but not LangChain specifics.  
- Focus on *functions* (Python callables), *tools* (pre‑built utilities like calculators, APIs), and *agents* (autonomous decision makers).  
- Treat DeepLearning.AI’s “LangChain” as a framework for building LLM‑driven pipelines.

**2️⃣ Mental model / framework**  
Think of LangChain as a **pipeline builder**:  
- **Inputs → Functions/Tools → Agents → Outputs**.  
Functions are the raw operations; tools wrap them with metadata; agents orchestrate tool usage based on prompts and context.

**3️⃣ Step‑by‑step reasoning**  
1. Define a *function* (e.g., `def calc(x, y): return x + y`).  
2. Convert it to a *tool* by adding a name, description, and schema (`langchain.tools.FunctionTool`).  
3. Create an *agent* that receives a user query, selects the appropriate tool(s), passes arguments, and returns results.  
4. Chain multiple agents or tools for complex tasks (e.g., retrieving data → summarizing → generating response).  

**4️⃣ Common traps to avoid**  
- Forgetting JSON schema validation for tool inputs → runtime errors.  
- Overloading a single agent with too many tools → unclear decision paths.  
- Ignoring the LLM’s token budget when chaining long responses.

**5️⃣ Sanity‑check & communicate**  
- Test each function independently, then as a tool, finally inside an agent.  
- Explain results verbally: “The function adds numbers; the tool exposes it to the agent; the agent decides which tool to invoke based on user intent.”  
- Highlight that DeepLearning.AI’s tutorials emphasize *modularity* and *reusability* in this pipeline structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
