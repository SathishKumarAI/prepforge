---
qid: ing_37f9a20775__aws__local
question: 'Explain: Beyond single-shot: agentic RAG and GraphRAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 509
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:07-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led the migration of a legacy customer‑support bot to an AI‑powered knowledge base that could answer complex queries in real time. The existing single‑shot retrieval‑augmented generation (RAG) model only fetched one document per request, leading to 30 % missed intents and a 15 % drop in CSAT.

**Action (A)**  
I architected an **Agentic RAG + GraphRAG** solution on AWS:

- *Agentic RAG*: A step‑wise retrieval loop using Amazon Bedrock for LLM inference, coupled with Amazon Kendra to pull top‑k documents and refine prompts iteratively.  
- *GraphRAG*: Stored knowledge as a property graph in Amazon Neptune; the agent traverses edges (e.g., “is part of”, “depends on”) to assemble multi‑document contexts.  
- *Orchestration*: AWS Step Functions coordinate the retrieval steps, caching intermediate embeddings in Amazon Elasticache for 99.9 % availability.  
- *Observability*: CloudWatch metrics feed into a Grafana dashboard; Lambda functions auto‑scale based on request volume.

**Result (R)**  
Within two months post‑deployment:  

| Metric | Before | After |
|--------|--------|-------|
| CSAT | 78 % | **92 %** (+14 pp) |
| Mean response time | 4.2 s | **1.8 s** (58 % faster) |
| Query coverage | 68 % | **94 %** (+26 pp) |

The system handled peak loads of 50k concurrent users with a cost‑per‑query reduction of 18 %.  

**Learning & Ownership**  
I owned the full incident response during rollout; when an edge case caused a graph cycle, I introduced a timeout guard and documented failure modes. This deep dive into failure patterns reinforced our “Bias for Action” culture and informed future feature flags.

---

*Leadership Principles Highlighted:* **Customer Obsession**, **Ownership**, **Dive Deep**  
*Bar‑raiser cues:* clear ownership, quantified impact, technical depth (AWS services & trade‑offs), learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
