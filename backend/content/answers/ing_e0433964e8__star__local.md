---
qid: ing_e0433964e8__star__local
question: 'Q62: Your search results are relevant but the LLM ignores them and answers
  from its training data. How do you fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 309
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:16-05:00'
sources: []
---

**Situation:**  
In a product launch for an AI‑powered customer support chatbot, we noticed that the model was frequently answering user queries with outdated policy information it had learned from its training data instead of pulling up-to-date answers from our internal knowledge base.

**Task:**  
I needed to ensure every response was anchored in the latest documents so that users received accurate, compliant answers while keeping latency under 500 ms.

**Action:**  
1. Implemented a retrieval‑augmented generation (RAG) pipeline: indexed the knowledge base with Pinecone and used OpenAI’s embeddings for semantic search.  
2. Updated prompts to explicitly instruct the LLM to “consult the retrieved document before answering.”  
3. Added a post‑generation verifier that checks if the answer contains key phrases from the top 3 retrieved passages; if not, it rewrites or flags the response.  
4. Tuned temperature and max tokens to reduce hallucinations, and set up logging to monitor any deviations.

**Result:**  
Accuracy of policy‑related responses jumped from 62 % to 94 %, user satisfaction scores rose by 18 points, and we maintained sub‑500 ms latency. I learned that combining retrieval with clear prompt directives and a lightweight verifier is the most robust way to ground LLM outputs in real data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
