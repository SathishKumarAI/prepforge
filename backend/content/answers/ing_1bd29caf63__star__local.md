---
qid: ing_1bd29caf63__star__local
question: 'Q: What is wrong with using MMLU to compare models for your use case?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 319
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:55-05:00'
sources: []
---

**Situation**  
I was leading a research sprint to evaluate language‑model performance for an internal medical chatbot that needs to triage patient questions accurately and safely.

**Task**  
Determine which of the three new models—GPT‑4, Claude‑3, and a fine‑tuned Llama‑2—would best serve our clinical use case before committing to a production rollout.

**Action**  
I started with MMLU because it’s a quick benchmark. However, I realized that its curriculum is heavily weighted toward humanities and general knowledge, not domain‑specific medical reasoning or regulatory compliance. To get a realistic picture, I built a custom test set of 200 real-world triage queries pulled from our anonymized logs, added safety‑audit prompts for privacy and hallucination checks, and measured precision‑recall on diagnosis suggestions. I also ran a latency‑throughput analysis on each model under the same GPU setup to capture deployment constraints.

**Result**  
The MMLU scores were misleading: GPT‑4 topped the leaderboard, but in our medical subset it lagged 12 % behind Claude‑3 in precision and produced more hallucinations. The custom benchmark showed that Claude‑3 achieved 0.87 F1 for triage accuracy and maintained latency under 200 ms per request—critical for live patient interaction. I learned that generic benchmarks can mask domain gaps; tailoring evaluation to real‑world tasks is essential before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
