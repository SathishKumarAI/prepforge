---
qid: ing_23e9b1c1a2__aws__local
question: What is tool-call hallucination, and how do you defend against it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 430
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:46-05:00'
sources: []
---

**Tool‑call hallucination** is when an LLM asks a downstream API (e.g., a search or database service) for information that the model *believes* to exist but actually doesn’t—leading to fabricated answers.  

---

### Situation  
While launching our AI‑powered FAQ bot for the e‑commerce portal, we observed that 18 % of user queries returned “unknown” responses because the LLM had queried an internal product catalog API with nonexistent SKU identifiers.

### Task  
Reduce hallucinated tool calls by ≥80 % while keeping latency under 300 ms and cost <$0.02 per query.

### Action  

| Step | Design & AWS Services |
|------|-----------------------|
| **Validate before calling** | Implement a *pre‑validation* layer that uses Amazon DynamoDB’s conditional writes to confirm SKU existence; if absent, the bot skips the API call. |
| **Fallback strategy** | If validation fails, use Amazon Bedrock with a fine‑tuned “Safe Prompt” that explicitly instructs the model to say “I don’t know.” |
| **Monitoring & alerting** | Deploy CloudWatch metrics on `ToolCallSuccessRate` and set an alarm for <95 % success. |
| **Cost control** | Use Lambda@Edge to short‑circuit calls in edge locations, reducing API gateway traffic by 30 %. |

### Result  
Hallucination rate dropped from 18 % to 2 %, user satisfaction (CSAT) rose from 82 % to 94 %, and per‑query cost fell by 25 %.  

---

**Leadership Principles:** *Ownership* – I owned the entire end‑to‑end flow; *Dive Deep* – I dissected logs to pinpoint false positives.  
Bar‑raisers listen for: quantifiable impact (CSAT, cost), depth of analysis (validation logic), and learning from failure (iterative fallback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
