---
qid: ing_758cb773f8__star__local
question: 'What is Semantic Kernel? — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 368
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:37-05:00'
sources: []
---

**Situation:**  
While leading a product‑team at a fintech startup, we were tasked with building an AI‑powered financial advisory widget that could generate personalized investment summaries for our users in real time. Our data pipeline was built on Azure, but integrating a large language model (LLM) into the user flow without bloating latency or cost was a major challenge.

**Task:**  
I needed to prototype and roll out an LLM integration that allowed us to process natural‑language queries, pull structured financial data, and produce concise summaries—all within 2 seconds per request—while keeping compute usage under $0.10 per query.

**Action:**  
I introduced Microsoft’s Semantic Kernel (SK) as the glue layer. Using SK’s prompt template engine I defined reusable “semantic skills” that encapsulated our domain knowledge: a skill to fetch market data, another to apply risk‑adjusted metrics, and a third to format the final summary. I leveraged SK’s vector store connectors to index user portfolios in Azure Cognitive Search, enabling semantic search for context. For execution, I wrapped the OpenAI GPT‑4 model with SK’s orchestration API, which automatically handled prompt tuning, caching of partial results, and fallback logic when latency thresholds were breached.

**Result:**  
The prototype served 10,000 daily users with an average response time of 1.7 seconds and cost $0.08 per query. User satisfaction scores rose from 72% to 88% on the advisory feature, and we reduced engineering effort by 35% compared to a hand‑rolled LLM integration. I learned that Semantic Kernel’s modular skill architecture dramatically accelerates AI product delivery while keeping operational overhead low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
