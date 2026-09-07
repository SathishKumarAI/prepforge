---
qid: ing_b91e45f15b__aws__local
question: 'Explain: Nested Virtualization — Virtualization Architecture - by Neo Kim
  and Ayaan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 479
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:26-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** In a recent project to enable on‑premise AI workloads for our GenAI service, we needed customers to run hyper‑constrained containers inside an EC2 instance that itself ran a customer VM. This required *nested virtualization*—running a virtual machine inside another VM.  
> 
> **Task:** Design the architecture so it scales to 10 000 concurrent customers while keeping cost < $0.12/hr per customer and latency < 200 ms for inference.  
> 
> **Action:**  
> - **Core design**: Use *KVM on Nitro* as the host hypervisor, then run a lightweight *QEMU/KVM* guest inside each EC2 instance. The guest runs Docker containers that hold the ML models.  
> - **AWS services**: `EC2` with `Instance Store` for fast local storage, `EBS gp3` for persistent weights, and `Elastic Inference` to offload GPU usage. Use `Auto Scaling Groups` (ASG) with a custom metric (CPU × Memory) to spin up new hosts when nested guest utilization > 70%.  
> - **Scalability & availability**: Each host runs 5 nested guests; ASG keeps at least two healthy hosts per AZ, giving 99.95% availability.  
> - **Cost trade‑off**: Dropping from `g4dn.xlarge` (GPU) to `c6i.large` with Elastic Inference cuts GPU spend by 45 % while maintaining inference speed.  
> 
> **Result:** Deployed within 8 weeks, achieved < 0.11 s average inference latency and <$0.09/hr per customer—30 % cheaper than baseline. Post‑mortem: identified a race condition in the guest‑init script; fixed it with idempotent scripts, improving reliability by 12 %.  
> 
> **Leadership Principles:** *Customer Obsession* (fast, cheap inference), *Ownership* (own full stack from host to container), *Dive Deep* (profiling nested hypervisor overhead).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
