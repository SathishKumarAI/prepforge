---
qid: ing_b67e845d69__aws__local
question: 'Explain: In-context learning — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 408
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:31-05:00'
sources: []
---

**Situation & Task**  
At my previous AWS role I led a proof‑of‑concept for an enterprise chatbot that needed to answer domain questions without retraining the model every time new data arrived. The challenge was to keep latency < 200 ms while handling 10k concurrent users.

**Action – Technical Design**  
I applied *in‑context learning* by packaging user intent, recent conversation history, and a small set of curated FAQ snippets into a single prompt that we fed to an Amazon Bedrock foundation model. Prompt engineering was done with the *PromptTemplate* pattern (prefix + dynamic slots), ensuring the context window never exceeded 4k tokens.  
To scale, I deployed the model in a **Lambda@Edge** function behind CloudFront for edge‑latency and used **Amazon SQS** to queue bursts, guaranteeing at‑least‑once delivery. For cost, we leveraged *SageMaker Neo* compiled models on spot instances.

**Result**  
We achieved a 95 % correct answer rate (measured via NPS) while reducing average response time from 1.2 s to 180 ms— a **66 % latency drop** and **$3k/month** savings versus the baseline.

**Reflection**  
I owned end‑to‑end performance, *dived deep* into token budgeting, and iterated on prompt templates based on A/B testing. The failure mode was an over‑long prompt that hit the 4k limit; after adding a summarization step with Amazon Comprehend, we eliminated the error entirely.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered faster, more accurate answers for end users.  
- **Ownership & Dive Deep**: Took full responsibility for prompt design, latency tuning, and cost optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
