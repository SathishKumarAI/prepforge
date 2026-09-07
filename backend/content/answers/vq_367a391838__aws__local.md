---
qid: vq_367a391838__aws__local
question: What’s your opinion on protecting endangered species?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 445
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:48-05:00'
sources: []
---

**Customer Obsession + Ownership**

> **Situation:** While leading a conservation‑tech startup, we were asked by a national park authority to design a system that could monitor endangered species across 120 km² of rugged terrain. The park’s goal was to reduce poaching incidents by at least 30% within the first year.

> **Task:** Build an end‑to‑end monitoring solution that would deliver real‑time alerts, predictive analytics, and actionable insights for rangers—all while staying under a $1 M budget.

> **Action:**  
> *Designed a hybrid edge‑cloud architecture:*  
> • **Edge devices** (Raspberry Pi + thermal cameras) streamed data to **AWS IoT Greengrass**, enabling local inference with TensorFlow Lite and immediate alerts.  
> • **Data lake** on **Amazon S3** stored raw footage; **Glue** cataloged metadata.  
> • **Real‑time analytics** used **Kinesis Data Streams** + **Lambda** for anomaly detection, feeding a **Redshift** warehouse for long‑term trend analysis.  
> • Implemented an **AWS Cost Explorer** dashboard to cap monthly spend at $20k and auto‑scale down during low‑activity periods.  
> • Engaged rangers in bi‑weekly sprint reviews—ensuring the product remained *customer‑centric*.

> **Result:** Within 10 months, poaching incidents dropped from 48 per month to 29—a 39% reduction surpassing the target. System uptime was 99.9%, and we stayed 12% under budget. The solution scaled to an additional 80 km² with no architecture changes.

> **Learnings:**  
> *Dive Deep:* Regularly profiled Greengrass nodes; discovered a CPU bottleneck that, once resolved, cut inference latency by 35%.  
> *Bar‑raiser cue:* Demonstrated ownership by owning the full stack, quantified impact through clear metrics, and iterated based on ranger feedback—showing continuous learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
