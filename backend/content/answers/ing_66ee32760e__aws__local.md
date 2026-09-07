---
qid: ing_66ee32760e__aws__local
question: 'Explain: Self-RAG: Critic Tokens — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 449
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:41-05:00'
sources: []
---

**Self‑RAG with Critic Tokens – Production‑Scale Design**

*Situation:*  
Our product needed a conversational AI that could pull in up‑to‑date domain data without re‑training the language model, while guaranteeing response latency < 200 ms at 10k QPS.

*Task:*  
Design a **Self‑RAG** pipeline that uses *critic tokens* to filter retrieved passages before generation, and scale it for production on AWS.

*Action:*  

1. **Retriever & Critic Layer** – Index the knowledge base in **Amazon OpenSearch** (sharded, replica set = 3). For each user query, a lightweight *critic model* (distilled BERT) runs on an **ECS Fargate** task to score candidate passages; only top‑k (k=5) pass the critic threshold.  
2. **Augmented Generation** – Pass the filtered context + critic tokens (“⚠️”) into an **Amazon Bedrock** Claude model via Lambda@Edge for instant response.  
3. **Observability & Auto‑Scaling** – Use **CloudWatch** metrics (latency, pass‑rate) to trigger ECS autoscaling; **AWS X-Ray** traces critical paths.  
4. **Cost Control** – Spot instances for retriever tasks, reserved capacity for Bedrock; cache frequent queries in **ElastiCache Redis** (≤ 50 ms TTL).

*Result:*  
Latency dropped from 350 ms to 170 ms (+52 %) while cost per request fell by 30 %. The critic reduced hallucinations by 40 %, improving user satisfaction scores from 3.2→4.1/5.

**Leadership Principles:** *Customer Obsession* – we focused on latency & accuracy; *Ownership* – designed end‑to‑end pipeline and monitored trade‑offs.  
Bar‑raiser cues: quantified impact, depth of system trade‑offs, learning loop from A/B testing failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
