---
qid: ing_ed1a04e1f9__think__local
question: 'Explain: Types of Memory — LLM Powered Autonomous Agents | Lil''Log'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 589
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:39:59-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
*Ask:* Are we talking about memory in *human* cognition, in *computer systems*, or specifically in *LLM‑powered autonomous agents*? Assume the question targets **LLMs used as agents** (e.g., ChatGPT acting autonomously), so “memory” means how the model stores and recalls information across interactions.  

**2️⃣ Pick a mental model**  
Use the **“short‑term vs long‑term memory” framework** from cognitive science, adapted to LLMs:  
- *Short‑term (working) memory*: tokens in the current prompt/attention window.  
- *Long‑term memory*: external storage or fine‑tuning that persists beyond a single turn.  

Map this onto agent architectures: **episodic**, **semantic**, and **procedural** memories, plus **explicit vs implicit** memory stores (e.g., vector databases).  

**3️⃣ Step‑by‑step reasoning**  
1. List the *types* of memory relevant to agents:  
   - *Context window* (in‑prompt tokens) → short‑term.  
   - *Retrieval‑augmented memory* (external knowledge bases, RAG).  
   - *Fine‑tuned weights* (task‑specific fine‑tuning) → implicit long‑term.  
   - *Vector embeddings / vector store* → semantic recall.  
   - *Episode logs / replay buffers* → episodic memory.  
2. For each type, explain its purpose, how it’s implemented, and trade‑offs (latency, scalability, fidelity).  
3. Illustrate with an example: an autonomous customer‑support agent remembers a user’s preferences across sessions by storing embeddings in a vector DB, while the LLM handles immediate dialogue via the context window.  

**4️⃣ Avoid common traps**  
- Don’t conflate *attention span* (fixed token limit) with *memory capacity*.  
- Don’t treat fine‑tuned weights as a “black box” memory; they encode patterns, not explicit facts.  
- Beware of over‑promising persistence—LLMs don’t “remember” unless backed by an external store.  

**5️⃣ Sanity‑check & verbalize**  
- Verify that each memory type maps to a concrete implementation (e.g., Pinecone for vectors).  
- Check that the explanation stays within the agent context, not generic AI memory.  
- Summarize: “In LLM agents, short‑term memory is the prompt itself; long‑term memory comes from external stores or fine‑tuning—each with its own strengths and limitations.”  

Follow this structure to produce a clear, concise answer that covers all relevant memory types for autonomous LLM agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
