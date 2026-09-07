---
qid: ing_fa8455dad2__faang__local
question: 'Explain: A. Customer support — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 455
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:22:19-05:00'
sources: []
---

**Clarify**  
We’re asked how an AI‑powered customer‑support agent can be built effectively for a company like Anthropic, focusing on reliability, safety, and user experience. Key assumptions: we have access to large language models (LLMs), real‑time logs, and regulatory constraints (privacy, bias).  

**Approach**  
1. **Safety‑first design** – integrate an RLHF‑trained policy that filters harmful content.  
2. **Modular architecture** – separate intent detection, knowledge retrieval, response generation, and post‑generation safety checks.  
3. **Human‑in‑the‑loop (HITL)** – fallback to human agents for high‑risk or ambiguous queries.  

**Depth**  
- *Intent & Slot Filling*: Use a lightweight classifier fine‑tuned on support tickets; confidence scores gate downstream modules.  
- *Knowledge Base Retrieval*: Index product docs via vector embeddings, retrieve top‑k passages, and pass them as context to the LLM.  
- *Response Generation*: Prompt with “You are an empathetic support agent…” plus retrieved context; use temperature 0.3 for consistency.  
- *Safety Layer*: A separate classifier flags hallucinations or policy violations before publishing. If flagged, we auto‑rewrite or route to a human.  
- *Evaluation*: BLEU/ROUGE against curated answers and real‑time user satisfaction scores (CSAT).  

**Edge Cases**  
- Ambiguous queries → trigger clarification dialog.  
- Data privacy breaches → enforce tokenization and audit logs.  
- Model drift over time → schedule periodic re‑training with fresh support data.  

**Optimize & Communicate**  
- *Latency*: Cache frequent FAQ embeddings; use async pipelines to keep <1 s response time.  
- *Cost*: Deploy smaller “distilled” models for low‑complexity tickets, upscale only when needed.  
- Narrate by highlighting the safety pipeline as a compliance guarantee and the modular design as scalability levers. This demonstrates structured thinking, depth in engineering choices, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
