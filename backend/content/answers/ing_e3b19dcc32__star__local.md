---
qid: ing_e3b19dcc32__star__local
question: 'Explain: Functions, Tools and Agents with LangChain - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 329
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:52-05:00'
sources: []
---

**Situation:**  
During a data‑science sprint at my previous company, we had to prototype an AI assistant that could pull insights from our internal knowledge base and suggest next steps for product managers. The deadline was two weeks before the quarterly review, so speed and accuracy were critical.

**Task:**  
I needed to build a conversational agent that could (1) understand user intent, (2) retrieve relevant documents, and (3) generate concise recommendations—all while integrating with our existing LLM service.

**Action:**  
Using LangChain, I first defined *functions*—small Python wrappers for the internal search API and an email‑compose helper. Then I composed a *toolchain*: a retrieval chain that queries ElasticSearch, a summarization chain using GPT‑4, and a planner tool to decide which function to call next. Finally, I instantiated a LangChain *Agent* (the `ConversationalRetrievalAgent`) configured with the OpenAI LLM and my custom tools. The agent uses a prompt template that iteratively calls functions until it can generate a final answer. I added logging and a fallback policy to retry failed function calls.

**Result:**  
The prototype was delivered on schedule, reduced user query time from 4 min to under 30 s, and cut the number of support tickets by 35% in the first month. I learned how LangChain’s modular design lets you mix LLM reasoning with deterministic tool execution for reliable production AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
