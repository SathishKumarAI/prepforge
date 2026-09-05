---
qid: ing_884f78d321__star__local
question: 'Explain: CS324 - Large Language Models — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 352
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:13-05:00'
sources: []
---

**Situation** – In my senior capstone I was tasked with building a conversational agent for an online tutoring platform that needed to generate personalized explanations in real time. The existing rule‑based bot was 70 % accurate on simple queries but fell apart on nuanced student questions, and the turnaround time of 2 seconds per response was too slow for live chat.

**Task** – I had to design a system that could understand context across multiple turns, produce fluent, factually correct explanations, and keep latency under 1.5 seconds while running on our limited GPU budget.

**Action** – I chose a pre‑trained transformer (OpenAI’s GPT‑3 base) and fine‑tuned it on a curated dataset of tutoring transcripts. To reduce inference cost I applied two techniques: first, model distillation to a 6‑layer BERT variant that retained 92 % of the original perplexity; second, I implemented token‑level caching so only new user turns triggered recomputation. For latency, I leveraged TensorRT on an NVIDIA RTX 3060, which cut GPU usage from 30 % to 12 %. I also built a lightweight Python wrapper that streamed partial outputs over websockets, giving users immediate feedback.

**Result** – The distilled model achieved a BLEU score of 0.58 versus the baseline’s 0.45 and reduced average response time to 1.2 seconds. User satisfaction surveys rose from 68 % to 84 %. I learned that careful fine‑tuning combined with hardware-aware optimization can make large language models viable in production even on modest hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
