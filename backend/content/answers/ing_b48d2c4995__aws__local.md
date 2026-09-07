---
qid: ing_b48d2c4995__aws__local
question: 'Q: LangChain and LlamaIndex now both have "Graph/Workflow" features. How
  do you choose?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 399
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:12:43-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of our FAQ chatbot from a rule‑based system to an AI‑powered knowledge graph. We had two candidates—LangChain and LlamaIndex—both offering “graph/workflow” capabilities, and we needed a decision that balanced speed, cost, and future scalability.

**Action**  
I applied **Ownership** and **Dive Deep**:  
1. Built a prototype in each framework, wiring the same OpenAI embeddings and RAG pipeline.  
2. Benchmarked latency (avg 210 ms vs. 180 ms) and throughput (500 qps vs. 650 qps).  
3. Evaluated integration with AWS services: **Amazon Bedrock** for LLMs, **DynamoDB** as the graph store, and **Step Functions** for orchestration.  
4. Calculated projected monthly cost at 1M queries: LangChain+DynamoDB ~ $12k vs. LlamaIndex+GraphQL‑API Gateway ~$9k.  
5. Conducted a risk review—LangChain had an active community but lacked enterprise support; LlamaIndex offered built‑in security hooks for IAM.

**Result**  
I chose **LlamaIndex**. Post‑deployment, we cut query latency by 15 % and reduced costs by 25 %. The graph’s schema drift was handled automatically via LlamaIndex’s dynamic node updater, giving us a 40 % faster iteration cycle on new FAQ topics.

**Reflection**  
The decision taught me that *bias for action* can coexist with rigorous data analysis. I documented the trade‑offs and shared the learnings in a cross‑team workshop, ensuring future hires understand how to evaluate similar tool choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
