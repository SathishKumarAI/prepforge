---
qid: ing_5019a7c580__aws__local
question: 'Explain: Advanced ICL: Analogy and "Few-Shot CoT"'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 381
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:11-05:00'
sources: []
---

**Situation / Task**  
I was tasked to improve the interpretability of our internal LLM used for customer support. The model answered in a single line; we needed it to explain *why* it chose an answer so agents could trust and audit it.

**Action**  
1. **Advanced In‑Context Learning (ICL)** – I engineered prompts that included short analogies (e.g., “Think of the decision like choosing the fastest route on a map”) to give the model a relatable framework.  
2. **Few‑Shot Chain‑of‑Thought (CoT)** – I supplied 3–4 annotated examples in the prompt where the model walked through reasoning steps before giving the final answer.  
3. Built an end‑to‑end pipeline on **Amazon SageMaker**: data prep → prompt assembly → inference via **AWS Bedrock** (GPT‑4o). The prompts were stored in DynamoDB for versioning, and results streamed to CloudWatch for real‑time monitoring.

**Result**  
- Accuracy of explainable responses rose from 68 % to 92 % on a held‑out test set.  
- Agent satisfaction scores increased by **27 %** (measured via post‑call surveys).  
- Deployment cost stayed within 5 % of the baseline because I reused existing SageMaker endpoints and leveraged Spot Instances.

**Reflection**  
I owned the end‑to‑end feature, dove deep into prompt engineering to surface the trade‑off between explanation length and latency, and iterated until we hit the target metrics. This experience reinforced that *Ownership* + *Dive Deep* drive measurable business impact while keeping AWS best practices front of mind.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
