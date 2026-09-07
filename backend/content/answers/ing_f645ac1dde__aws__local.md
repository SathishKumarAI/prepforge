---
qid: ing_f645ac1dde__aws__local
question: 'Explain: Sources of Leakage — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 408
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:49-05:00'
sources: []
---

**Situation / Task**  
While designing a customer‑facing chatbot for an AWS marketplace app, I discovered that the language model was inadvertently exposing internal policy data (e.g., training timestamps and token usage logs). The leakage risk could lead to regulatory non‑compliance and brand damage.

**Action**  
I led a cross‑functional “Leakage Mitigation” squad.  
1. **Audit & Classification** – used CloudTrail + Amazon GuardDuty to catalog all data flows; identified three main leakage vectors: (a) *prompt injection* via user inputs, (b) *model introspection* through API metadata, and (c) *post‑processing logs* stored in S3.  
2. **Engineering Controls** – built a Lambda‑based middleware that sanitizes prompts (regex + ML‑based intent filter), wrapped the LLM call with Amazon SageMaker Runtime to strip model provenance headers, and encrypted log buckets with KMS keys scoped per tenant.  
3. **Monitoring & Alerts** – deployed GuardDuty anomaly detection on token usage; set CloudWatch alarms for any >10% deviation from baseline.

**Result**  
Within 2 weeks, leakage incidents dropped from ~15 per day to zero (a 100 % reduction). The solution cost <$1k/month and added <0.5 s latency due to Lambda’s cold‑start optimization.  

**Reflection**  
Ownership drove me to own the entire data lifecycle; dive deep into the model’s internals revealed hidden metadata flows. I learned that even “black‑box” LLMs can leak via side channels, so continuous monitoring is essential.  

> **Leadership Principles:** Customer Obsession (protect user data), Ownership (end‑to‑end responsibility), Dive Deep (root cause analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
