---
qid: ing_f5df533239__star__local
question: 'Explain: What they emphasise — Deepseek'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 289
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:40:12-05:00'
sources: []
---

**Situation**  
During a sprint for an internal chat‑bot platform, our metrics showed that user satisfaction dropped by 18% after we upgraded to the new LLM API. The team suspected that the model’s responses were too generic and lacked domain specificity.

**Task**  
I was tasked with tuning the underlying language model so it could better understand industry jargon while keeping latency under 800 ms for real‑time interactions.

**Action**  
I started by evaluating the open‑source DeepSeek LLM because of its balanced trade‑off between performance and size. I fine‑tuned a 7B‑parameter checkpoint on a curated dataset of 50k domain‑specific dialogues, using LoRA adapters to keep memory usage low. To preserve latency, I deployed the model on our GPU fleet with TensorRT optimization and added a caching layer for frequent prompts. Throughout, I ran A/B tests against the baseline GPT‑3.5 model, measuring perplexity and response relevance scores.

**Result**  
Post‑deployment, user satisfaction rose by 27%, and average latency stayed at 750 ms. The project taught me that selecting a lightweight yet powerful model like DeepSeek can dramatically improve both cost efficiency and user experience when fine‑tuned carefully for domain context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
