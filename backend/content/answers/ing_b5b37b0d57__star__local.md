---
qid: ing_b5b37b0d57__star__local
question: When would you distill an LLM into a smaller model, and what does that pipeline
  look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 328
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:34:48-05:00'
sources: []
---

**Situation:**  
At my previous role at FinTechCo we built a conversational AI to triage customer support tickets. The prototype LLM (13B parameters) performed great in accuracy—95% correct intent classification—but our cloud infra cost $250 per hour and latency was 1.2 s, which exceeded the SLA of 800 ms for live chat.

**Task:**  
I needed to reduce inference cost by 70% while keeping <5% drop in F1 score, so we could deploy on a serverless edge platform and meet the SLA.

**Action:**  
1. Collected 500k fine‑tuned examples from production logs.  
2. Ran *distilBERT* style knowledge distillation: trained a 4B teacher to predict soft labels for a 0.5B student, using temperature=3 and mix‑up on embeddings.  
3. Added quantization-aware training (int8) and performed pruning of low‑importance attention heads.  
4. Benchmarked with A/B tests in a staging environment; iterated until the student’s F1 was 94.2%.  
5. Deployed via AWS Lambda@Edge, measuring latency at 650 ms and cost drop to $70 per hour.

**Result:**  
We cut inference cost by 72% and met SLA, freeing budget for new features. I learned that careful temperature tuning and head pruning can preserve most knowledge while drastically shrinking model size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
