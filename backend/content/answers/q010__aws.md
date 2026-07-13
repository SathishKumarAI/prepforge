---
qid: q010
question: "What is Natural Language Processing (NLP) and what are some common tasks?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define NLP as the field enabling machines to understand, interpret, and generate human language. Common tasks: classification and sentiment analysis, named-entity recognition, machine translation, summarization, question answering, and today, generative tasks driven by large language models.

To show **Customer Obsession** I'd anchor it in a support-triage system I owned. We used NLP to classify incoming tickets by intent and urgency and to extract entities like order IDs, then route automatically. That cut average first-response time from 4 hours to under 30 minutes and auto-resolved 40% of tickets, directly improving the customer experience.

I'd surface a real trade-off I decided: for classification I chose a fine-tuned lightweight transformer over calling a large generative model per ticket, because at our volume the LLM's per-call cost and latency weren't justified for a narrow, well-defined task. That was a **Frugality** call, roughly a 10x cost reduction at equal accuracy. I reserved the LLM for open-ended summarization where it genuinely won.

On AWS I'd name Amazon Comprehend for entities and sentiment, SageMaker for custom models, and Bedrock for generative tasks. A bar-raiser listens for whether I match model complexity to task and volume, and whether I can quantify both the customer and cost impact rather than defaulting to the biggest model.
