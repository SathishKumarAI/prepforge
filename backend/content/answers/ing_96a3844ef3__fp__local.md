---
qid: ing_96a3844ef3__fp__local
question: 'Explain: You run a shared LLM platform for 30 internal teams on one GPU
  fleet. Design the tenancy model: fairness, isolation, and cost attribution.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 550
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:59-05:00'
sources: []
---

**Designing a multi‑tenant LLM fleet**

1. **Fundamental problem**  
   *You need to let 30 teams get useful throughput on one GPU pool while preventing any single team from monopolising the hardware and ensuring you can bill accurately.*  

2. **Fairness → proportional‑share scheduling**  
   *Treat each request as a “token” of compute. Assign every team a token budget \(b_i\) (e.g., based on SLAs or past spend). Use a weighted round‑robin scheduler that serves requests in proportion to \(b_i\).*  
   - If Team A submits 10× more requests, its queue will still receive only \(b_A/(b_A+b_B+…)\) of GPU time.  
   - When a team exhausts its budget, its requests are throttled until the next billing cycle, guaranteeing that no one can starve another.

3. **Isolation → lightweight sandboxing**  
   *Run each request inside a Docker/OCI container with explicit CUDA device limits and CPU quotas.*  
   - GPU isolation is enforced by NVIDIA‑Container‑Toolkit’s `--gpus` flag; any over‑commitment is caught at the driver level.  
   - Memory usage is capped per container to prevent one model from exhausting host RAM, which could otherwise degrade all workloads.

4. **Cost attribution → fine‑grained telemetry**  
   *Collect per‑request metrics: GPU utilisation, token count, inference latency.*  
   - Store these in a time‑series DB; compute cost as \(\text{price per TFLOP} \times \text{GPU‑seconds}\).  
   - Publish dashboards that map spend back to teams and models, enabling transparent billing.

5. **Non‑obvious insight**  
   *Token budgets should be dynamic, not static.*  
   Because model size and token length vary wildly, a fixed budget can over‑penalise large‑model users or under‑penalise small‑model ones. By estimating the expected FLOPs per token (from model architecture) and adjusting \(b_i\) each cycle based on recent utilisation, you achieve *compute‑fairness* rather than mere request‑count fairness.

**Result:**  
Teams experience predictable latency, no single team can degrade others, and every GPU‑second is traceable to a billable unit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
