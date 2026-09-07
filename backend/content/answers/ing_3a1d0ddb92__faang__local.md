---
qid: ing_3a1d0ddb92__faang__local
question: 'Explain: Case studies — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 674
total_tokens: 904
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:30-05:00'
sources: []
---

**Clarify**

You’re asking for a concise explanation of how *case studies* illustrate **AI system design**—i.e., real‑world projects that reveal the trade‑offs, architecture choices, and operational challenges when building production AI systems.

Key assumptions to confirm:
- Audience is familiar with ML fundamentals but not necessarily deep‑tech ops.
- We’re focusing on large‑scale, end‑to‑end systems (data pipelines, model serving, monitoring).
- The goal is to showcase design patterns rather than raw code.

---

**Approach**

1. Pick 2–3 high‑profile case studies (e.g., Google’s BERT deployment, Meta’s recommender system, Amazon’s fraud‑detection pipeline).  
2. For each: outline problem → data & constraints → architecture layers → monitoring & governance.  
3. Highlight common patterns (feature store, model registry, A/B testing) and unique twists.

---

**Depth**

| Case | Core Problem | Design Highlights |
|------|--------------|-------------------|
| **Google Cloud AI Platform (BERT)** | Serve thousands of NLP queries with < 200 ms latency. | • Multi‑tenant TensorFlow Serving cluster.<br>• Pre‑tokenization cache + sharded embeddings.<br>• Continuous retraining via Kubeflow Pipelines. |
| **Meta Recommender** | Personalize 10⁹ items for billions of users in real time. | • Feature store (Spark + Redis) feeds a graph neural net.<br>• Model versioning with TorchServe; can roll back instantly.<br>• Online A/B test harness that auto‑scales based on CTR drift. |
| **Amazon Fraud Detection** | Detect 10⁶ transactions/sec with ≤ 0.5 % false positives. | • Streaming pipeline (Kafka → Kinesis) feeding an online gradient‑boosted tree.<br>• Canary deployment via Lambda; rollback to previous model if precision dips.<br>• Real‑time alerting & explainability dashboards. |

Common patterns: **feature engineering pipelines, model registry, canary/blue‑green deployments, automated retraining loops**, and **robust monitoring (latency, drift, fairness)**.

---

**Edge Cases**

- Cold starts when new users or items appear → fallback to rule‑based heuristics.  
- Model drift due to concept shift → trigger re‑training thresholds.  
- Data privacy violations → enforce differential privacy in feature extraction.

Testing: unit tests for data transforms; integration tests for end‑to‑end latency; chaos engineering on serving nodes.

---

**Optimize & Communicate**

Emphasize trade‑offs (latency vs accuracy, compute cost vs recall). Show how each case balances *model performance* with *operational reliability*. Narrate your reasoning by first stating the business objective, then mapping constraints to architectural decisions, and finally summarizing measurable outcomes (e.g., 30 % CTR lift, 99.9 % uptime).

This structured answer demonstrates clear problem framing, systematic design thinking, depth in technical choices, awareness of edge cases, and an eye for optimization—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
