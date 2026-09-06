---
qid: ing_df7ce3af9c__think__local
question: What AI models and providers does Mastra support?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 444
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:43:42-05:00'
sources: []
---

**Thinking Process for Answering “What AI models and providers does Mastra support?”**

1. **Clarify the scope & assumptions**  
   - Confirm that *Mastra* refers to the specific product or platform in question (e.g., a cloud‑based AI orchestration tool).  
   - Assume the user wants a concise list of supported model families (LLMs, vision models, etc.) and third‑party providers (OpenAI, Anthropic, Google, Azure, AWS, local runtimes).

2. **Choose a mental framework**  
   - Use a *“feature‑by‑provider”* matrix: list each provider, then enumerate the model types they expose within Mastra.  
   - Keep it hierarchical so readers can scan quickly.

3. **Step‑by‑step reasoning**  
   - Start with the most common providers (OpenAI, Anthropic).  
   - For each, note the specific models available (GPT‑4, Claude‑2, etc.).  
   - Add less‑known or niche providers (Mistral, Cohere) if documented.  
   - Include “on‑prem / local” options (HuggingFace inference API, OpenVINO).  
   - Verify that each entry aligns with the latest Mastra documentation or release notes.

4. **Avoid common traps**  
   - Don’t conflate *model families* with *specific model versions* unless explicitly requested.  
   - Avoid assuming every provider supports all model types; check for limitations (e.g., only text, not vision).  
   - Skip outdated or deprecated providers that Mastra no longer lists.

5. **Sanity‑check & articulate**  
   - Cross‑reference the answer with two sources: Mastra’s official docs and a recent release blog.  
   - Summarize in a clear bullet list, then provide a brief sentence confirming coverage breadth (e.g., “Mastra supports both cloud‑based and on‑prem LLMs from major vendors”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
