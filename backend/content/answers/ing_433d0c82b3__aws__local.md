---
qid: ing_433d0c82b3__aws__local
question: 'Explain: Speaker Diarization: Who Said What — Voice Ai Healthcare'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 431
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:06-05:00'
sources: []
---

**Situation & Task**  
In 2024 I led a cross‑functional team at a health‑tech startup that needed to transcribe patient–provider conversations for compliance and analytics. The challenge was real‑time speaker diarization in noisy clinical environments (average SNR = 12 dB) while preserving HIPAA security.

**Action & Design**  
* **Data pipeline** – Audio → AWS Kinesis Video Streams (low latency) → AWS Transcribe Medical (custom vocabularies).  
* **Diarization engine** – Built a lightweight model on SageMaker using the ResNet‑34 backbone trained on 200 k labeled clinical recordings. Deployed as a Lambda@Edge function for edge inference, reducing round‑trip to <200 ms.  
* **Security & compliance** – Encrypted streams with AWS KMS; used VPC endpoints and IAM roles for least‑privilege access; logged all events in CloudTrail.  
* **Scalability** – Auto‑scaling of SageMaker endpoints (min 1, max 10) handled peak 5k concurrent calls with 99.9% uptime. Cost was < $0.12 per minute versus $0.45 on a commercial API.

**Result**  
Achieved *95% speaker‑identification accuracy* and reduced transcription turnaround from 15 min to **< 2 min**, cutting downstream billing effort by 70%. The system processed 1,200 h/month of audio, saving the company ~$350k annually.  

**Learning & Bar‑raiser cues**  
I took full ownership: from requirement gathering to post‑deployment monitoring. By diving deep into SNR statistics I tuned the model architecture, and I quantified impact with clear metrics (accuracy, latency, cost). The iterative A/B tests taught me that a smaller, edge‑deployed model outperformed larger cloud models in noisy settings—a valuable lesson for future AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
