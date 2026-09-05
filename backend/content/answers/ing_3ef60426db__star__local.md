---
qid: ing_3ef60426db__star__local
question: 'Explain: Why Text-Only RAG Fails — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 357
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:11-05:00'
sources: []
---

**Situation** – While leading a product‑launch for an AI assistant that had to answer complex customer queries in real time, our team noticed the accuracy drop when users asked image‑related questions (e.g., “What’s wrong with this photo?”). The system was built on a text‑only RAG pipeline that indexed only OCRed captions and metadata.

**Task** – I needed to redesign the retrieval component so it could incorporate visual context, ensuring the generator had access to both textual and image evidence before formulating an answer.

**Action** – First, we integrated CLIP embeddings for every uploaded image and aligned them with their corresponding text using a joint contrastive loss. Next, we modified the retriever to perform multimodal similarity search: given a user query, it generated both a text embedding (via BERT) and a visual embedding (via CLIP), then combined cosine scores weighted 0.6/0.4. The retrieved documents were passed to a multimodal transformer that could attend over image features and captions simultaneously. We also added a fallback heuristic: if the visual relevance score was below threshold, we defaulted to text‑only retrieval to avoid hallucination.

**Result** – After deployment, query‑accuracy on image‑related questions improved from 42 % to 78 %, while overall system latency increased only by 12 ms per request. The exercise taught me that a purely textual RAG is brittle when the knowledge source includes rich modalities; aligning embeddings and balancing retrieval scores are key to robust multimodal generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
