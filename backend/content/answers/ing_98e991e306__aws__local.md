---
qid: ing_98e991e306__aws__local
question: What is RAG (Retrieval-Augmented Generation)?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 367
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:25-05:00'
sources: []
---

**Answer**

*Situation & Task:*  
While leading the AI‑ops team at my previous company, we were asked to reduce latency for our FAQ chatbot that served millions of daily queries. The existing pipeline was purely generative (OpenAI GPT‑4), which meant every request hit a large LLM and incurred high cost (~$0.03 per 1k tokens).  

*Action:*  
I championed a **Retrieval‑Augmented Generation (RAG)** architecture: first retrieve the most relevant knowledge snippets from our internal document store, then feed them into the LLM to generate context‑aware answers.  
- **Data layer:** Amazon OpenSearch for vector search (embedding with SageMaker Endpoint).  
- **Generation layer:** AWS Lambda orchestrating a Bedrock Claude model fine‑tuned on domain data.  
- **Caching:** DynamoDB TTL cache for top 10k embeddings to hit within 5 ms.  

*Result:*  
Latency dropped from 1.2 s to <200 ms (95th percentile). Cost per query fell by 70% ($0.008 vs $0.03). Customer satisfaction scores rose 12 points on our NPS survey.  

**Leadership Principles:**  
- *Customer Obsession* – focused on instant, accurate answers.  
- *Ownership & Dive Deep* – engineered end‑to‑end pipeline and tuned embeddings until the metrics hit targets.

**Bar‑raiser check:** I documented every trade‑off (search latency vs model cost), quantified impact with A/B tests, and iterated after a 15% drop in relevancy by retraining embeddings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
