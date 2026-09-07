---
qid: ing_1f8d02dd15__aws__local
question: 'Explain: Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 526
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:31-05:00'
sources: []
---

**Situation (S)**  
While working on a voice‑assist product at my last company, the large BERT‑based intent model achieved >95 % accuracy but required ~200 M parameters, causing 3× latency and prohibitive inference cost on edge devices.

**Task (T)**  
Reduce inference latency to <50 ms per request while keeping ≥92 % accuracy, so we could ship a lightweight model to millions of IoT speakers without sacrificing user experience.

**Action (A)**  

1. **Knowledge Distillation** – I treated the large BERT as the *teacher* and trained a 6‑layer transformer *student* using the teacher’s soft logits plus hard labels (Hinton et al., 2015).  
2. **AWS Implementation**  
   - `SageMaker Processing` to generate teacher logits at scale.  
   - `SageMaker Training` with mixed‑precision and distributed data parallelism on Spot GPU instances, cutting training cost by ~70 %.  
3. **Evaluation & Iteration** – Employed a continuous integration pipeline that ran the student against a held‑out test set and compared latency on an AWS Nitro Enclave (edge emulation).  
4. **Deployment** – Packaged the distilled model in `AWS Lambda@Edge` for real‑time inference, achieving 35 ms latency with <0.5 % accuracy drop.

**Result (R)**  
The distillation pipeline reduced the model size from 200 M to 20 M parameters (10× compression), cut per‑inference cost by $0.0004, and lowered latency from 180 ms to 35 ms—meeting our product SLA for 95 % of traffic. The initiative was adopted company‑wide, saving ~$1.2 M annually.

**Leadership Principles Anchored**  
- **Customer Obsession** – Delivered a faster, cheaper experience that directly improved user satisfaction scores (↑12 %).  
- **Ownership & Dive Deep** – Took full responsibility for the end‑to‑end pipeline and dug into every layer of performance data to iterate quickly.  

Bar‑raiser cues: clear ownership, deep technical dive, quantified impact, and a lesson learned—future distillation runs now include an automated rollback if accuracy falls below 92 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
