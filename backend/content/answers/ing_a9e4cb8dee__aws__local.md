---
qid: ing_a9e4cb8dee__aws__local
question: 'Explain: Creating Your First QA Pipeline with Retrieval-Augmentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 418
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:23-05:00'
sources: []
---

**Situation & Task**  
At my previous firm we had a knowledge‑base chatbot that answered customer queries using static FAQ data. When support tickets grew 3× in Q1, the bot’s accuracy dropped from 78 % to 52 %. I was tasked with building a **retrieval‑augmented QA pipeline** that could surface relevant documents and generate precise answers within 500 ms.

**Action (Technical)**  
1. **Data ingestion & vectorization** – Ingested all FAQ articles into an S3 bucket, ran them through SageMaker Ground Truth to label intents, then used Amazon Bedrock’s *Claude* model for sentence‑level embeddings stored in a Pinecone index (low‑latency vector store).  
2. **Retriever layer** – API Gateway → Lambda → Pinecone query → top‑k passages.  
3. **Generator layer** – Passed the context to Bedrock *Gemini*, fine‑tuned on 10 K real ticket–answer pairs, and streamed results back via WebSocket for instant feedback.  
4. **Observability & A/B testing** – Integrated CloudWatch metrics (latency, token usage) and a custom Lambda that logged user satisfaction scores to DynamoDB.

**Result**  
- Accuracy rose from 52 % to **88 %** within two weeks of rollout.  
- Average response latency dropped from 1.2 s to **0.45 s** (95th percentile).  
- Cost per query fell by 35 % due to efficient vector pruning and on‑demand SageMaker endpoints.

**Learnings & Bar‑raiser focus**  
I owned the end‑to‑end stack, dove deep into vector search trade‑offs, quantified impact with clear metrics, and iterated quickly after a failed first model (which over‑generated). This demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**—key Amazon principles for any ML‑driven product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
