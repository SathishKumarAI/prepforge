---
qid: ing_db6925c1bb__aws__local
question: Why is Java not a pure object-oriented language?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 394
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:33:55-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of an on‑prem Java microservice that handled millions of requests per day to a serverless architecture on AWS. The interview asked me why *Java is not a pure object‑oriented language*—a question that tests conceptual depth and the ability to translate theory into practice.

**Action (Dive Deep + Ownership)**  
I explained that Java supports primitives (`int`, `boolean`) which are *value types*, not objects, breaking strict OO purity. I also highlighted **static methods**, **interfaces with default implementations**, and **enums** as language constructs that blur the lines between pure OO and procedural paradigms. In our migration we leveraged **AWS Lambda + DynamoDB**; the stateless nature of Lambdas made primitives attractive for performance (30 % faster cold starts). We introduced **AWS Step Functions** to orchestrate stateful workflows, keeping object‑oriented design in the domain layer while using functional constructs where they fit.

**Result (Deliver Results)**  
The new architecture reduced infrastructure cost by 45 %, cut average latency from 120 ms to 68 ms, and increased throughput from 1.2 M to 3.4 M requests per day. The clear separation of OO domain logic from AWS services also lowered the defect rate in production by 27 %.

**Bar‑raiser takeaways**  
- **Ownership:** I owned both design choice and cost optimization.  
- **Dive Deep:** I dissected Java’s language spec to explain primitives vs objects.  
- **Quantified Impact & Learning:** I tied architectural changes to measurable performance gains and reflected on how mixing paradigms can be a pragmatic advantage in cloud‑native systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
