---
qid: ing_3609df7f85__star__local
question: 'Explain: Walk me through an LLM feature you shipped end to end.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 323
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:19-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a chatbot for customer support that needed to handle legal queries in real time. The existing FAQ bot returned canned responses and had no way to generate context‑aware answers, so our CS metrics were dropping: ticket resolution time was 30 % higher than the industry benchmark.

**Task:**  
I was tasked with building an end‑to‑end LLM feature that could ingest user questions, retrieve relevant policy documents, and produce concise, accurate replies within two seconds, all while staying under a $0.05 per query cost.

**Action:**  
First I chose GPT‑4o for generation but added a retrieval layer using Pinecone with embeddings from Sentence‑Transformers to fetch the top 5 policy snippets. I wrapped the prompt in a few‑shot format that included legal tone guidelines and a safety check using OpenAI’s Moderation API. For latency, I deployed the model on AWS Lambda with provisioned concurrency and cached embeddings for frequently asked questions. I also set up an internal A/B test harness to compare accuracy against our baseline bot.

**Result:**  
The new feature cut ticket resolution time by 42 % (from 12 min to 7 min) and increased first‑contact resolution from 68 % to 82 %. Cost per query stayed at $0.04, keeping us within budget. I learned how to balance retrieval quality, prompt engineering, and infrastructure scaling to deliver a production‑ready LLM service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
