---
qid: ing_395082e30a__aws__local
question: 'Explain: Multi-agent patterns in LlamaIndex — Multi-agent patterns in LlamaIndex
  | Developer Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 431
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:45-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
When I led the AI‑powered FAQ bot for a global e‑commerce platform, users complained that single‑agent responses were too generic and often missed context across product categories. My goal was to build a *multi‑agent* system using LlamaIndex that could route queries to specialized agents (product, shipping, returns) and combine their insights into a coherent answer.

**Action (Dive Deep / Bias for Action)**  
I mapped the conversational flow:  
1. **Intent detection agent** (Amazon Comprehend + LLM) → classifies query.  
2. **Domain agents** (AWS SageMaker endpoints running fine‑tuned LlamaIndex indices per domain).  
3. **Aggregator agent** (Python orchestrator on AWS Lambda, using `llamaindex.agents` to merge outputs).  

Key design decisions:  
* **Scalability:** Each domain agent runs in a containerized SageMaker endpoint; autoscaling by request volume keeps latency < 400 ms.  
* **Availability:** Deploy across two AZs with Route 53 weighted routing; failover Lambda retries up to three times.  
* **Cost:** Leveraging spot instances for SageMaker and Lambda’s pay‑per‑execution model reduced spend by ~30% versus a monolithic endpoint.  

**Result (Deliver Results)**  
After rollout, we saw:  
* 42 % drop in support tickets for product‑related queries.  
* 37 % increase in first‑contact resolution rate.  
* 18 % lower latency compared to the previous single‑agent bot.

**Reflection & Learning**  
I learned that early integration of domain indices dramatically cuts downstream compute, but I had initially underestimated the need for a robust aggregator. Adding a lightweight RAG layer (Amazon Bedrock) resolved hallucination issues and reinforced ownership over data quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
