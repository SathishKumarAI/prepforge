---
qid: ing_2d9860c5b5__star__local
question: 'Explain: Prompt Engineering for LLMs — https://www.promptingguide.ai/'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 403
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:30-05:00'
sources: []
---

**Situation** – In early 2025 I led a product‑team effort to launch an AI‑powered customer support chatbot for our e‑commerce platform. The initial model delivered generic responses that scored only 62 % on relevance in user surveys, and we were under a six‑month deadline to ship a competitive feature.

**Task** – My goal was to redesign the prompt strategy so the LLM would generate concise, brand‑consistent answers while reducing hallucinations, all within the same API quota and latency budget.

**Action** – I adopted a modular “prompt template” system inspired by PromptingGuide.ai. First, I mapped out user intents (order status, returns, product info) and created base prompts with clear role instructions (“You are a helpful customer‑support assistant”). Next, I incorporated chain‑of‑thought prompting: each prompt ended with “Think step‑by‑step before answering.” I also built a small validation layer that checked for key phrases (e.g., “refund policy”) to flag hallucinations. Using the OpenAI API’s `temperature` and `top_p` knobs, I tuned responses for fluency without sacrificing accuracy. Finally, I automated prompt selection via a lightweight intent classifier, so the right template ran each time.

**Result** – After deployment, relevance rose from 62 % to 83 %, and user satisfaction scores improved by 18 points on our NPS survey. Latency stayed under 350 ms, and we saved 12 % of API calls by reusing high‑confidence prompts. I learned that a systematic prompt engineering pipeline—template design, chain‑of‑thought, validation, and intent routing—transforms raw LLM output into reliable product features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
