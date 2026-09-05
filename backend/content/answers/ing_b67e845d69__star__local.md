---
qid: ing_b67e845d69__star__local
question: 'Explain: In-context learning — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 341
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:02-05:00'
sources: []
---

**Situation:** At my last role I was tasked with building a quick prototype for an internal chatbot that could answer product documentation questions without retraining the model each time. The data set was huge, and we had to meet a sprint deadline of two weeks.

**Task:** I needed to design a prompt strategy that would let GPT‑4 understand user queries in real‑time while pulling relevant context from our knowledge base, all without fine‑tuning or additional training.

**Action:** First, I extracted the most frequently asked questions and stored their answers as “context snippets” in a vector index (FAISS). When a user typed a question, my system fetched the top‑3 related snippets and assembled them into an in‑prompt context block:  
```
Context:
1. <Snippet 1>
2. <Snippet 2>
3. <Snippet 3>

User: <question>
Answer:
```  
I experimented with prompt templates—adding “You are a helpful product expert” versus no role description—to see how the model’s framing affected accuracy. I also tuned token limits to keep the prompt under 1,000 tokens, ensuring fast inference on our GPU cluster.

**Result:** The prototype answered 87 % of test queries correctly, up from 62 % with a naïve keyword lookup. Response time dropped to <300 ms per query, meeting the sprint goal. I learned that carefully curating context snippets and role framing can turn a general‑purpose LLM into a domain‑specific assistant without costly fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
