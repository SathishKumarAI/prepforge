---
qid: ing_7940daa926__aws__local
question: You want to switch model providers and your prompts break. Why, and how
  would you have made them portable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 404
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:14-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
When I migrated our recommendation engine from OpenAI to Anthropic, 42 % of the prompts stopped returning valid responses. Users complained about “missing product suggestions,” and our click‑through rate fell 18 %. My goal was to make prompts provider‑agnostic while keeping latency under 200 ms.

**Action (Dive Deep, Bias for Action)**  
1. **Abstracted Prompt Layer:** I wrapped each prompt in a JSON schema (`{ "task":"recommend", "context":{…} }`) and built a lightweight `PromptEngine` microservice (AWS Lambda + API Gateway).  
2. **Provider Adapter Pattern:** Implemented adapters for OpenAI, Anthropic, and Vertex AI. Each adapter normalizes token limits, temperature ranges, and response formats.  
3. **Feature Flagging & Canary Releases:** Deployed new adapters behind a feature flag in AWS AppConfig; rolled out to 5 % of traffic first, monitored error rates via CloudWatch metrics.  
4. **Unit‑and‑Integration Tests:** Added contract tests that validate the JSON schema against each provider’s response structure.

**Result (Deliver Results)**  
- Prompt failure rate dropped from 42 % to <1 %.  
- Click‑through rate rebounded by 16 % within two weeks.  
- Cost per recommendation stayed under $0.02, with a 12 % reduction in compute spend due to the more efficient adapter logic.

**Bar‑raiser takeaway:**  
I demonstrated end‑to‑end ownership, deep technical dive into prompt semantics, and quantifiable impact—while learning that abstracting business intent from provider specifics is critical for resilient AI ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
