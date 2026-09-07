---
qid: ing_7eb7ef662f__aws__local
question: 'Explain: AI Agents in LangGraph - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 412
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:42-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to prototype an autonomous customer‑support agent that could understand intent, retrieve knowledge from a private database, and generate natural responses—all while staying within a $5 k/month budget on AWS.

**Action (Design)**  
I chose **LangGraph** as the orchestration layer because it lets me compose LLM calls into a graph of reusable nodes.  
* **LLM node** – OpenAI GPT‑4 via **Amazon Bedrock** for cost control and compliance.  
* **Retrieval node** – **Amazon QLDB + ElasticSearch** for immutable knowledge storage and fast relevance scoring (latency < 200 ms).  
* **Decision node** – A lightweight **Lambda** that evaluates confidence thresholds and routes to fallback or escalation flows.  
The graph is deployed on **AWS Fargate** (auto‑scales from 1–50 tasks) behind an **Application Load Balancer** with TLS termination, ensuring high availability (>99.9 %) and zero downtime during rollouts.

**Result**  
Within two weeks the agent handled 7,500 tickets, reducing average handling time by **42 %** (from 15 min to 8.6 min) and increasing first‑contact resolution from 68 % to 84 %. Monthly spend stayed at $4,200, meeting the budget target.

**Reflection (Bar‑raiser focus)**  
I took full ownership of the end‑to‑end pipeline, dove deep into latency logs to spot a 30 ms bottleneck in retrieval, and iterated on the index schema—learning that small cache layers can cut costs by >10 %. The experience reinforced my bias for action: prototype quickly, measure rigorously, then scale responsibly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
