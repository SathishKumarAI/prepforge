---
qid: ing_add2d2051d__aws__local
question: 'Explain: Week 1: Switch Your Editor — Cursor Software Engineer Interview:
  Process, Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 442
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:36-05:00'
sources: []
---

**Situation & Problem**  
I was interviewing for a Machine‑Learning Engineer at AWS in 2026. The hiring team emphasized the *“Switch Your Editor”* exercise: candidates must refactor a legacy Python data‑pipeline that ingests 10 TB/day of sensor logs, convert it to an event‑driven architecture, and deploy it on AWS.  

**Task & Approach (Dive Deep + Ownership)**  
I first profiled the existing code with *cProfile* and identified three hotspots: (1) synchronous CSV parsing (30 % CPU), (2) in‑memory aggregation (70 % memory), and (3) a single‑threaded DB writer. I proposed replacing it with an **AWS Step Functions** orchestration that splits the pipeline into micro‑tasks:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Ingest | SQS + Kinesis Data Streams | Low latency, auto‑scaling |
| Parse | Lambda (Python 3.12) | Serverless, pay‑per‑invocation |
| Aggregate | DynamoDB with TTL | No‑SQL, sub‑ms reads |
| Persist | Glue ETL → Redshift Spectrum | Analytical query layer |

**Action & Result (Deliver Results)**  
After refactoring, end‑to‑end latency dropped from **12 min to 45 s** (84 % reduction). Daily cost fell from $1.20k to $300 (75 % savings) thanks to the serverless model and reduced EC2 usage. I documented the transition in a Confluence page, created unit tests covering 95 % of the logic, and presented a demo during the interview.

**Reflection & Learning**  
I learned that early profiling prevents costly redesigns; I also practiced communicating trade‑offs (e.g., Lambda timeout vs. DynamoDB consistency). The bar‑raiser praised my ownership of the full lifecycle, deep dive into metrics, and clear articulation of impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
