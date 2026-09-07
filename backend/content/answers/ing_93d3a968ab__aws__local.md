---
qid: ing_93d3a968ab__aws__local
question: 'Explain: The interview loop — Abridge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 512
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:05-05:00'
sources: []
---

**The Interview Loop – an AI‑driven “Abridge”**

*Leadership Principles:* **Ownership** + **Dive Deep**  

**S**ituation  
In 2023 I led a cross‑functional team to launch *Abridge*, a conversational AI that turns 1 h of meeting audio into a 30‑second executive summary. The goal was to cut decision‑making time by 70% for senior leaders.

**T**ask  
I owned the end‑to‑end pipeline: ingest, transcribe, summarize, and deliver the final text via an internal portal. We had to guarantee < 5 min turnaround on a 100 GB data set while keeping latency under 2 s per summary for live calls.

**A**ction  
1. **Architecture** – Deployed *Amazon Transcribe* for real‑time ASR, streamed transcripts into an *SQS* queue, and invoked *AWS Lambda* (Python + HuggingFace Transformers) to run a distilled BART model on *ECS Fargate*.  
2. **Scalability** – Autoscaled Lambdas with *Step Functions* orchestrating parallel batch jobs; used *Amazon S3 Intelligent‑Tiering* for storage cost control.  
3. **Reliability** – Implemented *CloudWatch* alarms for latency > 1.5 s, auto‑retry on failures, and a fallback rule that uses *AWS Comprehend* summarization if the primary model stalls.  
4. **Cost & Trade‑offs** – Chose 2× GPU instances (p3.2xlarge) only during peak hours; switched to CPU for off‑peak to cut costs by 35%.  

**R**esult  
- Achieved a 95% accuracy in key‑phrase extraction (measured against manual annotations).  
- Reduced average summary time from 1 h to **30 s**—a **97%** speedup.  
- Cut operational cost per summary to **$0.04**, below the $0.08 target.  

*Bar‑raiser note:* I demonstrated true ownership (from design to ops), deep dive into model latency vs. cost trade‑offs, and quantified impact. Learned that early integration of *Step Functions* reduced debugging time by 40%, a lesson we applied to future AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
