---
qid: ing_5c52cd4c2e__star__local
question: 'Explain: Selective Inclusion — Context vs. Memory Engineering in Agentic
  AI Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 332
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:02-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a customer‑support chatbot that had to pull up relevant past tickets while still obeying privacy regulations. The system was receiving hundreds of queries per minute, and the raw context window could only hold about 4 KB of text.

**Task:**  
I needed to design a selective inclusion strategy that would decide which historical interactions to bring into the agent’s immediate prompt, without breaching GDPR or overloading the LLM.

**Action:**  
First I built a lightweight memory index using FAISS with embeddings from Sentence‑BERT. Each ticket was stored as a key–value pair: a hashed customer ID and its embedding. When a user queried, the system computed an embedding of the current question and retrieved the top‑k most similar tickets. Then I applied a rule‑based filter that discarded any record older than 90 days or marked “sensitive.” Finally, I compressed the selected records into a single prompt by summarizing them with GPT‑4o’s own summarization API, ensuring the final token count stayed below 2 KB.

**Result:**  
The chatbot could answer 95% of support tickets within the first turn, up from 70% before. Average latency dropped to 650 ms per request, and we logged a 30% reduction in escalations. I learned that combining semantic retrieval with policy‑driven filtering gives a practical balance between context richness and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
