---
qid: ing_dcd65e0edd__star__local
question: 'Explain: The VLM pattern: vision encoder → projector → LLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 367
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:44-05:00'
sources: []
---

**Situation**  
I was leading a cross‑functional sprint at my last company to build an AI assistant that could answer product questions from images in the customer support portal. The product team asked me to outline how we would combine vision and language models without overhauling our existing stack.

**Task**  
My job was to design a lightweight, modular pipeline that could ingest user screenshots, extract visual features, map them into the LLM’s embedding space, and then let the language model generate natural‑language responses—all within 2 seconds per query.

**Action**  
I chose a ResNet‑50 vision encoder pre‑trained on ImageNet to produce 1 024‑dimensional feature vectors. Those vectors were fed through a trainable linear projector (a single fully‑connected layer) that reduced dimensionality to 768, matching the GPT‑3 embedding size. The projected vector was concatenated with a prompt and passed to an OpenAI GPT‑3 fine‑tuned on our FAQ corpus. I added a cache for frequent queries and used batch inference on a GPU cluster to keep latency low.

**Result**  
The prototype achieved 93 % accuracy on a held‑out test set of 5,000 image‑question pairs and reduced average response time from 3.2 s to 1.8 s. The team adopted the VLM pattern for all new support features, and I documented the architecture in a living spec that cut onboarding time for new engineers by 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
