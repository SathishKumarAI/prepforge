---
qid: ing_16fca59e5c__aws__local
question: 'Explain: Scaling Considerations — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 453
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:37-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a customer‑facing chatbot from a single‑modal LLM to a *multimodal Retrieval‑Augmented Generation* (RAG) system that could answer text, image, and audio queries in real time. The goal was to reduce response latency to <200 ms while keeping cost per query <$0.01.

**Action**  
I applied **Customer Obsession** by mapping user journeys: 70 % of interactions required visual context (product images). I designed a two‑tier retrieval pipeline:

1. **Feature Indexing** – Vector embeddings from S3‑stored media were generated with SageMaker Ground Truth + Amazon Rekognition and stored in an *Amazon Kendra* index for semantic search, plus an *OpenSearch* cluster for fast nearest‑neighbor lookup (≈2 kB per item).  
2. **Fusion & Generation** – A Lambda@Edge function fetched top‑10 vectors, concatenated them with the user prompt, and invoked a **bedrock model** (Claude 3) via the Bedrock Runtime API.  

I used **AWS Step Functions** to orchestrate retries, fallback to text‑only RAG if image latency exceeded 120 ms, and to log metrics in CloudWatch.

**Result**  
After deployment:  
- Avg. response time dropped from 650 ms to **190 ms** (↓70 %).  
- Cost per query fell from $0.04 to **$0.008** (‑80 %).  
- Customer satisfaction scores rose by **12 points** on a 1–10 scale.

**Learnings & Bar‑raiser cues**  
I practiced *Dive Deep* by profiling the OpenSearch cluster; discovered that sharding each media type separately reduced query latency by 15 %. I also instituted A/B testing to validate trade‑offs between model fidelity and cost, ensuring continuous ownership of performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
