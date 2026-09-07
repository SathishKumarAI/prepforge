---
qid: ing_9ad859d872__faang__local
question: When do you use spot GPUs, and how do you run workloads on them without
  getting burned?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 515
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:27-05:00'
sources: []
---

**Clarify**  
You’re asking when spot GPU instances (e.g., AWS G4/G5, Azure NCv3) are a good fit and how to mitigate the risk of sudden termination while keeping cost‑efficiency high.

*Assumptions I’d confirm:*  
- Workload is embarrassingly parallel or can checkpoint frequently.  
- Latency tolerance: jobs can be restarted or paused.  
- You have a budget that justifies using lower‑priced, preemptible hardware.

**Approach**  
1. Identify the *preemption profile* of your workload (e.g., batch training vs. inference).  
2. Design a fault‑tolerant pipeline: checkpointing, autoscaling, and graceful shutdown hooks.  
3. Use spot‑specific tooling (AWS Spot Fleet, Azure Spot VMs) to request capacity with limits on max price and interruption grace period.

**Depth**  
- **When to use:** Large batch jobs (distributed training, rendering), data preprocessing, or any task that can resume from a checkpoint. Avoid real‑time inference or latency‑critical services.  
- **Running safely:**  
  - *Checkpointing*: Save model weights/partial results every N steps.  
  - *Grace hooks*: Listen for the spot termination signal (AWS: `SIGTERM` after 2 min; Azure: `AzureSpotVMShutdownNotice`).  
  - *Autoscaling*: Spin up new instances automatically when one is terminated.  
  - *Price caps*: Set maximum hourly bid to stay within budget and avoid sudden price spikes.  

Complexity: O(1) extra code for hooks, but adds ~5–10 % overhead in checkpoint storage.

**Edge Cases**  
- Spot termination during an uncheckpointed critical phase → loss of work. Test by simulating early termination.  
- Price surge causing frequent preemptions → evaluate if on‑demand GPU is cheaper overall.  

**Optimize & Communicate**  
Iteratively benchmark the checkpoint interval: too long = wasted compute; too short = I/O overhead. Document the trade‑off curve for stakeholders. Explain that using spot GPUs reduces costs by 60–70 % but requires a resilient architecture, which you’ve built via checkpoints and graceful shutdown logic. This shows structured thinking, depth, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
