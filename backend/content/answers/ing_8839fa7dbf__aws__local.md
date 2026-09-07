---
qid: ing_8839fa7dbf__aws__local
question: 'Explain: Handling Unknown Topics — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 410
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:19-05:00'
sources: []
---

**Situation & Task**  
While leading the new “Conversational AI” product at a mid‑size fintech, I was asked to build a system that could answer *any* customer query—even topics outside our training data—without degrading user experience.

**Action (Framework + Design)**  
1. **Customer Obsession / Ownership** – I mapped the worst‑case latency customers would tolerate (≤ 800 ms).  
2. **Dive Deep** – I chose a hybrid approach:  
   * **Primary** – Retrieval‑Augmented Generation (RAG) with Amazon Bedrock (Claude 3.5 Sonnet) + an Elasticsearch index of all public docs.  
   * **Fallback** – If confidence < 0.4, route to a human‑in‑the‑loop via Amazon Connect and Lex.  
3. **Bias for Action / Invent & Simplify** – Implemented a lightweight “unknown‑topic detector” using a simple LSTM on top of the query embeddings (AWS SageMaker).  
4. **Deliver Results** – Deployed as a serverless API (API Gateway + Lambda) behind an Application Load Balancer, auto‑scaling to 10 k QPS.

**Result**  
Within two weeks post‑launch:  
* 93 % of unknown queries were handled automatically with < 800 ms latency.  
* Human‑fallback rate dropped from 12 % to 4 %.  
* Cost per query fell by 18 % versus the baseline rule‑based system.

**Learning**  
The first failure (over‑reliance on a single LLM) taught me to add an orthogonal confidence estimator; now we iterate on that component every sprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
