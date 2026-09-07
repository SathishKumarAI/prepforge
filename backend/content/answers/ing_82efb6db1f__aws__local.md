---
qid: ing_82efb6db1f__aws__local
question: 'Explain: Few-Shot and In-Context Learning (ICL) — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 471
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:55-05:00'
sources: []
---

**Situation & Task**  
I was leading a proof‑of‑concept for an internal recommendation engine that had to adapt to new product categories without retraining the model from scratch. The requirement: support *few‑shot* learning (≤5 examples per category) and *in‑context learning* (ICL) so the system could infer intent on the fly.

**Action – Technical Design**  
1. **Model** – GPT‑4 via Amazon Bedrock, chosen for its built‑in few‑shot/ICL capability.  
2. **Prompt Engineering** – Structured prompts with a short “context” section (the 5 examples) and a clear question template.  
3. **Data Pipeline** – EventBridge triggers on new category creation → Lambda formats the prompt and calls Bedrock; results are cached in DynamoDB for 24 h to avoid repeated API calls.  
4. **Scalability & Availability** – Bedrock is region‑replicated; Lambda auto‑scales; DynamoDB provides single‑digit millisecond reads/writes with multi‑AZ support.  
5. **Cost Control** – Spot Instances for preprocessing + Bedrock’s pay‑per‑token model; caching cuts API calls by ~70 %.  

**Result (Metrics)**  
- Accuracy of intent extraction jumped from 68 % to **92 %** after ICL implementation.  
- Response latency decreased from 1.2 s to **0.4 s** due to caching.  
- Cost per inference dropped 60 %, enabling a 3× higher request volume.

**Reflection (Learning & Ownership)**  
I identified that prompt brittleness was the bottleneck, so I instituted an automated A/B test harness that logged token usage and accuracy per prompt variant. This continuous feedback loop allowed us to iterate quickly—an embodiment of *Bias for Action* and *Dive Deep*. The success was shared across teams, and we adopted this pattern for other ML use‑cases, reinforcing Amazon’s principle of *Customer Obsession* by delivering faster, more accurate recommendations to our internal users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
