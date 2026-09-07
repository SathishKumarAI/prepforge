---
qid: ing_92ed8f1522__faang__local
question: 'Explain: Senior ML Engineer – AV Foundation — Uber Engineering \u2014 Where
  the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 476
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:13-05:00'
sources: []
---

**Clarify**  
We’re interviewing for a *Senior ML Engineer – AV Foundation* at Uber. The role sits at the intersection of digital perception (audio‑visual data) and physical systems (self‑driving vehicles). Key responsibilities: design end‑to‑end pipelines that ingest raw camera/mic streams, extract actionable features, and feed them into motion‑planning or control modules. I’d confirm assumptions about data volume (≈10 TB/day), latency targets (<50 ms inference), and the target platform (edge GPU vs cloud).  

**Approach**  
1. **Data ingestion & preprocessing** – stream‑based framework (Kafka + Flink) with real‑time augmentation.  
2. **Feature extraction** – CNN+Transformer backbone for visual cues, CRNN for audio; fused via attention.  
3. **Model serving** – ONNX runtime on Jetson/Edge TPU, auto‑scaling in Kubernetes.  
4. **Feedback loop** – continuous evaluation against ground truth (lidar labels) and drift detection.  

**Depth**  
- *Architecture*: modular microservices with gRPC; use TensorRT for inference acceleration.  
- *Training*: distributed Horovod on 8 GPUs, mixed‑precision FP16 to cut memory by 50%.  
- *Evaluation*: AUC‑ROC + mAP for detection, latency percentiles <95 % under load. Complexity: training O(N·logN) per epoch; inference O(1).  

**Edge Cases**  
- Sudden sensor dropouts → fallback to historical map priors.  
- Adversarial audio spikes → robust noise‑shaping front‑end.  
- Edge device failure → graceful degradation to cloud inference.  

**Optimize & Communicate**  
Propose model pruning + knowledge distillation for 30 % size reduction without loss. Iterate on pipeline latency via async I/O and batch scheduling. In interviews, narrate this as a *“Data‑to‑Decision Loop”* that balances accuracy, speed, and reliability—exactly what Uber needs to safely merge the digital world with physical motion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
