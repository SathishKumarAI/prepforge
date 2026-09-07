---
qid: ing_7c83511df7__aws__local
question: How do reasoning models change prompting practice? What transfers and what
  becomes obsolete?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 413
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:41-05:00'
sources: []
---

**Situation / Task**  
When we migrated our internal recommendation engine from a rule‑based system to an LLM‑powered reasoning model (e.g., GPT‑4‑Turbo), the engineering team had to rethink how we craft prompts for production workloads that serve millions of users daily.

**Action**  
* **Ownership & Customer Obsession:** I led a cross‑functional squad to audit all existing prompt templates, identified 32% of them as brittle (they failed when new data appeared).  
* **Dive Deep & Bias for Action:** We introduced *prompt templates* stored in DynamoDB and fetched at runtime via API Gateway + Lambda. Each template includes context vectors that are updated by an ingestion pipeline on S3 using Glue jobs.  
* **Invent & Simplify:** Replaced ad‑hoc string concatenation with a declarative prompt language (JSON schema) that the LLM parses, reducing 70% of manual edits.  
* **Deliver Results:** After rollout, latency dropped from 1.2 s to 0.6 s per inference, and error rates fell by 45%. A/B tests showed a 12% lift in click‑through rate.

**Result**  
The new prompting practice is *model‑agnostic*: it works for any reasoning LLM (Claude, Gemini) with only minor syntax changes, while the old hand‑crafted prompts become obsolete because they cannot adapt to dynamic context. The system now scales automatically via Lambda’s on‑demand model and uses S3/Glue for cost‑efficient data versioning—$0.02 per 1 k tokens versus $0.04 in legacy scripts.

**Bar‑raiser takeaway**  
I owned the migration, dove into prompt engineering details, quantified impact with real metrics, and learned that decoupling prompts from code is essential for long‑term agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
