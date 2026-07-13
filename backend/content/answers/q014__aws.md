---
qid: q014
question: "What is Retrieval-Augmented Generation (RAG)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define RAG as grounding an LLM's answer in retrieved documents rather than relying only on its trained weights. At query time we embed the question, search a vector store for the most relevant passages, and inject them into the prompt as context so the model answers from that evidence. It lets the model use fresh, private, or domain-specific knowledge and cite sources, without retraining.

To show **Customer Obsession** I'd anchor it in an internal knowledge assistant I owned. Employees were getting confident but wrong answers from a bare LLM, so I added retrieval over our documentation. Grounding responses in cited passages cut hallucinated answers by roughly 80% and lifted answer-accuracy to 91%, and users could click through to the source.

I'd cover the real trade-offs I managed: retrieval quality is the bottleneck, so I invested in chunking strategy, embedding choice, and reranking; and I balanced how many passages to inject, more context improves grounding but raises token cost and latency. On AWS I'd build this with Bedrock Knowledge Bases, embeddings in OpenSearch or a vector store, and S3 as the document source.

A bar-raiser listens for whether I understand that RAG's quality lives or dies on retrieval, and that I measured hallucination reduction and accuracy, not just wired up a vector database.
