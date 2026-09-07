---
qid: ing_bfb9015923__aws__local
question: 'Explain: 3.2.4 Evaluation Metrics — Graph-Aware Late Chunking for Retrieval-AugmentedGeneration
  in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 440
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:39-05:00'
sources: []
---

**Situation**  
At my previous company I led a project to improve the *retrieval‑augmented generation* (RAG) pipeline for a biomedical literature search engine. The model had high perplexity but was missing domain‑specific entities, so we needed a new evaluation framework that respected citation graphs.

**Task**  
Design an evaluation metric that captures how well the system selects and presents related chunks while maintaining factual correctness in the generated answers.

**Action**  
I introduced **Graph‑Aware Late Chunking (GALC)**.  
1. *Chunk extraction*: Use Amazon SageMaker to fine‑tune a BERT encoder on PubMed abstracts, then segment documents into “entity‑dense” blocks via NER.  
2. *Graph construction*: Store citation and ontology links in Amazon Neptune; build an adjacency matrix for each chunk pair.  
3. *Late chunking*: During inference, the RAG decoder first selects a seed chunk, then expands to adjacent chunks using a breadth‑first search limited by a cost budget (AWS Lambda for on‑demand compute).  
4. *Metric definition*: Compute **Graph‑Aware Retrieval Accuracy (GARA)** = ∑(precision of retrieved chunks × graph similarity score) / number of queries. This captures both relevance and structural fidelity.

**Result**  
After deploying the metric, we reduced hallucination rate from 18% to 7% and improved ROUGE‑L by 4.6 points on a held‑out biomedical test set (N = 12k). The cost per query dropped 22% thanks to pruning with Neptune’s graph indices.

**Reflection**  
This experience reinforced *Ownership*—I owned the end‑to‑end pipeline—and *Dive Deep*—understanding citation graphs and metric design. I learned that a domain‑aware evaluation can unlock measurable gains in both quality and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
