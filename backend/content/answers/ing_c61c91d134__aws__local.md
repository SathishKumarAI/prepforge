---
qid: ing_c61c91d134__aws__local
question: 'Explain: Title: Retrieval-Augmented Generation for Knowledge-Intensive
  NLP Tasks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 498
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:50-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to improve the accuracy of our customer‑support chatbot for a global retail brand. The baseline model answered 68 % of queries correctly and lagged on product‑specific questions because it had no live knowledge base.

**Action**  
I led a small team in building a **Retrieval‑Augmented Generation (RAG)** pipeline that combined an open‑domain transformer with a real‑time document retriever.  
* **Requirements** – 1 M active users, < 2 s latency, 99.9 % availability.  
* **Design** – Index product manuals in Amazon OpenSearch Service; use its “hybrid search” to surface top‑k passages. Pass those with the user query to a fine‑tuned GPT‑4 model hosted on Amazon Bedrock.  
* **AWS services** – OpenSearch (scalable, pay‑as‑you‑go), Bedrock (managed inference), Lambda for orchestration, CloudWatch for metrics.  
* **Scalability & cost** – Auto‑scaling of OpenSearch nodes keeps memory usage < 30 % under peak load; Bedrock’s request‑based pricing saved 35 % vs on‑prem GPU clusters.

**Result**  
The RAG system lifted correct response rate to **87 %** (a 29 pp improvement) and cut average resolution time from 4.8 s to 1.9 s, driving a 12 % increase in NPS.  

---

### Leadership Principles Anchored
* **Customer Obsession** – focused on real user pain points and measurable satisfaction gains.  
* **Ownership** – took full responsibility for architecture decisions, cost modeling, and cross‑team coordination.

### What a Bar‑raiser Looks For
* **Depth (Dive Deep)** – detailed trade‑offs between OpenSearch vs DynamoDB, Bedrock vs self‑hosted inference.  
* **Quantified Impact** – concrete metrics (accuracy %, latency, NPS).  
* **Learning from Failure** – initial attempts with pure LLMs failed due to hallucinations; pivoting to RAG mitigated that risk and proved the hypothesis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
