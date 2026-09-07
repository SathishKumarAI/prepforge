---
qid: ing_f692405b5a__aws__local
question: 'Explain: 2.5 Biomedical Knowledge Graphs and Language Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 473
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:27-05:00'
sources: []
---

**Situation / Task**  
At my previous role at a pharma‑tech startup, we were tasked with accelerating drug‑repurposing by building an internal *Biomedical Knowledge Graph (BKG)* that integrated literature, clinical trials, and omics data. The goal was to feed this graph into a language model so researchers could query “What drugs might treat X disease?” in natural language.

**Action**  
1. **Ownership & Dive Deep** – I scoped the data pipeline: crawled PubMed (≈ 30 M articles), extracted entities with SciSpacy, and mapped them to UMLS/DrugBank IDs.  
2. Built a scalable ETL using **AWS Glue** + **Amazon Athena** for schema‑on‑demand; stored triples in **Amazon Neptune** (graph DB) with partitioned TTL to keep the graph fresh.  
3. Trained a domain‑specific transformer (**BioBERT**) on 10 M abstracts, fine‑tuned it with *contrastive loss* against graph embeddings from Neptune.  
4. Exposed an API via **Amazon SageMaker Endpoint** and integrated with **AWS AppSync** so front‑end developers could query in GraphQL.  
5. Monitored latency (< 200 ms per inference) and cost (≈$0.12/1,000 queries) using CloudWatch dashboards.

**Result**  
- The combined BKG + LM reduced hypothesis‑generation time by **70%**, from 4 days to ~18 hrs per query.  
- Researchers identified 15 new drug–target pairs that entered pre‑clinical trials within the next quarter (a 3× increase over baseline).  
- Cost per inference stayed below $0.12, keeping the solution under a $1M annual budget.

**Learning & Bar‑raiser cues**  
I owned the end‑to‑end pipeline, dove deep into entity disambiguation, and quantified impact with real clinical metrics. The biggest failure was an initial over‑optimistic latency estimate; we remedied it by adding edge caching in **Amazon CloudFront**, which cut average response time from 350 ms to 190 ms—an example of learning from early missteps and iterating quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
