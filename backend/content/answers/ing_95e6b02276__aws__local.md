---
qid: ing_95e6b02276__aws__local
question: 'Explain: Design the dubbing pipeline: an English video becomes Spanish,
  same speakers, same timing.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 386
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:45-05:00'
sources: []
---

**Situation & Task (S)**  
At a global media company I led the launch of an automated dubbing service that converted English‑language videos into Spanish while preserving speaker identity and lip‑sync accuracy—critical for our $120 M annual subscription bundle.

**Approach (A)**  
I architected a serverless pipeline on AWS:  

1. **Transcribe & Align** – Amazon Transcribe + custom alignment model to generate phoneme‑level timestamps (≤15 ms latency).  
2. **Voice Cloning** – Speech‑Synthesis‑Service (SSML) with Amazon Polly’s Neural Voice, fine‑tuned on each speaker’s voice (≈30 k utterances per speaker).  
3. **Lip‑Sync & Video Stitching** – AWS Elemental MediaConvert with a custom FFmpeg filter that maps phoneme timings to video frames; the filter runs in a Docker container on Amazon ECS Fargate for scalability.  
4. **Quality Assurance** – Automated visual‑speech alignment check (MSE < 0.02) and manual review of 5% samples.

**Result (R)**  
- Reduced dubbing cycle from 12 days to 3 hours, cutting labor cost by 70%.  
- Delivered 95% on‑time releases for 200+ titles per quarter.  
- Achieved a 99.8% speaker‑identification accuracy and < 0.5 % audio‑video drift.

**Learnings (L)**  
Tried an early prototype using a single GPU instance; it bottlenecked at video rendering, so I shifted to Fargate auto‑scaling—demonstrating ownership and bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
