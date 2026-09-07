---
qid: ing_e8106175c5__aws__local
question: 'Explain: Clarifying questions & assumptions — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 480
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:10-05:00'
sources: []
---

**Situation (S)**  
At my previous firm we launched an “Enterprise RAG Assistant” – a Retrieval‑Augmented Generation chatbot that pulls policy docs, ticket histories and internal knowledge bases to answer employee queries in real time.

**Task (T)**  
I was tasked with clarifying the business assumptions and user expectations before committing to architecture. The goal: deliver a system that could scale to 10 k concurrent users, respond within 1 s, and stay under $0.05 per query.

**Action (A)**  

| Clarifying Question | Assumption Tested | Technical Decision |
|---------------------|-------------------|--------------------|
| What volume of queries during peak? | 5 k QPS | Use **Amazon Kinesis Data Streams** for ingestion, auto‑scaling to 10 k QPS |
| How fresh must the knowledge base be? | Updates every 30 min | Store PDFs/Docs in **S3** + **Lambda@Edge** to refresh a **DynamoDB** cache every 15 min |
| Which LLM and cost per token? | OpenAI GPT‑4, $0.03/1k tokens | Use **Amazon Bedrock** for cheaper inference; batch requests via **Step Functions** |
| Do we need multi‑tenant isolation? | Yes | Separate **S3 prefixes** + IAM policies per tenant |

I mapped the assumptions to **Ownership** (own the data flow) and **Dive Deep** (validate each metric). I built a proof‑of‑concept that handled 7 k QPS with <1.2 s latency, costing $0.04/query – 20% below target.

**Result (R)**  
The production launch served 12 k concurrent users with a 99.9% SLA and saved the company ~15% on inference spend. Post‑launch analysis highlighted that real‑time cache invalidation was over‑provisioned; we reduced Lambda invocations by 30%, further cutting costs.

**Bar‑raiser notes** – I demonstrated ownership, validated every assumption with data, quantified impact, and learned to trim unnecessary refreshes after failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
