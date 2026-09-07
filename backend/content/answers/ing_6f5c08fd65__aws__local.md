---
qid: ing_6f5c08fd65__aws__local
question: 'Explain: Unit Cost per Task — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 511
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:03-05:00'
sources: []
---

**Situation / Task**  
When launching a new conversational AI product I was asked to benchmark the *unit cost per task* (e.g., intent classification, slot filling) so that we could compare against the legacy rule‑based engine and justify the spend on cloud resources.

**Action**  
1. **Define the metric** – Cost of running one inference cycle divided by the number of tasks it completes.  
2. **Instrumentation** – Instrumented each Lambda (or EC2 Spot instance) to emit per‑request timestamps and AWS X-Ray traces, capturing CPU time, memory, and network I/O.  
3. **Data collection** – Ran a synthetic load of 10 k requests/day for two weeks, storing metrics in Amazon Timestream.  
4. **Analysis & Optimization** – Identified that the NLU model was the bottleneck (GPU cost $0.25/instance‑hour). Switched to SageMaker Neo for on‑device inference and reduced GPU count by 60 %.  
5. **Result** – Unit cost fell from **$0.08 per task** to **$0.03 per task**, a 62 % reduction, while latency stayed <200 ms.

**Result**  
The new architecture saved $48k annually, enabling us to reallocate budget to user‑experience research. I documented the process in an internal whitepaper, which is now the baseline for all future AI cost‑efficiency reviews.

---

### Leadership Principles Anchored
- **Customer Obsession** – Lower costs directly improve pricing strategy for our end‑users.  
- **Ownership** – Took full responsibility from metric definition to deployment and monitoring.  

### Bar‑raiser Checklist
| What they listen for | How I demonstrated it |
|----------------------|------------------------|
| Ownership | Owned the entire cost‑analysis lifecycle. |
| Dive Deep | Collected granular telemetry, identified GPU bottleneck. |
| Quantified Impact | 62 % cost reduction → $48k/year saved. |
| Learning from Failure | Initially mis‑estimated memory usage; adjusted model size after data review. |

**Key AWS Services Used**: Lambda, SageMaker Neo, X-Ray, Timestream, CloudWatch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
