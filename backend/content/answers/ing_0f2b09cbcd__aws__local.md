---
qid: ing_0f2b09cbcd__aws__local
question: 'Q: How would you estimate token count for cost planning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 507
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:52-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to launch a generative‑AI chatbot that could serve 1 M monthly active users while staying under $50k/month in inference costs. The key metric was the token count per user interaction, as this drives compute usage on SageMaker endpoints.

**Action**  
I *dive deep* into our logs and built a lightweight estimator:  

| Feature | Avg. prompt tokens | Avg. completion tokens |
|---------|--------------------|------------------------|
| FAQ reply | 25 | 60 |
| Complex query | 70 | 120 |

Using the OpenAI pricing model ($0.0004/1k tokens for GPT‑3.5), I calculated that a single “complex” interaction costs ≈$0.072. Scaling to 1 M users with an estimated 30% complex interactions gave ≈$2,160/month – well below budget.

I then *invent & simplify* by caching frequent prompts in DynamoDB and using Lambda for token‑count pre‑processing, reducing SageMaker invocations by 40%. I also set up CloudWatch Alarms to trigger a “re‑estimate” workflow if average tokens drift >10%.

**Result**  
The bot launched on schedule. Actual monthly cost was $1,980 (12% under target) and we logged <5 k token‑overruns in the first quarter, enabling proactive budget adjustments.

---

### What a bar‑raiser looks for

| Criterion | Why it matters |
|-----------|----------------|
| **Ownership** | I owned the end‑to‑end cost model and kept stakeholders informed. |
| **Dive Deep** | Built a granular token table from logs; validated against live traffic. |
| **Quantified Impact** | Delivered $2k/month savings, 40% reduction in compute usage. |
| **Learning from Failure** | Set up alarms to catch drift early, turning potential overruns into data for continuous improvement. |

By anchoring this solution to *Customer Obsession* (low‑cost, fast responses) and *Ownership*, I ensured a robust, scalable cost‑planning framework that aligns with Amazon’s high standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
