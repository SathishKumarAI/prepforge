---
qid: ing_5c3568e18b__aws__local
question: 'Explain: Data & context strategy — Ai Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 454
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:46-05:00'
sources: []
---

**Situation – Task**  
At my previous firm we launched an *AI‑powered code assistant* for our developers. The problem was that the model kept hallucinating code snippets because it had no awareness of the project’s domain data or internal libraries. I owned the end‑to‑end strategy to embed contextual knowledge so the assistant could deliver reliable, production‑ready code.

**Action – Design & Implementation**  
1. **Data ingestion pipeline** – Built a serverless ETL using AWS Glue and Amazon Kinesis that pulled source files, dependency graphs, and runtime metrics from our GitHub repo and S3 artifact store.  
2. **Context index** – Stored the parsed ASTs in an Amazon OpenSearch domain with fine‑grained access control; each document tagged with its module version.  
3. **Inference layer** – Deployed a SageMaker endpoint (TensorFlow‑Llama) that, on request, queries OpenSearch for relevant snippets and passes them to the LLM as prompt conditioning.  
4. **Feedback loop** – Integrated CloudWatch metrics and an “Approve/Reject” UI in VS Code; every decision auto‑updates a DynamoDB table which retrains the model nightly.

**Result – Impact**  
- 85 % reduction in hallucinated code errors (from 20 % to 3 %).  
- 30 % faster onboarding for new developers (average setup time dropped from 4 days to 2.8 days).  
- Cost per inference cut by 40 % thanks to spot instances and auto‑scaling.

**Leadership Principles**  
*Customer Obsession*: Delivered a tool that directly improves developer productivity.  
*Ownership & Dive Deep*: Took full responsibility for data pipelines, model training, and continuous improvement, digging into logs until every failure was understood.

**Bar‑raiser takeaway**  
I demonstrated ownership by owning the whole stack, depth through detailed design choices (Glue vs. Lambda, OpenSearch schema), quantified impact with real metrics, and learned from early hallucination failures to iterate rapidly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
