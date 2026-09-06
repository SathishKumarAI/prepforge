---
qid: ing_23faa9f7e4__think__local
question: 'Explain: Full Working Example — LLM Orchestration Frameworks Compared:
  LangChain vs. LlamaIndex vs. Raw API Calls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 548
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:03:15-05:00'
sources: []
---

**1️⃣ Clarify the Scope & Assumptions**  
- *What is being compared?*  The three ways to build an LLM‑driven application: (a) a high‑level orchestration framework, (b) a data‑indexing helper library, and (c) bare‑bones API calls.  
- *Assume the reader knows what an LLM is*, but may not know the specific libraries or why you’d pick one over another.  
- *Define “full working example”* as a minimal script that shows end‑to‑end flow: load data → query → response.

**2️⃣ Adopt a Three‑Layer Mental Model**  
1. **Data Layer** – Where and how text is stored (files, DB, vector store).  
2. **Logic Layer** – The orchestration of prompts, chains, or calls that decide what to ask the LLM.  
3. **Interface Layer** – How the user interacts (CLI, web, API).

Map each framework onto these layers:
- LangChain → Logic + Interface (chains, agents).  
- LlamaIndex → Data + Logic (indexing & retrieval).  
- Raw API → All three built manually.

**3️⃣ Step‑by‑Step Reasoning Toward the Example**  
a. Pick a simple dataset (e.g., a set of FAQ text files).  
b. For each approach:  
   - *Data loading*: `open()` vs. LlamaIndex’s `SimpleDirectoryReader`.  
   - *Prompt crafting*: hard‑coded string vs. LangChain’s `ChatPromptTemplate` vs. manual format.  
   - *LLM call*: `client.chat.completions.create` in all cases, but wrapped differently.  
c. Show the code snippets in a unified “main” script that can switch between modes via an argument.

**4️⃣ Common Traps to Avoid**  
- Mixing concepts: using LangChain’s “agent” when you only need a simple prompt.  
- Forgetting to install/initialize vector stores for LlamaIndex.  
- Over‑optimizing raw calls (e.g., not batching or reusing embeddings).  

**5️⃣ Sanity‑Check & Communicate Clearly**  
- Run each snippet locally; verify identical outputs.  
- In the explanation, explicitly state trade‑offs: abstraction vs. flexibility, performance vs. convenience.  
- End with a quick decision table summarizing when to pick each approach.

This structured thought process can be reused for any comparison of high‑level frameworks versus low‑level implementations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
