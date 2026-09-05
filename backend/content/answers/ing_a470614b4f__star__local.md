---
qid: ing_a470614b4f__star__local
question: 'Explain: 11:57 pm / reddit , seo , openai , chatgpt , ai-assisted-search
  , system-prompts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 395
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:13-05:00'
sources: []
---

**Situation:**  
In early 2024 I was leading a small data‑science team at a digital‑marketing agency that had just launched an AI‑powered search feature for a client’s e‑commerce site. The goal was to improve organic traffic by providing highly relevant answers to user queries, but our initial model kept returning generic responses and hurt SEO rankings.

**Task:**  
I needed to design a system‑prompt strategy that would (1) steer GPT‑4 to generate concise, keyword‑rich snippets; (2) keep the output within 200 characters so it appears as a SERP snippet; and (3) ensure the answers aligned with the site’s product taxonomy.

**Action:**  
I built a modular prompt framework using LangChain. First, I extracted key phrases from the client’s product catalog via spaCy NER and stored them in a Redis vector index. Then I crafted system prompts that included: “You are an SEO specialist; respond in 150‑200 characters, include primary keyword, avoid fluff.” For each user query, I retrieved the top three relevant vectors, appended their keywords to the prompt, and used temperature=0.3 for deterministic outputs. Finally, I wrapped the whole flow in a FastAPI service that logged click‑through rates (CTR) per snippet.

**Result:**  
Within two weeks, the new AI‑assisted search increased page CTR by 27% and organic traffic by 18%. The client’s top landing pages saw a 12% rise in conversion rate. I learned that precise system prompts coupled with dynamic keyword injection can turn a generic LLM into an SEO engine without sacrificing performance or user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
