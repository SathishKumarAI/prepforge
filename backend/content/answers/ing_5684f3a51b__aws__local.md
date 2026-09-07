---
qid: ing_5684f3a51b__aws__local
question: 'Explain: Q61: Explain the tradeoffs between different embedding models
  for RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 471
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:46-05:00'
sources: []
---

**Situation & Task**  
I led a team that had to build a Retrieval‑Augmented Generation (RAG) pipeline for an enterprise search product. The core decision was which embedding model to use: a small, on‑premise transformer versus a large, cloud‑based LLM like **OpenAI’s Ada** or **Amazon Bedrock**.  

**Action & Design**  
I scoped the problem with *Customer Obsession* and *Ownership*: we needed 99.9 % recall for ~10M documents while keeping inference latency <200 ms per query. I benchmarked three models—(1) a distilled BERT (≈300 k params), (2) OpenAI Ada (≈350 M params, ~0.5 $/1000 tokens), and (3) Amazon Bedrock’s embedding endpoint (cost‑effective at ~$0.05/embedding).  

For scalability I chose **SageMaker Neo** to compile the distilled BERT for EC2 g4dn.xlarge instances; for the cloud models I leveraged **Bedrock** with **Lambda@Edge** for low‑latency routing and **DynamoDB** for vector index storage (via PartiQL for similarity search).  

**Result**  
- Distilled BERT: 92 % recall, 150 ms latency, $0.01/query cost.  
- Ada/Bedrock: 98 % recall, 210 ms latency, $0.07/query.  
We deployed the distilled model, achieving a 30 % cost reduction and meeting SLA targets, while retaining a “fallback” Bedrock endpoint for edge cases (e.g., high‑complexity queries).  

**Learnings & Bar‑Raiser Signals**  
I demonstrated *Dive Deep* by quantifying latency vs. recall trade‑offs, *Bias for Action* through rapid prototyping on SageMaker, and *Deliver Results* with measurable cost savings. I also documented a post‑mortem on the Bedrock latency spike, turning it into a process improvement for future model rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
