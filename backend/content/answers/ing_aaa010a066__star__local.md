---
qid: ing_aaa010a066__star__local
question: 'Explain: What''s included — Generative AI with Large Language Models |
  Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 314
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:14:08-05:00'
sources: []
---

**Situation:** At my previous company we were building a content‑generation tool for our marketing team, but the prototype kept producing repetitive sentences and failed to capture brand voice.

**Task:** I needed to redesign the system so it could generate diverse, high‑quality copy in real time, while keeping latency under 300 ms per request.

**Action:** I enrolled in Coursera’s “Generative AI with Large Language Models” course. It covered tokenization, transformer architectures, and fine‑tuning strategies using frameworks like Hugging Face Transformers and PyTorch. I applied the course concepts by selecting a base GPT‑2 model, then used the 4‑bit quantization technique taught in the module to reduce memory usage. Next, I trained on our brand’s style guide via prompt engineering and few‑shot examples, leveraging the “Prompt Tuning” lesson. Finally, I deployed the fine‑tuned model behind an async FastAPI endpoint, adding a custom sampling schedule (top‑p = 0.9, temperature = 0.7) to balance creativity and coherence.

**Result:** The updated system cut generation latency from 1.2 s to 250 ms and increased user satisfaction scores by 37 % in A/B testing. I learned how to map academic LLM theory directly into production‑grade pipelines, balancing performance with cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
