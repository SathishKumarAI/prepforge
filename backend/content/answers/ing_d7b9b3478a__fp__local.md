---
qid: ing_d7b9b3478a__fp__local
question: 'Explain: When would you decompose a task into multiple prompts instead
  of one? Explain least-to-most prompting.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 432
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:38:52-05:00'
sources: []
---

When the problem space exceeds the LLM’s “effective context window” or when the output must satisfy several orthogonal constraints (e.g., legal compliance, style, domain‑specific jargon), it is safer to split the job into a chain of prompts rather than forcing everything into one shot.  

**Why decomposition works**

1. **Modular optimization** – each sub‑prompt can be tuned for a specific objective (accuracy, brevity, format).  
2. **Error isolation** – a failure in one module does not cascade; you can re‑invoke only the problematic step.  
3. **Information bottleneck relief** – long documents or multi‑step reasoning exceed token limits; breaking them lets the model focus on a narrower subspace each time.  
4. **Alignment amplification** – intermediate checkpoints give humans (or another agent) an opportunity to correct drift before it propagates.

**Least‑to‑Most prompting**

This is a structured chain‑of‑thought where you start with a *least* demanding prompt—typically “What is the answer?” or “Give me a short summary.” The model’s output is then fed into a second, more specific prompt such as “Expand on that point, citing evidence,” and so on until the final prompt demands the full, polished answer.  

The non‑obvious insight: *the intermediate outputs act as an implicit curriculum for the model.* By gradually increasing complexity, you keep the LLM in a regime where its internal representations are most faithful to the task’s latent structure, reducing hallucinations and improving factuality. This mirrors curriculum learning in supervised settings but is achieved purely through prompt engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
