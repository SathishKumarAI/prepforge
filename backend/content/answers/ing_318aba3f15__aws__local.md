---
qid: ing_318aba3f15__aws__local
question: 'Explain: Sub-Agents and Parallelism — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 444
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:09-05:00'
sources: []
---

**Context & Challenge (S)**  
At my previous role we built a large‑scale recommendation engine that had to process > 5 M user interactions per hour while keeping latency < 200 ms for real‑time personalization. The monolithic inference pipeline stalled under peak load, causing 12 % drop in conversion.

**Action (T)**  
I introduced **Sub‑Agents**—lightweight, stateless micro‑tasks that each handled a distinct part of the scoring logic (embedding lookup, feature aggregation, model inference). I leveraged **AWS Step Functions** to orchestrate them and **Amazon SageMaker Runtime** for on‑demand inference. Parallelism was achieved by spawning a separate Lambda per sub‑agent; each Lambda ran in its own container with 1 vCPU/512 MB, automatically scaling up to 200 concurrent executions.

I also added a **retry & fallback policy** and instrumented CloudWatch metrics to capture per‑step latency. The design allowed the system to gracefully degrade by skipping optional sub‑agents if any failed, keeping overall response < 150 ms.

**Result (R)**  
- Conversion rate rebounded 18 % within two weeks.  
- Latency dropped from 280 ms to 115 ms on average.  
- Cost per inference fell 22 % because we avoided over‑provisioning a single GPU instance.  

**Leadership Principles Reflected**  
- **Customer Obsession**: Faster, more reliable recommendations directly improved user experience.  
- **Ownership & Dive Deep**: I dissected the bottleneck, re‑architected with fine‑grained services, and quantified impact.  

**Bar‑raiser Takeaway**  
Showcased ownership by turning a single failure point into a resilient, scalable pattern; demonstrated depth through AWS service choices and trade‑offs; delivered quantifiable business results; learned to iterate on fallback logic after initial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
