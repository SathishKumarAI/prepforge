---
qid: ing_b528952cd4__aws__local
question: 'Explain: ASR + diarization — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 541
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:14:02-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to build a *Meeting Assistant* that could transcribe real‑time meetings and tag speakers so the minutes could be auto‑generated for remote teams. The goal was to reduce manual note‑taking time by **70 %** while keeping transcription latency under 3 seconds per minute.

**Approach (Technical Design)**  
1. **ASR** – I leveraged **Amazon Transcribe Medical** (custom vocabularies) in a *serverless* pipeline: audio streamed from Amazon Chime to an S3 bucket, then invoked by AWS Lambda for batch transcription.  
2. **Speaker Diarization** – Built on top of the same Transcribe job using its built‑in diarization feature; results were post‑processed with a lightweight Python script in Lambda that merges overlapping intervals and tags speakers via a simple *speaker ID → name* lookup stored in DynamoDB.  
3. **Scalability & Availability** – The entire flow runs on **AWS Step Functions**, enabling parallel processing of multiple meeting streams, auto‑scaling Lambda concurrency (up to 10 000 invocations) and guaranteeing **99.9 %** availability.  
4. **Cost & Trade‑offs** – By batching audio into 1‑minute segments we reduced Transcribe usage by ~30 % versus real‑time streaming, cutting monthly spend from $12k to $8k while maintaining sub‑3‑second latency.

**Result (Data‑driven Impact)**  
- *Accuracy*: 92.4 % word‑error rate vs baseline 98.1 %.  
- *Time Saved*: Users reported a **73 %** reduction in note‑taking effort; overall team productivity rose by 15 % (measured via sprint velocity).  
- *Adoption*: Within two months, the tool was used in 120+ meetings across three continents.

**Reflection & Learning**  
I learned that *Customer Obsession* drives us to iterate on user pain points—by integrating direct feedback loops into Step Functions we could fine‑tune speaker models. The project also taught me to **Dive Deep**: profiling Lambda memory and CPU revealed a 20 % cost saving by shifting to a 256 MiB instance.

> *Bar‑raiser cues*: Ownership of the entire pipeline, depth in AWS service selection, quantified ROI, and continuous learning from user data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
