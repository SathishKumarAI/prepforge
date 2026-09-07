---
qid: ing_16a212aecc__aws__local
question: 'Explain: Course Staff — CS294/194-196 Large Language Model Agents | CS
  194/294-196 Large Language Model Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 399
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:16:46-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* I was recruited by the CS 294/194‑196 “Large Language Model Agents” team to help scale our experimental LLM‑driven tutoring platform for 25k undergraduates.

*Task:* Build a production‑grade, zero‑downtime inference pipeline that could serve up to 200k concurrent requests per day while keeping latency < 150 ms and cost <$0.05/req.

*Action:*  
- **Dive Deep** into the existing Flask+PyTorch stack; identified bottlenecks in GPU memory allocation and request queuing.  
- Designed a stateless containerized micro‑service using **Amazon SageMaker Endpoint** with *multi‑model hosting*, enabling on‑demand scaling of 8 gPUs per instance.  
- Added an **API Gateway + Lambda edge cache** to pre‑process prompts, reducing payload size by 35 %.  
- Implemented a **step‑function orchestrator** that routes high‑priority queries to a dedicated *high‑throughput* tier and falls back to the cheaper tier during traffic spikes.  
- Configured **CloudWatch Alarms** for latency and error rates; auto‑scales with *Target Tracking*.

*Result:*  
- Latency dropped from 310 ms to 118 ms (62% improvement).  
- Cost per request fell from $0.12 to $0.041, saving ~$1.2M annually.  
- Served 215k requests/day during peak semesters with 99.97% availability.

*Learnings:* Early monitoring revealed a hidden GPU fragmentation issue; proactive profiling prevented a potential outage and taught us the value of continuous performance regression tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
