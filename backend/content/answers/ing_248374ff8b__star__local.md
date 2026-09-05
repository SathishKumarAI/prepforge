---
qid: ing_248374ff8b__star__local
question: 'Explain: Common Issues — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 371
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:20-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a customer‑support chatbot that needed to pull up-to-date product documentation and answer FAQs in natural language. Our dev team had no ML background, but the product manager insisted on using the latest large‑language model (LLM) so the bot could understand intent beyond keyword matching.

**Task:**  
I was tasked with integrating Microsoft’s Semantic Kernel into our existing .NET microservice stack within two weeks while keeping latency under 800 ms and ensuring we didn’t exceed our cloud budget of $200/month for inference calls.

**Action:**  
First, I forked the `semantic-kernel` repo and set up a local Docker container to test model weights on our GPU‑free environment. I then refactored our data ingestion pipeline: instead of raw PDFs, we pre‑tokenized documents into 512‑token chunks using Azure Cognitive Search’s skillset, storing them in Cosmos DB with a cosine similarity index. Next, I wrapped the kernel calls in an async caching layer (MemoryCache + Redis) to reduce repeat inference. Finally, I added a fallback rule engine that only invoked the LLM when confidence fell below 0.7, otherwise returning cached FAQ answers.

**Result:**  
The bot’s response time dropped from 1.4 s to 600 ms on average, and the number of LLM calls per day fell by 65%, keeping monthly costs at $115. User satisfaction scores rose from 3.8/5 to 4.6/5 in our internal survey. I learned that careful data preprocessing, caching, and confidence thresholds are key when integrating cutting‑edge LLMs into production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
