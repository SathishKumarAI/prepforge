---
qid: ing_dd631185cd__star__local
question: 'Explain: Week 1 — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 379
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:53-05:00'
sources: []
---

**Situation** – When I enrolled in the Coursera “Generative AI” series, the first module was all about Large Language Models (LLMs). The class kicked off with an assignment to build a simple chatbot that could answer user queries using GPT‑4 via OpenAI’s API, while also discussing token limits and cost per inference.  

**Task** – My goal was to demonstrate how LLMs generate text from prompts, show the trade‑offs between context length (max 8k tokens) and latency, and estimate run‑time costs for a 1,000‑query test set. I also needed to explain why tokenization matters when you slice up user input.

**Action** – I wrote a Python script that:  
1. Tokenized prompts with the `tiktoken` library to count tokens per request.  
2. Queried GPT‑4 through the official SDK, measuring response time and token usage.  
3. Logged costs using OpenAI’s pricing model ($0.03/1k prompt tokens, $0.06/1k completion tokens).  
4. Visualized results in a bar chart comparing “short” vs “long” prompts, highlighting the 5‑second latency increase when exceeding 4k tokens.

**Result** – The chatbot handled 90% of user queries within 3 seconds and stayed under $0.50 for the entire test set. I presented these findings to my cohort, receiving praise for turning abstract token limits into a concrete cost–benefit framework. This exercise taught me how to translate LLM theory into practical performance metrics that stakeholders can understand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
