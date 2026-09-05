---
qid: ing_23e9b1c1a2__star__local
question: What is tool-call hallucination, and how do you defend against it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 322
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:57-05:00'
sources: []
---

**Situation:**  
During a client rollout of our generative‑AI chatbot for customer support, we noticed that the bot was frequently providing “facts” about product features that didn’t exist in the company’s knowledge base. The issue surfaced when a mid‑month spike in user queries revealed a 12 % increase in support tickets flagged as misinformation.

**Task:**  
I had to identify the root cause—whether it was a model hallucination or a data ingestion flaw—and implement a robust defense so that every answer the bot generated referenced verified, up‑to‑date internal documents.

**Action:**  
First, I instrumented the model’s prompt with an explicit “source” token and wrapped the LLM calls in a microservice that intercepted all responses. Using OpenAI’s `function calling` API, I defined a JSON schema requiring the bot to return a confidence score and a list of source document IDs. Next, I built a lightweight indexing layer with ElasticSearch that matched response snippets to actual knowledge‑base entries; any answer without at least one high‑confidence match was flagged for human review. Finally, I added an automated audit pipeline that logged every hallucinated claim and fed it back into the training data as negative examples.

**Result:**  
Within two weeks, hallucination incidents dropped from 18 % to under 3 %, and customer satisfaction scores rose by 7 points. The exercise taught me that combining prompt engineering with post‑generation verification is essential for trustworthy AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
