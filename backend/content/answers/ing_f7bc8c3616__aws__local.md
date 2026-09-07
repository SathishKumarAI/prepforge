---
qid: ing_f7bc8c3616__aws__local
question: Exact-match assertions are useless here. What do you actually assert on
  an LLM response?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 419
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:50-05:00'
sources: []
---

**Situation / Task**

In a production NLP service that powers a recommendation engine, I was asked to replace the brittle “exact‑match” unit tests for large language model (LLM) responses with something that actually guarantees correctness while remaining fast enough for nightly CI.

**Action**

I redesigned the test harness around *semantic assertions*:

1. **Define a minimal schema** – each response must contain a JSON payload with `product_id`, `confidence_score` and an optional `explanation`.  
2. **Use AWS Comprehend Custom Entities** to validate that extracted entities match the catalog (≈99 % F1 on 10k samples).  
3. **Leverage Amazon Bedrock’s built‑in prompt validation** to score relevance against a curated golden set; only responses with a similarity ≥0.82 pass.  
4. **Automate with AWS CodeBuild + Lambda**: the build step runs the validator, writes results to CloudWatch Logs, and fails if any assertion is violated.

This approach removes 97 % of false positives from the old exact‑match tests while cutting CI runtime by 45 %.

**Result**

- *Quantified impact*: production error rate dropped from 3.2 % to 0.4 %.  
- *Scalability*: validator scales horizontally via Lambda; we processed 50k responses in under 3 minutes.  
- *Cost*: savings of ~$1,200/month by eliminating unnecessary test runs and reducing downstream manual triage.

**Reflection**

I practiced **Ownership** (taking end‑to‑end responsibility for reliability) and **Dive Deep** (profiling failures to discover the real failure mode). The key learning: exact strings are a poor proxy for LLM intent; structured, measurable assertions provide both developer confidence and customer value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
