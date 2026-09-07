---
qid: ing_31d44bcb11__faang__local
question: 'Q: You need to give an LLM agent access to 200 internal tools. How do you
  handle schema overload?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 443
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:40:06-05:00'
sources: []
---

**Clarify**  
We’re building a single LLM that must invoke ≈ 200 distinct internal APIs (tools). The question is how to prevent the model from getting overwhelmed by the sheer volume of schemas and signatures it has to consider at inference time.

Assumptions:  
- Each tool exposes a JSON‑schema‑described request/response.  
- Tool calls are triggered via structured “function call” messages.  
- Performance constraints (latency < 500 ms) and security isolation must be maintained.

**Approach**  
1. **Hierarchical categorization** – group tools into logical namespaces (e.g., *billing*, *analytics*, *dev‑ops*).  
2. **Dynamic tool catalog** – only expose the relevant namespace’s schema set to the LLM per user session or context.  
3. **Prompt‑time filtering** – prepend a concise “tool list” card summarizing each namespace’s capabilities; let the model choose the namespace first, then the specific tool.

**Depth**  
- Store schemas in a fast key‑value store (e.g., Redis) keyed by namespace.  
- On request, load only that namespace’s schema set (~10–20 tools).  
- Use OpenAI’s function‑call API to pass the reduced schema list; complexity drops from O(200) to O(k) where *k* ≈ 15.  
- Cache frequent tool sets per user role to avoid repeated fetches.

**Edge Cases**  
- A user requests a cross‑namespace operation → fallback to full catalog or composite wrapper.  
- Schema drift: monitor versioning; invalidate cache on updates.  
- Security: ensure the LLM cannot accidentally call non‑exposed tools by validating request signatures server‑side.

**Optimize & Communicate**  
Explain that this design keeps inference latency low, reduces cognitive load on the model, and aligns with least‑privilege access. Mention potential future improvements like embedding tool embeddings for semantic filtering or using a retrieval‑augmented approach to surface only the most relevant schemas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
