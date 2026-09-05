---
qid: ing_1fd31cbde8__star__local
question: 'Explain: Context Engineering: Assembling the Optimal Context Window'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 347
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:01-05:00'
sources: []
---

**Situation** – In a client‑facing chatbot project for a financial services firm, the model was choking on long documents: every time a user asked a question about regulatory policy, the LLM would hallucinate or miss key clauses because the entire policy (≈25 k tokens) exceeded the 8 k token limit of the chosen API.  

**Task** – Build a dynamic context‑window system that could fetch only the most relevant 4–5 k tokens per query while preserving factual accuracy, and integrate it into the production pipeline with minimal latency.

**Action** – I first indexed the policy PDFs using FAISS on sentence embeddings (Sentence‑Transformers). For each user prompt I performed a similarity search to retrieve top‑10 sentences, then applied a sliding‑window heuristic: merge contiguous sentences until reaching 4 k tokens, ensuring that any clause boundaries were respected. I wrapped this in an async microservice written in Go for speed, and added a caching layer (Redis) keyed by query hash to avoid repeated searches. Finally, I instrumented the pipeline with OpenTelemetry to monitor token usage and latency.

**Result** – The chatbot’s answer precision rose from 62 % to 93 % F1 on our internal QA set, while average response time stayed under 350 ms. The system also cut API calls by ~40 %, saving ~$12k/month. I learned that careful window sizing and caching are as critical as model choice when deploying LLMs at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
