---
qid: ing_c5ebed1f16__fp__local
question: 'Explain: Key terms in data architecture — What Is a Data Architecture?
  | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 485
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:02:32-05:00'
sources: []
---

**Why we need a “data architecture”**

In any learning system the *information* that the algorithm ingests is the only thing it can act on.  
If that information is scattered across silos—raw logs in one file, curated tables in another, streaming events in Kafka—the model never sees the full picture. A data architecture is the formal design that guarantees every datum reaches every consumer exactly once and in a form suitable for learning.

**Core terms (derived from first principles)**  

| Term | What it solves | Why it must look this way |
|------|----------------|---------------------------|
| **Data Lake** | Stores raw, unstructured bytes. | Keeps the original evidence; prevents premature loss of signal. |
| **Data Warehouse** | Structured, cleansed tables for analytics. | Provides a stable schema‑on‑write so downstream models have reproducible inputs. |
| **ETL / ELT pipeline** | Extract → Transform → Load processes. | Forces *information preservation* (extract), *bias reduction* (transform), and *availability* (load). |
| **Metadata catalog** | Describes what each dataset contains, lineage, and quality. | Enables *semantic integrity*: models can validate assumptions about feature distributions. |
| **Data Governance** | Policies for access, privacy, and compliance. | Protects the *informational value* by ensuring only authorized, correct data is used. |
| **Feature Store** | Central repository of ready‑to‑use features. | Eliminates feature drift: the same feature definition is shared across training and serving. |

**Non‑obvious insight**

A well‑designed data architecture is *not* a passive storage layer; it is an *optimization engine*. Every decision (e.g., choosing columnar format vs. row store) trades off **information fidelity**, **latency**, and **compute cost**. The optimal point is where the *expected value of information* per unit compute equals or exceeds that of any alternative representation—a principle from rate‑distortion theory in information science. Recognizing this trade‑off early turns a costly engineering task into a principled design problem, ensuring that every byte you store actually contributes to model performance rather than becoming noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
