---
qid: ing_d018c144cc__aws__local
question: 'Explain: Evaluation plan — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 482
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:33-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI team at a video‑sharing startup, we needed to roll out a **content‑moderation pipeline** that could flag hate speech and graphic violence in real time while keeping latency under 200 ms per frame. The goal was to reduce user complaints by 70 % within six months.

**Action – Technical Design & Evaluation Plan**  
1. **Data Ingestion** – *Amazon Kinesis Video Streams* buffers live video; *Lambda* extracts frames every 500 ms.  
2. **Model Serving** – *Amazon SageMaker Endpoint* hosts a YOLOv5‑based detector (custom fine‑tuned on 200K labeled clips).  
3. **Post‑Processing & Escalation** – *Step Functions* orchestrates:  
   - If confidence > 0.85 → auto‑blur via *AWS Elemental MediaConvert*.  
   - Else → route to human review queue in *Amazon SQS* for a 10 min SLA.  
4. **Monitoring & Feedback Loop** – *CloudWatch Metrics* (latency, false‑positive rate) feed into an automated retraining schedule on SageMaker.

The evaluation plan uses **A/B testing**: 30% traffic goes through the new pipeline; we track metrics—false positives, user report reduction, and processing latency. A/B results showed a *65 % drop in complaints* and *latency of 180 ms*, meeting our SLA.

**Result**  
Within 4 months, we hit the target: **70 % complaint reduction**, cost per moderation cycle fell by 40 %, and user engagement rose 12 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – focused on reducing user pain points.  
- **Ownership & Bias for Action** – drove rapid deployment and continuous improvement.  

Bar‑raiser cues: clear ownership, deep dive into model performance trade‑offs, quantified impact (70 % reduction), and learning loop from failure cases (false positives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
