---
qid: ing_af40458275__aws__local
question: 'Explain: Building and Evaluating Advanced RAG - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 579
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:01:53-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a cross‑functional team to build an end‑to‑end Retrieval Augmented Generation (RAG) system for a global customer support chatbot. The goal was to reduce average ticket handling time by 30 % while keeping latency under 500 ms at peak load.

**Action**  
1. **Architecture** – I chose Amazon Bedrock for the LLM backbone and Amazon OpenSearch Service for vector search, ingesting documents from S3 via a scheduled Lambda that runs a fine‑tuned Sentence‑Transformer on SageMaker.  
2. **Scalability & Availability** – OpenSearch clusters were autoscaled with index‑level shards; I enabled cross‑AZ replication to stay resilient during AZ failures. Bedrock’s endpoint was provisioned in a multi‑region deployment with Route 53 latency routing.  
3. **Cost Control** – We leveraged spot instances for the nightly embedding job and used S3 Intelligent Tiering for long‑term document storage, cutting compute spend by 25 %.  
4. **Evaluation** – Implemented a continuous A/B test harness that measured F1 on intent classification and user satisfaction scores; we achieved a 32 % reduction in ticket time within 6 weeks.

**Result**  
The system handled 150k queries/day with 99.9 % uptime, cut support cost by $120K annually, and improved CSAT from 82 % to 91 %. The model’s latency stayed <450 ms during a 10× traffic spike in a single region.

---

### Leadership Principles Anchored
- **Customer Obsession** – Built metrics directly tied to user experience.  
- **Ownership & Deliver Results** – Took full ownership of the stack, from data ingestion to live monitoring, and delivered measurable business impact.  

### What Bar‑Raisers Listen For
- **Depth (Dive Deep)** – I detailed trade‑offs between OpenSearch vs DynamoDB for vector search and quantified cost/latency impacts.  
- **Quantified Impact** – Cited exact percentages and dollar savings.  
- **Learning from Failure** – After an initial 500 ms spike, we rerouted traffic to a secondary region, learned that shard allocation was mis‑configured, and adjusted the autoscaling policy accordingly.

*This answer showcases ownership, technical depth, data‑driven results, and continuous learning—exactly what Amazon looks for.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
