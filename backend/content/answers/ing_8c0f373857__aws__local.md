---
qid: ing_8c0f373857__aws__local
question: What's the difference between zero-shot and few-shot prompting, and when
  would you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 445
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:33-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the rollout of a generative‑AI feature for a global e‑commerce platform. The product team needed to decide whether to use zero‑shot or few‑shot prompting for personalized product descriptions while keeping latency under 200 ms and cost < $0.02 per inference.

**Action**  
I scoped two prototypes:

| Prompt type | Design & AWS stack | Key trade‑offs |
|-------------|--------------------|----------------|
| **Zero‑Shot** | Simple prompt “Describe the product.”, deployed on SageMaker Real‑Time endpoint (GPU‑instance). | Zero data prep, lower cost per request, but higher variance in output quality. |
| **Few‑Shot** | Prompt + 3 labeled examples from our internal dataset, served via Bedrock with a custom LLM and Lambda layer for dynamic prompt assembly. | Requires initial labeling effort (~1 k sentences), higher compute cost, but improves relevance & reduces post‑processing. |

I ran A/B tests:  
- Zero‑shot achieved **71%** of user‑approved descriptions, latency 180 ms, $0.015/request.  
- Few‑shot improved approval to **88%**, latency 210 ms, $0.025/request.

**Result**  
Based on the 17% lift in content quality and a projected 15M monthly users, we adopted few‑shot prompting for high‑value categories (electronics, apparel) while keeping zero‑shot for low‑impact items. Monthly cost increased by **$120k**, but revenue uplift from higher conversion rates was estimated at **$1.2M**—a 10× ROI.

**Learning & Ownership**  
I documented the trade‑off matrix and automated the prompt‑generation pipeline, ensuring repeatability across teams. This reinforced *Ownership* (owning end‑to‑end performance) and *Dive Deep* (quantifying impact of prompt strategy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
