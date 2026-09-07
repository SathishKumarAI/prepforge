---
qid: ing_715b1fc9f8__aws__local
question: 'Build a Voice Activity Detector from scratch: detect where speech is present
  in an audio stream. How do you approach it, and how do you make it robust for phone-quality
  Indian-language audio?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 431
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:48-05:00'
sources: []
---

**Situation & Task**  
While leading a voice‑assist project for an Indian telecom partner, we needed a VAD that could reliably flag speech in noisy phone calls (≈ 8 kHz bandwidth, 16 bit PCM). The goal was to drop 70 % of silent frames to cut downstream compute by 30 % without hurting ASR accuracy.

**Approach & Design**  
1. **Feature extraction** – compute short‑term energy and zero‑crossing rate every 10 ms (FFT via Amazon Kinesis Data Analytics).  
2. **Model** – train a lightweight CNN on MFCCs + spectral flux, using AWS SageMaker for hyper‑parameter tuning.  
3. **Deployment** – containerize the model in ECS Fargate, expose via API Gateway; use Lambda to stream audio from S3 and invoke inference.  
4. **Robustness** – augment training with simulated phone noise (speex echo, 8 kHz band‑limiting) and real call logs; implement a two‑stage decision: energy threshold → CNN confidence > 0.8.

**Result**  
- False‑negative rate dropped from 12 % to 2 %, false‑positive < 3 %.  
- 32 % reduction in downstream ASR compute, saving ~$4k/month on EC2 Spot instances.  

**Leadership Principles**  
- **Customer Obsession** – tuned for Indian dialects & real call noise.  
- **Ownership/Dive Deep** – iterated over feature sets, benchmarked against baseline GMM VAD, documented trade‑offs (latency vs accuracy).  

**Bar‑raiser takeaway**  
Showed ownership by driving end‑to‑end pipeline, deep dive into signal artifacts, quantified impact on cost and latency, and learned from initial false‑positive spikes to refine data augmentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
