---
qid: ing_7a41202b58__aws__local
question: 'Explain: Failure modes & mitigations — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 592
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:01:45-05:00'
sources: []
---

**Scenario – Building a “Meeting‑Assistant” that auto‑summarizes and schedules follow‑ups**

| **Behavior** | **What I did (STAR)** |
|--------------|------------------------|
| *Situation* | 10 % of our internal teams complained that AI‑generated minutes were inaccurate, causing re‑opens of tickets. |
| *Task* | Reduce “false‑positive” summaries and missed action items by 50 %. |
| *Action* | 1️⃣ **Dive Deep** into logs: discovered that the model mis‑identified speaker turns during noisy rooms (≈35 % error). 2️⃣ Added a **noise‑filtering pre‑processor** using Amazon Transcribe Medical + SageMaker for diarization, retrained on 200 k labeled utterances. 3️⃣ Implemented an **audit trail** in DynamoDB to flag low‑confidence passages; sent alerts via SNS if confidence <0.7. 4️⃣ Introduced a **human‑in‑the‑loop (HITL)** step for flagged sections, automatically re‑run with higher‑resource inference on a spot EC2 cluster. |
| *Result* | Accuracy improved from 68 % to 92 %, ticket reopen rate dropped 52 %. The system now processes 3× the volume while keeping cost < $0.12 per minute (spot + autoscaling). |

**Design & AWS services**

- **Amazon Transcribe** → real‑time audio → text.  
- **SageMaker Endpoint** (GPU) for speaker diarization and summarization; auto‑scales via SageMaker Pipelines.  
- **DynamoDB + Lambda** for audit logging and confidence checks.  
- **SNS / EventBridge** to surface alerts.  
- **EC2 Spot Instances** for cost‑efficient HITL re‑runs.

**Trade‑offs**

| Trade‑off | Reason |
|-----------|--------|
| More compute (GPU) vs latency | Needed < 3 s per minute; GPU keeps inference fast. |
| Spot instances vs reliability | Acceptable risk; mitigated by fallback on On-Demand if spot eviction. |
| Adding HITL vs 100 % automation | Reduces error rate, aligns with *Customer Obsession* and *Ownership*. |

**Bar‑raiser focus**

- **Ownership:** I owned the full loop from data to deployment.  
- **Dive Deep:** Root cause analysis of noise‑related errors.  
- **Quantified Impact:** 52 % drop in ticket reopen rate.  
- **Learning from Failure:** Each failed summary became a training sample, turning failures into improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
