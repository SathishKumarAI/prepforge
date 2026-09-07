---
qid: ing_c9bbaf7232__faang__local
question: 'Explain: Big tech — Company Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 590
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:28:50-05:00'
sources: []
---

**Clarify**

> *What exactly are we probing?*  
> We want to gauge a candidate’s understanding of how large‑scale AI systems are built, maintained and scaled at a Big‑Tech firm—data pipelines, model lifecycle, infra, ethics, and the interview format that tests these skills.  
> Assume the role is “ML Engineer” or “AI Systems Architect”; we’ll focus on data engineering, training/serving, and interview patterns.

**Approach**

1. **Data & Feature Engineering** – discuss ingestion (Kafka/Flink), storage (Parquet/Hudi), feature stores (Feast).  
2. **Model Development** – prototyping in PyTorch/TensorFlow, hyper‑parameter tuning with Optuna, reproducibility via MLflow.  
3. **Training Infrastructure** – distributed training on GPUs/TPUs, mixed‑precision, checkpointing, autoscaling clusters.  
4. **Serving & Monitoring** – model servers (TensorRT, TorchServe), latency SLAs, A/B testing, drift detection.  
5. **Ethics & Governance** – bias audits, explainability, compliance with GDPR/CCPA.  
6. **Interview Format** – data‑structure problems, system design, ML questions (bias, loss functions), coding on a whiteboard or IDE.

**Depth**

- *Data pipeline*: ingest → deduplication → feature extraction → caching in Redis → batch store in Delta Lake; use Airflow DAGs for orchestration.  
- *Training*: 8‑node GPU cluster, each node with 8 A100s, using Horovod + NCCL; gradient accumulation to fit large models (e.g., GPT‑3).  
- *Serving*: low‑latency inference via NVIDIA Triton, model versioning, canary rollout.  
- *Monitoring*: Prometheus metrics for latency/throughput, Evidently for A/B results, and a drift alert system that retrains automatically.

**Edge Cases**

- Data skew leading to stragglers; use bucketed shuffle.  
- Model over‑fitting on synthetic data; add regularization + validation on real traffic.  
- Cold start: pre‑warm GPUs or use CPU fallback.  

**Optimize & Communicate**

- *Performance*: profile with NVIDIA Nsight, replace bottlenecks with fused ops.  
- *Cost*: spot instances for training, autoscale down after inference peaks.  
- *Explainability*: SHAP values exposed via dashboards.  
When interviewing, I’d walk through a recent project, highlight trade‑offs (e.g., GPU cost vs latency), and ask the candidate to propose an improvement—showing depth, communication, and structured thinking that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
