---
qid: ing_52dd877c3b__aws__local
question: 'Explain: Aug. 20, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 439
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:09-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Science team at Amazon’s Alexa, we were tasked with improving the *fallback* rate for voice‑to‑text transcription. The current model was 3 % above our SLA of 2.5 %. I volunteered to investigate why and propose a solution that could be deployed in production without breaking existing pipelines.

**Action – Technical Design**  
1. **Dive Deep into Data** – I ran a stratified analysis on the last 12 months of utterances, discovering that ~18 % were from “noisy” environments (background music, HVAC).  
2. **Model Architecture** – Built a two‑stage pipeline:  
   *Stage 1*: Lightweight CNN for noise detection (AWS SageMaker Edge).  
   *Stage 2*: Conditional fine‑tuned Wav2Vec 2.0 model that receives a “clean” flag and skips noisy utterances to the fallback ASR.  
3. **Infrastructure** – Deployed both models on **Amazon ECS Fargate** with autoscaling based on CPU usage, ensuring <99.9 % availability. Cost was capped at $1.2 k/month vs. the previous $4 k.

**Result**  
- Reduced fallback rate from 3 % to **1.8 %** (≈40 % relative improvement).  
- Cut downstream transcription costs by **$600 k annually** due to fewer expensive GPU inferences.  
- Earned a “Customer Obsession” commendation for keeping end‑users’ voice experiences seamless.

**Reflection & Learning**  
I learned that *bias for action* can be balanced with rigorous data validation—skipping noisy inputs saved us both money and user frustration, but required careful monitoring to avoid false positives. The bar‑raiser will note my ownership of the entire lifecycle (from analysis to deployment), my deep dive into failure modes, and the measurable impact on our SLA and cost metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
