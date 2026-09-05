---
qid: ing_330b785e50__star__local
question: 'Explain: Using Prompt Caching to reduce the costs of Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 371
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:43-05:00'
sources: []
---

**Situation:**  
In a production chatbot for an e‑commerce platform, we were hitting $0.15 per user request because every conversational turn triggered a fresh LLM call to fetch product recommendations based on the entire chat history.

**Task:**  
Cut the per‑request cost by 70 % while keeping recommendation latency under 200 ms and preserving answer quality.

**Action:**  
I introduced prompt caching at two levels. First, I stored the “system” instructions and a concise “user context” snippet in Redis with a TTL of 10 minutes. Second, for each user session I pre‑generated a “partial prompt” that combined the system message, last three user turns, and a placeholder for dynamic recommendation data. When a new turn arrived, my middleware simply pulled the cached partial prompt, appended the fresh user utterance, and streamed it to the OpenAI Completion endpoint—skipping the expensive tokenization of the full conversation history. I also added a lightweight heuristic: if the context length exceeded 1 k tokens, we automatically truncated older turns before caching.

**Result:**  
The cache hit rate climbed to 88 %, cutting LLM calls from 100 % to 12 %. Per‑request cost dropped from $0.15 to $0.02 (≈86 % savings). Latency improved to an average of 140 ms, and user satisfaction scores rose by 4.3 points on a 5‑point scale. I learned that judicious prompt segmentation coupled with in‑memory caching can dramatically reduce cloud spend without sacrificing conversational quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
