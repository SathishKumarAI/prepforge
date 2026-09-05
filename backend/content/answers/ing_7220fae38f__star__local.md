---
qid: ing_7220fae38f__star__local
question: 'Explain: 8:24 pm / ai , openai , generative-ai , llms , anthropic , claude
  , claude-mythos-fable'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 348
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:33-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building an internal chatbot for customer support that had to generate policy‑specific answers in real time. The existing rule‑based system was slow and often gave generic replies, hurting our NPS score by 12 points.

**Task:**  
I needed to replace the static engine with a generative model that could understand context, pull in up‑to‑date policy documents, and produce concise, accurate responses—all while staying within our latency budget of 800 ms per request.

**Action:**  
I evaluated several open‑source LLMs—OpenAI’s GPT‑4o, Anthropic’s Claude‑3.5 Sonnet, and a distilled GPT‑NeoX model fine‑tuned on our corpus. After benchmarking, I chose Claude for its lower token cost and better safety filters. I built a prompt template that injects the relevant policy text using a sliding window technique, then used LangChain to orchestrate retrieval from ElasticSearch and post‑processing. To keep latency low, I deployed the model behind a FastAPI gateway with async request handling and cached frequently asked answers in Redis.

**Result:**  
The new chatbot reduced average response time from 1.2 s to 0.6 s and increased NPS by 18 points within three months. I learned that choosing the right LLM depends not just on raw accuracy but also on token economics, safety controls, and how well it integrates with your data stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
