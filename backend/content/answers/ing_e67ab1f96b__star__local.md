---
qid: ing_e67ab1f96b__star__local
question: 'Explain: 3.2 New Knowledge, Not Just Scale — Rethinking On-Policy Distillation
  of Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 328
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:04-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with deploying a large language model (LLM) for an internal chatbot that had to run on edge devices in retail stores. The original 12‑B model would take ~3 s per inference and cost $0.50 per request, which was unacceptable for our 1 M daily queries.

**Task:**  
I needed to create a distilled version that retained conversational nuance while cutting latency to under 200 ms and cost to <$0.01 per query, without simply scaling down parameters.

**Action:**  
I re‑engineered the distillation pipeline using *on‑policy* training: instead of pre‑computing logits from the teacher, the student interacted with a simulated user environment and received rewards for factual accuracy and response relevance. I introduced a phenomelogical loss that penalized hallucinations by comparing entropy gaps between teacher and student, and a mechanism that dynamically adjusted temperature based on confidence. I implemented this in PyTorch, leveraging mixed‑precision training on a single RTX 3090, and used a curriculum that started with short dialogues and progressed to longer ones.

**Result:**  
The distilled 1‑B model achieved 95 % of the teacher’s BLEU score, cut inference time from 3 s to 180 ms, and reduced operational cost by 90 %. I learned that preserving *knowledge*—not just size—is critical for practical LLM deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
