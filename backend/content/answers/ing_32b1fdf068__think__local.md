---
qid: ing_32b1fdf068__think__local
question: Break down the latency and cost budget of a RAG query. What do you optimise
  first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 517
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:51:16-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
- *What is “RAG” here?* Assume Retrieval‑Augmented Generation (vector‑search + LLM).  
- *Latency vs cost trade‑off*: We’re given a fixed budget; which dimension to squeeze first?  
- *Target metrics*: e.g., < 200 ms per query, <$0.01 per request.

**2. Mental model: layered cost/latency stack**  
1. **Data layer** – vector store (FAISS, Pinecone, etc.)  
2. **Retrieval engine** – similarity search + candidate selection  
3. **LLM inference** – prompt + generation  
4. **Post‑processing** – formatting, safety checks  

Each layer has tunable knobs: index type, top‑k, batching, model size.

**3. Step‑by‑step reasoning**  
- *Measure* each layer’s contribution to end‑to‑end latency and cost (profiling).  
- If retrieval dominates latency but is cheap → optimize it first (e.g., switch to HNSW, reduce top‑k).  
- If LLM inference dominates both latency & cost → consider a smaller model or caching.  
- Use A/B tests: change one knob at a time, record Δlatency/Δcost.  
- Build a simple linear budget equation: `Cost = c1*retrieval + c2*LLM + …`, solve for optimal allocation.

**4. Common traps to avoid**  
- *Assuming cost is proportional to latency*: not true—LLM compute can be expensive even if fast.  
- *Optimizing only one layer*: ignore downstream effects (e.g., too few retrieval results → more LLM tokens).  
- *Over‑caching*: saves latency but increases storage cost and stale data risk.

**5. Sanity‑check & verbalize**  
- Verify that total budget is met after each tweak.  
- Explain to stakeholders: “We first tightened the retrieval step because it accounts for 30 % of latency yet costs < $0.001 per query, whereas shifting to a larger LLM would raise cost by 50 % with only marginal speed gain.”  
- Iterate until diminishing returns hit.

This structured approach lets you decide—usually start with retrieval optimization, then move to model size or batching, always guided by measured impact on both latency and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
