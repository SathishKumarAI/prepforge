---
qid: ing_a47f00df3b__aws__local
question: 'Explain: A user reports a bad answer. Walk me through how you debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 429
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:21-05:00'
sources: []
---

**Situation & Task**  
A customer flagged that the LLM returned an incorrect legal recommendation for a contract clause. The SLA promised < 2 s latency and 99.9 % accuracy on policy‑compliant queries. I owned the incident, had to restore trust, and improve resilience.

**Action – Dive Deep + Ownership**  

1. **Collect telemetry**  
   *Pull CloudWatch logs* for the request ID (latency, token count).  
   *Inspect DynamoDB audit table* to confirm input preprocessing was correct.  
2. **Reproduce locally**  
   Use the same prompt and model checkpoint in a SageMaker endpoint; capture the same bad answer.  
3. **Model & data analysis**  
   - Run *OpenTelemetry* tracing on the inference pipeline (Tokenizer → Embedding → Decoder).  
   - Spot that the tokenization step dropped a stop‑word, altering the semantic vector.  
4. **Fix & test**  
   - Update the tokenizer config (`max_length=512`, `truncation=True`).  
   - Retrain the fine‑tuned checkpoint on a curated “legal‑clauses” dataset (≈ 5k examples).  
5. **Deploy & monitor**  
   Roll out via *Blue/Green* SageMaker deployment; enable *Feature Store* for real‑time validation.  
6. **Post‑mortem**  
   Document root cause, mitigation, and add a unit test that asserts no stop‑word removal on legal prompts.

**Result**  
- Accuracy on legal queries improved from 88 % to 99.5 %.  
- Latency stayed under 1.8 s (unchanged).  
- Customer satisfaction score rose by 12 points in the next pulse survey.  

*Bar‑raiser focus*: ownership of full lifecycle, deep technical dive, measurable impact, and learning loop (adding automated tests to catch similar tokenization regressions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
