---
qid: ing_b7a6d8adc5__aws__local
question: 'Explain: Q26: Explain quantization techniques for LLM deployment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 386
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:14-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we deliver faster, cheaper inference for end users; *Dive Deep* – we rigorously analyze quantization trade‑offs.

**Situation / Task**  
In 2023 I led the deployment of a 13B LLM in our recommendation engine. The model’s latency (≈200 ms per query) exceeded SLA limits and cost $0.12/query on GPU instances.

**Action**  
I evaluated three quantization schemes: **int8 post‑training**, **dynamic float16**, and **mixed‑precision block‑wise int4**.  
* Built a test harness that ran 10K inference traces on a representative dataset, capturing per‑token latency and perplexity loss.  
* For int8, we saw 4× memory reduction and 2.3× speedup with <1% BLEU drop.  
* Dynamic FP16 offered negligible speed gains but preserved accuracy.  
* Mixed‑precision int4 reduced model size by 75 %, cut inference cost to $0.04/query, yet incurred a 3% loss in downstream click‑through rate—acceptable given the SLA.

**Result**  
We rolled out int8 quantization on **AWS Inferentia2** instances, cutting inference cost from $1.20M/month to $0.32M/month while maintaining >99 % of original accuracy. This change improved customer experience (latency < 120 ms) and freed capacity for new features.

**Key Learnings**  
*Quantization is not one‑size‑fits‑all.* Continuous profiling and A/B testing are essential to balance cost, speed, and quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
