---
qid: ing_e61758820e__aws__local
question: 'Explain: Cascade or native speech-to-speech — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 466
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:24-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a project to replace a legacy IVR with a real‑time voice agent that could translate customer queries into multiple languages and answer them in the caller’s native tongue.

**Task (T)**  
I had to decide between building a **cascade pipeline** (Speech‑to‑Text → Translation → Text‑to‑Speech) or using a single **native speech‑to‑speech** model. The goal was 99.9 % uptime, <200 ms latency, and <$0.02 per minute cost.

**Action (A)**  
I performed a *dive deep* analysis:  
1. **Cascade**: AWS Transcribe (STT) → Amazon Translate → Amazon Polly (TTS). Pros – proven accuracy; cons – cumulative latency (~120 ms) and higher cost ($0.025/min).  
2. **Native**: Custom Whisper‑based model on SageMaker, served via a GPU‑powered Lambda@Edge to keep latency <80 ms. I containerized the model with Docker, deployed it in an Auto Scaling group behind an Application Load Balancer (ALB) for high availability.  

I chose the native approach because it cut cost by 30 % and improved latency by 40 %. We monitored with CloudWatch and set up a *bias for action* auto‑scale policy that spun up new instances when CPU >70 % during peak hours.

**Result (R)**  
After launch, customer satisfaction scores rose from **73 % to 92 %**, call handling time dropped by **35 %**, and monthly spend fell from $12k to $8.4k. I documented lessons learned in a post‑mortem: the importance of end‑to‑end latency testing and maintaining a single source of truth for model metrics.

**Leadership Principles Anchored**  
- **Customer Obsession** – delivered faster, cheaper service that customers loved.  
- **Ownership & Dive Deep** – owned the entire pipeline, from data prep to monitoring, and dug into every metric to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
