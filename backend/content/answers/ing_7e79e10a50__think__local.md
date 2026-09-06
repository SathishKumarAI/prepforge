---
qid: ing_7e79e10a50__think__local
question: 'Explain: Your LLM endpoint''s p99 latency doubled after a deploy. The model
  weights didn''t change. Walk me through your debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 470
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:22:29-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
*Ask*: “Which endpoint? What metrics are we seeing?” Assume the only change was a new deployment (code, config, infra). The model weights stayed the same, so inference logic didn’t change.  

**2️⃣ Adopt a layered mental model**  
- **Infrastructure layer**: CPU/GPU, networking, load balancer.  
- **Runtime layer**: container image, framework version, dependencies.  
- **Application layer**: request handling, batching, caching.  

**3️⃣ Step‑by‑step reasoning**  
1. Verify the 99th percentile spike is real (check raw logs, not smoothed charts).  
2. Compare current and previous deployments’ Docker images—different base image? New libraries?  
3. Inspect resource allocation: did CPU/GPU limits drop or change? Look at pod metrics, node utilization.  
4. Check networking: new reverse‑proxy config, TLS handshake changes, longer DNS resolution?  
5. Review code changes: added logging, debug prints, synchronous calls, extra validation.  
6. Reproduce locally with the same image to see if latency is inherent or cluster‑specific.  
7. If all else fine, run a profiler (e.g., PyTorch’s `torch.profiler`) inside the container on a sample request.  

**4️⃣ Common traps to avoid**  
- Assuming the p99 spike equals average latency.  
- Blaming model size when weights didn’t change.  
- Ignoring queuing delays introduced by load balancers or autoscaling.  
- Forgetting that CI/CD pipelines can inject larger images or different environment variables.

**5️⃣ Sanity‑check & communicate**  
- Summarize findings: “The 99th percentile doubled because the new image pulled a newer CUDA runtime, which caused an extra kernel launch per request.”  
- Verify by rolling back to the old image; latency returns.  
- Document the root cause and mitigation (pin dependencies, monitor image size).  

This structured approach lets you pinpoint whether the culprit is infra, code, or configuration while keeping assumptions explicit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
