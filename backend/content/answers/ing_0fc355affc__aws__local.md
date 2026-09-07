---
qid: ing_0fc355affc__aws__local
question: 'Explain: Walk me through the taxonomy of evaluation methods for LLM systems
  and when you''d use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 417
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:05-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  

**S – Situation & Task**  
At my previous role I led the launch of a conversational AI platform for a global e‑commerce brand. The business required confidence that our large language model (LLM) delivered accurate, safe, and fair responses before rolling it to 10 M daily active users.

**T – Technical Approach**  
I mapped the evaluation taxonomy into three layers:  
1. **Intrinsic Metrics** – perplexity, BLEU, ROUGE for fluency & coverage; *AWS Comprehend* or *OpenAI API* for quick inference.  
2. **Extrinsic (Task‑based) Tests** – user‑simulated dialogues scored by NLU classifiers; implemented with *Amazon SageMaker Pipelines* and *Step Functions* to orchestrate parallel runs at scale.  
3. **Human‑in‑the‑Loop (HITL)** – double‑blind A/B panels on *Amazon Mechanical Turk*, measuring satisfaction, safety flags, and bias scores; aggregated via *AWS Glue* into a central data lake for trend analysis.

**A – Action & Results**  
I introduced automated nightly jobs that ran all three layers on a 32‑core EC2 spot fleet (cost $0.02/hr), producing a single dashboard in *QuickSight*. Within two weeks we detected a 12% drop in factual accuracy, corrected the model, and saw a 3× lift in NPS.  

**R – Reflection & Learning**  
The key lesson: intrinsic metrics alone can mislead; coupling them with extrinsic user‑centric tests + HITL ensures real‑world performance. I now advocate a “multi‑lens” evaluation pipeline as standard practice for any LLM deployment at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
