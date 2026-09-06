---
qid: ing_0e1b25e32a__think__local
question: 'Explain: Firecracker MicroVM — How AWS Lambda Works Behind the Scenes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 451
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:39:25-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What* is “behind the scenes” of Lambda?  
- *Which component* (Firecracker) is highlighted?  
Assume the reader knows basic serverless concepts but not VM internals.

**2️⃣ Adopt a layered mental model**  
- **Infrastructure layer**: EC2 hosts, networking.  
- **Isolation layer**: Firecracker MicroVMs as lightweight VMs.  
- **Execution layer**: Runtime (Node.js/Python/etc.) and your code.  
Map each layer to its responsibilities.

**3️⃣ Step‑by‑step reasoning**  
1. User invokes Lambda → API Gateway/SDK routes request to Lambda service.  
2. Service checks if a suitable container exists; otherwise, it spawns a Firecracker MicroVM on an EC2 host.  
3. Firecracker creates a minimal VM: one vCPU, 128 MiB RAM, thin‑provisioned storage, and a single network interface.  
4. The runtime image (e.g., Node.js) is pre‑loaded; the container mounts your function code as a read‑only volume.  
5. Lambda’s control plane passes the event payload into the VM via stdin/stdout or an internal API.  
6. Code executes inside the isolated VM, producing a response that exits the VM and returns to the caller.

**4️⃣ Avoid common traps**  
- Don’t conflate Firecracker with full‑featured hypervisors; it’s *micro*‑VM, not a full OS.  
- Remember that each invocation may reuse an existing MicroVM if warm; otherwise, boot latency applies.  

**5️⃣ Sanity check & communicate**  
- Verify the sequence: request → API → Lambda control plane → Firecracker VM creation/lookup → runtime execution → response.  
- Explain trade‑offs (latency vs isolation) and why AWS chose Firecracker over containers or bare EC2 instances.  
- Conclude with how this design keeps Lambda fast, secure, and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
