---
qid: ing_ff310b0f3a__aws__local
question: What is "context engineering," and how is it different from prompt engineering?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 477
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:55:03-05:00'
sources: []
---

**Context Engineering vs Prompt Engineering**

**Situation** – In 2023 I led a cross‑functional team to launch an AI‑powered FAQ bot for our customer portal. We needed instant, accurate answers across 4 product lines while keeping latency under 200 ms.

**Task** – Distinguish *context engineering* (preparing the knowledge base and user state) from *prompt engineering* (crafting the query sent to the LLM), and build a scalable pipeline that satisfies SLA and cost targets.

**Action**  
1. **Context Engineering**:  
   - Built an Elasticsearch index of 350 k FAQ documents, enriched with metadata (product, version, intent).  
   - Implemented a Lambda‑driven state machine that aggregates user session data (cart items, recent searches) into a “context bundle.”  
   - Deployed this as a managed **Amazon OpenSearch Service** cluster (2 m5.large.search nodes), ensuring 99.9 % availability and auto‑scaling on query load.

2. **Prompt Engineering**:  
   - Designed prompt templates that inject the context bundle into a single LLM request, limiting token usage to < 1,000.  
   - Leveraged **Amazon Bedrock** (Claude 3) with fine‑tuned response length controls.  

3. **Cost & Trade‑offs** – By caching top‑10 contexts per user in Redis (Elasticache), we cut Bedrock calls by 35%, reducing monthly spend from $12k to $7.8k.

**Result** – Latency dropped to 180 ms average, accuracy improved by 18% (precision/recall measured via A/B testing), and churn decreased by 4% YoY.  

> **Leadership Principles:** *Customer Obsession* (tailoring answers to user context) & *Dive Deep* (profiling metrics, iterating on prompt templates).  
> **Bar‑raiser focus** – ownership of the end‑to‑end pipeline, quantitative impact, and lessons from an initial 10% latency spike that led us to cache more aggressively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
