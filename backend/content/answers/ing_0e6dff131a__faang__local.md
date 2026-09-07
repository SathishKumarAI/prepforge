---
qid: ing_0e6dff131a__faang__local
question: 'Explain: Prompt caching — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 480
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:17:27-05:00'
sources: []
---

**Prompt Caching – Agentic Engineering (Neo Kim & Paul Hoekstra)**  
*Meta‑style FAANG interview answer (≈200 words)*  

---

### 1️⃣ Clarify  
The authors propose *prompt caching* as a lightweight, agent‑centric method to speed up large‑language‑model (LLM) inference. Instead of recomputing the hidden states for every prompt, the idea is to **store** intermediate embeddings for frequently used sub‑prompts and **reuse** them when similar queries arise.  
Assumptions:  
- The LLM’s transformer layers are deterministic given the same token sequence.  
- Sub‑prompt reuse frequency is high enough to outweigh cache overhead.  

### 2️⃣ Approach  
1. Tokenize incoming prompt → identify reusable sub‑prompts (e.g., “Explain X in simple terms”).  
2. Check cache: if embeddings exist, fetch; else compute through the model and store.  
3. Concatenate cached embeddings with fresh tokens’ embeddings.  
4. Run remaining layers only on new tokens.  

### 3️⃣ Depth  
- **Complexity:** Cache lookup is O(1) (hash map). Reusing k layers saves ~k×(token · hidden‑size) operations, reducing latency by up to 30–50% for typical prompts.  
- **Trade‑offs:** Memory overhead grows linearly with unique sub‑prompts; stale caches may lead to slightly different context if the model’s weights update.  

### 4️⃣ Edge Cases  
- *Non‑deterministic behavior* (e.g., temperature sampling) breaks cache validity—must disable caching for stochastic runs.  
- *Prompt drift:* If a sub‑prompt changes even minimally, cache miss occurs; need robust hashing or fuzzy matching.  

### 5️⃣ Optimize & Communicate  
To improve, implement **frequency‑based eviction** and **LRU policy** to keep the most useful entries. Communicate results by showing latency reduction graphs and memory usage curves in a slide deck—clear evidence of engineering impact.  

--- 

*Result:* Prompt caching is an agentic strategy that lets LLMs “remember” parts of their conversation, yielding faster responses with modest memory trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
