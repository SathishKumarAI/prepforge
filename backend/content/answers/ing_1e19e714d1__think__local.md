---
qid: ing_1e19e714d1__think__local
question: 'Explain: After a routine deploy, P99 TTFT went from ~600 ms to ~4 s. Throughput,
  error rate, GPU utilization and the model version are all unchanged. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 218
output_tokens: 518
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:44:45-05:00'
sources: []
---

**1️⃣ Clarify & State Assumptions**  
- Confirm *P99 TTFT* (Time‑to‑First‑Token) is measured on the same traffic mix pre‑/post‑deploy.  
- Assume no change in model code, weights, or serving infra; only a new deployment step triggered the latency jump.  
- Verify that “throughput” and “error rate” truly stayed flat—look at per‑second counts vs. total.

**2️⃣ Mental Model: Latency Pathways**  
TTFT is the sum of:  
1) **Request routing / load‑balancer delay**  
2) **Queueing & scheduling on GPU nodes**  
3) **GPU kernel launch overhead** (e.g., context switch, memory copy)  
4) **Model inference time** (unchanged).  

Since throughput and error rate are stable, the culprit likely lies in *steps 1–3*.

**3️⃣ Step‑by‑Step Reasoning**  
a. **Check request routing logs** – any spike in “latency to attach” or “routing queue”?  
b. **Inspect GPU scheduler metrics** – is there a new batch size policy that forces larger batches, delaying the first token?  
c. **Look at container start‑up / warm‑up** – if the deployment introduced a *cold‑start* path (e.g., pulling a bigger image or re‑initializing an environment), the first request would be delayed.  
d. **Examine any new middleware/feature flags** added during deploy that could wrap the inference call and add overhead (logging, monitoring, security checks).  

Iteratively rule out each layer until you isolate the extra 3–4 s.

**4️⃣ Common Traps to Avoid**  
- *Assuming latency is purely GPU‑bound* – don’t overlook network or scheduler delays.  
- *Misreading aggregated throughput* – a flat average can hide a few slow requests that inflate P99.  
- *Ignoring asynchronous logging* – sometimes log flushing can block the request thread.

**5️⃣ Sanity‑Check & Communicate**  
Run a controlled test: send identical traffic to the pre‑deploy and post‑deploy instances side‑by‑side, capture per‑step timestamps, and plot them. Present findings in a concise slide: “Latency spike originates from X layer → resolution Y.” This confirms your hypothesis and guides the fix.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
