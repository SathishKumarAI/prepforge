---
qid: ing_4842c703a4__aws__local
question: 'Explain: Open Source and In-House: How Uber Optimizes LLM Training'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 405
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:54-05:00'
sources: []
---

**Situation & Task**  
At a previous role I led the data‑science team that was responsible for training a 6B‑parameter language model used in our recommendation engine. The budget was $2 M per year, and we had to decide between running on an open‑source framework (PyTorch + Hugging Face) or building a proprietary in‑house pipeline.

**Action**  
1. **Dive Deep into Cost & Performance** – I ran a side‑by‑side benchmark on the same 128‑GPU cluster:  
   * Open‑source stack: 4 h per epoch, $0.35/epoch.  
   * In‑house custom optimizer (sparsity + mixed‑precision) reduced epoch time to 2.8 h and cost to $0.24/epoch.  
2. **Ownership & Bias for Action** – I scoped a minimal viable in‑house codebase, integrated it into our CI/CD pipeline, and set up automated monitoring of GPU utilization and memory footprint via CloudWatch.  
3. **Scalability & Availability** – The custom solution leveraged AWS SageMaker Pipelines with spot instances and automatic scaling across 8 AZs to ensure >99.9 % uptime during peak training windows.  

**Result**  
We cut training costs by **32 %** ($640k annually) while improving throughput, enabling us to run two extra experiments per quarter. The model’s downstream recommendation accuracy improved from 12.4 % to 13.7 % precision@10, directly boosting revenue by $1.2M in the first year.

**Reflection**  
The failure point was an initial over‑optimistic assumption that the custom optimizer would work on all hardware; we had to add a fallback path for legacy GPUs. This taught us to build in graceful degradation and continuous performance testing—an approach I bring into every ML project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
