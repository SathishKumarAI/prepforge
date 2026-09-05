---
qid: ing_a7d6da062b__star__local
question: 'Q25: How do you optimize LLM inference costs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 357
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:36-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had integrated an LLM to generate personalized investment reports for our premium users. The model was running on AWS SageMaker with a 16‑GB GPU instance, and by the end of Q2, inference costs were consuming 35% of our AI budget—unacceptable for our $3M runway.

**Task:**  
I needed to slash per‑inference cost by at least 50% while keeping latency under 300 ms and preserving answer quality (BLEU score >0.78).

**Action:**  
1. **Model Distillation:** Trained a smaller 6‑layer transformer on the same dataset, achieving 96% of the original accuracy with only 30% of parameters.  
2. **Dynamic Prompt Compression:** Implemented a two‑stage prompt: a lightweight pre‑processor that summarized user data into a 128‑token vector, then fed this to the distilled model.  
3. **Batching & Queueing:** Leveraged SageMaker’s batch transform with micro‑batch size of 8, reducing per‑instance GPU usage by 40%.  
4. **Cost‑aware Scaling:** Switched from on‑demand GPUs to Spot Instances, adding a fallback for latency spikes.

**Result:**  
Inference cost dropped from $0.12 to $0.05 per query—a 58% reduction—while response time improved to 220 ms and BLEU remained at 0.79. I learned that combining distillation with smart prompt engineering and infrastructure tuning can deliver both performance and budgetary wins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
