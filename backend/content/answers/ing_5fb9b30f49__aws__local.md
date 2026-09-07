---
qid: ing_5fb9b30f49__aws__local
question: 'Explain: Quantization choice — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 438
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:33-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional team for our AI‑powered recommendation engine, we hit a hard limit: the on‑device model exceeded the 50 MB memory budget and 200 ms latency SLA for the flagship mobile app.

**Task (T)**  
I was tasked with reducing the inference footprint *without* hurting top‑line conversion by more than 0.5 pp.

**Action (A)**  

1. **Dive Deep into Quantization** – Benchmarked four schemes (8‑bit uniform, 4‑bit per‑layer, mixed‑precision, and knowledge‑distillation‑augmented).  
2. **Customer Distillation Pipeline** – Built a lightweight distiller that *taught* the student model to mimic the teacher’s logits while incorporating user‑feedback logs as an additional loss term (capturing real‑world preferences).  
3. **AWS Implementation** –  
   - **SageMaker Training Jobs** with GPU instances for teacher training.  
   - **SageMaker Model Inference Pipelines** + **AppFabric** to deploy the quantized student via Lambda@Edge, guaranteeing <100 ms cold start.  
4. **Bias for Action & Ownership** – Rolled out a staged release: 10 % of traffic first, then full roll‑out after A/B test.

**Result (R)**  

- Model size dropped from 58 MB to **28 MB** (48 % reduction).  
- Latency improved from 210 ms to **95 ms**.  
- Conversion uplift: +1.2 pp, exceeding the target by 0.7 pp while staying within cost constraints (≈ $0.01 per inference).

*Learnings*: The distillation pipeline not only shaved bytes but also preserved customer‑centric signal, reinforcing that **Customer Obsession** and **Ownership** drive sustainable AI innovation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
