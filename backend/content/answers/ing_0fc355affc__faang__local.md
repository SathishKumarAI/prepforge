---
qid: ing_0fc355affc__faang__local
question: 'Explain: Walk me through the taxonomy of evaluation methods for LLM systems
  and when you''d use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 511
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:14-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking for a *taxonomy* of how we evaluate large language models (LLMs) and the scenarios that call for each method.  
Assumptions:  
- Evaluation refers to measuring model quality (accuracy, safety, alignment).  
- We consider both offline benchmarks and online real‑world tests.  

**2️⃣ Approach**  
I’ll map methods into three layers—*Intrinsic*, *Extrinsic*, and *Human‑in‑the‑Loop*—then explain use‑cases for each.  

**3️⃣ Depth**

| Layer | Method | Typical Use‑Case | Key Metrics |
|-------|--------|-----------------|-------------|
| **Intrinsic** | *Token‑level perplexity / cross‑entropy* | Quick sanity check, pre‑training quality | Perplexity |
|  | *Zero/One/few‑shot task benchmarks (GLUE, SuperGLUE, LAMBADA)* | Task‑specific capability assessment | Accuracy, F1, BLEU |
|  | *Safety & bias tests (e.g., Toxicity, Hallucination detection)* | Compliance with content policies | Toxicity scores, hallucination rate |
| **Extrinsic** | *End‑to‑end task performance* (QA, summarization, translation) | Real‑world utility in product features | BLEU, ROUGE, MRR |
|  | *A/B testing against human or legacy systems* | Release readiness and ROI | Click‑through rate, revenue lift |
| **Human‑in‑the‑Loop** | *User studies & surveys* | Long‑term satisfaction, interpretability | SUS score, NPS |
|  | *Adversarial & robustness probing* | Security & adversary resilience | Failure rate under perturbations |

**4️⃣ Edge Cases**  
- Perplexity can be misleading on out‑of‑distribution data.  
- Benchmarks may not capture domain nuances; A/B tests mitigate this but require traffic.  
- Human studies are costly and may suffer from selection bias.

**5️⃣ Optimize & Communicate**  
Start with intrinsic metrics for rapid iteration, then validate via extrinsic benchmarks aligned to product KPIs. Finally, close the loop with human feedback to surface emergent issues. This layered strategy balances speed, coverage, and real‑world relevance—exactly what FAANG teams look for in a robust evaluation pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
