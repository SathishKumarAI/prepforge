---
qid: ing_c565ec40ba__think__local
question: 'Explain: Basic Agent - Python — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 537
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:00:08-05:00'
sources: []
---

**1. Clarify what “Basic Agent” means and set assumptions**  
   - Assume the user wants a high‑level explanation of the *BasicAgent* class (or function) found in `semantic-kernel`’s Python example.  
   - Note that the repo integrates LLMs via the Semantic Kernel SDK; the Basic Agent is a minimal wrapper around that SDK.

**2. Adopt a mental model: “SDK → Wrapper → Usage”**  
   - *SDK*: Semantic Kernel core classes (`Kernel`, `PromptTemplate`, etc.).  
   - *Wrapper*: The BasicAgent exposes an easy‑to‑call interface (e.g., `run(prompt)`), handling kernel creation, prompt registration, and response extraction.  
   - *Usage*: Show how a developer would instantiate the agent and call it in a script.

**3. Reason step‑by‑step through the code**  
   1. **Imports & setup**: explain the required packages (`semantic_kernel`, `openai`).  
   2. **Kernel creation**: show `kernel = Kernel()`.  
   3. **Prompt template registration**: discuss loading a simple prompt from a file or string.  
   4. **Agent class definition**: highlight key methods (`__init__`, `_prepare_prompt`, `run`).  
   5. **LLM invocation**: illustrate the call to `kernel.run()` and how the result is parsed.  
   6. **Example script**: give a minimal runnable snippet.

**4. Avoid common pitfalls**  
   - Don’t assume the reader knows how to install the SDK; mention pip or conda steps.  
   - Clarify that API keys (e.g., `OPENAI_API_KEY`) must be set in the environment.  
   - Don’t gloss over error handling; a quick note on catching `KernelError` can help.

**5. Sanity‑check & verbalize the explanation**  
   - Re‑run through each bullet to ensure it flows logically: import → kernel → prompt → agent → usage.  
   - Summarize in one or two sentences what the Basic Agent does (e.g., “It bundles a Semantic Kernel instance with a reusable prompt so developers can call `agent.run()` without worrying about low‑level SDK plumbing”).  

This structured approach lets you explain the component clearly while anticipating questions and avoiding common misunderstandings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
