---
qid: ing_15d7f50277__think__local
question: How do you deploy Mastra applications? — TypeScript AI Framework for Agents
  and Apps | Mastra
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 462
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:09:54-05:00'
sources: []
---

**Meta‑Thinking Guide – “How do you deploy Mastra applications?”**

1. **Clarify the scope & assumptions**  
   - *What is “deploy” in this context?* (Containerization, serverless, edge, CI/CD pipeline?)  
   - Assume the user has a working Mastra project and wants to move it from local dev to production.  
   - Note any platform constraints (e.g., Kubernetes, Docker Hub, AWS Lambda).

2. **Choose an appropriate mental model**  
   - Use the *“Build → Package → Deploy”* pipeline as a scaffold.  
   - Map Mastra’s architecture: Agent runtime → App container → Orchestrator → Runtime environment.

3. **Step‑by‑step reasoning**  
   1. **Build** – run `mastra build` or equivalent TypeScript compiler to generate the JS bundle.  
   2. **Package** – create a Docker image (Dockerfile that copies the bundle, installs deps, sets entrypoint).  
   3. **Push** – tag and push the image to a registry (`docker push`).  
   4. **Deploy** – use Kubernetes manifests or Helm chart; if serverless, configure a Lambda function with the image.  
   5. **Runtime configuration** – set environment variables (API keys, model endpoints).  
   6. **Monitoring & scaling** – attach Prometheus metrics or autoscaling rules.

4. **Common traps to avoid**  
   - Forgetting to expose required ports in Dockerfile/K8s service.  
   - Using wrong base image that lacks Node runtime.  
   - Missing environment variables leading to agent failures.  
   - Not setting resource limits → OOM errors in prod.

5. **Sanity‑check & verbalize**  
   - Ask: “Does the final container start with `mastra run`?”  
   - Verify logs show agent initialization.  
   - Test a simple request end‑to‑end before scaling up.  

By following this structured approach, you can systematically answer deployment questions for Mastra or any similar TypeScript AI framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
