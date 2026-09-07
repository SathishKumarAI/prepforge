---
qid: ing_7c0e6fee66__aws__local
question: What is an ontology in the Palantir sense, and why put LLM agents on top
  of one instead of on raw tables and documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 477
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:52-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
When Palantir migrated its “Insight” platform from ad‑hoc SQL queries to an AI‑driven recommendation engine, the team faced a 30 % slowdown in query latency and a 25 % increase in data‑entry errors. I was tasked with designing a new knowledge layer that would let LLM agents answer complex business questions without pulling raw tables or documents each time.

**Action (Dive Deep / Bias for Action)**  
I introduced a **domain ontology**—a graph of entities, attributes, and relationships curated by subject‑matter experts. Using Amazon Neptune for the graph store, we exposed it via AWS Glue Data Catalog and queried it with PartiQL over Athena. The LLM agents were wrapped in an AWS Lambda layer that first translates user prompts into SPARQL against the ontology, then feeds the distilled facts to a Bedrock‑based Llama‑3 model hosted on SageMaker.  
*Why not raw tables?*  
- **Semantic consistency:** the ontology normalizes synonyms and disambiguates entities (e.g., “client” vs “customer”).  
- **Reduced data volume:** only 12 % of raw records are needed for inference, cutting Lambda memory usage by 40 %.  
- **Auditability:** every inference path is traceable via the graph, satisfying compliance requirements.

**Result (Deliver Results)**  
Latency dropped from 1.8 s to 0.4 s per request; error rate fell from 18 % to 3 %. The new system processed 2× more queries during peak hours while cutting compute costs by 27 %.  

**Bar‑raiser Takeaway**  
I demonstrated full ownership (from concept to deployment), deep technical dive into graph vs. relational trade‑offs, and quantified impact. I also documented a failure mode—mis‑aligned ontology terms—which led us to implement an automated drift detection pipeline using CloudWatch metrics, turning a potential outage into a continuous learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
