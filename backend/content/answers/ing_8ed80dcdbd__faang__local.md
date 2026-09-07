---
qid: ing_8ed80dcdbd__faang__local
question: 'Explain: Design an end-to-end fine-tuning pipeline for a customer-support
  model at a mid-size company. Walk me through data → training → eval → deployment
  → iteration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 681
total_tokens: 938
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:16:29-05:00'
sources: []
---

## Clarify  
We need an end‑to‑end fine‑tuning pipeline for a customer‑support LLM that: (1) ingests real support logs, (2) trains a domain‑specific model, (3) evaluates performance, (4) deploys to production, and (5) iterates based on feedback.  
Assumptions to confirm:  
- Data volume (~100k–1M turns).  
- Legal/privacy constraints (anonymization needed).  
- Deployment target: low‑latency API with A/B testing capability.  

## Approach  
1. **Data pipeline** – extraction → anonymization → labeling → storage.  
2. **Preprocessing & tokenization** – consistent vocab, special tokens for intent/issue type.  
3. **Fine‑tuning** – use a transformer (e.g., Llama‑2‑7B) with LoRA or QLoRA to reduce compute.  
4. **Evaluation** – metrics: BLEU, ROUGE, perplexity, and human judgment on relevance & compliance.  
5. **Deployment** – containerize model + inference server; expose via gRPC/REST; set up canary releases.  
6. **Monitoring & iteration** – collect request logs, user satisfaction scores, drift detection; retrain monthly with new data.

## Depth  
- **Data ingestion**: use Kafka streams to ingest chat transcripts; apply regex + NER for PII removal; store in S3/Delta Lake.  
- **Labeling**: crowdsource intent tags (e.g., billing, technical) and quality scores via a simple UI; audit 5% manually.  
- **Fine‑tuning**: use `transformers` + `accelerate`; freeze all layers except LoRA adapters (rank=8). Train for 3 epochs on 8xA100 with mixed precision; checkpoint every epoch.  
- **Evaluation**: automated script runs on a held‑out validation set and on the live canary traffic, computing BLEU/ROUGE + a compliance flag (regex check for disallowed content). Human reviewers score 200 samples per cycle.  
- **Deployment**: build Docker image with `torchserve`; use Kubernetes Ingress with traffic split; autoscale based on CPU/GPU usage.  
- **Monitoring**: Prometheus metrics, ELK stack for logs; set alert if perplexity ↑20% or user satisfaction ↓5%.  

## Edge Cases  
- Missing labels → fallback to unsupervised clustering.  
- Drift in customer terminology → trigger retraining sooner.  
- API latency spikes → rollback to previous checkpoint.

## Optimize & Communicate  
- **Performance**: quantize to 4‑bit for inference, trade off ~5% loss in accuracy.  
- **Cost**: schedule nightly training on spot instances; keep model size minimal.  
- **Narrative**: explain each stage as a “data → compute → validate → serve” loop, emphasizing safety checks (anonymization, compliance) and rapid iteration via canary testing. This showcases systematic engineering, clear communication, and deep technical grasp—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
