---
qid: ing_aec2d4dc7e__star__local
question: 'Explain: Sample questions — OpenAI Forward Deployed Engineer (FDE) Interview
  Guide | Sample Questions (2026) - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 311
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:41-05:00'
sources: []
---

**Situation**  
During my senior thesis I was tasked with building an open‑source chatbot that could answer medical queries with high accuracy while staying within the token budget of GPT‑4.

**Task**  
I had to design a system that balanced performance and cost: hit a 92 % precision on a curated dataset, keep inference latency under 1.5 s, and limit API calls to < 0.02 USD per query.

**Action**  
First I profiled the model with Hugging Face’s `transformers` and identified heavy attention heads; I pruned them using ONNX Runtime to reduce FLOPs by 35 %. Next, I implemented a prompt‑slicing strategy that sent only the last 500 tokens to the LLM, cutting token usage by 40 %. For cost control, I set up a dynamic batching pipeline in FastAPI that aggregated requests during off‑peak hours. Finally, I wrote unit tests with `pytest` and automated CI on GitHub Actions to catch regressions.

**Result**  
The final bot achieved 93.7 % precision, latency of 1.2 s, and cost dropped from $0.04 to $0.015 per query—a 62 % savings. I learned that aggressive profiling coupled with thoughtful architectural trade‑offs can meet tight constraints while preserving user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
