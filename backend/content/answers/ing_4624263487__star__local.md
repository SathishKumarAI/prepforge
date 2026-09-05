---
qid: ing_4624263487__star__local
question: 'Explain: Case Study: Enterprise MCP Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 370
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:48:57-05:00'
sources: []
---

**Situation:**  
At my previous employer, a Fortune‑500 logistics firm, the support center handled over 12,000 tickets per month for our multi‑channel portal (web, mobile, chat). Our knowledge base was siloed across three legacy systems and search relevance dropped to 48 % satisfaction on first‑contact resolution.  

**Task:**  
I was asked to design an AI‑driven Knowledge Agent that would unify content, provide contextual answers in real time, and reduce ticket volume by at least 20 % within six months.  

**Action:**  
First, I orchestrated a data‑inclusion pipeline: extracted articles from each CMS, normalized them with spaCy NLP to tag entities and intents, and stored the embeddings in Pinecone for low‑latency similarity search. I built a BERT fine‑tuned on our ticket logs to rank candidate answers, then wrapped it behind an AWS Lambda microservice that integrated with Zendesk via webhooks. For fallback, I added a reinforcement‑learning loop where agents could flag incorrect responses; those were fed back into the training set weekly. Finally, I created a front‑end widget using React that surfaced suggested articles directly in chat and logged user clicks for continuous improvement.  

**Result:**  
Within five months we achieved 73 % first‑contact resolution, cut ticket volume by 23 %, and reduced average handling time from 8.4 to 5.1 minutes. The project also lowered support cost per ticket by $12. I learned how to blend transformer‑based retrieval with operational constraints (latency, scalability) while keeping the model continuously updated from real user interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
