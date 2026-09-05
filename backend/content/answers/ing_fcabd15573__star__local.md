---
qid: ing_fcabd15573__star__local
question: 'Explain: AI Prompting for Everyone — DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 335
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:49-05:00'
sources: []
---

**Situation**  
During my final semester I was part of a capstone team building an automated customer‑support chatbot for a mid‑size e‑commerce client. Their existing solution had a 60 % first‑contact resolution rate, and the client wanted to boost it by leveraging generative AI without hiring additional devs.

**Task**  
I needed to design a prompt‑engineering workflow that could be maintained by non‑technical product managers, enabling them to tweak responses on the fly while keeping latency under 200 ms per request.

**Action**  
I mapped out a “Prompting for Everyone” pipeline inspired by DeepLearning.AI’s course. First, I created modular prompt templates in JSON, each tagged with intent and response style. Then I built a lightweight UI using Streamlit where product owners could adjust slot values (e.g., tone, formality) without touching code. Behind the scenes I wrapped OpenAI’s GPT‑4 model with a caching layer (Redis) to reduce token usage. Finally, I set up an A/B testing harness that logged response accuracy and user satisfaction scores in real time.

**Result**  
After deployment, the chatbot achieved a 78 % first‑contact resolution rate—an 18 % lift—while keeping average latency at 180 ms. The product team reported they could iterate on prompts in minutes instead of days, and I learned how to translate complex prompt engineering into a user‑friendly workflow that balances performance with accessibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
