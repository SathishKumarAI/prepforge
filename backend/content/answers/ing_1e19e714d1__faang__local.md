---
qid: ing_1e19e714d1__faang__local
question: 'Explain: After a routine deploy, P99 TTFT went from ~600 ms to ~4 s. Throughput,
  error rate, GPU utilization and the model version are all unchanged. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 487
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:55:22-05:00'
sources: []
---

**Clarify**  
We’re seeing a jump in *P99 TTFT* (time‑to‑first‑token) from ~600 ms to ~4 s after a routine deploy, yet throughput, error rate, GPU usage and the model version are unchanged.  
Assumptions:  
- Same request pattern & payload size.  
- No background jobs started on the same node.  
- Cloud infra (load balancer, autoscaling) is stable.

**Approach**  
1. Confirm the metric source (is it from client‑side telemetry or internal profiler?).  
2. Inspect the request path: network → LB → service → GPU.  
3. Check for any new code paths or instrumentation added in the deploy.  
4. Look at container start‑up, memory pressure, and scheduler queues.

**Depth**  
- **Network / LB latency**: Run `curl -w @fmt.txt` to measure round‑trip; a spike would point here.  
- **Service startup overhead**: If the deploy triggers a warm‑start of the inference engine (e.g., reloading tokenizer or model weights), TTFT will increase until the cache is primed. Verify that the process stays alive across requests.  
- **CPU/GPU contention**: Even if GPU usage is steady, CPU starvation can delay token generation. Check `top`/`htop` for high context‑switching or I/O waits.  
- **Background jobs**: A nightly job (e.g., model checkpointing) could lock shared resources; ensure it runs on a different pod or node.

**Edge cases**  
- Sudden spike only for specific user IDs → look at per‑user throttling.  
- Spike only after certain time of day → cron job interference.  
- Consistent P99 rise across all traffic → system‑wide bottleneck.

**Optimize & communicate**  
Once the culprit is identified (e.g., unintended warm‑up, background I/O), remediate by:  
- Moving heavy init to a pre‑warm step.  
- Offloading checkpoints to separate workers.  
- Adding explicit health checks and readiness probes.  
Explain the root cause, mitigation steps, and how you’ll monitor for recurrence—demonstrating both technical depth and proactive communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
