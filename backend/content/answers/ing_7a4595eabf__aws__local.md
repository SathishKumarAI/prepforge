---
qid: ing_7a4595eabf__aws__local
question: 'Q52: When would you choose a reasoning model (o3, DeepSeek-R1) over a standard
  model (GPT-5.2)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 435
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:01:44-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of an internal chatbot from GPT‑5.2 to a custom reasoning model (DeepSeek‑R1) for our compliance‑heavy financial product. The goal was to reduce hallucinations in policy explanations while keeping latency under 200 ms.

**Action**  
I first scoped the *data‑driven requirement*: 95 % of user queries involved multi‑step logic (e.g., “What fee applies if I transfer >$10k and have a balance < $5k?”). GPT‑5.2 had an 18 % hallucination rate on such chains, whereas DeepSeek‑R1’s built‑in inference engine reduced it to ~4 %.  
I designed a hybrid architecture:  
- **Inference Layer** – Amazon SageMaker Neo for on‑edge model optimization (ensuring <200 ms).  
- **Reasoning Engine** – AWS Lambda orchestrates step‑by‑step calls to DeepSeek‑R1, with DynamoDB caching intermediate results.  
- **Monitoring** – CloudWatch metrics + X-Ray tracing to capture hallucination events and latency spikes.

I also introduced a *bias for action* sprint: 3 iterations of A/B tests on production traffic (10 % rollout each).  

**Result**  
Post‑migration, the bot’s hallucination rate dropped from 18 % to **4 %**, improving user satisfaction scores by 12 pts. Latency remained below 200 ms, and cost per inference fell by **22 %** due to Neo’s reduced GPU usage.

**Learning & Ownership**  
I documented a failure mode where the reasoning model mis‑parsed ambiguous user input; we added a fallback rule set that now triggers GPT‑5.2 only for those cases—an example of *ownership* and *dive deep*. The bar‑raiser will note my clear metrics, AWS service choices, and how I turned a compliance risk into a measurable product improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
