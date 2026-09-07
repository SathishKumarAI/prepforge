---
qid: ing_69f19d4a50__aws__local
question: 'Explain: Dual-Representation Strategy — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 457
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:50-05:00'
sources: []
---

**Dual‑Representation Strategy – Multimodal Retrieval Augmented Generation (RAG)**  

*Situation*: In 2023 I led a cross‑functional team that had to improve our customer support chatbot for an e‑commerce platform. The bot’s accuracy on image‑based queries was only **55 %**, hurting conversion rates by ~1.2 %.  

*Task*: Design a system that could understand both text and visual context, delivering answers in real time while keeping latency < 300 ms.  

*Action*:  
- Adopted **Dual‑Representation**: encode the user’s textual intent with BERT‑based embeddings; encode uploaded images with a ResNet‑50 CNN, projecting both into a shared latent space.  
- Built a **Multimodal RAG pipeline** on AWS: store vector pairs in **Amazon Kendra** for semantic search, retrieve top‑k documents from **S3 + Athena**, and generate responses via **Amazon Bedrock (Claude 2)** with prompt conditioning on the retrieved multimodal context.  
- Leveraged **AWS Lambda@Edge** to keep inference latency < 300 ms; autoscaled using **Application Auto Scaling**.  
- Implemented cost‑control by pruning embeddings older than 30 days and caching frequent queries in **ElastiCache for Redis**.  

*Result*: Accuracy jumped from 55 % to **87 %**, reducing support tickets by **23 %** and increasing upsell conversions by **4.5 %** within three months, saving ~$120K annually on support staff.  

**Leadership Principles Reflected**  
- *Customer Obsession*: Directly addressed pain points that lowered conversion.  
- *Ownership & Dive Deep*: Built end‑to‑end pipeline, iterated on embeddings until metrics met goals.  

**Bar‑raiser cues**: Demonstrated ownership of full stack, deep technical dive into multimodal embedding alignment, quantified business impact, and learned from initial false‑positive spikes by tightening relevance thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
