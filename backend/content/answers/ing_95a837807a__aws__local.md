---
qid: ing_95a837807a__aws__local
question: 'Explain: Computer-Use Agents (Vision-Based, GUI-Driven)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 424
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:12-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to build *Computer‑Use Agents* that interact with legacy desktop applications using computer vision and GUI automation, so we could ingest data from internal tools without costly APIs.

**Action (Technical)**  
1. **Requirements** – agents must locate UI elements reliably across resolutions, handle dynamic pop‑ups, and report errors in real time.  
2. **Design** – a containerized microservice exposing an HTTPS API. Each request spawns a headless *Selenium* session on an EC2 Spot instance with an NVIDIA GPU (for faster OCR).  
3. **AWS Services** – ECS Fargate for scaling, SQS for queueing jobs, DynamoDB for state persistence, and CloudWatch Logs/Alarms for observability.  
4. **Scalability & Cost** – Spot instances cut compute cost by 60%. Auto‑scaling keeps latency <2 s per job with 99.9% availability.  
5. **Trade‑offs** – Using headless Chrome adds overhead; we mitigated it with headless Chromium and GPU acceleration.

**Result (Quantified)**  
- Reduced manual data entry time by **70 %** (from 3 hrs to 0.9 hr per batch).  
- Cut infrastructure spend from $12k/month to $4k/month.  
- Achieved 99.7% success rate in element detection after two iterations of OCR tuning.

**Reflection (Amazon Lens)**  
*Customer Obsession*: Delivered a self‑service API that internal teams could call without engineering help.  
*Ownership & Dive Deep*: I led the end‑to‑end design, debugged flaky UI interactions, and iterated on cost models.  
*Learned from Failure*: Initial attempts failed on high‑resolution screens; we added resolution‑agnostic image preprocessing to solve it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
