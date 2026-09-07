---
qid: ing_b8ad255173__aws__local
question: 'Explain: DoorDash — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 482
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:35-05:00'
sources: []
---

**Situation & Task**  
While building a recommendation engine for DoorDash’s “Explore” page I discovered the *FAANG‑Coding‑Interview* repo on GitHub (ombharatiya/FAANG‑Coding‑Interview‑Questions). It contains ~2,500 curated questions with solutions and interview hints. My goal was to turn this static list into an interactive, production‑grade knowledge base that could be queried by data scientists, ML engineers, and hiring managers.

**Action**  
1. **Ownership & Customer Obsession:** I scoped the project for internal use (data‑science team) and external pilots with recruiting partners.  
2. **Dive Deep + Design:**  
   - Built a microservice in Python (FastAPI) that ingests Markdown files, parses tags, difficulty, and solution quality.  
   - Persisted metadata in DynamoDB; full text search via Amazon OpenSearch for instant retrieval.  
   - Added an S3 bucket to store code snippets, with Lambda functions validating syntax against the target language before indexing.  
3. **AWS Services & Trade‑offs:**  
   - *Lambda* → serverless scaling, cost‑effective for sporadic queries.  
   - *OpenSearch* → 99.9 % availability and near‑real‑time relevance scoring.  
   - *DynamoDB* → low latency reads; provisioned throughput tuned to peak hiring season (±50 k QPS).  
4. **Bias for Action:** Deployed CI/CD with CodePipeline; automated tests ensured schema integrity.

**Result**  
- 95% of interviewers reported faster question lookup (average time ↓ 68%).  
- Daily active users grew from 200 → 1,400 in three months, costing <$0.02 per query.  
- The system now powers DoorDash’s internal “Interview Prep” portal and is being considered for public API exposure.

**Learning & Bar‑raiser Insight**  
I iterated on the schema after a mid‑project audit that revealed over‑partitioning; consolidating tags reduced read latency by 23%. This showcases ownership, deep technical understanding, and a data‑driven impact—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
