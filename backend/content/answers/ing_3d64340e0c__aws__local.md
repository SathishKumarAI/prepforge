---
qid: ing_3d64340e0c__aws__local
question: How do you autoscale a vLLM deployment? Why doesn't standard CPU-based HPA
  work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 498
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:35-05:00'
sources: []
---

**Situation & Task**  
I was tasked to deploy a large‑language‑model (vLLM) service for a fintech app that needed 99.9 % latency SLA and could spike up to 10× traffic during market openings. The goal was to autoscale automatically while keeping cost under $0.25/req.

**Action – Why CPU HPA fails & My Solution**  
CPU‑based Horizontal Pod Autoscaler (HPA) watches average CPU usage, but vLLM is **GPU‑bound**: inference latency depends on GPU memory and compute, not CPU load. I replaced the HPA with a **Custom Metrics Adapter** that reports *GPU Utilization* and *Token‑per‑Second (TPS)* to Kubernetes.  

I built an autoscaler in Python using the AWS SDK:

```python
# Rough sketch
metrics = CloudWatch.get_metric_statistics(
    Namespace='vLLM',
    MetricName='GpuUtilization',
    Period=60,
)
desired_replicas = ceil(metrics / 70)   # target 70% GPU load
```

I deployed this as a **Karpenter** provisioner with **GPU‑enabled EC2 Spot Instances (g5.xlarge)**. Karpenter instantly provisions the right instance type and scale set when the custom metric exceeds 70 %.  

**Results**  
* 95 % of spikes handled within 3 s, meeting latency SLA.  
* Cost dropped from $12k/month to $7k/month (≈40 % savings).  
* GPU utilization averaged 68 %, preventing over‑provisioning.

**Reflection & Learnings**  
- *Ownership*: I owned the entire pipeline from metric collection to autoscaling logic.  
- *Dive Deep*: Investigated why CPU HPA lagged; discovered GPU bottleneck via profiling.  
- *Bar‑raiser check*: The solution was scalable (Karpenter auto‑spins new nodes), reliable (99.9 % uptime), and cost‑effective.  

**AWS Services Used**  
- **Amazon EKS** (managed Kubernetes)  
- **AWS Karpenter** (on-demand GPU scaling)  
- **Amazon CloudWatch** (custom metrics)  
- **EC2 Spot Instances** (cost control)

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
