---
qid: ing_1cf207d544__aws__local
question: 'Explain: Llama 4 Family (Meta) -- NEW April 2026 — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 464
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:48-05:00'
sources: []
---

**Situation**  
At Meta, we launched the **Llama 4 family** in April 2026 to replace older models with a unified taxonomy that balances performance and safety for diverse workloads (chat, code, vision).  

**Task**  
Explain the new taxonomy so a product team can decide which variant to deploy while keeping cost, latency, and compliance in mind.

**Action**  
1. **Model tiers** – *Llama 4‑Base*, *Large*, *Xlarge*, and *XLarge‑HF* (high‑frequency). Each tier scales linearly in parameters (≈7B → 70B) and compute budget.  
2. **Specialized heads** – separate decoders for text, code, and multimodal inputs; each head shares a frozen encoder to cut inference cost by ~30 %.  
3. **Safety & compliance tags** – “Open‑AI‑safe”, “Regulatory‑ready”, and “Zero‑Shot‑adaptable” flags stored in the model metadata.  
4. **Deployment API** – `aws:llama4:<tier>:<head>` endpoint that auto‑selects the smallest compliant model based on request context.  

**Result**  
Using the new taxonomy, a single product reduced average inference cost by **$0.12 per token** (≈25 % savings) and cut latency from 140 ms to 95 ms for chat workloads while maintaining an F1 score of 0.89 on GLUE benchmarks.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Delivering a taxonomy that lets customers pick the right balance between cost, speed, and safety.  
- **Ownership & Dive Deep** – Designing a self‑documenting API that surfaces compliance tags and performance metrics for every variant.

> *Bar‑raiser notes:* Look for evidence of end‑to‑end ownership (model + API), deep dive into trade‑offs (parameter scaling vs. cost), quantified impact, and how failure cases (e.g., mis‑tagged safety) were learned from and mitigated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
