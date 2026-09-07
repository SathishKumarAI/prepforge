---
qid: ing_12f84c29f4__faang__local
question: 'Explain: Task-Specific Dimensions — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 459
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:52-05:00'
sources: []
---

**Clarify**  
You’re asking how to evaluate a large language model (LLM) on *task‑specific dimensions*. In other words, instead of only looking at generic perplexity or overall accuracy, we want metrics that reflect performance on the particular subtasks an application cares about—e.g., factual recall vs. creative generation, reasoning depth vs. speed, safety compliance, etc.  
Assumptions:  
- The LLM is fine‑tuned for a target domain (customer support, medical QA, code synthesis).  
- We have labeled data or human annotators for each subtask.  

**Approach**  
1. **Identify subtasks** (e.g., factual accuracy, coherence, response time, bias mitigation).  
2. **Define metrics** per subtask: BLEU/ROUGE, F1, human‑rated Likert scales, latency, toxicity scores.  
3. **Collect or synthesize evaluation data** for each dimension.  
4. **Aggregate** with weighted scoring if needed; keep dimensions decoupled for transparency.  

**Depth**  
- *Factual Accuracy*: Use a curated knowledge base and compute exact‑match recall. Complexity: O(n) over queries.  
- *Coherence & Fluency*: Compute perplexity on held‑out validation plus human ratings (inter‑annotator agreement).  
- *Safety/Bias*: Run automated toxicity detectors; flag high‑risk outputs.  
- *Latency*: Measure inference time per token; treat as a continuous metric.  

**Edge Cases**  
- Ambiguous prompts may inflate accuracy but reduce usefulness.  
- Human annotations are costly and subjective—use calibration techniques.  
- Models may overfit to the evaluation set, so use cross‑validation or hold‑out domains.  

**Optimize & Communicate**  
Explain that this modular framework lets stakeholders see where a model excels or falls short, enabling targeted fine‑tuning (e.g., add factuality loss). Highlight trade‑offs: tighter factual constraints can hurt creativity; lower latency may reduce depth. Conclude by stressing the importance of reproducible benchmarks and continuous monitoring to maintain performance over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
