---
qid: ing_51e8bb7c9c__faang__local
question: 'Explain: Using Pre-Built Agents from Agent Pack — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 436
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:54:59-05:00'
sources: []
---

**1️⃣ Clarify**  
The question asks how to use the *Agent Pack*’s pre‑built agents in Haystack for rapid ML prototyping. I’ll assume: (a) you have a running Haystack stack, (b) you’re familiar with the basics of pipelines and agents, and (c) you want to know the practical steps and benefits.

**2️⃣ Approach**  
1. Install `haystack[agents]`.  
2. Load an agent from the pack (`from haystack.agents import AgentPack; agent = AgentPack.load("pack_name")`).  
3. Provide a prompt or user query, optionally with context documents.  
4. Run the agent – it will internally build a pipeline (retrieval → LLM → post‑processing) and return a response.

**3️⃣ Depth**  
- *AgentPack* bundles ready pipelines: e.g., “faq-agent” uses DenseRetriever + OpenAI GPT‑4 for Q&A.  
- Internally, the agent constructs a `Pipeline` object with configurable nodes; you can inspect or override them (`agent.pipeline`) before execution.  
- Complexity is O(n) retrieval + LLM inference cost; no extra training required.  
- Extensibility: add custom nodes via `agent.add_node(...)` or replace existing ones.

**4️⃣ Edge Cases**  
- Unsupported models → fallback to defaults or raise clear errors.  
- Large document sets may trigger retrieval timeouts; test with varying dataset sizes.  
- Agent‑specific prompts might misbehave if the LLM context window is exceeded; verify by truncating or chunking inputs.

**5️⃣ Optimize & Communicate**  
Explain that using pre‑built agents accelerates MVPs, reduces boilerplate, and provides a consistent interface for experimentation. Highlight that you can later replace components with fine‑tuned models or custom retrieval strategies without re‑architecting the pipeline—this modularity is what FAANG teams value for rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
