---
qid: ing_f739a7d9c0__star__local
question: 'Explain: Customer-facing communication — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 332
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:10-05:00'
sources: []
---

**Situation**  
At my previous company we launched a chatbot that pulled data from our product analytics platform to answer user questions in real time. Early feedback showed that the bot was often giving irrelevant or overly technical answers, which confused new users and increased support tickets by 27 % within the first month.

**Task**  
I was tasked with building a “Customer Distillation Pipeline” that would filter raw telemetry into concise, context‑appropriate summaries for the chatbot to use, reducing noise and improving answer relevance.

**Action**  
1. Collected 10k raw event logs from our analytics API and tagged them by intent using spaCy’s NER.  
2. Built a two‑stage transformer model (BERT fine‑tuned on user queries) that scored each log entry for relevance to the current conversation context, then clustered similar events with K‑means.  
3. Implemented a lightweight caching layer in Redis so the distilled summary could be retrieved within 15 ms.  
4. Integrated the pipeline into the chatbot’s response generation flow, adding a fallback rule that returned “I’m not sure” when confidence dropped below 0.6.

**Result**  
Post‑deployment, bot answer relevance rose from 58 % to 92 %, and support tickets dropped by 38 %. I learned how to blend NLP pipelines with low‑latency caching to deliver real‑time customer insights without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
