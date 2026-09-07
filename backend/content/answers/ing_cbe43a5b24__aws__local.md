---
qid: ing_cbe43a5b24__aws__local
question: 'Explain: Security — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 506
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:50-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a secure ML inference service that could serve latency‑sensitive predictions to mobile clients over the public internet. The key requirement from product was “zero data leakage and minimal packet loss,” so I had to choose between TCP (reliable) and UDP (fast, but unreliable).  

**Action – Dive Deep & Ownership**  
1. **Requirements**:  
   * End‑to‑end encryption → TLS 1.3 over QUIC (built on UDP).  
   * Integrity & replay protection → use DTLS‑AES‑GCM.  
   * Predictable latency ≤ 50 ms, packet loss < 0.5 %.  

2. **Design**:  
   * Use AWS **App Mesh** with **AWS CloudFront** as a CDN to terminate TLS at edge.  
   * Deploy the inference model on **Amazon SageMaker Endpoint** behind an **Elastic Load Balancer (ELB) Application Load Balancer** that supports HTTP/3 over QUIC.  
   * Route traffic via **AWS Global Accelerator** for low‑latency, UDP‑based transport.  

3. **Trade‑offs**:  
   * TCP → guaranteed delivery but higher head‑of‑line blocking and 100 ms tail latency in congested regions.  
   * UDP/QUIC → lower handshake overhead (≈20 % faster) but requires application‑level retransmission logic; mitigated by CloudFront’s edge caching of static payloads.  

4. **Cost & Scalability**:  
   * Estimated $0.10 per GB for CloudFront + $0.03 per request for SageMaker, scaling automatically with **Auto Scaling** on CPU utilization.  

**Result – Deliver Results**  
After deployment, we measured an average inference latency of 32 ms (vs target 50 ms) and packet loss < 0.1 %. The model throughput increased by 3× compared to the legacy TCP‑only pipeline, and cost dropped 15 % due to reduced data transfer overhead.

**Learning from Failure**  
Initial trials with pure UDP caused sporadic out‑of‑order packets; adding a lightweight sequence layer in the client fixed it. This taught me that “Bias for Action” must be paired with rapid feedback loops and “Ownership” of the entire data path, not just the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
