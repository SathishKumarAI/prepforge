---
qid: ing_4f3e7533aa__aws__local
question: 'Q5: How would you evaluate a RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:27-05:00'
sources: []
---

**Answer – Amazon Interview Style**

**Situation / Task**  
I led the evaluation of a Retrieval‑Augmented Generation (RAG) pipeline for our customer support chatbot, tasked with reducing open‑ticket volume by 20 % within six months.

**Action**  
1. **Define Success Metrics** – Precision@k, recall, latency ≤200 ms, and cost per inference < $0.01.  
2. **Baseline Measurement** – Ran the existing GPT‑4‑only model on a 5 k‑ticket sample: accuracy 68 %, latency 350 ms, cost $0.12/ticket.  
3. **Design RAG Architecture** –  
   * **Vector Store:** Amazon OpenSearch Service with KNN plugin for embeddings (cosine similarity).  
   * **Retriever:** Lambda@Edge to query OpenSearch, returning top‑5 documents.  
   * **Generator:** Amazon Bedrock (Claude 2) fine‑tuned on domain data.  
4. **A/B Test** – Deployed RAG version to 30 % of traffic; measured against baseline over two weeks.  
5. **Analyze & Iterate** – Used CloudWatch logs and X-Ray for latency bottlenecks; optimized batch size from 1→10 requests, cutting retrieval time by 35 %.  
6. **Cost & Availability** – Leveraged Spot Instances for Lambda concurrency (30 % savings) and Multi‑AZ OpenSearch (99.9 % SLA).  

**Result**  
- Accuracy rose to 82 % (+14 pp), meeting the 20 % reduction target in 4 months.  
- Latency dropped to 190 ms, cost per ticket fell to $0.04.  
- Customer satisfaction scores increased from 3.8→4.2/5.  

**Reflection (Bar‑raiser lens)**  
I took *ownership* by setting clear KPIs and iterating on data. The deep dive into OpenSearch metrics highlighted trade‑offs between retrieval speed and cost. Learning from an initial latency spike, I re‑architected the retriever to batch queries, demonstrating bias for action and delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
