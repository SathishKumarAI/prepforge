---
qid: ing_f503d0fea8__star__local
question: How do you get reliable structured output (JSON) from a model, and what
  happens when it fails anyway?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 302
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:29-05:00'
sources: []
---

**Situation:**  
During the rollout of our AI-powered customer support bot at Acme Corp, we noticed that the model’s responses were often returning unstructured text instead of the JSON schema our front‑end required for routing and analytics.

**Task:**  
I had to design a robust pipeline that guaranteed well‑formed JSON output from the LLM while minimizing latency and handling edge cases where the model still produced garbage.

**Action:**  
First, I wrapped the prompt with a clear “Please respond in JSON only” instruction and added an example schema. Then I introduced a post‑processing layer using `jsonschema` to validate responses; invalid outputs triggered a retry with a shorter temperature setting and a “fallback” system message. For the few rare failures that persisted, I routed the raw text through a secondary rule‑based parser that extracted key fields before flagging the request for human review. I also set up real‑time metrics in Grafana to monitor success rates per endpoint.

**Result:**  
Within two weeks we achieved a 97 % valid JSON rate, cutting support ticket volume by 18 %. The fallback system reduced manual triage by 40 %, and we learned that combining prompt engineering with schema validation is essential for reliable structured output from LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
